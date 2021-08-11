import React, { useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import {useHistory } from "react-router-dom"


 function Signup() {
   const history=useHistory();
const [user, setUser] = useState({
  name:"",email:"",Password:""
});
let name,value;

   const handleinput =(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
   }
   const POstdata= async(e)=>{
     e.preventDefault();
     const {name,email,Password}=user;
    //  console.log(user);
     const res=fetch("/register",{
       method:"POST",
       headers:{
"Content-Type":"application/json"
       },
       
     body:JSON.stringify({
      name:name,email:email,Password:Password
     })
     
     });
    console.log((await res).json);
     const data =(await res).json();
     if((await res).status ===201) 
     {
       console.log("sucess");
           
           history.push("/login"); 
     }
         else{
          console.log((await res).status);
          console.log("invaid");
         }
     }
  return (
    <BoxContainer>
      <FormContainer method="POST">
        <Input type="text"    name="name"  value={user.name}  onChange={handleinput} placeholder="Full Name" />
        <Input type="email"   name="email"  value={user.email}  onChange={handleinput} placeholder="Email" />
        <Input type="password" name="Password" value={user.Password}  onChange={handleinput} placeholder="Password" />
      </FormContainer>
     
      <SubmitButton type="submit" onClick={POstdata}>Signup</SubmitButton>
     
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="/login" >
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
export default Signup;