import React, { useState } from "react"
export const Register = (props) =>{
  const[Username,setUsername] = useState('');
  const[email,setEmail] = useState('');
  const[phonenumber,setPhonenumber] = useState('');
  const[password,setPassword] = useState('');
  const[confirmpassword,setConfirmpassword] = useState('')

  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log(email);
  }
  return( 
   <form className="register-form" onSubmit={handleSubmit}>
      <label htmlFor="Username">User name </label>
      <input value={Username} name="Username" placeholder="User name" id="Username" />
      <br/>
      <label htmlFor="email">Email </label>
      <input value={email} onchange={(e) => setEmail(e.target.value)} type="email" placeholder="@gmail.com" id="email" name="email" />
      <br />
      <label htmlFor="phonenumber">Phone number </label>
      <input value={phonenumber} onchange={(e) => setPhonenumber(e.target.value)} type="phonenumber" placeholder="1234567890" id="phonenumber" name="phonenumber" />
      <br/>
      <label htmlFor="password">Password </label>
      <input value={password} onchange={(e) => setPassword(e.target.value)} type="password" placeholder="*****" id="password" name="password" />
      <br/>
      <label htmlFor="confirmpassword">Confirm Password </label>
      <input value={confirmpassword} onchange={(e) => setConfirmpassword(e.target.value)} type="confirmpassword" placeholder="*****" id="confirmpassword" name="confirmpassword" /><br />
      <br/>
      <button type="submit">Submit</button>
      <br/>
      <button className ="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Sign in </button>
      </form>
  )
}