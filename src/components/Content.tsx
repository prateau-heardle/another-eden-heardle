import Answer from './endPage/Answer.tsx'
import Result from './endPage/Result.tsx'
import TimerToNext from './endPage/TimerToNext.tsx'
import AudioPlayer from './audioPlayer/AudioPlayer.tsx'
import AttemptList from './attempts/AttemptList.tsx'
import Search from './search/Search.tsx'
import { useHeardleContext } from '../context/HeardleContext.tsx'
import './Content.css'
import { isGameFinished } from '../config/utils.ts'

const Content = () => {
    const { gameState, isInfinite } = useHeardleContext()

    const isFinished = isGameFinished(gameState)

    if (isFinished) {
        return (
            <>
                <div className='content-middle'>
                    <Answer />
                    <Result />
                    {isInfinite ? <div /> : <TimerToNext />}
                </div>
                <div className='content-bottom'>
                    <AudioPlayer key={gameState.response} isFinished />
                </div>
            </>
        )
    }

    return (
        <>
            <div className='content-middle'>
                <AttemptList />
                <div />
            </div>
            <div className='content-bottom'>
                <AudioPlayer key={gameState.response} />
                <Search />
            </div>
        </>
    )
}

export default Content
