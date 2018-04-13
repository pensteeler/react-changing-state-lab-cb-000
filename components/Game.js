import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

const blankBoard = [
  null, null, null,
  null, null, null,
  null, null, null
];

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: blankBoard,
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();

    this.setState({
      board: blankBoard,
      turn: 'X'
    });
  }

  handleClick (i, ev) {
    ev.preventDefault();

    console.log("i:" + i);
    var board = this.state.board;
    board[i] = this.state.turn;
    var turn = (this.state.turn == 'X') ? 'O' : 'X';

    console.log( "Board:" + board);
    console.log( "Turn:" + turn);

    this.setState({board: board, turn: turn});
  }

  getWinner () {
  }

  isComplete () {
  }

  render () {
    return (
      <div className='game'>
        <Board board={this.state.board} onClick={this.handleClick} />
        <button className='game__reset' onClick={this.handleReset}>Reset Game</button>
      </div>
    );
  }
}
