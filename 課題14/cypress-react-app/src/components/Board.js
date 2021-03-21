import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  renderSquare(number) {
    return <Square value={this.props.squares[number]} onClick={() => this.props.onClick(number)} key={number} index={number}/>;
  }

  render() {
    return (
      <div>
        {
          Array(3).fill(0).map((row, i) => {
            return (
              <div className="board-row" key={i}>
                {
                  Array(3).fill(0).map((col, j) => {
                    return (
                      this.renderSquare(i * 3 + j)
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    );
  }
}