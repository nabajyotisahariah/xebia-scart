import React from "react";
import { Provider } from "react-redux";
//import logo from './logo.svg';
import Login from "./components/Login";
import store from "./redux/store";
import ProductListing from "./components/ProductListing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import Wrapper from "./components/Wrapper";

//https://www.tutorialspoint.com/reactjs/reactjs_router.htm

//How to use environment variables in react application
//https://www.youtube.com/watch?v=ukGeell7tS0
console.log("process.env ",process.env)
console.log(" -NODE_ENV- ",process.env.NODE_ENV,"  -PUBLIC_URL- ",process.env.PUBLIC_URL)
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route  path="/" component={Wrapper}>
            <Route path="/product" exact component={ProductListing} />
            <Route path="/" exact component={Login} />          
          </Route> 
          {/*<Login/>
          <ProductListing/>*/}
        </Router>
        {/*<Footer/>*/}
      </div>
    </Provider>
  );
}

export default App;
