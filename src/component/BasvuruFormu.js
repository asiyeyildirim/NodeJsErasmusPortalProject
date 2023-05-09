import React, { useState,useEffect } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios';
import {AciklamaGoster} from '../functions/EngelAciklama.js'
import { useNavigate } from 'react-router-dom';

export default function BasvuruFormu() {

    const navigate = useNavigate();
    useEffect(() => {
        var isLogin = sessionStorage.getItem('isLogin');
        if (isLogin !== 'true') {
            navigate('/');
        }
    }, []);
  





  const [ad, setAd] = useState('');
  const [soyad, setSoyad] = useState('');
  const [cinsiyet, setCinsiyet] = useState('');
  const [dogumTarihi, setDogumTarihi] = useState('');
  const [eMail, setEMail] = useState('');
  const [telNo, setTelNo] = useState('');
  const [milliyet1, setMilliyet1] = useState('');
  const [milliyet2, setMilliyet2] = useState('');
  const [tcPasapportNo, setTcPasapportNo] = useState('');
  const [engelDurum, setEngelDurum] = useState('');
  const [engelDurum_aciklama, setEngelDurum_aciklama] = useState('');
  const [mezuniyetdurum, setMezuniyetDurum] = useState('');
  const [mezuniyetTarih, setmezuniyetTarih] = useState('');
  const [ortalama, setOrtalama] = useState('');
  const [universite, setUniversite] = useState('');
  const [fakulte, setFakulte] = useState('');
  const [bolum, setBolum] = useState('');
  const [ulke, setUlke] = useState('');
  const [il, setIl] = useState('');
  const [ilce, setIlce] = useState('');
  const [postaKutusu, setPostaKutusu] = useState('');
  const [mahalle, setMahalle] = useState('');
  const [adr_aciklama, setAdr_aciklama] = useState('');



  const [cvbelge, setCVbelge] = useState('');
  const [niyetbelge, setNiyetbelge] = useState('');
  const [pasaportbelge, setPasaportbelge] = useState('');
  const [ikametgahbelge, setIkametgahbelge] = useState('');
  const [diplomabelge, setDiplomabelge] = useState('');
  const [ingyeterlilikbelge, setIngyeterlilikbelge] = useState('');

  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  const id = sessionStorage.getItem('id');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/formGonder', {
        id,
        ad,
        soyad,
        dogumTarihi,
        cinsiyet,
        eMail,
        telNo,
        milliyet1,
        milliyet2,
        tcPasapportNo,
        engelDurum,
        engelDurum_aciklama,
        mezuniyetdurum,
        mezuniyetTarih,
        ortalama,
        universite,
        fakulte,
        bolum,
        ulke,
        il,
        ilce,
        postaKutusu,
        mahalle,
        adr_aciklama,
        cvbelge,
        niyetbelge,
        pasaportbelge,
        ikametgahbelge,
        diplomabelge,
        ingyeterlilikbelge,
        

    
    

      });
      console.log(response);
      if (response.status === 200) {
        setSuccess('Basvuru Gönderildi')
        setAd('');
        setSoyad('');
        setCinsiyet('');
        setDogumTarihi('');
        setEMail('');
        setTelNo('');
        setMilliyet1('');
        setMilliyet2('');
        setTcPasapportNo('');
        setEngelDurum('');
        setEngelDurum_aciklama('');
        setMezuniyetDurum('');
        setmezuniyetTarih('');
        setOrtalama('');
        setUniversite('');
        setFakulte('');
        setBolum('');
        setUlke('');
        setIl('');
        setIlce('');
        setPostaKutusu('');
        setMahalle('');
        setAdr_aciklama('');
        setCVbelge('');
        setNiyetbelge('');
        setPasaportbelge('');
        setIkametgahbelge('');
        setDiplomabelge('');
        setIngyeterlilikbelge('');
 
        setError();
      } else {
         setError(response.data.error);
      }

    } catch (err) {
      setError("Veritabani baglantisinda hata olustu. ", err);
    }
  }
  return (
    <>
        <div id="basvuru_page" >
            <div className="col-4">
                <Sidebar
                    form_active="active"
                    form_disable="disabled"
                    gor_to="/portal/BasvuruGoruntule"
                    iletisim_to="/portal/Communication"

                />
            </div>




            <h3 class="app_yazi" id="app_yazi2" name="app_yazi2"> Erasmus Programı Başvuru Formu</h3>



            <hr />

            <form class="basvuru1" id="basvuru1" name="basvuru1" onSubmit={handleSubmit} >


                <div class="row" id="alan2" name="alan1">

                    <div class="col-md-4" id="name" name="ad" >
                        <label for="validationServer01">Ad</label>
                        <input type="text" class="form-control" id="validationServer01" placeholder="Ad" 
                         value = {ad}
                        onChange= {(e) => setAd(e.target.value)} required />
                        <div class="valid-feedback">

                        </div>
                    </div>

                    <div class="col-md-4" id="soyad" name="soyad">
                        <label for="validationServer02">Soyad</label>
                        <input type="text" class="form-control" id="validationServer02"
                           value={soyad} 
                           onChange= {(e) => setSoyad(e.target.value)}
                        placeholder="Soyad" required />
                        <div class="valid-feedback">

                        </div>
                    </div>

                    <div class="col-md-4" id="DogumTarihi" name="DogumTarihi">
  <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
    <label for="datepicker">Doğum Tarihi</label>
    <input type="text"  name="date_selected" data-date-format="yyyy-mm-dd" class="form-control" id="datepicker" 
           value={dogumTarihi} 
           onChange={(e) => setDogumTarihi(e.target.value)}
           placeholder="YYYY-MM-DD" style={{width: "320px"}} />
  </div>
</div>




                </div>

                <div class="row" id="alan2" name="alan2">



                    <div class="col-md-4" id="form_eposta" name="form_eposta">
                        <label for="validationServer05" >E-Posta</label>
                        <input type="email" class="form-control" id="validationServer05" name="validationServer05_1"
                        
                        value={eMail} 
                        onChange= {(e) => setEMail(e.target.value)}
                        placeholder="E-posta" required />
                        <div class="valid-feedback">

                        </div>


                    </div>

                    <div class="col-md-4" id="form_tel" name="form_tel">
                        <label for="validationServer05">Telefon</label>
                        <input type="text" class="form-control" id="validationServer05" name="validationServer05_2" 
                        
                        value={telNo} 
                        onChange= {(e) => setTelNo(e.target.value)}
                        placeholder="Telefon" required />
                        <div class="invalid-feedback">

                        </div>


                    </div>
                    <div class="col-md-4" id="drop_cinsiyet" name="cinsiyet" >


                        <select id="ddlViewBy" name="ddlViewBy"
                        
                        value={cinsiyet} 
                        onChange= {(e) => setCinsiyet(e.target.value)}
                        
                        style={{ zIndex: "10", width: "60%", marginTop: "28px", marginLeft: "10px", borderRadius: "5px", border: "groove 0.2em green", textalign: "center", fontSize: "16px" }}>
                            <option value="1"class="cinsiyet" id="cinsiyet" 
                            
                            
                            
                            >Cinsiyet</option>
                            <option value="2" >K</option>
                            <option value="3">E</option>

                        </select>



                    </div>



                </div>

                <div class="row" id="alan2" name="alan2">


                    <div class="col-md-4" id="form_millyet1" name="form_millyet1">
                        <label for="validationServer05">Milliyet 1</label>
                        <input type="text" class="form-control" id="validationServer05" name="validationServer05_3" placeholder="milliyet 1"
                        
                        value={milliyet1} 
                        onChange= {(e) => setMilliyet1(e.target.value)}
                        
                        required />
                        <div class="invalid-feedback">

                        </div>
                    </div>

                    <div class="col-md-4" id="form_millyet2" name="form_millyet2">
                        <label for="validationServer05">Milliyet 2</label>
                        <input type="text" class="form-control" id="validationServer05" name="validationServer05_4" placeholder="milliyet 2"
                        
                        value={milliyet2} 
                        onChange= {(e) => setMilliyet2(e.target.value)}
                        required />
                        <div class="invalid-feedback">

                        </div>


                    </div>

                    <div class="col-md-4" id="pasaport" name="pasaport">
                        <label for="validationServer05"> TC Pasaport No</label>
                        <input type="text" class="form-control" id="validationServer05" name="validationServer05_5" placeholder="pasaport no"
                        
                        value={tcPasapportNo} 
                        onChange= {(e) => setTcPasapportNo(e.target.value)}
                        
                        required />
                        <div class="invalid-feedback">

                        </div>
                    </div>


                </div>

                <br />

                <div class="row" id="alan3" name="alan3">


<div class="col-md-4 ">
    
    <label for="engel" >Engel Durumu : </label>
    
    <div>

        <select class="form-control" 
            value = {engelDurum}
            onChange={(e) => {
                setEngelDurum(e.target.value);
                AciklamaGoster();
              }}
 
        
        id="engel" 
    
        
        
       >

            <option value="sec">Seçiniz...</option>
            <option value="var">Engeli Var</option>
            <option value="yok">Engeli Yok</option>
        </select>
    </div>
</div>
<div class="col-md-4 " id="aciklamaDiv" 


style={{ display: "none" }} >
    <label for="aciklama" 
             
    
    >Açıklama <em style={{ fontSize: "9pt" }}> (Varsa engel durumunuzu açıklayınız) : </em></label>
    <input type="text" class="form-control"

value = {engelDurum_aciklama}
onChange= {(e) => setEngelDurum_aciklama(e.target.value)}
    id="aciklama"  name='aciklama' />
</div>



</div>



                <div class="row" id="alan3" name="alan3">


                <div class="col-md-4" id="form_mezuniyet_bilgi" name="form_mezuniyet_bilgi">


<select id="ddlViewBy" name="ddlViewBy"

    value={mezuniyetdurum}
    onChange={(e) => setMezuniyetDurum(e.target.value)}

    style={{ zIndex: "10", width: "80%", height:"65%", borderRadius: "5px", border: "groove 0.2em green", textalign: "center", fontSize: "16px" ,marginTop:"7%" }}>
    <option value="1" selected="selected" class="mezuniyet" id="mezuniyet"



    >Mezuniyet durumu</option>
    <option value="2" >Mezun</option>
    <option value="3">Devam ediyor</option>

</select>

</div>




                    <div class="col-md-4" id="form_mezuniyet" name="form_mezuniyet">
                        <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
                            <label for="validationServer05">Mezuniyet Tarihi</label>
                            <input  type="text"  name="date_selected" data-date-format="yyyy-mm-dd" class="form-control" id="datepicker" 
                            
                            value = {mezuniyetTarih}
                            onChange= {(e) => setmezuniyetTarih(e.target.value)}
                            
                           placeholder=' YYYY-MM-DD' style={{ zindex: "20", width: "100%", height: "40px", borderRadius: "5px", border: "groove 0.1em green" }} />

                        </div>
                    </div>

                    <div class="col-md-4" id="form_ortalama" name="form_ortalama">
                        <label for="validationServer02">Ortalama</label>

                        <input type="text" class="form-control" id="validationServer02" name="validationServer02_5" 
                        
                        value = {ortalama}
                        onChange= {(e) => setOrtalama(e.target.value)}
                        placeholder="Ortalamanız" required />
                        <div class="valid-feedback">

                        </div>
                    </div>


                </div>

                <div class="row" id="alan4" name="alan4">

                    <div class="col-md-4" id="form_uni" name="form_uni">

                        <label for="validationServer02">Üniversite</label>

                        <input type="text" class="form-control" id="validationServer02" name="validationServer02_2" 
                        
                        value = {universite}
                        onChange= {(e) => setUniversite(e.target.value)}
                        placeholder="Üniversite adını girin" required />
                        <div class="valid-feedback">
                        </div>

                    </div>


                    <div class="col-md-4" id="form_fakulte" name="form_fakulte">

                        <label for="validationServer02">Fakülte</label>

                        <input type="text" class="form-control" id="validationServer02" name="validationServer02_3"
                        
                        value = {fakulte}
                        onChange= {(e) => setFakulte(e.target.value)}
                        placeholder="Fakülte" required />
                        <div class="valid-feedback">
                        </div>

                    </div>



                    <div class="col-md-4" id="form_bolum" name="form_bolum">
                        <label for="validationServer02">Bölüm</label>

                        <input type="text" class="form-control" id="validationServer02" name="validationServer02_4" 
                        
                        value = {bolum}
                        onChange= {(e) => setBolum(e.target.value)}
                        placeholder="Bölümünüz" required />
                        <div class="valid-feedback">

                        </div>
                    </div>





                </div>




                <div class="row" id="alan5" name="alan5">


                    <div class="col-md-4" id="form_ulke" name="ulke">
                        <label for="validationServer02">Ülke</label>

                        <input type="text" class="form-control" 
                             value = {ulke}
                             onChange= {(e) => setUlke(e.target.value)}
                        
                        
                        id="validationServer02" name="validationServer02_6" placeholder="Ülke" required />
                        <div class="valid-feedback">

                        </div>
                    </div>



                    <div class="col-md-4" id="il_ilce" name="il-ilce" >
                        <label for="validationServer02">İl</label>
                        <input type='text' name="iller"
                        
                        value = {il}
                        onChange= {(e) => setIl(e.target.value)}
                        style={{ zindex: "20", backgroundColor: "#FFCBCB", width: "100%", height: "40px", borderRadius: "5px", border: "groove 0.1em green" }}/>
                            <option value="0"> Lütfen bir il seç</option>

                     

                    </div>


                    <div class="col-md-4" id="il_ilce" name="il-ilce">
                        <label for="validationServer02">İlçe</label>
                        <input type='text' id="Ilceler"
                        
                        value = {ilce}
                        onChange= {(e) => setIlce(e.target.value)}
                        
                        name="ilceler" style={{ zindex: "20", backgroundColor: "#FFCBCB", width: "100%", height: "40px", borderRadius: "5px", border: " groove 0.1em green" }}/>
                            <option value="0">Lütfen önce il seç</option>
                      

                    </div>

                </div>



                <div class="row" id="alan7" name="alan7">

                    <div class="col-md-4" id="form_posta_kutusu" name="form_posta_kutusu">
                        <label for="validationServer02">Posta Kutusu</label>

                        <input type="text" 
                        
                        value = {postaKutusu}
                        onChange= {(e) => setPostaKutusu(e.target.value)}
                        class="form-control is-valid" id="validationServer02" name="validationServer02_7" placeholder="Posta kutusu" required />
                        <div class="valid-feedback">

                        </div>
                    </div>

                    <div class="col-md-4" id="form_mahalle" name="form_mahalle">
                        <label for="validationServer02">Mahalle</label>

                        <input type="text" class="form-control is-valid" id="validationServer02"
                        
                        value = {mahalle}
                        onChange= {(e) => setMahalle(e.target.value)}
                        name="validationServer02_8" placeholder="Mahalle" required />
                        <div class="valid-feedback">

                        </div>
                    </div>

                    <div class="col-md-4" id="form_adres_aciklama" name="form_adres_aciklama">
                        <label for="validationServer02">Adres Açıklama</label>

                        <input type="text" class="form-control is-valid" 
                             value = {adr_aciklama}
                             onChange= {(e) => setAdr_aciklama(e.target.value)}
                        
                        id="validationServer02" name="validationServer02_9" placeholder="Detaylı belirtiniz" required />
                        <div class="valid-feedback">

                        </div>
                    </div>

                </div>


                <div />



                <div class="row" id="alan2" name="alan2">

                    <div class="col-md-4" id="form_cv" name="form_cv">
                        <label for="formFile" class="form-label">CV: </label>
                        <input class="form-control"
                             value = {cvbelge}
                             onChange= {(e) => setCVbelge(e.target.value)}
                        type="file" id="formFile" name="form_cvFile" />
                    </div>



                    <div class="col-md-4" id="form_niyet_mektubu" name="form_niyet_mektubu">
                        <label for="formFile" class="form-label">Niyet mektubu: </label>
                        <input class="form-control" 
                        
                        value = {niyetbelge }
                        onChange= {(e) => setNiyetbelge(e.target.value)}
                        type="file" id="formFile" name="formniyetFile" />
                    </div>


                    <div class="col-md-4" id="form_pasaport" name="form_pasaport">
                        <label for="formFile" class="form-label">Pasaport: </label>
                        <input class="form-control" 
                             value = {pasaportbelge}
                             onChange= {(e) => setPasaportbelge(e.target.value)}
                        
                        type="file" id="formFile" name="form_pasaportFile" />
                    </div>


                    <div class="col-md-4" id="form_ikamet" name="form_ikamet">
                        <label for="formFile" class="form-label">İkametgah: </label>
                        <input class="form-control" 
                        
                        value = {ikametgahbelge}
                        onChange= {(e) => setIkametgahbelge(e.target.value)}
                        type="file" id="formFile" name="form_ikametFile" />
                    </div>


                    <div class="col-md-4" id="form_diploma" name="form_diploma">
                        <label for="formFile" class="form-label">Diploma: </label>
                        <input class="form-control"
                             value = {diplomabelge}
                             onChange= {(e) => setDiplomabelge(e.target.value)}
                        type="file" id="formFile" name="form_diplomaFile" />
                    </div>


                    <div class="col-md-4" id="form_ing_yeterlilik" name="form_ing_yeterlilik">
                        <label for="formFile" class="form-label">İngilizce Yeterlilik: </label>
                        <input class="form-control" 
                             value = {ingyeterlilikbelge}
                             onChange= {(e) => setIngyeterlilikbelge(e.target.value)}
                        
                        type="file" id="formFile" name="form_ing_yeterlilik_File" />
                    </div>

                </div>



                <div class="form-group" id="basvuru_bitir_alan" name="basvuru_bitir_alan">
                    <div class="form-check">
                        <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" name="form_onay" required />
                        <label class="form-check-label" for="invalidCheck3">
                            Şartları ve koşulları kabul ediyorum.
                        </label>
                        <div class="invalid-feedback">
                            (Göndermeden önce kabul etmelisiniz.)
                        </div>
                    </div>
                </div>
                <br />
                <button class="btn btn-primary" type="submit" id="basvuru_bitir" name="basvuru_bitir" >Başvuruyu bitir</button>
                <button class="btn btn-primary" type="reset" id="formu_sifirla" name="formu_sifirla" >Formu Sıfırla</button>
            </form>
                 

            {error && <p style={{ color: 'red' }}>{error} </p>}
  {success && <p style={{ color: 'green' }}> {success} </p>}

        </div>


        
    </>
);
}
