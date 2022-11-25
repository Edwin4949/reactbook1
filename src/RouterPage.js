import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Login } from './components/Auth/Login';

import { Register } from './components/Auth/Register';

export default function RouterPage(){
  return(
    <Router>
      <Routes>
        <Route path='/' element ={< Login />}/>
        <Route path='/' element ={<Register />}/> 
        
      </Routes>
    </Router>
  )
}