import { useEffect, useRef, useState } from "react";
import "./Nav.scss";
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import { Fade } from "react-awesome-reveal";

import GitHubLogo from "../../images/logos/github.png";
import LinkedInLogo from "../../images/logos/linkedIn.png";

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
    setSmallNav(false);
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
          <Fade>
            <div className="nav-modal-content">
              <ul>
                <GrClose
                  size={33}
                  color={"white"}
                  onClick={() => setSmallNav(false)}
                  className="close"
                />
                <Fade direction="left" delay={100}>
                  <li onClick={handleAboutScroll}>About</li>
                </Fade>
                <Fade direction="right" delay={300}>
                  <li onClick={handleExperienceScroll}>Experience</li>
                </Fade>
                <Fade direction="left" delay={600}>
                  <li onClick={handleContactScroll}>Contact</li>
                </Fade>

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
                    size={33}
                    onClick={handleClick}
                  />
                )}
                <div className="nav-links-container">
                  <a
                    href="https://www.linkedin.com/in/anthony-n-96a368237/"
                    target={"blank"}
                  >
                    <img src={LinkedInLogo} alt="LinkedIn Logo" />
                  </a>
                  <a href="https://github.com/Nuccino92" target={"blank"}>
                    <img
                      className="github-small-nav"
                      src={GitHubLogo}
                      alt="Github Logo"
                    />
                  </a>
                </div>
              </ul>
            </div>
          </Fade>
        </div>
      )}
    </>
  );
};

export default Nav;
