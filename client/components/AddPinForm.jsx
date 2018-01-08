import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import history from '../history';

class AddPinForm extends Component {
  constructor() {
    super();
    this.state = {
      file: {},
      board: '',
      boardIdForRedirect: '',
      description: '',
    };
    this.handleDrop = this.handleDrop.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }
  handleDrop(droppedFile) {
    this.setState({ file: droppedFile[0] });
  }

  handleChange(evt) {
    this.setState({ description: evt.target.value });
  }

  handleSelect(evt) {
    const boards = this.props.user; // need two handles or else got error but would still worked
    this.setState({ board: boards.boards[evt.target.value].title, boardIdForRedirect: boards.boards[evt.target.value]._id });
  }

  handleSumbit() {
    const file = new FormData();
    file.append('photo', this.state.file);
    const form = {
      board: this.state.board,
      description: this.state.description,
    };
    axios.post('/api/upload', file)
      .then(res => res.data)
      .then((urlUpload) => {
        form.image = urlUpload.url;
        axios.post('/api/pin', form)
          .then(res => console.log(res.data))
          .then(() => history.push(`/board/${this.state.boardIdForRedirect}`));
      });
  }
  render() {
    const { file } = this.state;
    const boards = this.props.user;
    console.log(this.state);
    return (
      <div className="form-pin">
        <div className="form-pin-title center">
          <p>Create Pin</p>
        </div>
        <hr />
        <div className="flex-container">
          <Dropzone className="dropzone" onDrop={this.handleDrop}>
            {file.type ?
              <div className="title">
                Photo Ready for Upload!
                <div className="tick center">
                  <img src="/assets/tick.svg" alt="check" />
                </div>
              </div> :
              <div className="title">Drop in Photo or Click to Upload</div>}
          </Dropzone>
          <div className="form-pin-input">
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea onChange={this.handleChange} name="description" className="textarea" placeholder="Description of your pin" />
              </div>
              <div className="control">
                <label className="label">Choose Board:  </label>
                <div className="select">
                  <select onChange={this.handleSelect}>
                    <option disabled selected="true">Your Boards</option>
                    {boards.name && boards.boards.map((board, idx) => (
                      <option key={board.title} value={idx}>{board.title}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="form-pin-input-button">
              <div>
                <button onClick={this.handleSumbit} className="button">Submit</button>
              </div>
              <div>
                <button className="button">Go Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = ({ user }) => ({ user });
const mapDispatch = {};
export default connect(mapState, mapDispatch)(AddPinForm);
