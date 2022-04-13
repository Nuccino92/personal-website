import { useRef } from "react";
import "./Header.scss";

const Header = ({ lightTheme, refHeader, refContact }) => {
  const dragRef = useRef(null);

  const handleDrag = (e) => {
    const div = dragRef.current;
    div.className = "dragged";
  };

  const handleContactScroll = () => {
    refContact.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="Header" ref={refHeader}>
      {lightTheme ? (
        <div className="sun-container">
          <div className="the-sun"></div>
        </div>
      ) : (
        <div className="stars-container">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
      )}

      <header>
        <span>AN</span>
        <h1 ref={dragRef} draggable="true" onDragEnd={(e) => handleDrag(e)}>
          thony Nucci
        </h1>
      </header>

      <div className="typewriter">
        <p>Full stack developer</p>
      </div>
      <button
        className="btn draw-border header-button"
        onClick={handleContactScroll}
      >
        CONTACT ME
      </button>
    </div>
  );
};
export default Header;
