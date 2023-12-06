import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './router.config/router'
import './assets/styles.scss'

const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <Router>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </Router>
    </React.StrictMode>
)
