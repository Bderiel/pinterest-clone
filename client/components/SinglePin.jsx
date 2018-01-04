import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SavePinToBoard from './SavePinToBoard';
import { logout } from '../redux'; // save and add to colletion

const SinglePin = (props) => {
  const pin = props.pins.filter(el => el._id == props.match.params.pinId)
  return (
    <div className="single-content-photo app center container">
      <SavePinToBoard/>
      <div className="item photo">
        <div className="button-position">
          <button className="button is-success">Save</button>
        </div>
        <div className="center">
          <p>{pin.length && pin[0].board}</p>
        </div>
        <div>
          <img alt="pin could not load" src={pin.length && pin[0].image} />
        </div>
        <div className="container">
          <p className="desc">{pin.length && pin[0].description}</p>
          <p>Uploaded by....</p>
        </div>
      </div>
    </div>);
};


const mapState = ({ pins }) => ({ pins });
const mapDispatch = {};
export default connect(mapState, mapDispatch)(SinglePin);

SinglePin.propTypes = {
  pins: PropTypes.array.isRequired,
};
