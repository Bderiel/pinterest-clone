import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class AddPinForm extends Component {
  constructor() {
    super();
    this.state = {
      file: {},
    };
    this.handleDrop = this.handleDrop.bind(this);
  }
  handleDrop(droppedFile) {
    this.setState({file:droppedFile[0]})
    const file = new FormData();
    file.append('photo', droppedFile[0]);
    axios.post('/api/upload', file)
      .then(res => console.log(res.data));
  }
  render() {
    const { file } = this.state;
    return (
      <div className="container app single-content-photo">
        <Dropzone onDrop={this.handleDrop}>
          {file.type ? <div>{file.name} Ready for upload</div> : <div>Drop in Photo or Click to Upload</div>}
        </Dropzone>
      </div>
    );
  }
}

const mapState = ({ user }) => ({ user });
const mapDispatch = {};
export default connect(mapState, mapDispatch)(AddPinForm);
