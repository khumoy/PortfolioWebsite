import React from 'react'
import Courses from '../Courses/Courses'
import Header from '../Header/Header'
import Section from '../Section/Section'
import { HomeWrap } from './HomeWrap'

const HomePage = () => {

    return (
        <HomeWrap>
            <Header />
            <Section />
            <Courses />
            <div className="container">

            </div>
        </HomeWrap>
    )
}

export default HomePage
