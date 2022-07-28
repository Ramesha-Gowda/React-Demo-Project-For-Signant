import React from 'react';
import '../App.css';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <Button color="link"><Link to="/items"><h5>Click Here to View all Items in Cart</h5></Link></Button>
      </Container>
    </div>
  );
}

export default Home;