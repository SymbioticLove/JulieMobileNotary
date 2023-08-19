import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
