import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const MultiPinView = props => (
  <div className="item-photo">
    <div className="content-photo">
      <div className="pin-header">
        <p>{props.title.length > 10 ? props.title.slice(0, 10) + '...' : props.title}</p>
        {props.user.username ? <button className="button is-pin-red">Save</button> : <Fragment />}
      </div>
      <NavLink to={`/pin/${props.id}`}>
        <img className="photothumb" alt="pin could not load" src={props.image} />
      </NavLink>
    </div>
  </div>
);

const mapState = ({ user }) => ({ user });
const mapDispatch = {};

export default connect(mapState, mapDispatch)(MultiPinView);
