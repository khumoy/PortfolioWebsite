import React, { useState } from 'react'
import { HeaderWrap } from './HeaderWrap'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import toggleMenu from '../../redux/action'
import { Link } from 'react-router-dom'


const Header = () => {

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }

    }

    window.addEventListener('scroll', changeBackground)

    const dispatch = useDispatch();
    const show = useSelector((state) => state.isSidebarShow);
    // console.log(navbar)


    return (
        <HeaderWrap>
            <div className={`header ${navbar ? ' scroll-active' : 'header'}`}>
                <a className="nav-link" href="/"> <img src="https://www.fullstackacademy.com/images/fa-logo@2x.png" alt="LOGO WEB SITE" /> </a>
                <div className=" header-right">
                    <ul className="d-md-flex pe-md-5">
                        <li>
                            <Link className="nav-link" to="/">Bosh sahifa</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/kurslar">
                                Kurslar
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/">Contact</Link>
                        </li>
                        <li className="pe-0">
                            <Link className="nav-link" to="/bizhaqimizda">Biz haqimizda</Link>
                        </li>
                    </ul>
                </div>
                <div className="btn-bars d-md-none">
                    <button onClick={() => toggleMenu(dispatch)} variant="contained " className=" btn-menu "> <FaBars /> </button>

                </div>
                <div className={`navbar-menu ${show ? '' : 'show'}`}>
                    <button onClick={() => toggleMenu(dispatch)} variant="contained " className=" btn-closer "> <AiOutlineClose /> </button>
                    <ul >
                        <li>  <Link className="nav-link" to="/">Bosh sahifa</Link></li>
                        <li>  <Link className="nav-link" to="/kurslar">Kurslar</Link></li>
                        <li>  <Link className="nav-link" to="/">Contact</Link></li>
                        <li className="pe-0">  <Link className="nav-link" to="/bizhaqimizda">Biz haqimizda</Link></li>
                    </ul>

                </div>
            </div>
        </HeaderWrap>
    )
}

export default Header
