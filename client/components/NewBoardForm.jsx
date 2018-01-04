import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { CreateBoardThunk } from '../redux';

class NewBoardForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <form
          onSubmit={(e) => {
          e.preventDefault();
          this.props.CreateBoardThunk(this.state);
        }}
          className="field form-board">
          <p>Create Board</p>
          <label className="label">Board Title</label>
          <div className="control">
            <input onChange={e => (this.setState({ title: e.target.value }))} className="input" name="title" type="text" placeholder="ex Doge Party" />
          </div>
          <label className="label">Description</label>
          <div className="control">
            <input onChange={e => (this.setState({ description: e.target.value }))} className="input" name="escription" type="text" placeholder="ex Hire Brian" />
          </div>
          <div className="control">
            <button className="button is-primary">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapState = null;
const mapDispatch = { CreateBoardThunk };
export default connect(mapState, mapDispatch)(NewBoardForm);
