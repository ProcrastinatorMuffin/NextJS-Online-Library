# Online Library NextJS App

The Online Library NextJS App is an interactive e-library application built with Next.js and styled using Tailwind CSS. It allows users to explore and search for books, inspect additional details of each book, and enjoy toggling between different themes.

## Features

- **Book Search**: Users can search for books by typing any text into the search bar. The application will display any books whose title or author matches the search text.
- **Book Details**: Users can view detailed information about each book by clicking on its card. This will redirect the user to a dynamic route for that particular book.
- **Theme Toggle**: Users can toggle between light and dark themes by clicking on the icon in the header.

## Getting Started

### Local Environment

To run the app in your local environment, follow these steps:

1. Clone the repository: 
    ```bash
    git clone https://github.com/ProcrastinatorMuffin/NextJS-Online-Library
    ```
2. Navigate to the project directory: 
    ```bash
    cd your-repo
    ```
3. Install dependencies: 
    ```bash
    npm install
    ```
4. Start the development server: 
    ```bash
    npm run dev
    ```

### Docker

To run the app using Docker, you have two options:

#### Option 1: Build and Run Locally

Follow these steps:

1. Clone the repository: 
    ```bash
        git clone https://github.com/ProcrastinatorMuffin/NextJS-Online-Library
    ```
2. Navigate to the project directory: 
    ```bash
    cd your-repo
    ```
3. Build the Docker image: 
    ```bash
    docker build -t your-repo .
    ```
4. Run the Docker container: 
    ```bash
    docker run -p 3000:3000 your-repo
    ```

The application will be available at `http://localhost:3000`.

#### Option 2: Pull and Run from Docker Hub

If you prefer to pull the Docker container directly from Docker Hub, follow these steps:

1. Pull the Docker image: 
    ```bash
    docker pull danilsholudko/online-lib-next-app
    ```
2. Run the Docker container: 
    ```bash
    docker run -p 3000:3000 danilsholudko/online-lib-next-app
    ```

The application will be available at `http://localhost:3000`.

## Code Structure

- `pages/`: This directory contains all the pages of the application. Each file corresponds to a route based on its name.
    - `_app.js`: This is the main component that wraps all page components.
    - `index.js`: This is the entry point of the application, corresponding to the `/` route.
    - `book/[title]/index.js`: This is a dynamic route that displays details for a specific book.

- `components/`: This directory contains reusable React components.

- `public/`: This directory contains static assets such as images.

- `styles/`: This directory contains CSS or SCSS styles.

- `data/`: This directory contains data files.
    - `books.json`: This file contains data for books.



