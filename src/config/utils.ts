import { LocalStorageKeys, START_DATE } from './consts'
import type { Category, GameState, MusicElement, MusicElementJson } from './types'

export const mapToMusic = (music: MusicElementJson, categories: Category[]): MusicElement => {
    const category = categories.find(cat => cat.id === music.categoryId)!.name
    return {
        ...music,
        category
    }
}

export const sortMusicById = (music1: MusicElement, music2: MusicElement): number => music1.id - music2.id

export const sortCategoryById = (category1: Category, category2: Category): number => category1.id - category2.id

export const getTodayId = (): number => {
	const todayDate = new Date()
    const startDate = new Date(START_DATE)

    const diffInMilliseconds = todayDate.getTime() - startDate.getTime()
    return Math.trunc(diffInMilliseconds / (1000 * 60 * 60 * 24))
}

export const getShowHelp = (): boolean => {
    return JSON.parse(window.localStorage.getItem(LocalStorageKeys.SHOW_HELP) || 'true')
}

export const setShowHelp = (showHelp: boolean) => {
    window.localStorage.setItem(LocalStorageKeys.SHOW_HELP, showHelp.toString())
}

export const getGameState = (): GameState[] => {
    return JSON.parse(window.localStorage.getItem(LocalStorageKeys.GAME_STATE) || '[]')
}

export const getGameStateDay = (dateId: number): GameState | undefined => {
    return getGameState().find(state => state.dateId === dateId)
}

export const saveGameState = (gameState: GameState) => {
    const oldState = getGameState().filter(state => state.dateId !== gameState.dateId)
    window.localStorage.setItem(LocalStorageKeys.GAME_STATE, JSON.stringify([...oldState, gameState]))
}

export const padStartNumber = (n: number) => n.toString().padStart(2, '0')

export const toTimeString = (ms: number) => {
    const date = new Date(ms)

    return `${padStartNumber(date.getMinutes())}:${padStartNumber(date.getSeconds())}`
}
