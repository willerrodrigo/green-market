import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <NavLink to="/">
          <img src={logo} alt="InstaClone" height="68"/>
        </NavLink>
        <NavLink exact to="/" activeClassName="selected" className="link">
          Home
        </NavLink>
        <NavLink to="/shopping" activeClassName="selected" className="link">
          Shopping
        </NavLink>
        <NavLink to="/products" activeClassName="selected" className="link">
          Products
        </NavLink>
        <NavLink to="/register" activeClassName="selected" className="link">
          Register
        </NavLink>
      </div>
    </header>
  );
}
