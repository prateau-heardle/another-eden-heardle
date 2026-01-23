import { useTranslation } from 'react-i18next'
import './Header.css'
import ModaleInfos from './ModaleInfo.tsx'
import ModaleSupport from './ModaleSupport.tsx'
import ModaleHelp from './ModaleHelp.tsx'
import ModaleLanguage from './ModaleLanguage.tsx'
import ModaleList from './ModaleList.tsx'
import ModaleStats from './ModaleStats.tsx'

const Header = () => {
	const { t } = useTranslation()

	return (
		<header className='header'>
			<div className='header-content'>
				<ModaleInfos />
				<ModaleSupport />
				<ModaleHelp />
				<h1 className='header-title'>{t('title')}</h1>
				<ModaleStats />
				<ModaleList />
				<ModaleLanguage />
			</div>
		</header>
	)
}

export default Header
