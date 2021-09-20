import React from 'react'
import { HeaderWrap } from './HeaderWrap'
import { FaBars } from 'react-icons/fa'
const Header = () => {
    return (
        <HeaderWrap>
            <div className="header ">
                <a href="#"> <img src="https://www.fullstackacademy.com/images/fa-logo@2x.png" alt="LOGO WEB SITE" /> </a>
                <div className=" header-right">
                    <ul className="d-md-flex pe-md-5">
                        <li>  <a href="#">Home</a></li>
                        <li>  <a href="#">Courses</a></li>
                        <li>  <a href="#">Contact</a></li>
                        <li className="pe-0">  <a href="#">About</a></li>
                    </ul>
                </div>
                <div className="btn-bars d-md-none">
                    <button className=" btn-menu "> <FaBars /> </button>
                    {/* <div className="menu-bar ">

                    </div> */}
                </div>
            </div>
        </HeaderWrap>
    )
}

export default Header
