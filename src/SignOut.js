import React, {useState}  from 'react'
import axios from 'axios';

async function SignOut(navigate) {
    const id = sessionStorage.getItem("id");
  
try{
    const response = await axios.post('http://localhost:3001/',
    {
       id
    });
    if(response.status === 200){
        navigate('/');
      
    }else{
        alert("Şuan cikisinizi yapamıyoruz")
    }

}catch(err){
    console.error(err);

}
}
export default SignOut;
