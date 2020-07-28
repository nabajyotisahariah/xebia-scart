import React from 'react';
import {Provider} from 'react-redux'
//import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import store from './redux/store'
import ProductListing from './components/ProductListing';
import { BrowserRouter, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {

  return (
    <Provider store={store}>      
      <div className="App">        
        <BrowserRouter> 
          
          <Route path="/" component={Login}/>
          <Route path="/product" component={ProductListing}/>
          {/*<Login/>
          <ProductListing/>*/}
        </BrowserRouter>  
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
