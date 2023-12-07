import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './router.config/router'
import './assets/styles.scss'
import Template from './components/Template'

const rootElement = document.getElementById('root')

// ReactDOM.createRoot(rootElement).render(
//     <React.StrictMode>
//         <Router>
//             <Template>
//                 <Routes>
//                     {routes.map((route, index) => (
//                         <Route
//                             key={index}
//                             path={route.path}
//                             element={route.element}
//                         />
//                     ))}
//                 </Routes>
//             </Template>
//         </Router>
//     </React.StrictMode>
// )

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <Router>
            <Template>
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
            </Template>
        </Router>
    </React.StrictMode>
)
