import Awards from "./components/Awards";
import AtsCheck from "./components/AtsCheck";
import Contact, { Footer } from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Metrics />
        <Profile />
        <Experience />
        <Skills />
        <Awards />
        <AtsCheck />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
