import React from 'react';
import {Provider} from 'react-redux'
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login/>
      </div>
    </Provider>
  );
}

export default App;
