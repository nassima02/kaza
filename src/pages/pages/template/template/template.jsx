import React from 'react'
import Header from '../template-components/header/header'
import Footer from '../template-components/footer/footer'
import { Outlet } from 'react-router-dom'
import './template-style.sass'

function Template() {
    return (
        <>
            <div className="template">
                <Header />
                <main>
                    <Outlet />
                    {/* Utilisation du composant Outlet pour rendre les routes enfants. */}
                </main>
                <Footer />
            </div>
        </>
    )
}
export default Template
