import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { logout } from '../redux';
import MultiPinView from './MultiPinView';


const LaunchPad = function (props) {
  return (
    <div className="app container">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
      >
        <Masonry>
          {props.pins.length && props.pins.map(pin => (
            <MultiPinView key={pin._id} title={pin.description} id={pin._id} image={pin.image} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

const mapState = ({ user, pins }) => ({ user, pins });
const mapDispatch = { logout };
export default connect(mapState, mapDispatch)(LaunchPad);

LaunchPad.propTypes = {
  pins: PropTypes.array.isRequired,
};
