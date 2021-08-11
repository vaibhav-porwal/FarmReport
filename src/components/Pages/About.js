import React,{useEffect,useState} from 'react';
import {useHistory } from "react-router-dom"
import axios from "axios"
const authToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9uhiuhdsbcsj";
const About = () => {
  const history=useHistory();
  const [name, setName] = useState();
  const [error, setError] = useState(true);
//const [user, setUser] = useState(initialState)
const Aboutcall =async()=>{
//e.preventDefault();
const res=await fetch("/about",{
 
  headers:{
    "Content-Type":"application/json"
  },
  credentials:"include",
});
const content=await res.json();
console.log(content);
if(!content)
 {
   history.push('/login');
  
 }
 else
setName(content.name);

}

useEffect(() => {
  Aboutcall();
}, [])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
    <h1>  {"hi"} </h1>
    </div>
  );
};

export default About;