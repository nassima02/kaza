import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './router.config/router'
import styles from './assets/styles.css'

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
