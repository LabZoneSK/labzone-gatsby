export function extractTextFromHTMLString(string) {
  const wrapper = document.createElement("div")
  wrapper.innerHTML = string
  return wrapper.innerText.trim()
}
