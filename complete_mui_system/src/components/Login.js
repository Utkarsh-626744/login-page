//import React from 'react'
import { Button, Link } from '@mui/material';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import './Login.css'
import { useState } from 'react';
import { Redirect } from 'react-router-dom'
export default function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [redirect,setRedirect] = useState(false)
    function onInputUsername(e){
        setUsername(e.target.value)
    }
    function onInputPassword(e){
        setPassword(e.target.value)
    }
    function onSubmit(e){
        e.preventDefault()
        console.log(username,password);
        setRedirect(true)
    }
  return (
    <form className="login-container" onSubmit={onSubmit}>
        {redirect?<Redirect to="/loged-in" />:<></>}
        <h1>Delta Four</h1>
        <div>
            <AccountCircle/>
            <TextField 
            id="standard-basic"
            label="username"
            variant="standard"
            onInput={onInputUsername}
            />
        </div>
        
        <div>
            <LockIcon/>
            <TextField 
            id="standard-basic"
            label="password"
            variant="standard"
            type="password"
            onInput={onInputPassword}
            />
        </div>
        <Button type="submit" disableElevation variant="contained">Login</Button>
        <Button sx={{
            color:"black",
            fontWeigth:"bold"
        }} href="/register">Register</Button>
        <Link href="/forgot-password">forgot password?</Link>
    </form>
  )
}
