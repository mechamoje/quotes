import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Home/Homepage';
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BigCard from './Components/Cards/Card';
import ForYouPage from './Components/Pages/Foryou/foryou';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div id='body'>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/foryou/*" element={<ForYouPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  </div>
);
