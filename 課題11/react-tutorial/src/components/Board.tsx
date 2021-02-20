import React from 'react';
import Square from './Square';

const calculateWinner = (squares: Array<string>): string => {
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
      return squares[a];
    }
  }
  return "";
}

export interface BoardPropsInterface {
  squares: Array<string>
  xIsNext: boolean
}

interface BoardStateInterface {
  squares: Array<string>
  xIsNext: boolean
  winner: string
}

class Board extends React.Component<BoardPropsInterface, BoardStateInterface> {
  constructor(props: BoardPropsInterface) {
    super(props);
    this.state = {
      squares: Array(9).fill(""),
      xIsNext: true,
      winner: ""
    };
  }

  handleClick(i: number) {
    const winner = calculateWinner(this.state.squares);
    if (winner || this.state.squares[i]) {
      return;
    }

    const squares: Array<string> = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      winner: winner
    });
  }

  renderSquare(i: number) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
    />
    );
  }

  render() {
    let status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    const winner = calculateWinner(this.state.squares);

    if (winner) {
        status = 'Winner: ' + winner;
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
    );
  }
}

export default Board