import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Col, Form, Row, Button } from 'react-bootstrap';
import Input from './Input';
import { GlobalContext } from '../context/GlobalProvider';

const SELECT_ID = 'customer_checkout__select-seller';
const ADDRESS_ID = 'customer_checkout__input-address';
const NUMBER_ID = 'customer_checkout__input-addressNumber';
const SUBMIT_ID = 'customer_checkout__button-submit-order';

function FormCheckout({ values }) {
  const { sellers, products, totalPrice } = values;
  const [seller, setSeller] = useState(sellers[0].id);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  const {
    functions: { setTotalPrice },
  } = useContext(GlobalContext);

  function handleSelect(event) {
    setSeller(event.target.value);
  }

  const history = useHistory();
  function handleButton() {
    const productList = products.map(({ id, quantity }) => ({ id, quantity }));
    const newSale = {
      sellerId: seller,
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: number,
      status: 'Pendente',
      productList,
    };

    localStorage.setItem('carrinho', JSON.stringify({}));
    setTotalPrice(0);
    const user = localStorage.getItem('user');
    const { token } = JSON.parse(user);

    axios({
      method: 'post',
      url: 'http://127.0.0.1:3001/customer/checkout',
      headers: { authorization: token },
      data: newSale,
    }).then(({ data: { id } }) => history.push(`/customer/orders/${id}`));
  }

  return (
    <Form as={ Row }>
      <legend>Detalhes e Endereço para Entrega</legend>
      <Form.Group as={ Col } md={ { span: 4 } }>
        <span>P. Vendedora Responsável</span>
        <select
          className="form-control"
          data-testid={ SELECT_ID }
          onChange={ handleSelect }
        >
          { sellers.map(({ id, name }) => (
            <option key={ id } value={ id }>
              { name }
            </option>
          )) }
        </select>
      </Form.Group>
      <Form.Group as={ Col } md={ { span: 3 } }>
        <Input
          className="form-control"
          testid={ ADDRESS_ID }
          legend="Endereço"
          onChange={ setAddress }
          value={ address }
        />
      </Form.Group>
      <Form.Group as={ Col } md={ { span: 2 } }>
        <Input
          className="form-control"
          testid={ NUMBER_ID }
          legend="Número"
          onChange={ setNumber }
          value={ number }
        />
      </Form.Group>
      <Form.Group
        className="pt-2 d-flex justify-content-center"
        as={ Col }
        md={ { span: 3 } }
      >
        <Button
          className="mt-3"
          size="md"
          type="button"
          data-testid={ SUBMIT_ID }
          onClick={ handleButton }
        >
          Finalizar pedido
        </Button>
      </Form.Group>
    </Form>
  );
}

FormCheckout.propTypes = {
  values: PropTypes.shape({
    sellers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ).isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        quantity: PropTypes.number,
      }),
    ).isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,

};

export default FormCheckout;
