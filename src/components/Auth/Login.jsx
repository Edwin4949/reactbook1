// import { useState } from "react"
// import axios from "axios";
// import { login_url } from "../../Constants";

//  export const Login = (props) =>{
  
//   const[username,setUserName] = useState('');
//   const[password,setPassword] = useState('');

//   const handleUsername=(e) =>{
//   setUserName(e.target.value)
// }
//   const handlePassword = (e) =>{
//   setPassword(e.target.value)
// } 
//   const handleApi=() =>{
//   console.log({username,password})
//   axios.post(login_url,{
//     Username: username,
//     Password: password
//   })
//   .then(result =>{
//     console.log(result.data)
//     alert('success')
//     localStorage.setItem('token',result.data.token)
//   })
//   .catch(error=>{
//     alert('service error')
//     console.log(error)
//   })
// }
//   // const handleSubmit =(e) =>{
//   //   e.preventDefault();
//   //   console.log(email);
//   // }
  
//   return( 
//     <div className="auth-form-container">
//     <form className= "login-form" onSubmit={handleApi}>
//       <div className="heading"><label>Sign in</label></div>
//       <label htmlFor="username">User name </label>
//       <input  onChange={(e) => handleUsername(e.target.value)} type="text" id="username" name="username" />
//       <br />
//       <label htmlFor="password">Password</label>
//       <input  onChange={(e) => handlePassword(e.target.value)} type="text"  id="password" name="password" /><br />
//       <div className="center"><button className ="login-btn" onClick={() => handleApi()} type="submit">Log In</button></div>
//       <br/>
//       <button className ="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
//     </form>
//     </div>
//   )
// } 


import axios from "axios";
import { useEffect, useState ,React} from "react";



export const Login = (props) =>
{

  const initialValues={username:"", password:""};
  const[formValues,setFormValues]=useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const handleChange=(e) => {
    
    const{name,value} =e.target;
    setFormValues({...formValues, [name]:value});
    console.log(formValues);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/i;
    if (!values.EmailId) {
      errors.EmailId = "Email is required!";
    } else if (!regex.test(values.EmailId)) {
      errors.EmailId = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    }

    return errors;
  }

  // const handleApi=(e)=> {
  //   e.preventDefault();
  // };
  const handleApi = () =>{
    console.log({formValues});
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }
  useEffect{
    ()=>{
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        axios({
          url: "",
          method: "POST",
          data: { EmailId: formValues.EmailId, password: formValues.password },
        })
        .then((result) => {
          localStorage.setItem("token", result.data.token);
          TokenCheck();
          history.push("/Auth/Register");
        })
        .catch((error) => {
          alert("Enter the valid Email or Password");
          console.log(error);
        });
    }
  },
  [formErrors]
  };
  // const[username, setUserName]= useState('')
  // const[password,setPassword]=useState('')

  // const handleUsername=(e) =>{
  //   setUserName(e.target.value)
  // }

  // const handlePassword=(e) => {
  //   setPassword(e.target.value)
  // }

  // const handleApi=() => {
  //   console.log({username,password})
  //   axios.post('https://localhost:7158/api/User/Login',{
  //     username:username,
  //     password:password
  //   })
  //   .then(result => {
  //     console.log(result.data)
  //     alert('success')
  //     localStorage.setItem('token',result.data.token)
  //    // navigate('/register')

  //   })
  //   .catch(error => {
  //     alert('service error')
  //   })

  // }

return(
    <div className="auth-form-container">
      <div className="heading"><label>Sign in</label></div>
      {/* <pre>{JSON.stringify(formValues, undefined,2)} </pre> */}
    <form className= "login-form"  onSubmit={handleApi}>
      <label htmlFor="username">User name </label>
      <input onChange={handleChange} type="text" id="username" name="username"  value={ formValues.username}/>
      <br />
      <label htmlFor="password">Password</label>
      <input  onChange={handleChange} type="text"  id="password" name="password" value={ formValues.password}/><br />
      <div className="center"><button className ="login-btn" type="submit">Log In</button></div>
      <br/>
      <button className ="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
    </form>
    </div>
    )
  }
  