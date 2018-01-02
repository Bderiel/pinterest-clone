import React from 'react';

const BoardItem = props => (
  <div className="board">
    <div className="board-button">
      <img src="assets/add.svg" alt="Kiwi standing on oval" />
    </div>
    <div className="center board-title">
      <p>{props.title}</p>
    </div>
  </div>
);

export default BoardItem;
