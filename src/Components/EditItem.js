import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from '../AppNavbar';

const EditItem = () => {
  const initialFormState = {
    id: 0,
    name: '',
    quantity: '',
    item_type: '',
    price: 0.00
  };
  const [item, setItem] = useState(initialFormState);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id !== 'new') {
      axios.get(`/api/items/${id}`)
        .then(res => {
          debugger
          setItem(res.data)
        });
    }
  }, [id, setItem]);

  const handleChange = (event) => {
    const { name, value } = event.target

    setItem({ ...item, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    debugger
    await fetch('/api/items' + (item.id ? '/' + item.id : ''), {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });
    setItem(initialFormState);
    navigate('/items');
  }

  const title = <h2>{item.id ? 'Edit Group' : 'Add Group'}</h2>;

  return (<div>
    <AppNavbar />
    <Container>
      {title}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="id">Id</Label>
          <Input type="number" name="id" id="id" value={item.id || ''}
            onChange={handleChange} autoComplete="id" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" value={item.name || ''}
            onChange={handleChange} autoComplete="name" />
        </FormGroup>
        <FormGroup>
          <Label for="quantity">Quantity</Label>
          <Input type="text" name="quantity" id="quantity" value={item.quantity || ''}
            onChange={handleChange} autoComplete="quantity" />
        </FormGroup>
        <FormGroup>
          <Label for="item_type">Type</Label>
          <Input type="text" name="item_type" id="item_type" value={item.item_type || ''}
            onChange={handleChange} autoComplete="Type" />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input type="double" name="price" id="price" value={item.price || ''}
            onChange={handleChange} autoComplete="price" />
        </FormGroup>
        <FormGroup>
          <Button color="primary" type="submit">Save</Button>{' '}
          <Button color="secondary" tag={Link} to="/items">Cancel</Button>
        </FormGroup>
      </Form>
    </Container>
  </div>
  )
};

export default EditItem;