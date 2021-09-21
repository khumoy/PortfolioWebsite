import React from 'react'
import Courses from '../Courses/Courses'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Section from '../Section/Section'
import { HomeWrap } from './HomeWrap'

const HomePage = () => {

    return (
        <HomeWrap>
            <Header />
            <Section />
            <Courses />
            <Footer />

        </HomeWrap>
    )
}

export default HomePage
