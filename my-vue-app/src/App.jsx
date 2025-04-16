import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importe seus componentes - verifique se você exporta como default
import { Layout } from './components/Layout';
import { Pagina404 } from './pages/Pagina404'
import { Home } from './pages/Home'


export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          
          {/* Rota 404 */}
          <Route path="*" element={<Pagina404 />} />
        </Route>
      </Routes>
    </Router>
  );
}