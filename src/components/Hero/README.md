# Hero Component

The Hero Component directory contains a component that showcases the hero section of your web application. The hero section includes information about the counties served and contact options, allowing users to easily reach out to you via email or phone.

## Component: `Hero`

The `Hero` component displays the hero section of your web application. It includes the following elements:

- Counties served: Information about the counties where your mobile notary services are available.
- Hero text: A personalized message providing an overview of your services and inviting users to contact you.
- Contact buttons: Buttons that allow users to quickly reach out to you via email or phone.

## Usage

To use the `Hero` component in your application, follow these steps:

1. Import the `Hero` component into the file where you want to include the hero section.

```javascript
import Hero from './Hero/Hero';

// ... other imports ...
```

2. Place the `Hero` component in a prominent location, such as the top of your homepage, to capture users' attention and encourage them to take action.

```javascript
function App() {
  return (
    <div className="wrapper">
      <Hero />
      {/* ... other components ... */}
    </div>
  );
}

export default App;
```

### Dynamic Content Links

The `Hero` component dynamically generates contact links for email and phone. It replaces placeholder strings in the hero text with clickable links. Users can easily contact you by clicking on the "Email Me" and "Call Me" buttons.

### Counties Served Information

The hero section prominently displays the counties you serve, providing users with essential information about the areas where your mobile notary services are available.