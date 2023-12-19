import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
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
            </div>
            <Footer />
        </>
    )
}
export default Template
