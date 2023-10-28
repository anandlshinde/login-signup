import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png' 


export const LoginSignup = () => {

    const [action,setAction]=useState("Sign Up");

  return (
    <div className='container'>
        <div className='header'>
           <div className={action==="Sign Up" ? "left activeTab":"left"}
           onClick={()=>setAction("Sign Up")}
           >
           <div className='text'> Sign Up</div>
           </div>
            <div className={action==="Login"? "right activeTab":"right"}
            onClick={()=>setAction("Login")}
            >
            <div className='text'>Login</div></div>
        </div>
        
        <div className='inputs'>
            {action==="Login"? <div></div> :
            <div className='input'>
                <img src={user_icon} alt="" />
                <input placeholder='Name' type="text" />
                <span class="border"></span>
            </div>
            }
            
            <div className='input'>
                <img src={email_icon} alt="" />
                <input placeholder="Email Id" type="email" />
            </div>
            <div className='input'>
                <img src={password_icon} alt="" />
                <input placeholder='Passowrd' type="password" />
            </div>
        </div>
        {action==="Sign Up"?<div></div> : 
        <div className="forgot-password">Lost password? <span>Click Here!</span></div>
        }
        
        <div className="submit-container">
            {action==="Login"? 
            <div className="submit">Login</div>:""
            }
            {action==="Sign Up"? 
            <div className="submit" >Sign Up</div>:""
            }
        </div>
    </div>
  )
}
