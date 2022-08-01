import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

import TextField from "@mui/material/TextField";

const ItemsList = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    axios.get('api/items')
      .then(response => {
        debugger
        setItems(response.data);
        setLoding(false);
      })
      .catch(err => console.log(err))
  }, []);

  const remove = async (id) => {
    axios.delete(`/api/items/${id}`)
      .then(() => {
        let updatedItemList = [...items].filter(i => i.id !== id);
        setItems(updatedItemList);
      });
  }

  const searchHandler = (event) => {
    debugger
    let searchString = event.target.value;
    if (searchString) {
      axios.get(`/api/items/getByName`, { params: { name: searchString } })
        .then(res => {
          if (res.data != null) {
            setItems([])
            let result = [];
            result.push(res.data);
            debugger
            setItems(result);
          }
        })
        .catch(err => {
          return err;
        })
    } else {
      setLoding(true);
      axios.get('api/items')
        .then(response => {
          debugger
          setItems(response.data);
          setLoding(false);
        })
        .catch(err => console.log(err))
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const itemsList = items && items.map(item => {
    return <tr key={item.id}>
      <td style={{ whiteSpace: 'nowrap' }}>{item.id}</td>
      <td style={{ whiteSpace: 'nowrap' }}>{item.name}</td>
      <td style={{ whiteSpace: 'nowrap' }}>{item.quantity}</td>
      <td style={{ whiteSpace: 'nowrap' }}>{item.item_type}</td>
      <td style={{ whiteSpace: 'nowrap' }}>{item.price}</td>
      <td>
        <ButtonGroup>
          <Button size="sm" color="primary" tag={Link} to={"/items/" + item.id}>Edit</Button>
          <Button size="sm" color="danger" onClick={() => remove(item.id)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  });

  return (
    <div>
      <Container fluid>
        <div className="float-end">
          <Button color="success" tag={Link} to="/items/new">Add New Item</Button>
        </div>
        <div className="search">
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            onChange={searchHandler}
            label="Search By Name"
          />
        </div>
        <Table className="mt-4" striped border="1">
          <thead>
            <tr>
              <th width="10%">Id</th>
              <th width="10%">Name</th>
              <th width="10%">Quantity</th>
              <th width="10%">Type</th>
              <th width="10%">Price</th>
              <th width="10%">Action</th>
            </tr>
          </thead>
          <tbody>
            {itemsList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ItemsList;