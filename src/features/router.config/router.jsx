import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../../pages/pages/home/home/home'
import About from '../../pages/pages/about/about'
import Error from '../../pages/pages/error/error'
import FicheLogement from '../../pages/pages/fiche-logement/fiche-logement/fiche-logement'
import Template from '../../pages/pages/template/template/template'
import { loadLogementById, loadLogements } from '../services/logements.service'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Template />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: loadLogements,
                /* La fonction loadLogements sera appelée pour charger des données spécifiques des logements,
                 (via useLoaderData()) avant de rendre le composant Home.*/
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'ficheLogement/:id',
                element: <FicheLogement />,
                loader: loadLogementById,
                /* La fonction loadLogementById sera appelée pour charger des données spécifiques au logement,
                 (via useLoaderData()) avant de rendre le composant FicheLogement.*/
                errorElement: <Error />,
            },

            {
                path: '*',
                element: <Error />,
            },
        ],
    },
])
