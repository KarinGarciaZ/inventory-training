import React from 'react';
import './App.css';
import Form from './components/form';
import Products from './components/products';
import {Provider} from './stores/store'

function App() {
  return (
    <Provider>
      <div className="container">
        <nav className="header" />
        <div className="sidebar" />
        <div className="todo-container">
          <Form />
          <Products />
        </div>
      </div>
    </Provider>
  );
}

export default App;
