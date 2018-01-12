import React from 'react';
import { NavLink } from 'react-router-dom';

const MultiPinView = props => (
  <div className="item-photo">
    <div className="content-photo">
      <div className="pin-header">
        <p>{props.title.length > 10 ? props.title.slice(0, 10)+'...':props.title}</p>
        <button className="button is-pin-red">Save</button>
      </div>
      <NavLink to={`/pin/${props.id}`}>
        <img className="photothumb" alt="pin could not load" src={props.image} />
      </NavLink>
    </div>
  </div>
);

export default MultiPinView;
