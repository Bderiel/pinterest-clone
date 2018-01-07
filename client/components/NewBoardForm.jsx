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
    return (
      <div className="modal is-active">
        <div className="modal-background">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.props.CreateBoardThunk(this.state);
            }}
            className="field form-board"
          >
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
              <button onClick={() => (this.props.close())} className="button is-danger">Close</button>
            </div>
            <div className="control">
              <button className="button is-primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapState = null;
const mapDispatch = { CreateBoardThunk };
export default connect(mapState, mapDispatch)(NewBoardForm);
