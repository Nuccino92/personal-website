import { useRef } from "react";
import "./Header.scss";

const Header = () => {
  const dragRef = useRef(null);

  const handleDrag = (e) => {
    const div = dragRef.current;
    div.className = "dragged";
  };

  return (
    <div className="Header">
      <header>
        <span>AN</span>
        <h1 ref={dragRef} draggable="true" onDragEnd={(e) => handleDrag(e)}>
          thony Nucci
        </h1>
      </header>

      <div className="typewriter">
        <p>Full stack developer</p>
      </div>
      <button>CONTACT ME</button>
    </div>
  );
};
export default Header;
