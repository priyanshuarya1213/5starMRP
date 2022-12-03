import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EmailVerification from './component/auth/EmailVerification';
import ForgetPassword from './component/auth/ForgetPassword';
import Signin from './component/auth/Signin';
import Signup from './component/auth/Signup';
import Home from './component/Home';
import Navbar from './component/user/Navbar';
import ResetPassword from './component/auth/ResetPassword';
import NotFound from './component/NotFound';

export default function App() {
  return(
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/auth/signin' element={<Signin/>} />
        <Route path='/auth/signup' element={<Signup/>} />
        <Route path='/auth/email-Verification' element={<EmailVerification/>} />
        <Route path='/auth/forget-Password' element={<ForgetPassword/>} />
        <Route path='/auth/reset-password' element={<ResetPassword/>} />
        <Route path='*' element={<NotFound/>} />
        
      </Routes>
    </>
  );   
}