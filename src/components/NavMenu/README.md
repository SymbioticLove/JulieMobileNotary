# NavMenu Component

The NavMenu Component directory contains a component that provides navigation links to scroll to different sections of your web application. These navigation links are typically used in the header for easy access to various sections of the page.

## Component: `NavMenu`

The `NavMenu` component displays a navigation menu with links to scroll to different sections of your web application. It includes the following features:

- Smooth scrolling: Clicking on a navigation link smoothly scrolls the user to the specified section.
- Conditional styling: The appearance of the navigation menu can change based on whether the user has scrolled down the page (`isScrolled` prop).

## Usage

To use the `NavMenu` component in your application, follow these steps:

1. Import the `NavMenu` component into the file where you want to include the navigation menu.

```javascript
import NavMenu from './NavMenu/NavMenu';

// ... other imports ...
```

2. Place the `NavMenu` component in your header or other appropriate location to provide users with easy navigation to different sections of your web page.

```javascript
function App() {
  return (
    <div className="wrapper">
      {/* Include the NavMenu component in your header */}
      <Header />
      {/* ... other components ... */}
    </div>
  );
}

export default App;
```

### Smooth Scrolling

The `NavMenu` component enables smooth scrolling to specified sections of your page. When users click on a navigation link, the page smoothly scrolls to the corresponding section, enhancing the overall user experience.

### Conditional Styling

The appearance of the navigation menu can change based on whether the user has scrolled down the page. This is achieved using the `isScrolled` prop, allowing you to adapt the styling of the navigation menu to different sections of your website.