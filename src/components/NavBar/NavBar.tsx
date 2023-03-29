import React, { useState } from "react";
import "../NavBar/NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { NavLink, useNavigate } from "react-router-dom";
import { NavBarLinks } from "../../Utilities/Utility";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate();
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="arrow-back" onClick={() => navigate(-1)}>
            <IoMdArrowRoundBack />
          </div>

          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {NavBarLinks.map((item, index) => {
              return (
                <li className="nav-item" key={index}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    {item.link_label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          {/* <img
            className="pokemon_logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlM45KDD6bQ7uZdPmIo9ptIspxcKcZ4kcuaA&usqp=CAU"
            alt="pokemon_logo"
          /> */}
        </nav>
      </IconContext.Provider>
    </>
  );
};
