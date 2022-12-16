import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import "../Header/header.css";

const NAV__LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Market",
    url: "/market",
  },
  {
    display: "Create",
    url: "/create",
  },
  {
    display: "Contact",
    url: "/contact",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-fex gap-2 aling-items-center">
              <span>
                <i class="ri-fire-fill"></i>
              </span>
              NFTs
            </h2>
          </div>

          <div className="nav__menu">
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink to={item.url}>{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex aling-items-center gap-5">
            <button className="btn">
              <Link to="/wallet" className="d-flex gap-2 aling-items-center">
                <span>
                  <i class="ri-wallet-line"></i>
                </span>
              </Link>{" "}
              Connect Wallet
            </button>
            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
