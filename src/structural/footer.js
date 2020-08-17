import React from 'react'
import Logo from '../media/logoLight.png'
import {Link} from "react-router-dom";


export default function Footer() {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="footerText">
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>FAQs</p>
                </div>
                <div style={{alignSelf: "center"}}>
                    <Link to="/"><img height="45px" src={Logo}></img></Link>
                </div>
            </div>
        </div>
    )
}
