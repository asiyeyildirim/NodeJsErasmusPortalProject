import React, {useState,useEffect} from 'react';
import "../App.css";
import { useNavigate } from 'react-router-dom';

import Sidebar from "./Sidebar.js";

function Sartlar(){

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
                    gor_to="/portal/basvuruGoruntule"
                    form_to="/portal/BasvuruFormu"
                    iletisim_to="portal/Communication"
                    />
                    
            </div>


            <ul class="list-group" id='sartlar'>
  <li class="list-group-item active color">Erasmus Programı Başvuru Şartları</li>
  <li class="list-group-item">Lisans öğrencileri için: 2. veya 3. sınıfa geçmiş olmak,  
  <br></br> Ön lisans öğrencileri için 2. sınıfa geçmiş olmak gerekmektedir.</li>
  <li class="list-group-item">Öğrencinin İngilizce yeterlilik sınavından 70 üzeri puan almış olması gerekmektedir.</li>
  <li class="list-group-item">Öğrencinin yapılacak olan sözlü mülakattan 85 üzeri puan alması gerekmektedir.</li>
 
</ul>
<p id='basvuru_sartlar_yazi'> Bütün şartların sağlanmış olması durumunda sizinle iletişime geçilecektir.
<br></br>  Başarılar dileriz...
</p>
            
      

               


                      


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

export default Sartlar;