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
    var board = this.state.board.slice();
    /*
    board[i] = this.state.turn;
    */
    board.splice(i, 1, this.state.turn);
    var turn = (this.state.turn === 'X') ? 'O' : 'X';

    console.log( "Board:" + board);
    console.log( "Turn:" + turn);

    this.setState({board: board, turn: turn});
  }

  getWinner () {
    const results = solutions.map(
      (solution) => solution.map((i) => this.state.board[i]).join('')
    );
    const row = results.find(
      (result) => result === 'XXX' || result === 'OOO'
    );
    return row && row[0];
  }

  isComplete () {
    return this.state.board.every((field) => field);
  }

  render () {
    return (
      <div className='game'>
        <Board board={this.state.board} onClick={this.handleClick} />
        { this.isComplete() ? <Status winner={this.getWinner()} /> : null }
        <button className='game__reset' onClick={this.handleReset}>Reset Game</button>
      </div>
    );
  }
}
