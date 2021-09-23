import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import { LayoutWrap } from './LayoutWrap'

const Layout = ({ children }) => {
    return (
        <LayoutWrap>
            <Header />
            <>{children}</>
            <Footer />
        </LayoutWrap>
    )
}

export default Layout