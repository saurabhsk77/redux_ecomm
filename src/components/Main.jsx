import { useEffect } from "react";
import "../App.css";
import { addToCart, clearCart } from "../reduxcontext/action";
import { productList } from "../reduxcontext/productAction";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productData);
  console.warn("data", productData);
  const product = {
    name: "iphone",
    category: "mobile",
    price: 100000,
    color: "red",
  };
  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>add to cart</button>
      <button onClick={() => dispatch(clearCart())}>clear cart</button>
      {/* <button onClick={() => dispatch(productList())}>product list</button> */}
      <div style={{ display: "flex", flexDirection: "column", margin: "20px" }}>
        {productData.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </div>
    </div>
  );
}

export default App;
