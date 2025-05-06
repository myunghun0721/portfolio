import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
