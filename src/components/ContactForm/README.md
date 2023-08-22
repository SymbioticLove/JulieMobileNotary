# Contact Form Component

The Contact Form Component directory contains a component that displays a form allowing users to request a quote and schedule an appointment. Users can provide their information and select a date/time for their appointment. Upon submission, the form sends an email using the EmailJS service.

## Usage

To use the `ContactForm` component in your application, follow these steps:

1. Import the `ContactForm` component into the file where you want to include the contact form.

```javascript
import ContactForm from './ContactForm/ContactForm';

// ... other imports ...
```

2. Place the `ContactForm` component within your layout, such as in the main content area of your application.

```javascript
function App() {
  return (
    <div className="wrapper">
      {/* ... other components ... */}
      <ContactForm />
      {/* ... other components ... */}
    </div>
  );
}

export default App;
```