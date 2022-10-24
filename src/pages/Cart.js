import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";

function Cart(props) {
  const products = useSelector((state) => state.cartReducer.cartItems);

  return (
    <div className="container">
      {products.length === 0 && <h1>Cart is empty</h1>}
      <div className="row">
        {products.map((product) => (
          <div className="col-3">
            <Card
              title={product["title"]}
              description={product["description"]}
              image={product["image"]}
              isInCart={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;

// const [products, setProducts] = useState(
//   JSON.parse(localStorage.getItem("cart"))
// );
// useEffect(() => {
//   setProducts(JSON.parse(localStorage.getItem("cart")));
// }, []);
// useEffect(() => {
//   setProducts(JSON.parse(localStorage.getItem("cart")));
// }, [products]);
