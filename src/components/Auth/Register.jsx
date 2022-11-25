import React, { useEffect, useState } from "react"
import axios, { Axios } from "axios";

export const Register = (props) =>{
  const[Username,setUsername] = useState('');
  const[email,setEmail] = useState('');
  const[phonenumber,setPhonenumber] = useState('');
  const[password,setPassword] = useState('');
  const[confirmpassword,setConfirmpassword] = useState('')

  

  const handleEmailChange = (value) => {
    setUsername(value);
  }
  const handlePhoneNumberChange = (value) => {
    setPhonenumber(value);
  }
  const handlePasswordChange = (value) => {
    setConfirmpassword(value);
  }
  const handleConfirmPasswordChange = (value) => {
    setConfirmpassword(value);
  }

  // const handleApi = () => {
  //   const data ={
  //     Username :Username,
  //     Email :email,
  //     PhoneNumber :phonenumber,
  //     Password :password,
  //     ConfirmPassword :confirmpassword
  //   };
  

  // const handleApi =() => {
  //   console.log({formValues});
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  // }
  // useEffect(
  //   () => {
  //     if(Object.keys(formErrors).length === 0 && isSubmit){
  //       axios( {
  //         url: "register_url",
  //         method :"POST",
  //         data:{Username : formValues.Username,Email :formValues.email,PhoneNumber :formValues.phonenumber,Password :formValues.password, ConfirmPassword : formValues.confirmpassword}
  //       })
  //       .then((result)=>{
  //         history.pushState("/user/Login");
  //       })
  //     }
  //   }
  // )

  return( 
   <form className="register-form" onSubmit={handlePasswordChange}>
      <div className="heading"><label>Register</label></div>
      <label htmlFor="Username">User name </label>
      <input  type ="text" name="Username"  id="Username" />
      <br/>
      <label htmlFor="email">Email </label>
      <input  onChange={(e) => handleEmailChange(e.target.value)} type="email"  id="email" name="email" />
      <br />
      <label htmlFor="phonenumber">Phone number </label>
      <input  onChange={(e) => handlePhoneNumberChange(e.target.value)} type="text"  id="phonenumber" name="phonenumber" />
      <br/>
      <label htmlFor="password">Password </label>
      <input  onChange={(e) => handlePasswordChange(e.target.value)} type="text"  id="password" name="password" />
      <br/>
      <label htmlFor="confirmpassword">Confirm Password </label>
      <input  onChange={(e) => handleConfirmPasswordChange(e.target.value)} type="text"  id="confirmpassword" name="confirmpassword" /><br />
      <br/>
      <div className="center">
      <button className ="login-btn" onClick={() => handleConfirmPasswordChange()} type="submit">Submit</button></div>
      <br/>
      <button className ="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Sign in </button>
    </form>
  )
}
