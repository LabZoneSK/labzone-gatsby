/** Link resolver for Prismic documents
 * @see: https://prismic.io/docs/technologies/link-resolving-reactjs
 */
const linkResolver = doc => {
    const lang = doc?.lang || 'en'
    switch (doc?.type) {
        case 'post':
            return `/${lang}/blog/${doc.uid}`
        case 'job':
            return `/${lang}/career/${doc.uid}`
        default:
            return '/'
    }
}

module.exports = {
    linkResolver,
}
