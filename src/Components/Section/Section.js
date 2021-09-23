import React from 'react'
import Typewriter from 'typewriter-effect'
import { SectionWrap } from './SectionWrap'

const Section = () => {

    return (
        <SectionWrap>
            <div className="first-section">
                <div className='titles'>
                    <h1 className="text">Front-End Development  Courses
                        <Typewriter
                            options={{
                                strings: [
                                    'HTML', 'CSS', 'Bootstrap 4.6, 5',
                                    'JavaScript', 'ReactJS', 'NextJS'],
                                autoStart: true,
                                loop: true,
                                // cursorClassName: 'text-warning',
                                wrapperClassName: 'type-style'
                            }}
                        />
                    </h1>
                    <div>
                        <button className="btn-contact">
                            CONTACT
                        </button>
                    </div>
                </div>

            </div>

        </SectionWrap>
    )
}

export default Section
