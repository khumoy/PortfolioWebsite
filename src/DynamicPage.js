import React from 'react'
import { useParams } from 'react-router-dom';
import Layout from './Container/Layout';
import Bizhaqimizda from './Pages/Bizhaqimizda';
import Home from './Pages/Home';
import Kurslar from './Pages/Kurslar';

const DynamicPage = () => {

    const { pages } = useParams();

    const Pages = (pages) => {
        switch (pages) {
            case 'home':
                return <Home />
            case 'bizhaqimizda':
                return <Bizhaqimizda />
            case 'kurslar':
                return <Kurslar />
            default:
                return <Home />
        }

    }
    return (
        <Layout>

            {Pages(pages)}
        </Layout>
    )
}

export default DynamicPage
