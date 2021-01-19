import React, { useState } from "react"
import { Link } from "gatsby"
import { Formik, Form, Field, ErrorMessage } from "formik"

import { FormattedMessage, useIntl } from "react-intl"
import cx from "classnames"

/** Utils */
import { sanitizeLink } from "../utils/helpers"

function formv3(fields) {
  if (!fields) {
    return false
  }

  var xhr = new XMLHttpRequest()
  var url =
    "https://api.hsforms.com/submissions/v3/integration/submit/6690555/d5ea374b-8855-4c0c-9e23-589f3e61bbbe"

  var data = {
    submittedAt: new Date().getTime(),
    fields,
    context: {
      pageName: "Contact page",
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text:
          "I agree to the processing of personal data for the purpose of contacting.",
        communications: [],
      },
    },
  }

  var final_data = JSON.stringify(data)

  xhr.open("POST", url)
  xhr.setRequestHeader("Content-Type", "application/json")

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      alert(xhr.responseText) // Returns a 200 response if the submission is successful.
    } else if (xhr.readyState == 4 && xhr.status == 400) {
      alert(xhr.responseText) // Returns a 400 error the submission is rejected.
    } else if (xhr.readyState == 4 && xhr.status == 403) {
      alert(xhr.responseText) // Returns a 403 error if the portal isn't allowed to post submissions.
    } else if (xhr.readyState == 4 && xhr.status == 404) {
      alert(xhr.responseText) //Returns a 404 error if the formGuid isn't found
    }
  }

  xhr.send(final_data)
}

export default function Contactform() {
  const intl = useIntl()
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="contact-form-wrapper">
        <div className="thank-you-wrapper-animation pt-4">
          <p className="has-text-weight-bold mb-3">
            <FormattedMessage id="thankYouSend" defaultMessage="Thank you for contacting us." />
          </p>
          <p>
            <FormattedMessage id="weWillRespond" defaultMessage="Your message has been sent to us, and we will respond as soon as possible." />
          </p>
        </div>
      </div>
    )
  }
  return (
    <>
      <Formik
        initialValues={{
          full_name: "",
          email: "",
          message: "",
          consent: false,
        }}
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = intl.formatMessage({
              id: "emailErrorRequired",
              defaultMessage:
                "Please, enter e-mail so we can reply back to you.",
            })
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = intl.formatMessage({
              id: "emailErrorInvalid",
              defaultMessage: "Please, enter valid e-mail address.",
            })
          }

          if (!values.consent && values.consent === false) {
            errors.consent = intl.formatMessage({
              id: "consentError",
              defaultMessage:
                "Please, agree with processing of personal data so we can reply to you.",
            })
          }

          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          delete values["consent"]
          const fields = Object.keys(values).map(key => {
            return {
              name: key,
              value: values[key],
            }
          })

          //formv3(fields)
          setSubmitted(true)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting, errors, values }) => (
          <Form className="contact-form-wrapper">
            <div className="field">
              <label htmlFor="full_name" className="label">
                <FormattedMessage id="fullName" defaultMessage="Name" />
              </label>
              <Field
                id="full_name"
                type="text"
                name="full_name"
                className="input"
                placeholder="How we can call you?"
              />
            </div>
            <div className="field">
              <label htmlFor="email" className="label">
                <FormattedMessage id="email" defaultMessage="E-mail" />
              </label>
              <div className="control">
                <Field
                  id="email"
                  type="email"
                  name="email"
                  className={cx({
                    input: true,
                    "is-danger": errors.email,
                  })}
                  placeholder="Where we can respond to you?"
                />
              </div>
              <ErrorMessage
                name="email"
                render={msg => <p className="help is-danger">{msg}</p>}
              />
            </div>
            <div className="field">
              <label htmlFor="message" className="label">
                <FormattedMessage id="message" defaultMessage="Your message" />
              </label>
              <Field
                id="message"
                as="textarea"
                name="message"
                className="textarea"
                placeholder={intl.formatMessage({ id: "messagePlaceholder" })}
              />
            </div>
            <label className="checkbox">
              <Field
                type="checkbox"
                name="consent"
                value={values.consent}
                checked={values.consent}
              />
              &nbsp;
              <FormattedMessage
                id="consent"
                defaultMessage="I agree to the processing of personal data for the purpose
              of"
                values={{
                  purpose: (
                    <Link to={sanitizeLink(`/${intl.locale}/privacy-policy/`)}>
                      {intl.formatMessage({
                        id: "contacting",
                        defaultMessage: "contact",
                      })}
                    </Link>
                  ),
                }}
              />
              .
            </label>
            <ErrorMessage
              name="consent"
              render={msg => <p className="help is-danger">{msg}</p>}
            />
            <div className="control mt-5">
              <button
                className="lz-button button--isi"
                type="submit"
                disabled={isSubmitting}
              >
                <FormattedMessage
                  id="sendMessage"
                  defaultMessage="Send message"
                />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
