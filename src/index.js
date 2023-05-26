import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css'
import { UserList } from './Component/UserList';
import { Navbar } from './Component/Navbar';
import { About } from './Component/About';
import { Donor } from './Component/Donor';
import { Home } from './Component/Home';
import { Patient } from './Component/Patient';
import { Admin } from './Component/Admin';
import { PatientSignUp } from './Component/PatientSignUp';
import { DonorSignUp } from './Component/DonorSignUp';
import { DashBoard } from './Component/DashBoard';
import { DonorDash } from './Component/DonorDash';
import { DonationDash } from './Component/DonationDash';
import { HistroyDash } from './Component/HistroyDash';
import { RequestDash } from './Component/RequestDash';
import { HomeDash } from './Component/HomeDash';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Layout } from './Component/Layout';
import { DonorTable } from './Component/DonorTable';
import { PatientDash } from './Component/PatientDash';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <div>

  //   <UserList/>
  // </div>
  <Router>
    
    {/* <Navbar/> */}

    <Routes>
    {/* <App /> */}

    <Route path='/about' element={<About/>}/>

    
    {/* </Route> */}
    <Route path='/admin' element={<Admin/>}/>


    <Route path='/' element={<Home/>}/>

   
    <Route path='/donor' element={<Donor/>}/>

  
    <Route path='/patient' element={<Patient/>}/>

    <Route path='/patientsignup' element={<PatientSignUp/>}/>

    <Route path='/donorsignup' element={<DonorSignUp/>}/>


    

    {/* <Route path='/dashboard' element={<Layout/>}/> */}
    <Route path='/abc' element={<DonorDash/>}>
    <Route path='home' element={<HomeDash/>}/>

        <Route path='donor' element={<DonorTable/>}/>
        <Route path='Patient' element={<PatientDash/>}/>
        <Route path='Donation' element={<DonationDash/>}/>
        <Route path='request' element={<RequestDash/>}/>
        <Route path='Histroy' element={<HistroyDash/>}/>
    </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
