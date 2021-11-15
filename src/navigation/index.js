import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { connect } from "react-redux";

import { getProducts } from "services/products";
import { getOrders } from "services/orders";
import { addProduct } from "store/actions/products";
import { addOrder } from "store/actions/orders";
import SideBar from "components/navigation/Sidebar";
import Home from "pages/Home";
import Orders from "pages/Orders";
import Products from "pages/Products";

const Navigation = (props) => {
  React.useEffect(() => {
    (async () => {
      const products = await getProducts();
      const orders = await getOrders();
      if (products) {
        props.addProductHandler(products);
      }
      if (orders) {
        props.addOrderHandler(orders);
      }
    })();
  }, []);
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/orders" exact element={<Orders />} />
        </Routes>
      </SideBar>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  addProductHandler: (data) => dispatch(addProduct(data)),
  addOrderHandler: (data) => dispatch(addOrder(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
