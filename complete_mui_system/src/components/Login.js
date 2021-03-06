import logo from './Logo (1).svg'
import { Button, Link } from '@mui/material';
import TextField from '@mui/material/TextField';
import './Login.css'
import { useState } from 'react';
import { Navigate} from 'react-router-dom'
import Cookie from 'js-cookie'
import passwordIcon from './Password (1).svg'
import userIcon from './User ID.svg'
import organizationIcon from './Organization (1).svg'
import styled from '@emotion/styled';

const sytledButton = styled(Button)({
    '&:hover':{
        backgroundColor: "#041836"
    }
})

export default function Login() {
    const [organization,setOrganization] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [redirect,setRedirect] = useState(false)
    function onInputOrganization(e){
        setOrganization(e.target.value)
    }
    function onInputUsername(e){
        setUsername(e.target.value)
    }
    function onInputPassword(e){
        setPassword(e.target.value)
    }
    function onSubmit(e){
        e.preventDefault()

        console.log(organization,username,password);
        Cookie.set("username",username)
        setRedirect(true)
    }
  return (
    <form className="login-container" onSubmit={onSubmit}>
        {redirect?<Navigate to="/loged-in" />:<></>}
        <img className='logo' src={logo} alt="deltafour" />
        <div>
            <img src={organizationIcon} alt="organization"/>
            <TextField 
            id="standard-basic"
            label="organization"
            variant="standard"
            onInput={onInputOrganization}
            required
            sx={{
                color:"color.primary",
                width:"300px"
            }}
            />
        </div>
        <div>
            <img src={userIcon} alt="username"/>
            <TextField 
            id="standard-basic"
            label="username"
            variant="standard"
            onInput={onInputUsername}
            required
            sx={{
                color:"color.primary",
                width:"300px"
            }}
            />
        </div>
        
        <div>
            <img src={passwordIcon} alt="password" />
            <TextField 
            id="standard-basic"
            label="password"
            variant="standard"
            type="password"
            onInput={onInputPassword}
            required
            color='primary'
            sx={{
                color:"color.primary",
                width:"300px"
            }}
            />
        </div>
        <Button sx={{
            backgroundColor: "#041836",
            fontWeight:"bold",
            '&:hover':{
                backgroundColor: "#041836"
            }
        }} type="submit" disableElevation variant="contained" inputProps={{
            className:"btn"
        }}>Login</Button>
        <Button  href="/register">Register</Button>
        <Link href="/forgot-password">forgot password?</Link>
    </form>
  )
}
