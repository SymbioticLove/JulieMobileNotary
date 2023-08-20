import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <Header />
        <Hero />
      </Provider>
    </div>
  );
}

export default App;
