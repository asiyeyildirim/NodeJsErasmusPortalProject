var mysql = require('mysql');


const con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"nodedb"
});




con.connect(function (err) {
    if (err) throw err;
    console.log("Baglandi!");
var sql = 
//"CREATE TABLE basvuru (basvuru_id  INT NOT NULL AUTO_INCREMENT, basvuran_id INT NOT NULL, ad VARCHAR(50) NOT NULL, soyad VARCHAR(50) NOT NULL,cinsiyet BOOLEAN NOT NULL, dogumTarihi DATE NOT NULL, eMail VARCHAR(60) NOT NULL, telNo VARCHAR(13) NOT NULL,milliyet1 VARCHAR(10) NOT NULL, milliyet2 VARCHAR(10) NOT NULL,tcPasapportNo VARCHAR(11) NOT NULL,engelDurum BOOLEAN NOT NULL,engelDurum_aciklama VARCHAR(50) NOT NULL,mezuniyetdurum BOOLEAN NOT NULL, mezuniyetTarih DATE NOT NULL,ortalama DOUBLE NOT NULL, universite VARCHAR(110) NOT NULL, fakulte VARCHAR(50) NOT NULL,bolum VARCHAR(70) NOT NULL,ulke VARCHAR(120) NOT NULL,il VARCHAR(50) NOT NULL,ilce VARCHAR(50) NOT NULL,postaKutusu VARCHAR(20) NOT NULL,mahalle VARCHAR(70) NOT NULL, adr_aciklama VARCHAR(120) NOT NULL,cvbelge VARCHAR(200) NOT NULL,niyetbelge VARCHAR(200) NOT NULL,pasaportbelge VARCHAR(200) NOT NULL, ikametgahbelge VARCHAR(200) NOT NULL,diplomabelge VARCHAR(200) NOT NULL,ingyeterlilikbelge VARCHAR(200) NOT NULL,PRIMARY KEY(basvuru_id))";
"CREATE TABLE basvuru (basvuru_id  INT NOT NULL AUTO_INCREMENT, basvuran_id INT NOT NULL, ad VARCHAR(50) NOT NULL, soyad VARCHAR(50) NOT NULL,cinsiyet BOOLEAN NOT NULL, dogumTarihi DATE NOT NULL, eMail VARCHAR(60) NOT NULL, telNo VARCHAR(13) NOT NULL,milliyet1 VARCHAR(10) NOT NULL, milliyet2 VARCHAR(10) NOT NULL,tcPasapportNo VARCHAR(11) NOT NULL,engelDurum BOOLEAN NOT NULL,engelDurum_aciklama VARCHAR(50) NOT NULL,mezuniyetdurum BOOLEAN NOT NULL, mezuniyetTarih DATE NOT NULL,ortalama DOUBLE NOT NULL, universite VARCHAR(110) NOT NULL, fakulte VARCHAR(50) NOT NULL,bolum VARCHAR(70) NOT NULL,ulke VARCHAR(120) NOT NULL,il VARCHAR(50) NOT NULL,ilce VARCHAR(50) NOT NULL,postaKutusu VARCHAR(20) NOT NULL,mahalle VARCHAR(70) NOT NULL, adr_aciklama VARCHAR(120) NOT NULL,cvbelge VARCHAR(200) NOT NULL,niyetbelge VARCHAR(200) NOT NULL,pasaportbelge VARCHAR(200) NOT NULL, ikametgahbelge VARCHAR(200) NOT NULL,diplomabelge VARCHAR(200) NOT NULL,ingyeterlilikbelge VARCHAR(200) NOT NULL,PRIMARY KEY(basvuru_id))";












//"CREATE TABLE user (id_num INT NOT NULL AUTO_INCREMENT, username  VARCHAR(50) NOT NULL, password VARCHAR(6) NOT NULL, isLogin BOOLEAN NOT NULL,PRIMARY KEY(id_num))";
con.query(sql,function(err,result){
    if(err) throw err;
    console.log("Tablo basvuru oluşturuldu.");
});
})



