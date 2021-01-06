/** Link resolver for Prismic documentrs
 * @see: https://prismic.io/docs/technologies/link-resolving-reactjs
 */
const linkResolver = doc => {
  switch (doc.type) {
    case "post":
      return `/${doc.lang}/blog/${doc.uid}`
  }

  // Backup for all other types
  return "/"
}

module.exports = {
  linkResolver,
}
