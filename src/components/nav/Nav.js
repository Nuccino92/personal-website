import { useEffect, useRef } from "react";
import "./Nav.scss";
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Nav = ({ lightTheme, setLightTheme }) => {
  const navRef = useRef(null);

  const handleClick = () => {
    setLightTheme((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = navRef.current;
      nav.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);

  return (
    <div
      className="Nav"
      style={
        lightTheme
          ? { backgroundColor: "white" }
          : { backgroundColor: "rgb(24, 24, 24)" }
      }
      ref={navRef}
    >
      {/* logo */}
      <h1>AN</h1>
      <ul>
        <li>About</li>
        <li>Experience</li>
        <li>Contact</li>

        {lightTheme ? (
          <BsFillMoonStarsFill
            className="change-theme moon"
            size={21}
            onClick={handleClick}
          />
        ) : (
          <FiSun className="change-theme sun" size={21} onClick={handleClick} />
        )}
      </ul>
    </div>
  );
};

export default Nav;
