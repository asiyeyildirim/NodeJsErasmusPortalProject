import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaUserPlus} from 'react-icons/fa';
import axios from 'axios';
import './App.css'
import dunya from './videolar/dunya.mp4';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePass, setRePass] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password != rePass) {
      setError("Şifreler Eşleşmiyor");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/kayit', {
          email,
          password
  
      });
      if(response.status===200){
        setSuccess('Kayit Başarili')
        setEmail('');
        setPassword(''); 
        setRePass('');
        setError();
      }else{
        setError('Kayit oluşturulurken bir hata oluştu.');
      }

    } catch (err) {
      setError('Kayit oluşturulurken bir hata oluştu 2')
    }
  }

  return (

    <>
    
    <video className='videoTag' id="background-video" autoPlay loop muted  poster="">
<source src={dunya} type='video/mp4' />
</video>

    
    <div id='register' >

  

            <p className="h3 mb-3 fw-normal" id='register_yazi'> <FaUserPlus/>  Hesap Oluşturma</p>

        <form onSubmit={handleSubmit} id='signup_form'>
     

            <div>
                
            <label for="floatingInput">Email adresi</label>
            <input type="email"  className="form-control" id="email"
                    placeholder="Mail adresiniz" 
                    value={email} 
                    onChange= {(e) => setEmail(e.target.value)}
                    required />
                          

            </div>

            <div>
            <label for="floatingInput">Şifre</label>
            <input type="password" className="form-control" id="sifre"
                    placeholder="Şifre"
                    value={password}
                    
                    onChange= {(e) => setPassword(e.target.value)}
                    minLength = "6"
                    required />

            </div>

     <div>
     <label for="floatingInput"> Tekrar Şifre</label>
     <input type="password"
     
                    placeholder="Şifre Tekrar"  className="form-control" id="reSifre" 
                    value={rePass}
                    onChange= {(e) => setRePass(e.target.value)}
                    minLength = "6"
                    required />

     </div>
  
   
        <button type="submit" style={{marginTop:"3%", paddingLeft:"3%", marginLeft:"36%", backgroundColor:"darkorange"}}>Kayıt Ol</button>
        </form>
        {error && <p style={{color: 'red'}} id="register-error"> {error} </p>}
        {success && <p style={{color: 'green'}} id="register-success"> {success} </p>}
        <p id='register_navigate' >
            Hesabınız var mı? <Link to="/">Giriş Yap</Link>
        </p>
    </div>
    
    </>

);
}
