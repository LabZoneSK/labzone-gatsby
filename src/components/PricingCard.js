import React from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

export default function PricingCard({
    title,
    description,
    price,
    period,
    features,
    ctaText,
    ctaAction,
    isPopular = false,
    isEnterprise = false
}) {
    return (
        <div className={twMerge('relative pricing-card bg-white rounded-lg shadow-lg p-6 relative', isPopular ? 'border-2 border-[#5852A3] bg-[#efeef6]' : 'border border-gray-200')}>
            {isPopular && (
                <div className="absolute top-0 translate-y-[-50%] translate-x-[25%] bg-[#5852A3] text-white text-center px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                </div>
            )}

            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4">{description}</p>

                <div className="pricing-amount mb-4">
                    {isEnterprise ? (
                        <span className="text-2xl font-bold text-gray-900">From ${price}</span>
                    ) : (
                        <span className="text-3xl font-bold text-gray-900">${price}</span>
                    )}
                    <span className="text-gray-500 ml-1">/ {period}</span>
                </div>
            </div>

            <ul className="features-list mb-6 space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>

            <button
                className={`w-full py-3 px-4 font-semibold transition-colors ${isPopular
                    ? 'bg-[#5852A3] text-white hover:bg-[#2e2b55]'
                    : 'bg-[#efeef6] text-gray-900 hover:bg-[#cecce5]'
                    }`}
                onClick={ctaAction}
            >
                {ctaText}
            </button>
        </div>
    )
}

PricingCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    ctaText: PropTypes.string.isRequired,
    ctaAction: PropTypes.func,
    isPopular: PropTypes.bool,
    isEnterprise: PropTypes.bool,
}