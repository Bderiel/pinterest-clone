import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SingleBoardThunk } from '../redux';
import MultiPinView from './MultiPinView';
import NewPinItem from './NewPinItem';


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
          <NewPinItem />
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
