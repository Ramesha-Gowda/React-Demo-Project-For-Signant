import React from 'react';
import '../App.css';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import ItemsList from './ItemsList';

const Home = () => {
  return (
    <div>     
      <AppNavbar />
      <Container fluid>
        <h4 style={{color:'blue'}}>Welcome to Signant,Please find Below Items In Your Cart</h4>
        <ItemsList/>
      </Container>
    </div>
  );
}

export default Home;