import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/container/main/home/Home';
import Main from './components/container/main/main/Main';
import { routes } from './routes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={routes.ROOT} element={<Home />} />
          <Route path={routes.MAIN} element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
