import React, {useState} from 'react'

export default function Email() {

    const[email,setEmail] = useState('');
    
    // const sheetsAPI = 'https://sheetsu.com/apis/v1.0bu/0d1354db0628'

    const emailSetter = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value);

    }

    const handleSubmit= (event) => {
        event.preventDefault();
    
        // fetch(sheetsAPI, {
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   method: "POST",
        //   body: JSON.stringify(email)
        //  }).then( (response) => {
        //     return response.json()
        //   }).then( (json) => {
        //     console.log(json);
        //   });
      }

    return (
        <div className="formContainer">
            <form className="form" onSubmit={handleSubmit}>

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
