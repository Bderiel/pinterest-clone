import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { CreateBoardThunk } from '../redux';

class NewBoardForm extends Component {
  constructor() {
    super();
    this.state = {
      form: false,
    };
    this.handleSubmit = this.handleSubmit(this);
  }

  handleSubmit(evt) {
    if (evt) evt.preventDefault();
    console.log('testing');
  }
  // this.props.CreateBoardThunk(this.state);

  render() {
    return (
      <form onClick={this.handleSubmit} className="field form-board">
        <p>Create Board</p>
        <label className="label">Board Title</label>
        <div className="control">
          <input className="input" type="text" placeholder="ex Doge Party" />
        </div>
        <label className="label">Description</label>
        <div className="control">
          <input className="input" type="text" placeholder="ex Hire Brian" />
        </div>
        <div className="control">
          <button className="button is-primary">Create</button>
        </div>
      </form>
    );
  }
}

const mapState = null;
const mapDispatch = { CreateBoardThunk };
//export default NewBoardForm;
export default connect(mapState, mapDispatch)(NewBoardForm);
