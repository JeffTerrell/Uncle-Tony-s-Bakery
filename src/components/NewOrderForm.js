import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewOrderForm(props) {

    function handleNewOrderFormSubmission(event) {
      event.preventDefault();
      props.onNewOrderCreation({name: event.target.name.value, description: event.target.description.value, qty: event.target.qty.value, price: event.target.price.value, id: v4()});
    }
    
  return (
    <React.Fragment>
      <form onSubmit={handleNewOrderFormSubmission}>
        <input
            type='text'
            name='name'
            placeholder='Your name'
        />
        <input
            type='text'
            name='description'
            placeholder='Description'
        />
        <input
            type='number'
            name='qty'
            placeholder='5'
        />
        
        <input
          type='number'
          name='price'
          placeholder='3.00' 
        />
      
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  )
}

NewOrderForm.propTypes = {
  onNewOrderCreation: PropTypes.func
}

export default NewOrderForm;