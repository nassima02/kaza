import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Error from '../pages/error'
import FicheLogement from '../pages/fiche-logement'
import Template from '../components/template/template'
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
