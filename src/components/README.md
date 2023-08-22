# Components

The Components directory contains various components that make up the different sections of your mobile notary application. These components are designed to provide a seamless and interactive user experience.

## Components

- `Header`: Displays the `NavMenu` component and adjusts its appearance when the user scrolls down the page.
- `NavMenu`: Displays the navigation links for the page and handles scrolling behavior.
- `Hero`: Showcases a hero section with information about services, counties served, and contact options.
- `ContactForm`: Provides a form for users to request a quote and schedule an appointment. Sends an email using the EmailJS service upon submission.
- `Services`: Presents information about meeting locations, services provided, and associated fees.
- `AccordionQuestions`: Displays frequently asked questions in an accordion format, allowing users to expand and collapse answers.
- `About`: Showcases information about the business and the mobile notary professional.
- `Footer`: Displays copyright information, links to the developer's portfolio, and payment service logos.

## Usage

To use these components, import them into the relevant files where you want to include them. For example:

```javascript
import Header from './Header/Header';
import Hero from './Hero/Hero';
// Import other components similarly

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      {/* Include other components here */}
    </div>
  );
}

export default App;
```

The Components directory houses individual components that contribute to the overall functionality and appearance of your mobile notary application. These components can be combined to create various sections of the app, providing a smooth and engaging user experience.
