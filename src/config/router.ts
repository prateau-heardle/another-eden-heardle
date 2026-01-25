import { createRouter, defineRoute } from 'type-route'

const BASE_URL = '/heardle-react'

export enum ROUTES {
    DAILY = 'daily',
    INFINITE = 'infinite'
}

export const { RouteProvider, useRoute, routes } = createRouter({
    [ROUTES.DAILY]: defineRoute(BASE_URL),
    [ROUTES.INFINITE]: defineRoute(BASE_URL + '/infinite')
})
