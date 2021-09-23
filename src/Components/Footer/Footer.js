import React from 'react'
import { FaFacebookF, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'
import { FooterWrap } from './FooterWrap'

const Footer = () => {

    // const [value, setValue] = useState('')

    // const handlChange = (event) => {

    //     return (
    //         setValue({ value: event.target.value })
    //     )
    // }

    // const handlSubmit = (event) => {
    //     console.log(event)
    //     return (
    //         alert('xabar yuborildi ' + value)
    //         //  event.preventDefault
    //     )
    // }
    return (
        <FooterWrap>
            <div className="footerjs">
                {/* <div className="container">
                    <div className="row">
                        <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-0 col-md-6">
                            <form onSubmit={() => handlSubmit()}>
                                <input type="text" onChange={() => handlChange()} value={value} />
                                <input type="submit" value="Отправить" />
                            </form>
                        </div>
                    </div>
                </div> */}
                <div className="lines container"></div>
                <div className='social-media-icons'>
                    <a className="nav-link" href="/"> <div className="icons "><FaFacebookF /> </div></a>
                    <a className="nav-link" href="https://www.instagram.com/khumoyun01/"><div className="icons"><FaInstagram /></div></a>
                    <a className="nav-link" href="https://t.me/KhumoyunAbdikhalilov"><div className="icons"><FaTelegram /></div></a>
                    <a className="nav-link" href="https://youtube.com/channel/UCGORpBVDPO_rkEbAGTbLZ9A"><div className="icons"><FaYoutube /></div></a>
                </div>
                <p> Copyright. All rights reserved.</p>
            </div>
        </FooterWrap>
    )
}

export default Footer
