import React from 'react'
import './User.css'
const User = () => {
  return (
    <div>
      <div class="container">
      <i sx={{style:"--clr: #00ff0a"}} ></i>
      <i sx={{ style:"--clr: #ff0057"}}></i>
      <i sx={{style:"--clr: #fffd44"}} ></i>
      <div class="login">
        <div class="input__box">
          <input type="text" placeholder="Enter instagram username" />
        </div>
            <div class="input__box">
          <input type="text" placeholder="Enter facebook username" />
              </div>
            <div class="input__box">
          <input type="text" placeholder="Add your youtube profile URL" />
        </div>
        
        <div class="input__box">
          <input type="password" placeholder="Enter twitter username" />
        </div>
      
      
      </div>
    </div>



    </div>
  )
}

export default User
