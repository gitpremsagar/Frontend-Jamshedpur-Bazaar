import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/TopNavigation/NavBar";
import "@/styles/globals.css";
import { Fragment } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}
