import React from 'react';

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick} data-e2e={`${props.index}`} >
      {props.value}
    </button>
  );
}

export default Square