import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TurnstileWidget from './TurnstileWidget'

const SecurityCheckSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    organization: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    websiteUrl: Yup.string()
        .url('Please enter a valid URL')
        .required('Required'),
    turnstileToken: Yup.string()
        .required('Please complete the security verification'),
})

export default function SecurityCheckForm({ interestedIn = '' }) {
    const [submitted, setSubmitted] = useState(false)
    const [turnstileToken, setTurnstileToken] = useState('')
    const [queryParams, setQueryParams] = useState({})

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        const urlParams = new URLSearchParams(window.location.search)
        const params = {}
        if (urlParams.get('lead_id')) params.lead_id = urlParams.get('lead_id')
        if (urlParams.get('utm_source')) params.utm_source = urlParams.get('utm_source')
        if (urlParams.get('utm_campaign')) params.utm_campaign = urlParams.get('utm_campaign')
        setQueryParams(params)
    }, [])

    const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
        try {
            if (!values.turnstileToken) {
                setFieldError('turnstileToken', 'Please complete the security verification')
                return
            }

            const response = await fetch('/.netlify/functions/security-check-submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...values, ...queryParams })
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            setSubmitted(true)
        } catch (error) {
            console.error('Form submission error:', error)
            // You might want to show an error message to the user here
        } finally {
            setSubmitting(false)
        }
    }

    if (submitted) {
        return (
            <div className="bg-[#5852A3] text-white border border-green-200 rounded-lg p-6 text-center">
                <div className="text-white mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
                <h3 className="is-size-5 font-semibold text-green-800 mb-2">
                    Security Check Requested!
                </h3>
                <p className="text-white">
                    Thank you for your interest in LabZone. We will get back to you shortly.
                </p>
            </div>
        )
    }

    return (
        <div className="security-check-form bg-white rounded-lg p-6">
            <h3 className="is-size-4 font-bold text-gray-900 mb-4 text-center">
                Get a Free Nonprofit WordPress Security Check
            </h3>
            <p className="is-size-6 text-gray-600 mb-6 text-center">
                We'll run a vulnerability scan on your site and send a clear report you can share with your team or board. No jargon, no cost, no obligation.
            </p>

            <Formik
                initialValues={{
                    fullName: '',
                    organization: '',
                    email: '',
                    websiteUrl: '',
                    interestedIn: interestedIn,
                    turnstileToken: '',
                }}
                validationSchema={SecurityCheckSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, setFieldValue, values }) => (
                    <Form className="space-y-4">
                        <div>
                            <Field
                                name="fullName"
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-labzone-red focus:border-transparent"
                            />
                            <ErrorMessage name="fullName" component="div" className="text-red-600 text-sm mt-1" />
                        </div>

                        <div>
                            <Field
                                name="organization"
                                type="text"
                                placeholder="Organization"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-labzone-red focus:border-transparent"
                            />
                            <ErrorMessage name="organization" component="div" className="text-red-600 text-sm mt-1" />
                        </div>

                        <div>
                            <Field
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-labzone-red focus:border-transparent"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                        </div>

                        <div>
                            <Field
                                name="websiteUrl"
                                type="url"
                                placeholder="Website URL"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-labzone-red focus:border-transparent"
                            />
                            <ErrorMessage name="websiteUrl" component="div" className="text-red-600 text-sm mt-1" />
                        </div>

                        <Field
                            name="interestedIn"
                            type="hidden"
                        />

                        <div className="mb-4">
                            <TurnstileWidget
                                sitekey={process.env.GATSBY_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'}
                                onVerify={(token) => {
                                    setTurnstileToken(token)
                                    setFieldValue('turnstileToken', token)
                                }}
                                onError={() => {
                                    setTurnstileToken('')
                                    setFieldValue('turnstileToken', '')
                                }}
                                onExpire={() => {
                                    setTurnstileToken('')
                                    setFieldValue('turnstileToken', '')
                                }}
                            />
                        </div>

                        <Field
                            name="turnstileToken"
                            type="hidden"
                        />
                        <ErrorMessage name="turnstileToken" component="div" className="text-red-600 text-sm mt-1" />

                        <button
                            type="submit"
                            disabled={isSubmitting || !turnstileToken}
                            className="w-full bg-[#5852A3] text-white hover:bg-[#2e2b55] text-white py-3 px-6 font-semibold transition-colors disabled:opacity-50"
                        >
                            {isSubmitting ? 'Sending Request...' : 'Request My Free Security Check'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}