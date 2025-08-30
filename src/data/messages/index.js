import en from './en'
import sk from './sk'

const getMessages = langKey => ({ sk, en }[langKey] || en)

export default getMessages
