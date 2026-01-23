import * as React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import './ModaleSupport.css'
import Modale from '../commons/Modale.tsx'
import HeartIcon from '../../img/heart.svg?react'

const ModaleSupport = () => {
	const { t } = useTranslation()

	const [isOpen, setIsOpen] = React.useState(false)

	return (<>
		<button className='header-icon-container' onClick={() => setIsOpen(true)}>
			<HeartIcon className='header-icon' />
		</button>
		<Modale
			title={t('header.about.title')}
			isOpen={isOpen}
			onClose={() => setIsOpen(false)}
		>
			<div className='header-about-text'>
				<Trans
					i18nKey="header.about.text"
					components={{ a: <a /> }}
				/>
			</div>
		</Modale>
	</>)
}

export default ModaleSupport
