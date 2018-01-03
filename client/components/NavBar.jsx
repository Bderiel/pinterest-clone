import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavBar = props => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <NavLink to="/"><img className="logo" src="http://icons.iconarchive.com/icons/sicons/basic-round-social/512/pinterest-icon.png" alt="logo" /></NavLink>
      <a className="navbar-item">
          Search BARRRRRR
      </a>
      <NavLink className="navbar-item" to="/">Home</NavLink>
      <a className="navbar-item">
          Explore
      </a>
      {props.user.email ?
        <NavLink to="/myboards" className="navbar-item">
          {props.user.username}
        </NavLink>
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
const mapDispatch = {};
export default connect(mapState, mapDispatch)(NavBar);
