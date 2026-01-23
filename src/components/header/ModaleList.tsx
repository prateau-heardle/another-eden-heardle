import * as React from 'react'
import { useTranslation } from 'react-i18next'
import './ModaleList.css'
import Modale from '../commons/Modale.tsx'
import ListIcon from '../../img/list.svg?react'
import { useHeardleContext } from '../../context/HeardleContext.tsx'

const ModaleList = () => {
	const { i18n : { language }, t } = useTranslation()
	const { allMusics, allCategories } = useHeardleContext()

	const [isOpen, setIsOpen] = React.useState(false)

	return (<>
		<button className='header-icon-container' onClick={() => setIsOpen(true)}>
            <ListIcon className='header-icon' />
		</button>
		<Modale
			title={t('header.list.title')}
			isOpen={isOpen}
			onClose={() => setIsOpen(false)}
		>
			{allCategories.map((category) => (
				<>
					<h3 className='header-list-category'>{category.name[language]}</h3>
					<ul className='header-list-container'>
						{allMusics
							.filter((music) => music.categoryId === category.id)
							.map(m => (
								<li className='header-list-item'>
									<a target="_blank" href={m.url}>{m.name[language]}</a>
								</li>
							))
						}
					</ul>
				</>
			))}
		</Modale>
	</>)
}

export default ModaleList
