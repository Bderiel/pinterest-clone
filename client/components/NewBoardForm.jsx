import React, { Component, Fragment } from 'react';
import { connect } from 'redux';

class NewBoardForm extends Component {
  constructor() {
    super();
    this.state = {
      form: false,
    };
  }
  render() {
    return (
      <div className="form-board">
        <p>Create Board</p>
          <label className="label">Board Title</label>
          <div className="control">
            <input className="input" type="text" placeholder="ex Doge Party" />
          </div>
          <label className="label">Description</label>
          <div className="control">
            <input className="input" type="text" placeholder="ex Hire Brian" />
          </div>
      </div>
    );
  }
}

const mapState = {};
const mapDispatch = {};
export default NewBoardForm;
// export default connect(mapState, mapDispatch)(NewBoardForm);
