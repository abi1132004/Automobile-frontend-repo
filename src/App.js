import React, { Component } from 'react';
import Post from './Post';
import Get from './Get';
import Crud from './Crud';
import Put from './Put';
import Delete from './Delete';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Crud/>}/>
        <Route path="/Post" element={<Post/>}/>
        <Route path="/Put" element={<Put/>}/>
        <Route path="/Delete" element={<Delete/>}/>
        <Route path="/Get" element={<Get/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
