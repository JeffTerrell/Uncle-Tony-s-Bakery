import React from "react";
import PropTypes from "prop-types";

function Order(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenOrderClicked(props.id)}>
        <h3>name: {props.name}</h3>
        <h3>description: {props.description}</h3>
        <h3>quantity: {props.qty}</h3>
        <h3>price: {props.price}</h3>
        <hr/>
     </div>
    </React.Fragment>
  );
}

Order.propTypes = {
  name : PropTypes.string,
  description: PropTypes.string,
  qty: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string, // new PropType
  whenTicketClicked: PropTypes.func // new PropType
};

export default Order;




// MyExampleComponent.propTypes = {
//   exampleArray: PropTypes.array,
//   exampleBoolean: PropTypes.bool,
//   exampleFunction: PropTypes.func,
//   exampleNumber: PropTypes.number,
//   exampleObject: PropTypes.object,
//   exampleString: PropTypes.string,
//   exampleSymbol: PropTypes.symbol,
//   exampleReactElement: PropTypes.element,
//      exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName)
// }