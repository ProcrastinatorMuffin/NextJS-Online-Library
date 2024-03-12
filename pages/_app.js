// Importing necessary dependencies
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";

// Defining the main app component
const MyApp = ({ Component, pageProps }) => {
  return (
    // Wrapping the app with the theme provider
    <ThemeProvider attribute="class">
      {/* Wrapping the app with the layout component */}
      <Layout>
        {/* Rendering the component with the provided page props */}
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;