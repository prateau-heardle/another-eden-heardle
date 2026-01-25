import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LngDetector from 'i18next-browser-languagedetector'
import en from './en.json'

export enum Locales {
	EN = 'en'
}

const resources = {
	[Locales.EN]: {
		translation : en
	}
}

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.use(LngDetector)
	.init({
		resources,
		supportedLngs: [Locales.EN],
		fallbackLng: Locales.EN,
		interpolation: {
			escapeValue: false // react already safes from xss
		}
	})

export default i18n
