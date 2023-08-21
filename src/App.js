import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ContactForm from './components/ContactForm/ContactForm';
import Services from './components/Services/Services';
import AccordionQuestions from './components/AccordionQuestions/AccordionQuestions';
import About from './components/About/About';

function App() {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <Header />
        <Hero />
        <ContactForm />
        <Services />
        <AccordionQuestions />
        <About />
      </Provider>
    </div>
  );
}

export default App;
