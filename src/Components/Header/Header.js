import React, { useState } from 'react'
import { HeaderWrap } from './HeaderWrap'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import toggleMenu from '../../redux/action'


const Header = () => {

    const [navbar, setNavbar] = useState(true)

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }

    }

    window.addEventListener('scroll', changeBackground)

    const dispatch = useDispatch();
    const show = useSelector((state) => state.isSidebarShow);
    console.log(show)


    return (
        <HeaderWrap>
            <div className={navbar ? 'header scroll-active' : 'header'}>
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
                    <button onClick={() => toggleMenu(dispatch)} variant="contained " disableElevation className=" btn-menu "> <FaBars /> </button>

                </div>
                <div className={`navbar-menu ${show ? '' : 'show'}`}>
                    <button onClick={() => toggleMenu(dispatch)} variant="contained " disableElevation className=" btn-closer "> <AiOutlineClose /> </button>
                    <ul >
                        <li>  <a href="#">Home</a></li>
                        <li>  <a href="#">Courses</a></li>
                        <li>  <a href="#">Contact</a></li>
                        <li className="pe-0">  <a href="#">About</a></li>
                    </ul>

                </div>
            </div>
        </HeaderWrap>
    )
}

export default Header
