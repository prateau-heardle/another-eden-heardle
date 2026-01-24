import './App.css'
import Content from './components/Content.tsx'
import Header from './components/header/Header.tsx'
import { ROUTES, routes, useRoute } from './config/router.ts'
import HeardleContext from './context/HeardleContext.tsx'

const App = () => {
    const route = useRoute()

    if (!route.name) {
        routes[ROUTES.DAILY]().replace()
    }

    return (
        <HeardleContext>
            <main className='main'>
                <Header />
                <Content />
            </main>
        </HeardleContext>
    )
}

export default App
