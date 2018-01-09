import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SingleBoardThunk } from '../redux';
import MultiPinView from './MultiPinView';


class PinsInBoard extends Component {
  componentDidMount() {
    this.props.SingleBoardThunk(this.props.match.params.boardId);
  }
  render() {
    const pins = this.props.boards.pins;
    const board = this.props.boards;
    return (
      <div className="app container">
        <p className="board-header">{board.title && board.title.toUpperCase()}</p>
        <div className="grid">
          {this.props.user.name ?
            <div className="new-pin">
              <img src="/assets/add.svg" alt="add pin" />
            </div> : <Fragment />}
          {this.props.boards.title && pins.map(pin => (
            <MultiPinView key={pin._id} id={pin._id} image={pin.image} />
          ))}
        </div>
      </div>
    );
  }
}


const mapState = ({ user, boards }) => ({ user, boards });
const mapDispatch = { SingleBoardThunk };
export default connect(mapState, mapDispatch)(PinsInBoard);
