import React from 'react'
import Cookie from 'js-cookie'
import { Button } from '@mui/material'
import { Navigate } from 'react-router-dom'
export default function AfterLogin() {
    const [username, setUsername] = React.useState("")
    const [logout, setlogout] = React.useState(false)
    React.useEffect(function(){
        var usr=Cookie.get("username");
        if(!usr){
          setlogout(true)
        }
        else
        setUsername(usr)
        
    },[])
    function logOut(){
      Cookie.remove("username")
      setlogout(true)
    }
  return (
    <div>
        {logout?<Navigate to="/" replace />:<></>}
        <h1>hello {username}</h1>
        <Button disableElevation variant="contained" onClick={logOut}>Logout</Button>
        </div>
  )
}
