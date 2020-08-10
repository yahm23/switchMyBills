import React from 'react'
import Email from '../structural/email'
import Logo from '../media/logoLight.png'
export default function Main() {
    return (
        <div className="outerMain">
            <div className = "mainBanner">
                <img className = "logoMain" src={Logo}/>
                <h1 className="mainBannerText" > Switch your energy for the last time. </h1>
                <h1 className="mainBannerBlurb" > Zero hassle automatic switching. Launching soon.</h1>
                <Email></Email>
                <p className="mainBannerDisclaimer" > By clicking “Get Notified” you agree to get emails from us upon launch.</p>
            </div>
        </div>
    )
}
