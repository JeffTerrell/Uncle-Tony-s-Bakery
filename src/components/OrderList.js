import React from "react";
import Order from "./Order";
import PropTypes from 'prop-types';


function OrderList(props){
  return (
    <React.Fragment>
      {props.orderList.map((order, index) =>
      <Order
        whenOrderClicked = {props.onOrderSelection}
        name={order.name}
        description={order.description}
        qty={order.qty}
        price={order.price}
        id={order.id}
        key={index}
      />
      )}
    </React.Fragment>
  );
}

OrderList.propTypes = {
  OrderList: PropTypes.array,
  onOrderSelection: PropTypes.func
};

export default OrderList;