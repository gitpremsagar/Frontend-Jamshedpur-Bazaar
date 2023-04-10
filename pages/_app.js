import Footer from "@/components/Footer/Footer";
import CategoriesNavBar from "@/components/TopNavigation/CategoriesNavBar";
import NavBar from "@/components/TopNavigation/NavBar";

import "@/styles/globals.css";
import { Fragment } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <NavBar />
      <CategoriesNavBar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}
