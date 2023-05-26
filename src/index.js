import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CardView } from './components/card/CardView';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { FormIngresarPersona } from './components/formIngresarPersona/FormIngresarPersona';
import { Header } from './components/header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
     <Header/>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/FormIngresarPersona' element={<FormIngresarPersona/>} />
      <Route path='/mostrarPersona' element={<CardView/>} />
    </Routes>
  </Router>
);


