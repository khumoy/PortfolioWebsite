import React from 'react'
import { useSelector } from 'react-redux'
import { AboutWrap } from './AboutWrap'

const About = () => {
    const data = useSelector(state => state.sponsors)

    return (
        <AboutWrap>
            <div className='container  '>
                <h1>Biz haqimizda</h1>
                <div className="row">
                    <div className="col-12">
                        <div className='items w-100'>
                            <img
                                className='w-100'
                                src='https://cdn.searchenginejournal.com/wp-content/uploads/2021/02/web-development-6038dcd6e9a0c.jpg'
                                alt='webs'
                            />
                        </div>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-0 col-md-6">
                        <div className='text-start'>
                            <img
                                className='imagess'
                                src="https://fsnighttoshine.org/wp/wp-content/uploads/2017/10/sponsor.png"
                                alt="sponsors" />
                            <h2>Bizning
                                hamkorlarimiz sizni kutmoqda</h2>
                            <p>Bizning akademiyamiz bir nechta o’nlab
                                kompaniyalar bilan hamkorlik aloqalari(memorandum)ni yo’lga qo’ygan. Kurslarimizni tamomlagan
                                talabalarimiz hamkor kompaniyalarda tavsiyalarimizga ko’ra
                                ishga joylashish imkoniyatiga ega bo’ladilar.</p>
                        </div>
                    </div>
                    <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-0 col-md-6">
                        <div className="row">
                            {data.map((v, i) => (
                                <div key={i} className="offset-2 col-8 offset-sm-0 col-sm-5 col-md-4 col-lg-6 mb-2">
                                    <div className='sponsors'>
                                        <img src={v.img} alt="back" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AboutWrap>
    )
}

export default About
