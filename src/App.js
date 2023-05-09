import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Portal from "./component/Portal";
import BasvuruFormu from './component/BasvuruFormu';
import BasvuruGoruntule from './component/BasvuruGoruntule';
import Communication from './component/Communication';
import SifreGuncelle from "./component/SifreGuncelle";
import Sartlar from "./component/Sartlar";



function App() {
  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/kayit" element={<Register />} />
        <Route path="/portal" element={<Portal />} />
       <Route path="/portal/BasvuruFormu" element={<BasvuruFormu/>} />
        <Route path="/portal/BasvuruGoruntule" element={<BasvuruGoruntule/>} />
        <Route path="/portal/Communication" element={<Communication/>} />
        <Route path="/sifreguncelle" element={<SifreGuncelle/>} />
        <Route path="/sartlar" element={<Sartlar />} />
       
       
      </Routes>
    </Router>
  );
}

export default App;
