# Julie Nichols - Mobile Notary

This web application is designed to provide information about mobile notary services. It includes various sections such as the header, hero section, contact form, services and fees, FAQ section, about section, and footer. Each section is implemented as a separate component.

## Components

### Header
The `Header` component displays the navigation menu and adjusts its appearance when the user scrolls down the page.

### Hero
The `Hero` component showcases a hero section with counties information and contact options. It replaces email and phone strings with clickable links.

### ContactForm
The `ContactForm` component provides a form for users to request a quote and schedule an appointment. It sends an email using the EmailJS service upon submission.

### Services
The `Services` component presents information about meeting services, other services, and associated fees. It provides a clear overview of the services offered.

### AccordionQuestions
The `AccordionQuestions` component displays frequently asked questions in an accordion format, allowing users to expand and collapse answers.

### About
The `About` component showcases information about the business, including titles, text, images, and certification badges.

### Footer
The `Footer` component displays copyright information, links to the developer's portfolio, and payment service logos.

## Installation

1. Clone this repository: `git clone [repository_url]`
2. Navigate to the project directory: `cd [project_directory]`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Dependencies

This project relies on the following dependencies:

- `@emailjs/browser`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/react-fontawesome`
- `@testing-library/jest-dom`
- `@testing-library/react`
- `@testing-library/user-event`
- `date-fns`
- `emailjs-com`
- `eslint`
- `prettier`
- `prop-types`
- `react`
- `react-dom`
- `react-redux`
- `react-scripts`
- `react-transition-group`
- `redux`
- `web-vitals`

## Requirements

- Node.js
- npm (Node Package Manager)

## Usage

After starting the development server, access the web application by visiting `http://localhost:3000` in your web browser.

## Acknowledgments

This web application is built using React and Redux, and various external libraries and services are used for functionality.
