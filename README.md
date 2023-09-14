 <img src="/src/assets/boiler.svg" alt="Project Banner Image">

# Vite + React + Zuzstand State Management Technigo Boilerplate

Welcome to the `technigo-zustand-boiler-plate`!

Welcome to the React Zustand Boilerplate! This repository provides a foundational setup for integrating Zustand with React, allowing you to manage state in a more straightforward and efficient manner.

## Demo

[You can check out a Demo of this boilerplate here.](https://react-vite-zustand-boiler-plate.netlify.app/)

## Getting Started

1.  Clone the repository to your local machine.
2.  Install the required dependencies using `npm install`.
3.  Start the development server using `npm run dev`.

## Navigating the Repository

### App Structure

### App Component

- (`src/App.jsx`): This is the main component that renders the `Logos` and `ComponentWithStore` components.

### ComponentWithStore (`src/components/ComponentWithStore.jsx`):

- This component showcases how to utilize the Zustand store. It displays various data types and provides interactive elements to manipulate the state. Here's a brief overview of its functionalities:

- Toggle login status.
- Increment age.
- Update username.
- Add hobbies.
- Change address.
- Set a favorite sports team.

### Zustand Store (`src/stores/storeExample.jsx`):

- This is where the magic happens! The store is created using Zustand's `create` method. It contains various state properties and methods to update them. The store includes:

  - App content with headings and descriptions.
  - User's login status, age, username, hobbies, address, and favorite sports team.
  - Methods to toggle login, increment age, update username, add hobbies, change address, and set a favorite sports team.

---

Tip: Before you decide to delete all components and start from scratch, we suggest examining them closely to grasp their structure. They can act as a blueprint for your future work.

---

Zustand offers a clean and efficient way to manage state in React applications. This boilerplate provides a practical example of how to use Zustand in your projects.

We hope this guide helps you navigate and make the most out of this boilerplate.

Happy coding, Technigo students!
