import React, {useState} from 'react'

export default function Email() {

    const[email,setEmail] =useState('');

    return (
        <div className="formContainer">
            <form className="form">

                <input onChange={()=>setEmail()} className="inputEmail" defaultValue="Email Address" value={email}></input>
                <button className="buttonEmail" >Get Notified</button>
            </form>
        </div>
    )
}
