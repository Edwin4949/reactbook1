import {useState,useEffect} from "react";
import axios from "axios";
export const Register = (props) =>
{
  const initialValues={Username:"",Email:"",PhoneNumber:"",Password:"",ConfirmPassword:""};
  const [formValues,setFormValues] =useState(initialValues);
  const [formErrors,setFormErrors] =useState({});
  const [isSubmit,setIsSubmit]= useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const {name,value} = e.target;
    setFormValues({...formValues, [name]:value});
    console.log(formValues);
      };
    
     const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
     };
   
  useEffect( () => {
    console.log(formErrors);
    if(Object.keys(formErrors).length ===0 && isSubmit){
      console.log(formValues); 
    }

  },[formErrors]);

    const validate = (values) => {
    const errors={};
    //const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.Username)
    {
      errors.Username="username is required";
    }
    if (!values.Email)
    {
      errors.Email="email is required";
    }
    if (!values.PhoneNumber)
    {
      errors.PhoneNumber="Phone number is required";
    }
    if (!values.Password)
    {
      errors.Password="password is required";
    }else if(values.Password.length <4)
    {
      errors.password="password must be more than 4 charactes";
    }else if(values.Password.length >10)
    {
      errors.Password="password must be more than 10 charactes";
    }
    if (!values.ConfirmPassword)
    {
      errors.ConfirmPassword="password is required";
    }
    
    return errors;
  };
  const handleApi = () => {
    console.log(formValues);
    axios.post("https://localhost:7158/api/User/Register",formValues)
    .then(result=> {
      console.log(result)
    })
    .catch(error => {
      console.log(error)
    })
  }
  return( 
    <>
     { Object.keys(formErrors).length ===0 && isSubmit ?(
      <section>
      <h1>You are now a new member</h1>
      <br/>
      <p>
      <a href = "./src/components/Login">Sign in</a>
      </p>
      </section>
    ):(
        <div className="auth-form-container">
        <div className="heading"><label>Register</label></div>
        
       
       <form className="register-form" onSubmit={handleSubmit} >
          
          <label htmlFor="Username">User name </label>
          <input  type ="text" name="Username"  id="Username" value={formValues.Username} onChange={handleChange} />
          <br/>
          <p> {formErrors.Username}</p>
          <label htmlFor="Email">Email </label>
          <input   type="text"  id="Email" name="Email" value={formValues.Email} onChange={handleChange} />
          <br />
          <p> {formErrors.Email}</p>
          <label htmlFor="PhoneNumber">Phone number </label>
          <input  type="text"  id="PhoneNumber" name="PhoneNumber" value={formValues.PhoneNumber} onChange={handleChange}/>
          <br/>
          <p> {formErrors.PhoneNumber}</p>
          <label htmlFor="Password">Password </label>
          <input type="text"  id="Password" name="Password" value={formValues.Password} onChange={handleChange} />
          <br/>
          <p> {formErrors.Password}</p>
          <label htmlFor="ConfirmPassword">Confirm Password </label>
          <input  type="text"  id="ConfirmPassword" name="ConfirmPassword" value={formValues.ConfirmPassword} onChange={handleChange} /><br />
          <br/>
          <p> {formErrors.ConfirmPassword}</p>
          <div className="center">
          <button className ="login-btn"  type="submit" onClick={handleApi} >Submit</button></div>
          <br/>
          <button className ="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Sign in </button>
        </form>
        </div>
      )}
      </>
    )
}
export default Register;
