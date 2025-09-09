// Currency utility functions for handling multi-currency pricing

// Base prices in USD
const BASE_PRICES = {
    essential: 59,
    advanced: 149,
    enterprise: 349
}

// Exchange rates (you might want to fetch these from an API in production)
const EXCHANGE_RATES = {
    USD: 1.0,
    EUR: 0.85,
    GBP: 0.73
}

// Currency symbols
const CURRENCY_SYMBOLS = {
    USD: '$',
    EUR: '€',
    GBP: '£'
}

/**
 * Get currency from cookie
 * @returns {string} Currency code (USD, EUR, GBP)
 */
export function getCurrencyFromCookie() {
    if (typeof document === 'undefined') {
        return 'USD' // Default for SSR
    }

    const cookies = document.cookie.split(';')
    const currencyCookie = cookies.find(cookie =>
        cookie.trim().startsWith('currency=')
    )

    if (currencyCookie) {
        return currencyCookie.split('=')[1].trim().toUpperCase()
    }

    return 'USD' // Default fallback
}

/**
 * Convert price from USD to target currency
 * @param {number} usdPrice - Price in USD
 * @param {string} targetCurrency - Target currency code
 * @returns {number} Converted price
 */
export function convertPrice(usdPrice, targetCurrency = 'USD') {
    const rate = EXCHANGE_RATES[targetCurrency] || 1.0
    return Math.round(usdPrice * rate)
}

/**
 * Format price with currency symbol
 * @param {number} price - Price amount
 * @param {string} currency - Currency code
 * @returns {string} Formatted price string
 */
export function formatPrice(price, currency = 'USD') {
    const symbol = CURRENCY_SYMBOLS[currency] || '$'
    return `${symbol}${price}`
}

/**
 * Get converted and formatted price for a plan
 * @param {string} planName - Plan name (essential, advanced, enterprise)
 * @param {string} currency - Currency code
 * @returns {string} Formatted price string
 */
export function getPlanPrice(planName, currency = 'USD') {
    const basePrice = BASE_PRICES[planName.toLowerCase()]
    if (!basePrice) {
        return formatPrice(0, currency)
    }

    const convertedPrice = convertPrice(basePrice, currency)
    return formatPrice(convertedPrice, currency)
}

/**
 * Get all plan prices for a given currency
 * @param {string} currency - Currency code
 * @returns {object} Object with plan prices
 */
export function getAllPlanPrices(currency = 'USD') {
    return {
        essential: getPlanPrice('essential', currency),
        advanced: getPlanPrice('advanced', currency),
        enterprise: getPlanPrice('enterprise', currency)
    }
}
