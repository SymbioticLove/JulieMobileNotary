import React from 'react';
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
      <Provider store={store}>
        <Header />
        <Hero />
        <ContactForm />
        <Services />
        <AccordionQuestions />
        <About />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
