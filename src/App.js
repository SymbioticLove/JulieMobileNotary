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
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="wrapper">
      {/* Redux Provider for store */}
      <Provider store={store}>
        {/* Display header section */}
        <Header />
        {/* Display hero section */}
        <Hero />
        {/* Display contact form */}
        <ContactForm />
        {/* Display services and fees */}
        <Services />
        {/* Display FAQ section */}
        <AccordionQuestions />
        {/* Display about section */}
        <About />
        {/* Display footer section */}
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
