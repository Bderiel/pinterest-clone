import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

const SaveButton = props => (
  <button className="button is-success">Save</button>
);

const mapState = ({ user }) => ({ user });
const mapDispatch = {};
export default connect(mapState, mapDispatch)(SaveButton);
