import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      hamburger: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.hamburger === 'is-active') {
      this.setState({ hamburger: '' });
      return;
    }
    this.setState({ hamburger: 'is-active' });
  }
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/"><img className="logo navbar-item" src="/assets/logo.svg" alt="logo" /></NavLink>
          <div className="navbar-item">
            <input className="input" type="text" placeholder=" Make own Compon Search by UserName/description/tags" />
          </div>
          <button onClick={this.handleClick} className="button is-black navbar-burger">
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${this.state.hamburger}`}>
          <NavLink className="navbar-item" to="/">Home</NavLink>
          {this.props.user.email ?
            <NavLink to="/myboards" className="navbar-item">
              {this.props.user.username}
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
  }
}

const mapState = ({ user }) => ({ user });
const mapDispatch = {};
export default connect(mapState, mapDispatch)(NavBar);
