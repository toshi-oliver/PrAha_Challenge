import React from 'react';
import Board from './Board';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: squares,
          col: (i % 3) + 1,
          row: Math.floor(i / 3) + 1,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const settlement = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Move # (' + step.col + ',' + step.row + ')': 'Game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)} className={this.state.stepNumber === move ? 'bold' : '' } >{desc}</button>
        </li>
      );
    });

    let status;
    if (settlement) {
      if (settlement.isDraw) {
        status = 'Draw!';
      } else {
        status = 'Winner: ' + settlement.winner;
      }
    } else {
      status = '次のプレイヤー: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div data-e2e="status">{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        isDraw: false,
        winner: squares[a],
      };
    }
  }

  if (squares.filter((e) => !e).length === 0) {
    return {
      isDraw: true,
      winner: null,
    }
  }

  return null;
}