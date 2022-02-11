import React from "react";
import PropTypes from "prop-types";

function OrderDetail(props){
  const { order } = props;
  return (
    <React.Fragment>
      <h1>Order Detail</h1>
      <h3>Order: {order.name} : Description: {order.description}</h3>
      <h3>Qauntity: {order.qty} : Price: {order.price}</h3>
      <hr/>
    </React.Fragment>
  );
}
OrderDetail.propTypes = {
  order: PropTypes.object
};

export default OrderDetail;