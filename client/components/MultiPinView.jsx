import React from 'react';
import { NavLink } from 'react-router-dom';

const MultiPinView = props => (
  <NavLink to={`/pin/${props.id}`}>
    <div className="item-photo">
      <div className="content-photo">
        <img className="photothumb" alt="pin could not load" src={props.image} />
      </div>
    </div>
  </NavLink>
);

export default MultiPinView;
