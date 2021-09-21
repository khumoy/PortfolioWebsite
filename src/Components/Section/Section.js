import React from 'react'
import Typewriter from 'typewriter-effect'
import { SectionWrap } from './SectionWrap'

const Section = () => {

    return (
        <SectionWrap>
            <div className="first-section pt-5">
                <div>
                    <h1 className="text">Front-End Development  Courses
                        <Typewriter
                            options={{
                                strings: [
                                    'HTML', 'CSS', 'Bootstrap 4.6, 5',
                                    'JavaScript', 'ReactJS', 'NextJS'],
                                autoStart: true,
                                loop: true,
                                // cursorClassName: 'text-warning',
                                wrapperClassName: 'text-warning'
                            }}
                        />
                    </h1>
                </div>
                <div>
                    <button className="btn-contact">
                        CONTACT
                    </button>
                </div>
            </div>
        </SectionWrap>
    )
}

export default Section
