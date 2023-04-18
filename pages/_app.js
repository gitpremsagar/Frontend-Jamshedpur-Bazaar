import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/TopNavigation/NavBar";
import "@/styles/globals.css";
import { Fragment } from "react";
import NavMenu from "@/components/TopNavigation/NavMenu";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <NavBar />
      <NavMenu />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}
