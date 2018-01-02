import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../redux';
import BoardItem from './BoardItem';

const testBoards = ['box1', 'box2', 'box3', 'box4'];

class Boards extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // get our boards
  }
  render() {
    // const boards = this.props.user.boards;
    // console.log(boards)
    return (
      <div className="container">
        <div className="flex-container">
          <div className="board">
            <div className="board-button">
              <img src="assets/add.svg" alt="Kiwi standing on oval" />
            </div>
            <div className="center board-title">
              <p>Add Board</p>
            </div>
          </div>
          {this.props.user.name && this.props.user.boards.map(board => (
            <BoardItem title={board.title} />
         ))}
        </div>
      </div>
    );
  }
}

const mapState = ({ user }) => ({ user });
const mapDispatch = {};
export default connect(mapState, mapDispatch)(Boards);
