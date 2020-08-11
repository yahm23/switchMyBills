import React, {useState} from 'react'

export default function Email(props) {

    const[email,setEmail] = useState('');
    const[success, setSuccess] = useState(false)
    
    // const sheetsAPI = 'https://sheetsu.com/apis/v1.0bu/0d1354db0628'

    const emailSetter = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value);

    }

    const handleSubmit= (event) => {
        event.preventDefault();
    
        props.setSuccess(true);
      }

    return (

        <div className="formContainer">
            {success?
                <div>
                    <h1 className="successText"> Thanks for your interest!</h1>
                    <h1 className="successText"> We'll get back to you shortly!</h1>
                </div>
                :
                <form className="form" onSubmit={handleSubmit}>
                    <input 
                    type="email"
                    // required
                    onChange={emailSetter}
                    className="inputEmail"
                    placeholder="Email Address">
                    
                    </input>
                    <button className="buttonEmail" >Get Notified</button>
                </form>

            }
            </div>
    )
}
