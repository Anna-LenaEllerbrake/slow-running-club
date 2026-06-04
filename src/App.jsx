import Router from "preact-router";
import Footer from "./Footer.jsx";
import Home from "./pages/Home.jsx";
import Datenschutz from "./pages/Datenschutz.jsx";
import Faq from "./pages/Faq.jsx";
import Impressum from "./pages/Impressum.jsx";
import NeuHier from "./pages/NeuHier.jsx";

export default function App() {
  return (
    <>
      <Router>
        <Home path="/" />
        <NeuHier path="/neu-hier" />
        <Faq path="/faq" />
        <Impressum path="/impressum" />
        <Datenschutz path="/datenschutz" />
      </Router>
      <Footer />
    </>
  );
}
