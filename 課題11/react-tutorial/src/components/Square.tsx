interface SquarePropsInterface {
  value: string;
  onClick: () =>void
}

const Square = (props: SquarePropsInterface) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square