import * as React from 'react'
import { useTranslation } from 'react-i18next'
import './ModaleLanguage.css'
import { Locales } from '../../config/i18n/i18n.ts'
import Modale from '../commons/Modale.tsx'
import FlagFrIcon from '../../img/flagFr.svg?react'
import FlagGbIcon from '../../img/flagGb.svg?react'

const ModaleLanguage = () => {
	const { i18n, t } = useTranslation()

	const [isOpen, setIsOpen] = React.useState(false)

	const changeLanguage = (lang: Locales) => {
		i18n.changeLanguage(lang)
	}

	return (<>
		<div className='header-icon-container'>
            {i18n.language === Locales.FR
                ? <FlagFrIcon className='header-icon' onClick={() => setIsOpen(true)} />
                : <FlagGbIcon className='header-icon' onClick={() => setIsOpen(true)} />
            }
		</div>
		<Modale
			title={t('header.language.title')}
			isOpen={isOpen}
			onClose={() => setIsOpen(false)}
		>
            <div className='header-language-container'>
		        <div className='header-language-icon-container'>
                    <FlagFrIcon className='header-language-icon' onClick={() => changeLanguage(Locales.FR)} />
                </div>
		        <div className='header-language-icon-container'>
                    <FlagGbIcon className='header-language-icon' onClick={() => changeLanguage(Locales.EN)} />
                </div>
            </div>
		</Modale>
	</>)
}

export default ModaleLanguage
