import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../redux';


const LaunchPad = function (props) {
  let loopTest = new Array(20).fill(1);
  return (
    <div className="app container">
      <div className="grid">
        {loopTest.map(test=>{
          return(
            <div className="item photo">
              <div className="content-photo">
                <img className="photothumb" src="https://www.andybarefoot.com/codepen/images/dogs/dog1.jpg" />
              <div className="center">
                <p>Collection Name(clickable)</p>
              </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

const mapState = ({ user }) => ({ user });
const mapDispatch = { logout };
export default connect(mapState, mapDispatch)(LaunchPad);

LaunchPad.propTypes = {
  user: PropTypes.object.isRequired,
};
