import "./App.scss";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import { useRef, useState } from "react";

function App() {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const [lightTheme, setLightTheme] = useState(false);

  return (
    <div className={lightTheme ? "App light" : "App"}>
      <Nav
        lightTheme={lightTheme}
        setLightTheme={setLightTheme}
        refHeader={headerRef}
        refAbout={aboutRef}
        refExperience={experienceRef}
        refContact={contactRef}
      />
      <main>
        <Header
          lightTheme={lightTheme}
          refHeader={headerRef}
          refContact={contactRef}
        />
        <About refAbout={aboutRef} />
        <Experience refExperience={experienceRef} />
        <Contact lightTheme={lightTheme} refContact={contactRef} />
      </main>
    </div>
  );
}

export default App;
