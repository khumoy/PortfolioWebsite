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
                    <div className="row text-center text-light">
                        {data.map((v, i) => (
                            <div key={i} className="col-11 col-sm-10  col-md-5  mb-3 col-lg-4">
                                <Fade triggerOnce delay={v.duration}>
                                    <img src={`${v.img}`} alt="" />
                                    <h2>{v.name}</h2>
                                    <p className="title">{v.title}</p>
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
