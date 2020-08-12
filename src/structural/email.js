import React, {useState} from 'react'


export default function Email(props) {

    const[email,setEmail] = useState('');

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
      props.setProcessing(true)

        postEmail(email)
        .then(data => {
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
    )
}
