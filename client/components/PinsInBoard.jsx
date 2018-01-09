import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SingleBoardThunk } from '../redux';
import MultiPinView from './MultiPinView';
import AddPinForm from './AddPinForm';


class PinsInBoard extends Component {
  constructor() {
    super();
    this.state = {
      form: false,
    };
    this.handleForm = this.handleForm.bind(this);
  }
  componentDidMount() {
    this.props.SingleBoardThunk(this.props.match.params.boardId);
  }

  handleForm(evt) {
    this.setState({ form: !this.state.form });
  }
  render() {
    const pins = this.props.boards.boardPins;
    const board = this.props.boards;
    return (
      <div className="app container">
        {this.state.form ? <AddPinForm close={this.handleForm} /> :
        <Fragment />}
        <p className="board-header">{board.title && board.title.toUpperCase()}</p>
        <div className="grid">
          {this.props.user.name ?
            <div onClick={this.handleForm} className="new-pin">
              <img src="/assets/add.svg" alt="add pin" />
            </div> : <Fragment />}
          {pins.length && pins.map(pin => (
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
