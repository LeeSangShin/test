import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/work/home';
import MyPage from './views/work/mypage';
import WorkPage from './views/work/work_page';
import GridPage from './views/work/grid_page.js';
import Layout from './views/template/layout.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/work_page" element={<WorkPage />} />
          <Route path="/GridPage" element={<GridPage />} />
        </Routes>
      </Layout>
      </BrowserRouter>
);
//<App />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
