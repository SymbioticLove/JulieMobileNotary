# Footer Component

The Footer Component directory contains a component that displays the footer section of your web application. The footer includes copyright information, links to the developer's portfolio, and logos of payment service providers. It also provides information about accepted payment methods.

## Component: `Footer`

The `Footer` component displays the footer section of your web application. It includes the following elements:

- Modified copyright text with a link to the developer's portfolio.
- Logos of payment service providers (Cash App, PayPal, Venmo, Zelle).
- Information about accepted payment methods (cash and certified check).

## Usage

To use the `Footer` component in your application, follow these steps:

1. Import the `Footer` component into the file where you want to include the footer section.

```javascript
import Footer from './Footer/Footer';

// ... other imports ...
```

2. Place the `Footer` component at the bottom of your layout, such as in the main content area or a dedicated footer area.

```javascript
function App() {
  return (
    <div className="wrapper">
      {/* ... other components ... */}
      <Footer />
    </div>
  );
}

export default App;
```