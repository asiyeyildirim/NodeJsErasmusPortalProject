import React from 'react'
import { useState } from 'react';
import{Link,Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';



import './App.css'
import dunya from './videolar/dunya.mp4';
import {FaUserAlt} from 'react-icons/fa';




export default function Login() {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const [success, setSuccess] = useState('');
   const navigate = useNavigate();

   const [isLogin, setIsLogin] = useState(false);

   const handleSubmit= async (e)=>{
    e.preventDefault();
 
    try {
        const response = await axios.post('http://localhost:3001/', 
        {
            email,
            password
    
        });
        if(response.status===200){
           if(response.data.message === '1'){
            sessionStorage.setItem("id", response.data.id)
            setSuccess('Giris basarılı. Yönlendiriliyorsunuz...')
          setEmail('');
          setPassword('');
          setIsLogin (true);
          sessionStorage.setItem('isLogin', true);
          setError();
          setTimeout(()=>{
            navigate('portal');
          }, 2000)
         
        }else{
          setError('Kullanici adi veya sifre hatali.');
        }
    }
  
      } catch (err) {
        setError('Kullanici adı ve sifre kontrolünde hata olustu.')
      }
    }
    return (
      <>

<video className='videoTag' id="background-video" autoPlay loop muted  poster="">
  <source src={dunya} type='video/mp4' />
</video>

<p className="h3 mb-3 fw-normal" id='login_yazi'> <FaUserAlt/> Erasmus Portal Giriş</p>

      <div class="row justify-content-center" id='login'>
  

          <form onSubmit={handleSubmit}  id='signin_form'>

              <div>
              <label for="floatingInput">Email adresi</label>
              <input type="email"   className="form-control" id="email"
                      placeholder="Mail adresiniz" 
                      value={email} 
                      onChange= {(e) => setEmail(e.target.value)}
                      required />

              </div>
              <div>
              <label for="floatingInput">Şifre</label>
              <input type="password"  className="form-control" id="sifre"
                      placeholder="Şifre"
                      value={password}
                      onChange= {(e) => setPassword(e.target.value)}
                      required />
                      </div>
              <button type="submit" style={{marginTop:"3%", paddingLeft:"3%", marginLeft:"36%" ,backgroundColor:"pink" , fontWeight:"bold"}}>Giriş Yap</button>
          </form>

          {error && <p style={{color:'red'}} id='error-message'> {error} </p> }


          <p id='login_navigate'>
              Hesabınız yok mu? <Link to="/kayit">Kayıt Ol!</Link>
          </p>
     

          
      </div>
      </>
  );
}


