import React from 'react';
import { NavLink } from 'react-router-dom';

const MultiPinView = props => (
    <div className="item-photo">
  <NavLink to={`/pin/${props.id}`}>
      <div className="content-photo">
        <img className="photothumb" alt="pin could not load" src={props.image} />
      </div>
  </NavLink>
    </div>
);

export default MultiPinView;
