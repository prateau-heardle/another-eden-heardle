import React from 'react'
import musics from '../config/musics.json'
import categories from '../config/categories.json'
import type { Category, GameState, MusicElement, MusicElementJson } from '../config/types.ts'
import { getTodaySong } from './seededRng.ts'
import { getGameStateDay, getTodayId, mapToMusic, saveGameState, sortCategoryById, sortMusicById } from '../config/utils.ts'

export interface HeardleContextProps {
	currentMusic: MusicElement,
	allMusics: MusicElement[],
	allCategories: Category[],
	gameState: GameState,
	guessMusic: (musicId?: number) => void,
	musicImage?: string,
	setMusicImage: (image: string) => void
}

const Context = React.createContext<HeardleContextProps>({} as HeardleContextProps)

export const useHeardleContext = () => React.useContext(Context)

const HeardleContext = ({ children }: React.PropsWithChildren) => {
	const [gameState, setGameState] = React.useState<GameState>()
	const [musicImage, setMusicImage] = React.useState<string>()

	const todayId = getTodayId()
	const allCategories = (categories as Category[])
		.sort(sortCategoryById)
	const allMusics = (musics as MusicElementJson[])
		.map((music) => mapToMusic(music, allCategories))
		.sort(sortMusicById)
	const currentMusic = getTodaySong(allMusics, todayId)

	React.useEffect(() => {
		setGameState(getGameStateDay(todayId) || { dateId: todayId, response: currentMusic.id, attempts: [] })
	}, [])

	React.useEffect(() => {
		if (gameState != undefined && gameState.attempts.length > 0) {
			saveGameState(gameState)
		}
	}, [gameState])

	const guessMusic = (musicId?: number) => {
		setGameState(old => ({
			...old!,
			attempts: [...old!.attempts, musicId]
		}))
	}

	if (!gameState) {
		return null
	}

	return (
		<Context.Provider
			value={{
				currentMusic,
				allMusics,
				allCategories,
				gameState,
				guessMusic,
				musicImage,
				setMusicImage
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default HeardleContext
