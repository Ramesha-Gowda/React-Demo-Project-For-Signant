import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemsList from './Components/ItemsList';
import EditItem from './Components/EditItem';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route path='/items' exact={true} element={<ItemsList/>}/>
        <Route path='/items/:id' element={<EditItem/>}/>
      </Routes>
    </Router>
  )
}

export default App;