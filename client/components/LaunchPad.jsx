import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../redux';
import MultiPinView from './MultiPinView'


const LaunchPad = function (props) {
  return (
    <div className="app container">
      <div className="grid">
        {props.pins.length && props.pins.map(pin => (
          <MultiPinView key={pin._id} title={pin.description} id={pin._id} image={pin.image}/>          
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
