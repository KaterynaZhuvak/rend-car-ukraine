import React from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./Styled";
import logoImg from "../../../public/car.png";

const Header = () => {
  return (
    <StyledHeader>
      <div className="logoContainer">
        <img className="hederImg" src={logoImg} alt="logo" />
        <h1 className="logoTitle">Car Rental</h1>
      </div>

      <div className="linksContainer">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </div>
    </StyledHeader>
  );
};

export default Header;
