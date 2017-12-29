import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../redux';


const LaunchPad = function (props) {
  return (
    <div className="app container">
      <div className="grid">
        {props.pins.length && props.pins.map(pin => (
          <NavLink key={pin._id} to={pin._id}>
            <div className="item-photo">
              <div className="content-photo">
                <img className="photothumb" alt="pin could not load" src={pin.image} />
                <div className="center">
                  <p>{pin.board}</p>
                </div>
              </div>
            </div>
          </NavLink>
          ))}
      </div>
    </div>
  );
};

const mapState = ({ user, pins }) => ({ user, pins });
const mapDispatch = { logout };
export default connect(mapState, mapDispatch)(LaunchPad);

LaunchPad.propTypes = {
  pins: PropTypes.array.isRequired,
};
