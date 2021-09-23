import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { useSelector } from 'react-redux'
import { CoursesWrap } from './CoursesWrap'

const Courses = () => {

    const data = useSelector((state) => state.courses)

    console.log(data)
    return (
        <CoursesWrap>
            <div className="courses">
                <div className="container">
                    <div className="row text-center">
                        {data.map((v, i) => (
                            <div key={i} className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-5 offset-lg-0 mb-3 col-lg-4">
                                <Fade triggerOnce delay={v.duration}>
                                    <img className='w-100' src={`${v.img}`} alt="" />
                                    <div className='py-3 '>
                                        <h2>{v.name}</h2>
                                        <p className="title text-start">{v.title}</p>
                                    </div>
                                </Fade>

                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </CoursesWrap>
    )
}

export default Courses
