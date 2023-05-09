
import React, {useState,useEffect} from 'react';
import Sidebar from './Sidebar.js';
import '../App.css';
import iletisim from '../videolar/iletisim.mp4';
import { useNavigate } from 'react-router-dom';


function Communication(){

  const navigate = useNavigate();
  useEffect(() => {
      var isLogin = sessionStorage.getItem('isLogin');
      if (isLogin !== 'true') {
          navigate('/');
      }
  }, []);


    return(
        <>
        <video className='videoTag' id="background-video" autoPlay loop muted  poster="">
    <source src={iletisim} type='video/mp4' />
</video>


        <div className="row" id='communicate_page' >
            <div className="col-2">
                <Sidebar 
             iletisim_active="active" 
             iletisim_disable="disabled" 
             gor_to="/portal/BasvuruGoruntule"
             
             form_to="/portal/BasvuruFormu"/>
             
            </div>
            <h3 class="iletisim_yazi" id="iletisim_yazi" name="iletisim_yazi"> Sorularınız için bizimle iletişime geçin</h3>
            
            <div id='communication_page' >


            <div class="accordion" id="accordionPanelsStayOpenExample">
            
            <h4> Sıkça Sorulan Sorular</h4>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                             <strong> Erasmus'a başvurmak için GNO/YNO sınırı var mı?</strong>
                            </button>
                          </h2>
                          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                              Evet, GNO'nuzun en az 2.5 olması gerekmektedir.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                             <strong> İngilizce seviye tespit sınavı tarihi nedir?</strong>
                            </button>
                          </h2>
                          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body">
                              12 Nisan 2023
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                              <strong> Kabul edilirsem ne zaman gideceğim?</strong>
                            </button>
                          </h2>
                          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div class="accordion-body">
                             Bir sonraki eğitim dönemi için işleme alınacaktır.
                            </div>
                          </div>
                        </div>
                      </div>
            

<div id='map'>
<iframe id="map" name="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12040.05580337866!2d28.95021913663198!3d41.02495072738161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab989bd884fa3%3A0xd72d1865a1c4cccd!2zVC5DLiDEsHN0YW5idWwgQsO8ecO8a8WfZWhpciBCZWxlZGl5ZXNpIEJhxZ9rYW5sxLHEn8Sx!5e0!3m2!1str!2str!4v1677443622945!5m2!1str!2str"
          width="350" height="270" style={{border:"0", marginLeft:"30%", allowfullscreen:"", loading:"lazy",
          referrerpolicy:"no-referrer-when-downgrade"}}></iframe>

</div>
           


            
            

       
            </div>
        </div>


        <div id='footer' >
  





        <div class="container ">
  <footer class="d-flex flex-wrap justify-content-between align-items-center ">
    <p style={{marginLeft:"8%"}}>&copy; 2023 Erasmus, Tr</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">

    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="/portal" class="nav-link px-2 text-body-secondary">Ana sayfa</a></li>
      <li class="nav-item"><a href="/sartlar" class="nav-link px-2 text-body-secondary">Şartlar</a></li>
      <li class="nav-item"><a href="/portal/Communication" class="nav-link px-2 text-body-secondary">İletişim</a></li>
      <li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Çıkış</a></li>

    </ul>
  </footer>
</div>



</div>
        
<div id='footer' >
  





  <div class="container ">
<footer class="d-flex flex-wrap justify-content-between align-items-center ">
<p style={{marginLeft:"8%"}}>&copy; 2023 Erasmus, Tr</p>

<a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">

</a>

<ul class="nav col-md-4 justify-content-end">
<li class="nav-item"><a href="/portal" class="nav-link px-2 text-body-secondary">Ana sayfa</a></li>
<li class="nav-item"><a href="/sartlar" class="nav-link px-2 text-body-secondary">Şartlar</a></li>
<li class="nav-item"><a href="/portal/Communication" class="nav-link px-2 text-body-secondary">İletişim</a></li>
<li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Çıkış</a></li>

</ul>
</footer>
</div>



</div>
        </>
    );

    

    
}

export default Communication;