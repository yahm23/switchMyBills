import React, {useState} from 'react'
import Loading from './loading';


export default function Email(props) {

    const[email,setEmail] = useState('');
    // const[success, setSuccess] = useState(false)
    // const[processing, props.setProcessing] = useState(false)
    

    const emailSetter = (event) => {
        setEmail(event.target.value);
    }


    const postEmail = (req,res) => {
        return window
        .fetch(`https://switch-my-bills.herokuapp.com`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({"email":req})
        })
        .then(res => {
          if (res.status === 200) {
            return true;
          } else {
            return false;
          }
        })
    }

    const handleSubmit= (event) => {
        event.preventDefault();

        postEmail(email)
        .then(data => {
            props.setProcessing(true)
            if(data){
                setTimeout(() => {
                    props.setProcessing(false)
                    props.setSuccess(true)
                    
                  }, 500);
            }
            else{
                props.setSuccess(false)
            }
        
        })

    }

    return (

        <div className="formContainer">

                <div>
                
                        <div>
                            <form className="form" onSubmit={handleSubmit}>
                            <input 
                            type="email"
                            required
                            onChange={emailSetter}
                            className="inputEmail"
                            placeholder="Email Address">
                            
                            </input>
                            <button className="buttonEmail" >Get Notified</button>
                            </form>
                        </div>
                        
                    
                </div>


            
            </div>
    )
}
