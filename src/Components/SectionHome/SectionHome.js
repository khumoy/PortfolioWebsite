import React from 'react'
import { SectionHomeWrap } from './SectionHomeWrap'
import { useSelector } from 'react-redux'
import Reactplayer from 'react-player'
import { Fade } from 'react-awesome-reveal'




const SectionHome = () => {

    const data = useSelector(state => state.aboutData);

    return (
        <SectionHomeWrap>
            <div className="container">
                <div className="row align-items-center pt-5">
                    {data.map((val, ind) => (
                        <>

                            <div key={ind}
                                className=" offset-1 col-10 offset-sm-2 col-sm-8 offset-md-0 col-md-6 col-lg-6">
                                <Fade triggerOnce delay={500}>
                                    <div className='text-center'>
                                        <img className='w-100' src={val.images} alt="" />
                                    </div>
                                </Fade>

                            </div>
                            <div
                                className="offset-1 col-10 offset-sm-2  col-sm-8  offset-md-0 col-md-6 col-lg-6">
                                <Fade triggerOnce delay={1000}>
                                    <div className='text-center'>
                                        <p>{val.title}</p>
                                    </div>
                                </Fade>
                            </div>
                        </>
                    ))}
                    {data.map((v, i) => (
                        <>
                            <div key={i}
                                className="order-2 order-sm-2 order-md-2 offset-1 col-10 offset-sm-2 col-sm-8 offset-md-0 col-md-6 col-lg-6">
                                <Fade triggerOnce delay={1000}>
                                    <div className='text-center'>
                                        <p>{v.text}</p>
                                    </div>
                                </Fade>
                            </div>
                            <div
                                className="order-1 order-sm-1 order-md-2 offset-1 col-10  offset-sm-2 col-sm-8  offset-md-0 col-md-6 col-lg-6 ">
                                <Fade triggerOnce delay={1500}>
                                    <div className='text-center'>
                                        <img className='w-100' src={v.img} alt="" />
                                    </div>
                                </Fade>
                            </div>
                        </>
                    ))}
                </div>
                <div className="row align-items-center py-5">
                    <div className="offset-1 col-10  offset-sm-2 col-sm-8 offset-md-0 col-md-6 col-lg-6">
                        <Fade triggerOnce delay={2000} >
                            <div className="rounded-pill shadow hidden">
                                <Reactplayer
                                    url='/video/videoplay.mp4'
                                    controls
                                    width='100%'
                                    height='100%'
                                    style={{ borderRadius: '50%' }}
                                />
                            </div>
                        </Fade>
                    </div>
                    <div className="offset-1 col-10 offset-sm-2   col-sm-8 offset-md-0 col-md-6 col-lg-6">
                        <Fade triggerOnce delay={2300} >
                            <div className='p-3'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Commodi inventore impedit, veniam vitae nemo fugiat
                                    consequuntur sapiente beatae incidunt pariatur!
                                    Culpa ratione deleniti velit illo nostrum pariatur
                                    dolorum distinctio nesciunt.</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>


        </SectionHomeWrap >
    )
}

export default SectionHome