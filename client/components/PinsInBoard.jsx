import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
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

  handleForm() {
    this.setState({ form: !this.state.form });
  }

  render() {
    const pins = this.props.boards.boardPins.pins;
    const board = this.props.boards;
    return (
      <div className="app container">
        <h1 className="title">{board.boardPins.title && board.boardPins.title.toUpperCase()}</h1>
        <h2 className="subtitle">{board.boardPins.title && board.boardPins.description}</h2>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry>
            {this.props.user.username ?
              <div onClick={this.handleForm} className="new-pin">
                <img src="/assets/add.svg" alt="add pin" />
              </div> : null}
            {this.state.form ? <AddPinForm close={this.handleForm} /> :
            null}
            {board.boardPins.title && pins.map(pin => (
              <MultiPinView key={pin._id} id={pin._id} title={pin.description} image={pin.image} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    );
  }
}


const mapState = ({ user, boards }) => ({ user, boards });
const mapDispatch = { SingleBoardThunk };
export default connect(mapState, mapDispatch)(PinsInBoard);
