import React from 'react'
import Header from './header'
import Footer from './footer'

function PageWrapper({ children }) {
    return (
        <>
            <Header />
            <section className="px-8 py-8 lg:py-16 mt-10">
                <div className="container mx-auto">
                    {children}
                </div>
            </section >
            <Footer />
        </>
    )
}

export default PageWrapper