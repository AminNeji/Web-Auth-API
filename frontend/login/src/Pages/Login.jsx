import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
    const navigate = useNavigate();  
          const HandleClick = async ()=>{  
          const response = await fetch(`http://localhost:5000/user/login/${username}/${password}`)
          if(response.ok){
            navigate("/welcome");
          }
        }

  return (
    <>
    <form action="">
      <h1>Login Page </h1><br />
        <label htmlFor="username">username:</label>
        <input type="text" name="username" id="username" onChange={(e)=> setusername(e.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" autoComplete="password" onChange={(e)=> setpassword(e.target.value)}/>
        <button type="button" onClick={()=>HandleClick()}>Login</button>
    </form>
    <br />
    <button type="button" onClick={()=>navigate("/signup")}>Signup</button>
    </>
  )
}

export default Login
