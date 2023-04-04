import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { TodoRedux } from '../pages/TodoRedux';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redux" element={<TodoRedux />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
