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
    // this.setState({ params: this.props.match.params.boardId });
    this.state = {
      params: this.props.match.params.boardId,
    };
    this.props.SingleBoardThunk(this.props.match.params.boardId);
  }


  // componentWillReceiveProps(newProps) {
  //   if (newProps.match.params.boardId !== this.state.params) {
  //     this.props.SingleBoardThunk(this.props.match.params.boardId);
  //     this.setState({ params: this.props.match.params.boardId });
  //   }
  //}

  handleForm(evt) {
    this.setState({ form: !this.state.form });
  }
  render() {
    const pins = this.props.boards.boardPins;
    const board = this.props.boards;
    console.log(this.state)
    return (
      <div className="app container">
        <NavLink to="/board/5a49bf2dd10550dd3a4da92d" >Test1</NavLink>
          <NavLink to="/board/5a4c7d40d8bc1d165504b18f" >Test2</NavLink >
        <h1>{this.props.match.params.boardId}</h1>
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
