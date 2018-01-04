import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { format } from 'util';

class SavePinToBoard extends Component {
  render() {
    const boards = this.props.user;
    return (
      <form className="form-save">
        <div className="control">
          <label>Choose Board:  </label>
          <div class="select">
            <select name="board">
              {boards.name && boards.boards.map(board => (
                <option value={board.title}>{board.title}</option>
              ))}
            </select>
          </div>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

const mapState = ({ user }) => ({ user });
const mapDispatch = {};
export default connect(mapState, mapDispatch)(SavePinToBoard);

