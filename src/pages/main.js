import React, {useState} from 'react'
import Email from '../structural/email'
import Logo from '../media/logoLight.png'
import Loading from '../structural/loading';
import shortid from 'shortid';


export default function Main() {

    const[success, setSuccess] = useState(false)
    const[processing, setProcessing] = useState(false)

    let getRandomKey = () => {
        return shortid.generate();
    }
    
    return (
        <div className="outerMain">
                <div className = "mainBanner">
                    {processing?
                        <Loading></Loading>
                        :
                        <>
                            {success?
                                <div
                                    key={getRandomKey()}
                                    className="fadingAnim">

                                    <img className = "logoMain" src={Logo}/>
                                    <h1 className="successText"> Thanks for your interest!</h1>
                                    <h1 className="successText"> We'll get back to you shortly!</h1>
                                </div>
                                :
                                <div>
                                    <img className = "logoMain" src={Logo}/>

                                    <div className="fadingAnim">

                                        <h1 className="mainBannerText" > Switch your energy <br></br> for the last time. </h1>
                                        <h1 className="mainBannerBlurb" > Zero hassle automatic switching. Launching soon.</h1>
                                        <Email setSuccess={setSuccess} setProcessing={setProcessing}></Email>
                                        <p className="mainBannerDisclaimer" > By clicking “Get Notified” you agree to get emails from us upon launch.</p>
                                    </div>
                                </div>
                            }
                        </>
                    }
                </div>
        </div>
    )
}
