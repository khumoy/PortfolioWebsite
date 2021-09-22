import React from 'react'
import { FaFacebookF, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'
import { FooterWrap } from './FooterWrap'

const Footer = () => {
    return (
        <FooterWrap>
            <div className="footerjs">
                <div className="lines container"></div>
                <div className='social-media-icons'>
                    <a className="nav-link" href="/"> <div className="icons "><FaFacebookF /> </div></a>
                    <a className="nav-link" href="/"><div className="icons"><FaInstagram /></div></a>
                    <a className="nav-link" href="/"><div className="icons"><FaTelegram /></div></a>
                    <a className="nav-link" href="/"><div className="icons"><FaYoutube /></div></a>
                </div>
                <p> Copyright. All rights reserved.</p>
            </div>
        </FooterWrap>
    )
}

export default Footer
