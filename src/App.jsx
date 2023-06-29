import { useState } from 'react'
import React from 'react';
import Split from '@uiw/react-split';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AddExpense from './Pages/AddExpense';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/add' element={<AddExpense />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

