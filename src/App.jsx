import Router from "preact-router";
import Footer from "./Footer.jsx";
import Home from "./pages/Home.jsx";
import Datenschutz from "./pages/Datenschutz.jsx";
import Impressum from "./pages/Impressum.jsx";

export default function App() {
  return (
    <>
      <Router>
        <Home path="/" />
        <Impressum path="/impressum" />
        <Datenschutz path="/datenschutz" />
      </Router>
      <Footer />
    </>
  );
}
