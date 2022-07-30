import "../App.css";
import { addToCart } from "../reduxcontext/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const product = {
    name: "iphone",
    category: "mobile",
    price: 100000,
    color: "red",
  };
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>add to cart</button>
    </div>
  );
}

export default App;
