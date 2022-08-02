import { useEffect } from "react";
import "../App.css";
import { addToCart, removeFromCart } from "../reduxcontext/action";
import { productList } from "../reduxcontext/productAction";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productData);
  console.warn("data", productData);
  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div>
      <div className="products">
        {productData.map((item) => {
          const { image, name, price, id } = item;
          return (
            <div className="product_item" key={id}>
              <img src={image} alt="" />
              <h3>Name: {name}</h3>
              <h3>Price: {price}</h3>
              <button onClick={() => dispatch(addToCart(item))}>
                add to cart
              </button>
              <button onClick={() => dispatch(removeFromCart(id))}>
                Remove from cart
              </button>
              {/* <div>
                <input
                  type="number"
                  name="quantity"
                  onChange={(e) => console.log(e.target.value)}
                  min={1}
                  max={4}
                />
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
