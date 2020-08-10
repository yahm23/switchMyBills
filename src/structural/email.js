import React, {useState} from 'react'

export default function Email() {

    const[email,setEmail] = useState('');

    const emailSetter = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value);

    }

    return (
        <div className="formContainer">
            <form className="form">

                <input 
                    onChange={emailSetter}
                    className="inputEmail"
                    placeholder="Email Address">

                </input>
                <button className="buttonEmail" >Get Notified</button>
            </form>
        </div>
    )
}
