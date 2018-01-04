import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import BoardItem from './BoardItem';
import NewBoardForm from './NewBoardForm';

class Boards extends Component {
  constructor() {
    super();
    this.state = {
      form: false,
    };
    this.handleForm = this.handleForm.bind(this);
  }
  componentWillUnmount() {
    document.body.classList.remove('darken');
  }
  handleForm(evt) {
    this.setState({ form: !this.state.form });
    document.body.classList.toggle('darken');
  }
  render() {
    // const boards = this.props.user.boards;
    // console.log(boards)
    return (
      <div className="container">
        <h1>{this.props.user.username}'s Boards</h1>
        <div className="flex-container">
          {this.state.form ? <NewBoardForm close={this.handleForm} /> :
          <Fragment /> }
          <div onClick={this.handleForm} className="board">
            <div className="board-button">
              <img src="assets/add.svg" alt="Kiwi standing on oval" />
            </div>
            <div className="center board-title">
              <p>Add Board</p>
            </div>
          </div>
          {this.props.user.name && this.props.user.boards.map(board => (
            <BoardItem id={board._id} title={board.title} />
         ))}
        </div>
      </div>
    );
  }
}

const mapState = ({ user }) => ({ user });
const mapDispatch = {};
export default connect(mapState, mapDispatch)(Boards);
