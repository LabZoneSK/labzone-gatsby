import { defaultLangKey } from '../data/languages';

export function extractTextFromHTMLString(string) {
  return string.replace(/(<([^>]+)>)/gi, "").trim();
}

export function sanitizeLink(path, langKey){
  if (langKey) {
    return path.replace(`/${langKey}/`, '/');
  }
  return path.replace(`/${defaultLangKey}/`, '/');
}