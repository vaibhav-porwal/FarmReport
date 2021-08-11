import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import styled from 'styled-components';
import {useHistory } from "react-router-dom"

 const NavBtnLink = styled(Link)`
  border-radius: 4px;
 
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;

  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

const Login=()=>{
  const history=useHistory();
   const [email, setEmail] = useState('')
   const [Password, setPassword] = useState('')
    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 10px',width:"30%",align:"center"}


  const handlelogin = async(e)=>{
   e.preventDefault();
   const res= await fetch("/signin",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    credentials:"include",
    
  body:JSON.stringify({
   email:email,Password:Password
  })
  
  });
  //console.log((await res).json);
  const data =(await res).json();
  console.log(data);
  if((await res).status ===201) 
  {
    console.log("sucess");
        
        history.push("/about"); 
  }
      else{
       console.log((await res).status);
       console.log("invaid");
      }
  }
 
  
    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter username' fullWidth required/>
                <TextField label='Password' value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password' type='password' fullWidth required/>
                  
                  <Button type='submit' color='primary' onClick={handlelogin} variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                 <NavBtnLink href='/sign-up'>Register</NavBtnLink>
          
            </Paper>
        </Grid>
    )
}

export default Login