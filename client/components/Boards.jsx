import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../redux';

const testBoards = ['box1','box2','box3','box4']

class Boards extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // get our boards
  }
  render() {
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
       {testBoards.map(el=>{
         return(
           <div className="board">
             <div className="board-button">
               <img src="assets/add.svg" alt="Kiwi standing on oval"/>
             </div>
             <div className="center board-title">
             <p>{el}</p>
             </div>
           </div>
         )
       })}
       </div>
     </div>
    );
  }
}

const mapState = ({ pins }) => ({ pins });
const mapDispatch = {};
export default connect(mapState, mapDispatch)(Boards);
