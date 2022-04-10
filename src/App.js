import "./App.scss";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import { useState } from "react";

function App() {
  const [lightTheme, setLightTheme] = useState(false);

  return (
    <div className={lightTheme ? "App light" : "App"}>
      <Nav lightTheme={lightTheme} setLightTheme={setLightTheme} />
      <main>
        <Header lightTheme={lightTheme} />
        <About />
        <Experience />
        <Contact lightTheme={lightTheme} />
      </main>
    </div>
  );
}

export default App;
