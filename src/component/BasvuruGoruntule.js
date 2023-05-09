import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {AciklamaGoster} from '../functions/EngelAciklama.js'
import { useNavigate } from 'react-router-dom';

export default function BasvuruGoruntule() {


    const navigate = useNavigate();
    useEffect(() => {
        var isLogin = sessionStorage.getItem('isLogin');
        if (isLogin !== 'true') {
            navigate('/');
        }
    }, []);
  



  const [bilgi, setBilgi] = useState('');
  const [error, setError] = useState('');


  useEffect(()=>{
    const id = sessionStorage.getItem('id');
     const bilgiGetir = async () => {
    try {
      const response = await axios.post("http://localhost:3001/formGoster",
      {id}
      );
      if(response.status === 200){
        setBilgi(response.data);
      }
      
    } catch (error) {
      
      setError("Kullanici bilgileri gosterilemedi.")
    }
    
    }
bilgiGetir();

  },[])
  

//Form Güncelle

const formGuncelle = async () => {
    try {
      const response = await axios.put('http://localhost:3001/formGuncelle', bilgi);
      if (response.status === 200) {
        alert('Form bilgileri güncellendi.');
   
      }
    } catch (error) {
      setError('Form bilgileri güncellenemedi.');
    }
  };

 

  return(
    <div >
        <div className="col-4">
            <Sidebar 
                gor_active="active" 
                gor_disable="disabled" 
                form_to="/portal/BasvuruFormu"
                iletisim_to="/portal/Communication"
                
                />
        </div>
     
    
        <h3 class="app_yazi" id="app_yazi3" name="app_yazi3">  Başvuru Bilgileriniz</h3>



<hr />
        <form class="basvuru1" id="basvuru1" name="basvuru1" >


<div class="row" id="alan2" name="alan1">

<div class="col-md-4" id="name" name="ad" >
    <label for="validationServer01">Ad</label>
    <input type="text" class="form-control" id="validationServer01" placeholder="Ad" 
     value = {bilgi.ad ?? ""}
     onChange={(event) => setBilgi({ ...bilgi, ad: event.target.value })}
/>


    <div class="valid-feedback">

    </div>
</div>

<div class="col-md-4" id="soyad" name="soyad">
    <label for="validationServer02">Soyad</label>
    <input type="text" class="form-control" id="validationServer02"
       value={bilgi.soyad ?? ""} 
       onChange={(event) => setBilgi({ ...bilgi, soyad: event.target.value })}
   
    placeholder="Soyad" required />
    <div class="valid-feedback">

    </div>
</div>

<div class="col-md-4" id="DogumTarihi" name="DogumTarihi">
  <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
    <label for="datepicker">Doğum Tarihi</label>
    <input type="text"  name="date_selected" data-date-format="yyyy-mm-dd" class="form-control" 
       value={bilgi.dogumTarihi === '0000-00-00' ? '' : new Date(bilgi.dogumTarihi).toLocaleDateString('tr-TR')} 
       onChange={(event) => setBilgi({ ...bilgi, dogumTarihi: event.target.value })}
        style={{ width: "320px" }} />

  </div>
</div>




</div>

<div class="row" id="alan2" name="alan2">



<div class="col-md-4" id="form_eposta" name="form_eposta">
    <label for="validationServer05" >E-Posta</label>
    <input type="email" class="form-control" id="validationServer05"
    
    value={bilgi.eMail ?? ""} 
    onChange={(event) => setBilgi({ ...bilgi, eMail: event.target.value })}
    name="validationServer05_1"
    

  
    placeholder="E-posta" required />
    <div class="valid-feedback">

    </div>


</div>

<div class="col-md-4" id="form_tel" name="form_tel">
    <label for="validationServer05">Telefon</label>
    <input type="text" class="form-control" id="validationServer05"
          value={bilgi.telNo ?? ""} 
          onChange={(event) => setBilgi({ ...bilgi, telNo: event.target.value })}
    name="validationServer05_2" 
    

  
    placeholder="Telefon" required />
    <div class="invalid-feedback">

    </div>


</div>
<div class="col-md-4" id="drop_cinsiyet" name="cinsiyet" >


    <select id="ddlViewBy" name="ddlViewBy"
    
    value={bilgi.cinsiyet ?? ""} 
    onChange={(event) => setBilgi({ ...bilgi, cinsiyet: event.target.value })}

    
    style={{ zIndex: "10", width: "60%", marginTop: "28px", marginLeft: "10px", borderRadius: "5px", border: "groove 0.2em green", textalign: "center", fontSize: "16px" }}>
        <option value="1"  class="cinsiyet" id="cinsiyet" 
        
        
        
        >Cinsiyet</option>
        <option value="2" >K</option>
        <option value="3">E</option>

    </select>



</div>



</div>

<div class="row" id="alan2" name="alan2">


<div class="col-md-4" id="form_millyet1" name="form_millyet1">
    <label for="validationServer05">Milliyet 1</label>
    <input type="text" class="form-control" id="validationServer05" name="validationServer05_3" 
    
    value={bilgi.milliyet1 ?? ""} 
    onChange={(event) => setBilgi({ ...bilgi, milliyet1: event.target.value })}
    placeholder="milliyet 1"


    
    required />
    <div class="invalid-feedback">

    </div>
</div>

<div class="col-md-4" id="form_millyet2" name="form_millyet2">
    <label for="validationServer05">Milliyet 2</label>
    <input type="text" class="form-control" id="validationServer05" name="validationServer05_4"
          value={bilgi.milliyet2 ?? ""} 
          onChange={(event) => setBilgi({ ...bilgi, milliyet2: event.target.value })}
    placeholder="milliyet 2"
    
 
    required />
    <div class="invalid-feedback">

    </div>


</div>

<div class="col-md-4" id="pasaport" name="pasaport">
    <label for="validationServer05"> TC Pasaport No</label>
    <input type="text" class="form-control" id="validationServer05" name="validationServer05_5"
    
    value={bilgi.tcPasapportNo ?? ""} 
    onChange={(event) => setBilgi({ ...bilgi, tcPasapportNo: event.target.value })}
    placeholder="pasaport no"
    

 
    
    required />
    <div class="invalid-feedback">

    </div>
</div>


</div>

<br />

<div class="row" id="alan3" name="alan3">


   
<div class="col-md-4 ">
    <label for="engel">Engel Durumu:</label>
    <div>
    <select
  className="form-control"
  id="engel"
  value={bilgi.engelDurum}
  onChange={(event) => {
    setBilgi({ ...bilgi, engelDurum: event.target.value });
    if (event.target.value === "Yok") {
      document.getElementById("aciklamaDiv").style.display = "none";
      setBilgi({ ...bilgi, engelDurum: 0 });
    } else {
      document.getElementById("aciklamaDiv").style.display = "block";
    }
  }} 
>
  <option value="">Seçiniz...</option>
  <option value="0">Engeli Var</option>
  <option value="1">Engeli Yok</option>
</select>

    </div>
</div>
<div class="col-md-4" id="aciklamaDiv" style={{ display: bilgi.engelDurum === 0 ? "block" : "none" }}>
    <label for="aciklama">
        Açıklama <em style={{ fontSize: "9pt" }}> (Varsa engel durumunuzu açıklayınız) : </em>
    </label>
    <input id="icerik" type="text" value={bilgi.engelDurum_aciklama} class="form-control"
        onChange={(event) => setBilgi({ ...bilgi, engelDurum_aciklama: event.target.value })}
    
    />
</div>






</div>


<div class="row" id="alan3" name="alan3">


  
<div class="col-md-4" id="form_mezuniyet_bilgi" name="form_mezuniyet_bilgi" value={bilgi.mezuniyetdurum}
     onChange={(event) => setBilgi({ ...bilgi, mezuniyetdurum: event.target.value })}
>
    


<select id="ddlViewBy" name="ddlViewBy"

    value={bilgi.mezuniyetdurum}
    onChange={(event) => setBilgi({ ...bilgi, mezuniyetdurum: event.target.value })}


    style={{ zIndex: "10", width: "80%", height:"65%", borderRadius: "5px", border: "groove 0.2em green", textalign: "center", fontSize: "16px" ,marginTop:"7%" }}>
    <option value="1" selected="selected" class="mezuniyet" id="mezuniyet"



    >Mezuniyet durumu</option>
    <option value="2" >Mezun</option>
    <option value="3">Devam ediyor</option>

</select>

</div>


<div class="col-md-4" id="form_mezuniyet" name="form_mezuniyet" >
    <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
        <label for="validationServer05">Mezuniyet Tarihi</label>
        <input type="text" name="date_selected" data-date-format="dd.mm.yyyy" class="form-control"
        
        value={bilgi.mezuniyetTarih !== '0000-00-00' ? new Date(bilgi.mezuniyetTarih).toLocaleDateString('tr-TR') : ''} 
        onChange={(event) => {
            const formattedDate = event.target.value.split('.').reverse().join('-');
            setBilgi({ ...bilgi, mezuniyetTarih: formattedDate })
        }}
        id='datepicker' style={{ zindex: "20", width: "100%", height: "40px", borderRadius: "5px", border: "groove 0.1em green" }} />

    </div>
</div>


<div class="col-md-4" id="form_ortalama" name="form_ortalama">
    <label for="validationServer02">Ortalama</label>

    <input type="text"
     class="form-control" id="validationServer02" name="validationServer02_5"
    
    value={bilgi.ortalama} 
    onChange={(event) => setBilgi({ ...bilgi, ortalama: event.target.value })}
    placeholder="Ortalamanız" required />
    <div class="valid-feedback">

    </div>
</div>


</div>

<div class="row" id="alan4" name="alan4">

<div class="col-md-4" id="form_uni" name="form_uni">

    <label for="validationServer02">Üniversite</label>

    <input type="text" class="form-control" id="validationServer02" name="validationServer02_2" 
    
    value={bilgi.universite} 
    onChange={(event) => setBilgi({ ...bilgi, universite: event.target.value })}
    placeholder="Üniversite adını girin" required />
    <div class="valid-feedback">
    </div>

</div>


<div class="col-md-4" id="form_fakulte" name="form_fakulte">

    <label for="validationServer02">Fakülte</label>

    <input type="text" class="form-control" id="validationServer02" name="validationServer02_3"
    value={bilgi.fakulte} 
    onChange={(event) => setBilgi({ ...bilgi, fakulte: event.target.value })}
    placeholder="Fakülte" required />
    <div class="valid-feedback">
    </div>

</div>



<div class="col-md-4" id="form_bolum" name="form_bolum">
    <label for="validationServer02">Bölüm</label>

    <input type="text" class="form-control" id="validationServer02" name="validationServer02_4" 
    
    value={bilgi.bolum} 
    onChange={(event) => setBilgi({ ...bilgi, bolum: event.target.value })}
    placeholder="Bölümünüz" required />
    <div class="valid-feedback">

    </div>
</div>





</div>




<div class="row" id="alan5" name="alan5">


<div class="col-md-4" id="form_ulke" name="ulke">
    <label for="validationServer02">Ülke</label>

    <input type="text" class="form-control" 
    
    
    id="validationServer02" name="validationServer02_6"
    value={bilgi.ulke} 
    onChange={(event) => setBilgi({ ...bilgi, ulke: event.target.value })}
    placeholder="Ülke" required />
    <div class="valid-feedback">

    </div>
</div>



<div class="col-md-4" id="il_ilce" name="il-ilce" >
    <label for="validationServer02">İl</label>
    <input type='text' name="iller"
    
    value={bilgi.il} 
    onChange={(event) => setBilgi({ ...bilgi, il: event.target.value })}
    style={{ zindex: "20", backgroundColor: "#FFCBCB", width: "100%", height: "40px", borderRadius: "5px", border: "groove 0.1em green" }}/>


 

</div>


<div class="col-md-4" id="il_ilce" name="il-ilce">
    <label for="validationServer02">İlçe</label>
    <input type='text' id="Ilceler" name="ilceler"
    value={bilgi.ilce} 
    onChange={(event) => setBilgi({ ...bilgi, ilce: event.target.value })}
    style={{ zindex: "20", backgroundColor: "#FFCBCB", width: "100%", height: "40px", borderRadius: "5px", border: " groove 0.1em green" }}/>
      
  

</div>

</div>



<div class="row" id="alan7" name="alan7">

<div class="col-md-4" id="form_posta_kutusu" name="form_posta_kutusu">
    <label for="validationServer02">Posta Kutusu</label>

    <input type="text" class="form-control is-valid" id="validationServer02" name="validationServer02_7"
    
    value={bilgi.postaKutusu}
    onChange={(event) => setBilgi({ ...bilgi, postaKutusu: event.target.value })}
    placeholder="Posta kutusu" required />
    <div class="valid-feedback">

    </div>
</div>

<div class="col-md-4" id="form_mahalle" name="form_mahalle">
    <label for="validationServer02">Mahalle</label>

    <input type="text" class="form-control is-valid" id="validationServer02" name="validationServer02_8"
    
    value={bilgi.mahalle}
    onChange={(event) => setBilgi({ ...bilgi, mahalle: event.target.value })}
    placeholder="Mahalle" required />
    <div class="valid-feedback">

    </div>
</div>

<div class="col-md-4" id="form_adres_aciklama" name="form_adres_aciklama">
    <label for="validationServer02">Adres Açıklama</label>

    <input type="text" class="form-control is-valid" id="validationServer02" name="validationServer02_9" 
    
    value={bilgi.adr_aciklama}
    onChange={(event) => setBilgi({ ...bilgi, adr_aciklama: event.target.value })}
    placeholder="Detaylı belirtiniz" required />
    <div class="valid-feedback">

    </div>
</div>

</div>


<div />



<div class="row" id="alan2" name="alan2">

<div class="col-md-4" id="form_cv" name="form_cv">
    <label for="formFile" class="form-label">CV: </label>
    <input class="form-control" id="formFile"
    
value={bilgi.cvbelge}
onChange={(event) => setBilgi({ ...bilgi, cvbelge: event.target.value })}

    
 
    name="form_cvFile" />
</div>



<div class="col-md-4" id="form_niyet_mektubu" name="form_niyet_mektubu">
    <label for="formFile" class="form-label">Niyet mektubu: </label>
    <input class="form-control"  id="formFile" 
     value={bilgi.niyetbelge}
     onChange={(event) => setBilgi({ ...bilgi, niyetbelge: event.target.value })}
    name="formniyetFile" />
</div>


<div class="col-md-4" id="form_pasaport" name="form_pasaport">
    <label for="formFile" class="form-label">Pasaport: </label>
    <input class="form-control"  id="formFile"
    
    value={bilgi.pasaportbelge}
    onChange={(event) => setBilgi({ ...bilgi, pasaportbelge: event.target.value })}
    name="form_pasaportFile" />
</div>


<div class="col-md-4" id="form_ikamet" name="form_ikamet">
    <label for="formFile" class="form-label">İkametgah: </label>
    <input class="form-control" 
    
    value={bilgi.ikametgahbelge}
    onChange={(event) => setBilgi({ ...bilgi, ikametgahbelge: event.target.value })}
    id="formFile" name="form_ikametFile" />
</div>


<div class="col-md-4" id="form_diploma" name="form_diploma">
    <label for="formFile" class="form-label">Diploma: </label>
    <input class="form-control" id="formFile"
    
    value={bilgi.diplomabelge}
    onChange={(event) => setBilgi({ ...bilgi, diplomabelge: event.target.value })}
    name="form_diplomaFile" />
</div>


<div class="col-md-4" id="form_ing_yeterlilik" name="form_ing_yeterlilik">
    <label for="formFile" class="form-label">İngilizce Yeterlilik: </label>
    <input class="form-control"  id="formFile" 
    
    value={bilgi.ingyeterlilikbelge}
    onChange={(event) => setBilgi({ ...bilgi, ingyeterlilikbelge: event.target.value })}
    name="form_ing_yeterlilik_File" />
</div>

</div>




<br />
<Link to="/portal/BasvuruFormu">
<button class="btn btn-primary" type="submit" style={{ marginLeft:"54%", marginBottom:"2px"}} id="basvuru_bitir" name="basvuru_bitir" >
Forma dön
</button> 
</Link>



</form>

<button class="btn btn-primary" onClick={formGuncelle} style={{ marginLeft:"54%",backgroundColor:"green"}} id="form_guncelle" name="form_guncelle">
  Formu Güncelle
</button>

        {error && <p style={{ color: 'red' }}>{error} </p>}
          
     
    </div>
);

}
