// netlify/edge-functions/currency.ts
// Minimal, country-only geolocation → currency guess → preference cookie.
// No IP persisted, no third parties.

const COUNTRY_TO_CURRENCY = {
    US: 'USD',
    GB: 'GBP',
    // Default for most of Europe (incl. SK): EUR
};

function guessCurrency(countryCode) {
    if (!countryCode) return 'EUR';
    return COUNTRY_TO_CURRENCY[countryCode] ?? 'EUR';
}

export default async (request, context) => {
    const country = context.geo?.country?.code || undefined;
    const currency = guessCurrency(country);

    // If user already chose a currency, don't overwrite it.
    const hasUserCurrency =
        request.headers.get('Cookie')?.match(/(?:^|;\s*)user_currency=([^;]+)/i) != null;

    const response = await context.next(); // continue to your site/app

    // Set a short-lived functional cookie only if user hasn't set one explicitly.
    const headers = new Headers(response.headers);
    if (!hasUserCurrency) {
        headers.append(
            'Set-Cookie',
            `currency=${currency}; Path=/; Max-Age=86400; SameSite=Lax` // 1 day
        );
    }

    // Optionally expose the currency as a response header (not readable by JS on initial nav)
    headers.set('x-currency', currency);

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
    });
};
