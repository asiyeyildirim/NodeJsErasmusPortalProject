

import "../App.css";
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Sidebar from "./Sidebar.js";


function Portal() {

  const navigate = useNavigate();
  useEffect(() => {
      var isLogin = sessionStorage.getItem('isLogin');
      if (isLogin !== 'true') {
          navigate('/');
      }
  }, []);


    return (

    <> 




        <div className="row">
            <div className="col-4">
                <Sidebar 
                    gor_to="BasvuruGoruntule"
                    form_to="BasvuruFormu"
                    iletisim_to="Communication"
                    />
                    
            </div>
            <div>

               
         <div class="slider" >
    <div class="slide" ></div>
    <div class="slide"></div>
    <div class="slide"></div>

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
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Şartlar</a></li>
      <li class="nav-item"><a href="/portal/Communication" class="nav-link px-2 text-body-secondary">İletişim</a></li>
      <li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Çıkış</a></li>

    </ul>
  </footer>
</div>



</div>

    </> 

    );
}

export default Portal;