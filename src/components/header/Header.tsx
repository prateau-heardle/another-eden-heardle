import { useTranslation } from 'react-i18next'
import './Header.css'
import ListIcon from '../../img/list.svg?react'
import QuestionIcon from '../../img/question.svg?react'
import StatsIcon from '../../img/stats.svg?react'
import ModaleInfos from './ModaleInfo.tsx'
import ModaleSupport from './ModaleSupport.tsx'
import ModaleLanguage from './ModaleLanguage.tsx'

const Header = () => {
	const { t } = useTranslation()

	return (
		<header className='header'>
			<div className='header-content'>
				<ModaleInfos />
				<ModaleSupport />
				<div className='header-icon-container'>
					<QuestionIcon className='header-icon' />
				</div>
				<h1 className='header-title'>{t('title')}</h1>
				<div className='header-icon-container'>
					<StatsIcon className='header-icon' />
				</div>
				<div className='header-icon-container'>
					<ListIcon className='header-icon' />
				</div>
				<ModaleLanguage />
			</div>
		</header>
	)
}

export default Header
