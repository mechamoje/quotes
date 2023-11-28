import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Components/Home/Homepage';
import Authors from './Components/Authors/Authors';
import Favorites from './Components/Favorites/Favorites';
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BigCard from './Components/Cards/Card';
import ForYouPage from './Components/Pages/Foryou/foryou';
import Fulltext from './Components/Fulltext/fulltext';
import Alltexts from './Components/Alltexts/alltexts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div id='body'>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/foryou/*' element={<ForYouPage />} />
          <Route path='/authors' element={<Authors />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/text/*' element={<Fulltext />} />
          <Route path='/alltexts' element={<Alltexts />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);
