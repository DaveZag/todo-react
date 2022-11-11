import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [navbarOpen, setnavbarOpen] = useState(false);

  const links = [
    {
      id: 1,
      path: "/",
      title: "Home",
    },
    {
      id: 2,
      path: "/about",
      title: "About",
    },
  ];

  const handleClick = () => {
    setnavbarOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setnavbarOpen(false);
  };

  return (
    <nav className="navBar">
      <button onClick={handleClick}>
        {navbarOpen ? (
          <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
        ) : (
          <FiMenu
            style={{
              color: "#7b7b7b",
              width: "40px",
              height: "40px",
            }}
          />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? "showMenu" : ""} `}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink to={link.path} onClick={() => closeMenu()}>
                {link.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
