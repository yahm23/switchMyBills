import React, {useState} from 'react'
import Email from '../structural/email'
import Logo from '../media/logoLight.png'
import shortid from "shortid";


export default function Main() {


    let getRandomKey = () => {
        return shortid.generate();
    }

    const[success, setSuccess] = useState(false)

    return (
        <div className="outerMain">
                <div className = "mainBanner">
                    
                    {success?
                        <div
                        className="fadingAnim"
                        key={getRandomKey()}
                        
                        >
                            <h1 className="successText"> Thanks for your interest!</h1>
                            <h1 className="successText"> We'll get back to you shortly!</h1>
                        </div>
                        :
                        
                        
                        
                        <div className="fadingAnim">

                                <img className = "logoMain" src={Logo}/>
                                <h1 className="mainBannerText" > Switch your energy for the last time. </h1>
                                <h1 className="mainBannerBlurb" > Zero hassle automatic switching. Launching soon.</h1>
                                <Email setSuccess={setSuccess}></Email>
                                <p className="mainBannerDisclaimer" > By clicking “Get Notified” you agree to get emails from us upon launch.</p>
                            </div>
                        
                    }
                </div>
        </div>
    )
}
