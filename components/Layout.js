// Importing the necessary components
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

// Defining the Layout component
const Layout = ({ children }) => {
  return (
    <>
      {/* Setting the title and favicon */}
      <Head>
        <title>NextJS Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Rendering the Header component */}
      <Header />

      {/* Rendering the main content */}
      <main>{children}</main>

      {/* Rendering the Footer component */}
      <Footer />
    </>
  );
};

export default Layout;