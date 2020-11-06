export function extractTextFromHTMLString(string) {
  return string.replace(/(<([^>]+)>)/gi, "").trim();
}
