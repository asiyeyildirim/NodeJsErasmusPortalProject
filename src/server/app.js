
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb"
});

connection.connect((err) => {
    if (err) {
        console.error('Veritabanina baglanirken hata oluştu', err);
        return;
    }

    console.log('Veritabanina baglanildi.')
})
app.post('/kayit', (req, res) => {
    const { email, password } = req.body;
    const query = "INSERT INTO user (username,password) VALUE (?,?)";
    connection.query(query, [email, password], (err, result) => {
        if (err) {
            console.error("Veritabanına bilgi girerken hata: ", err);
            res.status(500).send({ error: "Kayit oluşturulurken bir hata oluştu." })
            return;
        }
        res.status(200).send({ message: "Kayit başarılı!" });
        
    })
})

app.post('/', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM user WHERE username=? AND password=?';
    connection.query(query, [email, password], (err, result) => {
        if (err) {
            console.error('Bilgilerin kontrolunde hata olustu');
            res.status(500).send({ error: 'Bilgilerin kontrolunde hata olustu.' });
            return;
        }
        if (result.length > 0) {
            const user_id = result[0].id_num;

            isLoginQuery = "UPDATE user SET isLogin = 1 WHERE id_num=?"
            connection.query(isLoginQuery, user_id), (err, result);
            if (err) {
                console.error("Login bilgisi güncellenirken hata oluştu");
                res.status(500).send({ error: 'Login güncellenemedi' })
            }

            res.status(200).send({ message: '1', id: user_id });
        } else {
            res.status(200).send({ message: '0' });
        }
    })

});

app.post('/signout', (req, res) => {
    const { id } = req.body;
    const query = "UPDATE user SET isLogin = 0 WHERE id_num=?";
    connection.query(query, [id], (err, result) => {
        if (err) {
            console.error('isLogin guncellemesinde hata olustu', err);
            res.status(500).send({ error: 'Bilgilerin kontrolunde hata olustu.' });
            return;
        }
        res.status(200).send({ message: 'Kullanici cikisi guncellendi' })
    });
});

app.post('/formGonder', (req,res) => {

    const {
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
        ingyeterlilikbelge
    
    
    
    } = req.body;

    const kontrolQuery = "SELECT * FROM basvuru WHERE basvuran_id = ?";

    connection.query(kontrolQuery, [id], (err,result) => {

        if(result.length > 0){
            res.status(201).send({error: "Aynı hesaptan yalnizca bir basvuru yapilabilir."});
            return;
        }else{
            const query = "INSERT INTO basvuru (basvuran_id,ad,soyad,dogumTarihi,cinsiyet,eMail,telNo,milliyet1,milliyet2,tcPasapportNo,engelDurum,engelDurum_aciklama, mezuniyetdurum, mezuniyetTarih,ortalama,universite,fakulte,bolum,ulke,il,ilce,postaKutusu,mahalle,adr_aciklama,cvbelge,niyetbelge,pasaportbelge,ikametgahbelge,diplomabelge,ingyeterlilikbelge) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

            connection.query(query, [id,
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
            ], (err,result) => {
                if(err){
                    console.error("Veritabanina ekleme yapilirken hata olustu. ", err);
                    res.status(500).send({error: "Veritabanina ekleme yapilirken hata olustu."});
                    return;
                }

                res.status(200).send({message: "Basvuru basariyla kaydedildi."});
            });
        }
    });
})
app.post("/formGoster", (req,res)=>{
    const user_id = req.body.id;
    const query = "SELECT * FROM basvuru WHERE basvuran_id=?";
    connection.query(query, [user_id], (err,result) => {
        if(err){
            console.error("Veritabanindan bilgi alinirken hata olustu. ", err);
            res.status(500).send({error: "Veritabanindan bilgi alinirken hata olustu."});
            return;
        }if(result.length ===0){
            res.status(200).send({ message: 'Basvuru Bulunamadi.' })

        }

        res.status(200).send({ad:result[0].ad,
                             soyad: result[0].soyad,
                             dogumTarihi: result[0].dogumTarihi,
                             cinsiyet: result[0].cinsiyet,
                             eMail: result[0].eMail,
                             telNo: result[0].telNo,
                             milliyet1: result[0].milliyet1,
                             milliyet2: result[0].milliyet2,
                             tcPasapportNo: result[0].tcPasapportNo,
                             engelDurum: result[0].engelDurum,
                             engelDurum_aciklama: result[0].engelDurum_aciklama,
                             mezuniyetdurum: result[0].mezuniyetdurum,
                             mezuniyetTarih: result[0].mezuniyetTarih,
                             ortalama: result[0].ortalama,
                             universite: result[0].universite,
                             fakulte: result[0].fakulte,
                             bolum: result[0].bolum,
                             ulke: result[0].ulke,
                             il: result[0].il,
                             ilce: result[0].ilce,
                             postaKutusu: result[0].postaKutusu,
                             mahalle: result[0].mahalle,
                             adr_aciklama: result[0].adr_aciklama,
                             cvbelge: result[0].cvbelge,
                             niyetbelge: result[0].niyetbelge,
                             pasaportbelge: result[0].pasaportbelge,
                             ikametgahbelge: result[0].ikametgahbelge,
                             diplomabelge: result[0].diplomabelge,
                             ingyeterlilikbelge: result[0].ingyeterlilikbelge,
                             
                            
                            
                            
                            
                            
                            });

    });

})


app.put('/formGuncelle', (req, res) => {
    const basvuran_id = req.body.id;
    const {
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
   
    } = req.body;
  
    
    const query =
    "UPDATE basvuru SET ad=?, soyad=?, dogumTarihi=?, cinsiyet=?, eMail=?, telNo=?, milliyet1=?, milliyet2=?,  tcPasapportNo=?, engelDurum=?, engelDurum_aciklama=?, mezuniyetdurum=?, mezuniyetTarih=?, ortalama=?, universite=?, fakulte=?, bolum=?, ulke=?, il=?, ilce=?, postaKutusu=?, mahalle=?, adr_aciklama=?, cvbelge=?, niyetbelge=?, pasaportbelge=?, ikametgahbelge=?, diplomabelge=?, ingyeterlilikbelge=? WHERE basvuran_id=32";
  
    connection.query(
      query,
      [
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
        basvuran_id,
      ],
      (err, result) => {
        if (err) {
          console.error("Veritabanı güncelleme işlemi başarısız oldu: ", err);
          res
            .status(500)
            .send({ error: "Veritabanı güncelleme işlemi başarısız oldu." });
          return;
        }
  
        res.status(200).send({ message: "Başvuru başarıyla güncellendi." });
        console.log(req.body);
        console.log(result.affectedRows);
      }
    );
  });
  



  




const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server ${PORT} üzerinde dinleniyor.`);
})