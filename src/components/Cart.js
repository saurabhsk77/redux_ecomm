import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <Link to="/">
        {" "}
        <span className="breadcrumb">&#60; Back to home</span>
      </Link>
      <div className="cart_row">
        <h1>Cart page</h1>
      </div>
    </div>
  );
};

export default Cart;
