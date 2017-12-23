import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../redux';

const NavBar = props => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <NavLink to="/"><img className="logo" src="http://icons.iconarchive.com/icons/sicons/basic-round-social/512/pinterest-icon.png" alt="logo" /></NavLink>
      <a className="navbar-item">
          Search BARRRRRR
      </a>
      <a className="navbar-item">
          Home
      </a>
      <a className="navbar-item">
          Explore
      </a>
      {props.user.email ?
        <a className="navbar-item">
          {props.user.email}
        </a>
          :
        <Fragment>
          <NavLink to="/login" className="navbar-item">
            Log In
            </NavLink>
          <NavLink to="/signup" className="navbar-item">
              Sign Up
            </NavLink>
        </Fragment>
          }
    </div>
  </nav>
);

const mapState = ({ user }) => ({ user });
const mapDispatch = { logout };
export default connect(mapState, mapDispatch)(NavBar);
