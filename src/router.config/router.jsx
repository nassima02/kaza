import React from 'react'
import { createBrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Error from '../pages/Error'
import FicheLogement from '../pages/FicheLogement'
import Template from '../components/Template'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Template />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'ficheLogement',
                element: <FicheLogement />,
            },
            {
                path: '*',
                element: <Error />,
            },
        ],
    },
])
