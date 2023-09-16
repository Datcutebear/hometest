import config from '~/Configs'

import Home from '~/pages/home/home';

const privateRoutes = [
    
]

const publicRoutes = [
    {path: config.routes.home, element: Home},
]

export {privateRoutes, publicRoutes}