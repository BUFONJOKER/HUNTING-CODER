import "@/styles/globals.css";
import Navbar from "../components/Navbar"
import Heading from "@/components/Heading";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Heading/>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
