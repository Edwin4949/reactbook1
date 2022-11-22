import React, { useState } from "react"
export const Login = (props) =>{
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log(email);
  }
  return( 
    <div className="auth-form-container">
    <form className= "login-form" onSubmit={handleSubmit}>
      <label for="email">Email/Phone number </label>
      <input value={email} onchange={(e) => setEmail(e.target.value)} type="email" placeholder="" id="email" name="email" />
      <br />
      <label for="password">Password</label>
      <input value={password} onchange={(e) => setPassword(e.target.value)} type="password" placeholder="*****" id="password" name="password" /><br />
      <button type="submit">Log In</button>
      <br/>
      <button className ="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
    </form>
    </div>
  )
}