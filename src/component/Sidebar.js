
import {Router, Route, Routes, Link, useNavigate} from 'react-router-dom';
import { FaHome,FaBars,FaUserAlt,FaCommentAlt, FaUserPlus, FaGlobe, FaInfo, FaForumbee, FaAddressCard, FaInfoCircle, FaPaperPlane, FaWpforms} from 'react-icons/fa';

import '../App.css';
import { FaFileAlt } from 'react-icons/fa';


function Sidebar(props){


    return(
        <>
        {/*SIDEBAR*/}
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" id='sidebar' style={{width: "280px"}}>
                    <a href="/portal"  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    &nbsp; <FaGlobe/>
                    &nbsp;
                    <span className="fs-4" > &nbsp;Erasmus Portal</span>
               
                    </a>
                    <hr/>
                    <ul className="nav nav-pills flex-column mb-auto" id='menu'>
                        <li className="nav-item" >
                     
                            <Link  className={`nav-link ${props.form_active} ${props.form_disable}` } 
                                    aria-current="page" 
                                    to={`${props.form_to}`}
                                    
                                    >
                                        <FaWpforms/>
                                           
                                           &nbsp;    Başvuru Yap</Link>
                                       
                        </li>
                        <li>
                            <Link className={`nav-link ${props.gor_active} ${props.gor_disable}`} 
                                    aria-current="page" 
                                    to={`${props.gor_to}`}
                                    >
                                           <FaFileAlt/>
                                           &nbsp;  Başvuru Görüntüle</Link>
                                 
                        </li>



                        <li>
                            <Link className={`nav-link ${props.iletisim_active} ${props.ieltisim_disable}`} 
                                    aria-current="page" 
                                    to={`${props.iletisim_to}`}
                                    >
                                           <FaPaperPlane/>
                                           &nbsp;   İletisim</Link>
                                 
                        </li>


                    </ul>
                    <hr />
                    <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                        <strong>mdo</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                       
                    
                        <li><a className="dropdown-item" href="/sartlar">Şartlar</a></li>
                        <li><a className="dropdown-item" href="/sifreguncelle">Şifre değiştir</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="/" > Çıkış</a></li>
                    </ul>
                    </div>
                </div>
                {/*SIDEBAR END*/}

                
        </>
    );


}

export default Sidebar;