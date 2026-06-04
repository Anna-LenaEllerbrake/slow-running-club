import Router from "preact-router";
import Footer from "./Footer.jsx";
import Home from "./pages/Home.jsx";
import Datenschutz from "./pages/Datenschutz.jsx";
import Faq from "./pages/Faq.jsx";
import Impressum from "./pages/Impressum.jsx";
import NeuHier from "./pages/NeuHier.jsx";
import SlowRunning from "./pages/SlowRunning.jsx";

export default function App() {
  return (
    <>
      <Router>
        <Home path="/" />
        <NeuHier path="/neu-hier" />
        <SlowRunning path="/was-ist-slow-running" />
        <Faq path="/faq" />
        <Impressum path="/impressum" />
        <Datenschutz path="/datenschutz" />
      </Router>
      <Footer />
    </>
  );
}
