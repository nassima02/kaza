import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Template({ children }) {
    return (
        <div className="template">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Template
