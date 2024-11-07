/* eslint-disable no-unused-vars */
import React from 'react';
import Home from './pages/Home';
import ActivityDetail from './pages/ActivityDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/activity/:id' element={<ActivityDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
