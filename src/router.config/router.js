import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Error from '../pages/Error'
import FicheLogement from '../pages/FicheLogement'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/About',
        element: <About />,
    },

    {
        // si l'url ne correspond à rien je me dirige sur la page d'erreur 404}
        path: '*',
        element: <Error />,
    },
    {
        path: '/FicheLogement',
        element: <FicheLogement />,
    },
])
export default router
