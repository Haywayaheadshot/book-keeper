import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import './navigation.css';

function Navigation() {
  const [isOpen, isClosed] = useState(false);

  return (
    <div className="nav-bar">
      <section className="heading-section">
        <h1>
          <NavLink className="header-logo" to="/">
            BookStore CMS
          </NavLink>
        </h1>
        <ul className="nav-desk-ul">
          <li>
            <NavLink className="desk-li" to="/books">
              BOOKS
            </NavLink>
          </li>
          <li>
            <NavLink className="desk-li" to="/categories">
              CATEGORIES
            </NavLink>
          </li>
        </ul>
      </section>
      <section className="dp-hamgurger">
        <img src="" alt="User DP" />
        <div className="for-phone">
          <Hamburger
            color="blue"
            toggled={isOpen}
            toggle={isClosed}
            duration={0.8}
            label="Show menu"
          />
        </div>
        {isOpen
          ? (
            <ul className="nav-popUp-ul">
              <li>
                <NavLink onClick={() => isClosed(false)} className="pop-up-li" to="/books">
                  BOOKS
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => isClosed(false)} className="pop-up-li" to="/categories">
                  CATEGORIES
                </NavLink>
              </li>
            </ul>
          )
          : null}
      </section>
    </div>
  );
}

export default Navigation;
