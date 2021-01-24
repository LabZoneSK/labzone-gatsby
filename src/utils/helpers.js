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

/** Function gets cookie by specified name */
export function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}