import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/TopNavigation/NavBar";
import "@/styles/globals.css";
import { Fragment } from "react";
import NavMenu from "@/components/TopNavigation/NavMenu";
import NavMenuCopy from "@/components/TopNavigation/NavMenuCopy";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <NavBar />
      <NavMenu />
      <NavMenuCopy />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}
