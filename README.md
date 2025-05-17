# 3D Planets

This project is a 3D interactive planetary experience built with React, Three.js, and Vite. It allows users to explore different planets, view their details, and enjoy a visually rich interface.

## Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Project Structure](#project-structure)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Running the Development Server](#running-the-development-server)
    -   [Building for Production](#building-for-production)
-   [Deployment](#deployment)
-   [Texture Sources](#texture-sources)
-   [Key Components Overview](#key-components-overview)
-   [Contributing](#contributing)
-   [License](#license)
-   [Acknowledgements](#acknowledgements)

## Features

-   Interactive 3D visualization of planets.
-   Smooth scrolling and animations using GSAP and Framer Motion.
-   Routing for different planet views using React Router.
-   Responsive design for various screen sizes.
-   Optimized asset loading and performance.
-   [Add any other key features of your project]

## Tech Stack

**Frontend:**

-   **React:** A JavaScript library for building user interfaces.
-   **Three.js:** A 3D graphics library for creating and displaying animated 3D computer graphics in a web browser.
    -   **@react-three/fiber:** A React renderer for Three.js.
    -   **@react-three/drei:** A collection of useful helpers and abstractions for @react-three/fiber.
    -   **@react-three/postprocessing:** Postprocessing effects for @react-three/fiber.
-   **Vite:** A fast frontend build tool.
-   **React Router DOM:** For declarative routing in React applications.
-   **GSAP (GreenSock Animation Platform):** For high-performance animations.
    -   **@gsap/react:** React wrapper for GSAP.
-   **Framer Motion:** A production-ready motion library for React.
-   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
-   **@studio-freight/lenis & @studio-freight/react-lenis:** For smooth scrolling effects.
-   **Swiper:** For touch sliders.
-   **react-lottie-player:** For rendering Lottie animations.

**Development Tools:**

-   **ESLint:** For static code analysis and linting.
-   **PostCSS:** A tool for transforming CSS with JavaScript plugins.
-   **Autoprefixer:** A PostCSS plugin to parse CSS and add vendor prefixes.

## Project Structure

```
.
├── public/                  # Static assets (e.g., planet.png)
├── src/
│   ├── assets/              # Images, textures, videos
│   ├── components/          # Reusable UI components
│   ├── constants/           # Project-wide constants (e.g., API endpoints, colors)
│   ├── PlanetsComponents/   # Components specific to rendering planets
│   ├── routes/              # Components for different application routes
│   ├── sections/            # Larger page sections or views
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main application component with routing
│   ├── index.css            # Global CSS styles
│   └── main.jsx             # Entry point of the React application
├── .eslintrc.cjs            # ESLint configuration
├── .gitignore               # Specifies intentionally untracked files that Git should ignore
├── index.html               # Main HTML file
├── package.json             # Project metadata and dependencies
├── postcss.config.js        # PostCSS configuration
├── README.md                # This file
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite configuration
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (LTS version recommended)
-   npm (comes with Node.js) or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/insertfahim/3d-planets.git
    cd 3d-planets
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

### Running the Development Server

To start the development server, run:

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

This will typically start the application on `http://localhost:5173`. Vite will provide the correct URL in the terminal.

### Building for Production

To create an optimized build of the application for production, run:

Using npm:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

The project is configured for deployment using Vercel. You can deploy by running:

```bash
npm run deploy
```

Alternatively, connect your Git repository to Vercel for automatic deployments.

## Texture Sources

The textures used in this project were sourced from:

-   [SolarSystem Scope](https://www.solarsystemscope.com/textures/)
-   [3dtextures.me](https://3dtextures.me/)
-   [Blender guru blender tutorial (Dropbox)](https://www.dropbox.com/sh/1rxblwi19i78ieh/AADNsHNRA7SysJ015GkXplewa?dl=0) (related to [this YouTube tutorial](https://www.youtube.com/watch?v=0YZzHn0iz8U&ab_channel=BlenderGuru))
-   [Poliigon - Blender Guru's website](https://www.poliigon.com/textures/free)

## Key Components Overview

-   **`App.jsx`**: The main application component that sets up routing using `react-router-dom`. It wraps the application with `ReactLenis` for smooth scrolling.
-   **`src/PlanetsComponents/EarthView.jsx`**: A key component responsible for rendering the Earth model, including its textures, clouds, and lighting. It utilizes `THREE.LoadingManager` to handle texture loading states and `OrbitControls` for camera manipulation. The `README.md` previously mentioned to "Have a look at EarthView.jsx for the explanation".
-   **`vite.config.js`**: Configuration file for Vite, primarily setting up the React plugin.
-   **`package.json`**: Defines project scripts (dev, build, lint, preview, deploy) and lists all dependencies and devDependencies.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

Please make sure to update tests as appropriate.

## License

Distributed under the [MIT License](LICENSE.txt). See `LICENSE.txt` for more information. (You'll need to create a LICENSE.txt file if you choose this license, or specify another).

## Acknowledgements

-   The creators of the libraries and tools used in this project.
-   The providers of the textures.
