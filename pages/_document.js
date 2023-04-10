import Footer from "@/components/Footer/Footer";
import CategoriesNavBar from "@/components/TopNavigation/CategoriesNavBar";
import NavBar from "@/components/TopNavigation/NavBar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <NavBar />
        <CategoriesNavBar /> */}
        <Main />
        {/* <Footer /> */}
        <NextScript />
      </body>
    </Html>
  );
}
