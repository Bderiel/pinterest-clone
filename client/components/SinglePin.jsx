import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SaveButton from './SaveButton';
import { logout } from '../redux'; // save and add to colletion

const SinglePin = props => (
  <div className="single-content-photo app center container">
      <div className="item photo">
      <div className="button-position">
        <SaveButton />
      </div>
      <div className="center">
        <p>Collection Name(clickable)</p>
      </div>
          <div>
            <img src="https://www.andybarefoot.com/codepen/images/dogs/dog1.jpg" />
          </div>
      <div className="container">
        <p className="desc">LOrem this pin is about what sgds gdgds gsd gds dsg sdg (clickable)LOrem this pin is about what sgds gdgds gsd gds dsg sdg (clickable)LOrem this pin is about what sgds gdgds gsd gds dsg sdg (clickable) </p>
      </div>
        </div>
  </div>
);


const mapState = ({ user }) => ({ user });
const mapDispatch = {};
export default connect(mapState, mapDispatch)(SinglePin);
