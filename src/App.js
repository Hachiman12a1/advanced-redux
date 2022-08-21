import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const showcart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("https://react-http-e2f8d-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {showcart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
