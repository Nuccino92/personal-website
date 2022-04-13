import { useEffect, useRef, useState } from "react";
import "./Nav.scss";
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Nav = ({
  lightTheme,
  setLightTheme,
  refHeader,
  refAbout,
  refExperience,
  refContact,
}) => {
  const navRef = useRef(null);

  const [smallNav, setSmallNav] = useState(false);

  const handleClick = () => {
    setLightTheme((prev) => !prev);
  };

  const handleHeaderScroll = () => {
    refHeader.current.scrollIntoView({ behavior: "smooth" });
    setSmallNav(false);
  };

  const handleAboutScroll = () => {
    refAbout.current.scrollIntoView({ behavior: "smooth" });
    setSmallNav(false);
  };

  const handleExperienceScroll = () => {
    refExperience.current.scrollIntoView({ behavior: "smooth" });
    setSmallNav(false);
  };

  const handleContactScroll = () => {
    refContact.current.scrollIntoView({ behavior: "smooth" });
    setSmallNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = navRef.current;
      nav.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);

  return (
    <>
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
        <h1 onClick={handleHeaderScroll}>AN</h1>
        <ul>
          <li onClick={handleAboutScroll}>About</li>
          <li onClick={handleExperienceScroll}>Experience</li>
          <li onClick={handleContactScroll}>Contact</li>

          {lightTheme ? (
            <BsFillMoonStarsFill
              className="change-theme moon"
              size={21}
              onClick={handleClick}
            />
          ) : (
            <FiSun
              className="change-theme sun"
              size={21}
              onClick={handleClick}
            />
          )}
          <GiHamburgerMenu
            className="hamburger"
            size={33}
            onClick={() => setSmallNav(true)}
          />
        </ul>
      </div>
      {smallNav && (
        <div className="nav-modal">
          <div className="side-nav">
            <ul>
              <GrClose
                size={33}
                color={"white"}
                onClick={() => setSmallNav(false)}
                className="close"
              />
              <li onClick={handleAboutScroll}>About</li>
              <li onClick={handleExperienceScroll}>Experience</li>
              <li onClick={handleContactScroll}>Contact</li>

              {lightTheme ? (
                <BsFillMoonStarsFill
                  className="change-theme moon"
                  size={21}
                  onClick={handleClick}
                  style={{ display: "initial", color: "white" }}
                />
              ) : (
                <FiSun
                  style={{ display: "initial", color: "white" }}
                  className="change-theme sun"
                  size={21}
                  onClick={handleClick}
                />
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
