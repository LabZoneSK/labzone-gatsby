import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo/seoHelmet'
import Section from '../components/section'
import PricingCard from '../components/PricingCard'
import SecurityCheckForm from '../components/SecurityCheckForm'
import FullBleed from '../components/fullBleed'
import { StaticImage } from 'gatsby-plugin-image'
export default function WordPressSecurityShield() {
    const handlePricingAction = (tier) => {
        console.log(`Selected ${tier} tier`)
    }

    const handleLeadMagnetAction = () => {
        const leadMagnet = document.getElementById('lead-magnet')
        if (leadMagnet) {
            leadMagnet.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <Layout>
            <SEO
                title="WordPress Security Shield - LabZone"
                description="Your hosting stops noise. LabZone stops WordPress exploits. Professional security services for nonprofits."
            />

            <FullBleed>
                <Section sectionClass="bg-gradient-to-br from-[#151340] to-[#1B164C] text-white py-20">
                    <div className="columns mx-auto px-4 text-center">
                        <div className="column is-flex is-flex-direction-column is-align-content-flex-start is-justify-content-flex-start">
                            <h1 className="font-nunito has-text-left is-size-2 has-text-weight-bold text-white sm:text-5xl">
                                Your Hosting Stops Noise.<br />
                                <span className="text-[#5852A3]">LabZone Stops WordPress Exploits.</span>
                            </h1>
                            <p className="has-text-left is-size-5 md:text-2xl mb-8 max-w-3xl mt-3">
                                Generic hosting security blocks bots and spam. But <strong className="!text-white">96% of WordPress vulnerabilities are in plugins</strong> — and those slip right past hosting defenses.
                                <br />
                                <br />
                                LabZone’s <strong className='!text-white'>WordPress Security Shield </strong>protects nonprofits from the real threats that take down sites and compromise donor trust.
                            </p>
                            <button className="mt-5 w-fit bg-[#5852A3] py-3 px-4 cursor-pointer" onClick={handleLeadMagnetAction}>
                                Get Free Security Check
                            </button>
                        </div>
                        <div className="column is-flex is-align-content-center is-justify-content-center">
                            <img src="/images/protect.png" alt="WordPress Security Shield" className="!h-[300px] !w-auto mb-6" />
                        </div>
                    </div>
                </Section>
            </FullBleed>

            {/* Problem/Gap Section */}
            <Section sectionClass="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center gap-8 text-center mb-12">
                        <h2 className="is-size-3 text-gray-900 mb-4">
                            Why Nonprofits Are at Risk on WordPress
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-labzone-red mb-2">96%</div>
                                <p className="text-gray-700">of vulnerabilities are in plugins, not WordPress core</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-labzone-red mb-2">Only 12%</div>
                                <p className="text-gray-700">of WordPress-specific exploits blocks hosting firewalls</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-labzone-red mb-2">Just One</div>
                                <p className="text-gray-700">On a multisite, one vulnerability can compromise every site in your network</p>
                            </div>
                        </div>
                        <p className="is-size-5 text-gray-600 max-w-2xl mx-auto">
                            For nonprofits, a single breach can damage donor confidence, interrupt services, and cost thousands in recovery. <strong>Security&nbsp;is&nbsp;mission&nbsp;protection</strong>.
                        </p>
                    </div>

                </div>
            </Section>

            {/* Pricing Section */}
            <Section sectionClass="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="is-size-3 font-bold text-gray-900 mb-4">
                            Choose the Shield That Fits Your Organization
                        </h2>
                        <p className="text-lg text-gray-600">
                            Affordable security solutions designed specifically for nonprofits
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <PricingCard
                            title="Advanced Shield"
                            description="Complete protection for growing organizations"
                            price="149"
                            period="month"
                            features={[
                                "Everything in Essential, plus:",
                                "Virtual patching for plugin & theme vulnerabilities",
                                "Daily malware scan + removal SLA",
                                "Login protection & enforced MFA",
                                "Monthly security health report",
                            ]}
                            ctaText="Start Advanced"
                            ctaAction={() => handlePricingAction('advanced')}
                        />

                        <PricingCard
                            title="Essential Shield"
                            description="Basic protection for small nonprofits"
                            price="59"
                            period="month"
                            features={[
                                "Weekly plugin & theme updates",
                                "Automated daily backups (30-day retention)",
                                "Uptime monitoring with instant alerts",
                                "Monthly vulnerability scan",
                            ]}
                            ctaText="Start Essential"
                            ctaAction={() => handlePricingAction('essential')}
                            isPopular={true}
                        />



                        <PricingCard
                            title="Enterprise Shield"
                            description="Custom security for large nonprofits"
                            price="349"
                            period="month"
                            features={[
                                "Everything in Advanced, plus:",
                                "24/7 incident response",
                                "Donor data risk assessment & compliance guidance",

                                "Annual security tabletop exercise for staff",
                                "Board-ready quarterly security reporting pack",
                            ]}
                            ctaText="Contact Sales"
                            ctaAction={() => handlePricingAction('enterprise')}
                            isEnterprise={true}
                        />
                    </div>
                </div>
            </Section>

            {/* Lead Magnet Section */}
            <Section sectionClass="py-16 bg-[#efeef6]">
                <div className="container mx-auto px-4">
                    <div id="lead-magnet" className="max-w-2xl mx-auto">
                        <SecurityCheckForm />
                    </div>
                </div>
            </Section>

            {/* Why LabZone Section */}
            <Section sectionClass="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="is-size-3 text-gray-900 mb-4">
                            Why Trust LabZone with Your Security?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-labzone-red rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src="/images/nonprofit.svg" alt="Nonprofit Focused" className="w-[150px] h-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nonprofit Focused</h3>
                            <p className="text-gray-600">We understand limited budgets, volunteer staff, and donor-data sensitivity.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-labzone-red rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src="/images/multisite.svg" alt="Multisite Experts" className="w-[150px] h-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Multisite Experts</h3>
                            <p className="text-gray-600">One plugin exploit can compromise your entire network. We prevent that.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-labzone-red rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src="/images/talk.svg" alt="Board-Friendly Reporting" className="w-[150px] h-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Board-Friendly Reporting</h3>
                            <p className="text-gray-600">We deliver security in plain language, ready for your board or funders.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Closing CTA Section */}
            <Section sectionClass="py-16 bg-[#5852A3] text-white">
                <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center gap-4">
                    <h2 className="is-size-3 font-bold mb-4">
                        Don’t Let a Plugin Vulnerability Put Your Mission at Risk
                    </h2>
                    <p className="is-size-5 mb-8 max-w-2xl mx-auto">
                        LabZone stops the WordPress exploits your host can’t.
                    </p>
                    <button className="bg-white text-[#5852A3] px-8 py-4 font-semibold hover:bg-gray-100 transition-colors">
                        Secure My Website Now
                    </button>
                </div>
            </Section>
        </Layout>
    )
}