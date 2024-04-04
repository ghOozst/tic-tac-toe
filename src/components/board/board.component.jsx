import { useState } from 'react';
import Square from '../square/square.component';
import './board.style.css';

const Board = () => {
  const initialSquare = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquare);
  const [xIsNext, setXIsNext] = useState(true);

  const onClickSquareHandler = (i) => {
    const newSquares = [...squares];
    const winnerDeclared = Boolean(calculateWinner(newSquares));
    const squareFilled = Boolean(newSquares[i]);

    if (winnerDeclared || squareFilled) return;

    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };
  const renderSquare = (i) => (
    <Square value={squares[i]} onClickEvent={() => onClickSquareHandler(i)} />
  );

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="board-container">
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //cols
    [0, 4, 8],
    [2, 4, 6],
    //diagonals
  ];

  for (let line of winningLines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }
  return null;
};

export default Board;
