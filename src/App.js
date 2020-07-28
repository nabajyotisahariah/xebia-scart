import React from "react";
import { Provider } from "react-redux";
//import logo from './logo.svg';
import Login from "./components/Login";
import store from "./redux/store";
import ProductListing from "./components/ProductListing";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Route path="/product" exact component={ProductListing} />
          <Route path="/" exact component={Login} />          
          {/*<Login/>
          <ProductListing/>*/}
        </BrowserRouter>
        {/*<Footer/>*/}
      </div>
    </Provider>
  );
}

export default App;
