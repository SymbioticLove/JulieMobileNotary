import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="wrapper">
      <Provider store={store}></Provider>
    </div>
  );
}

export default App;
