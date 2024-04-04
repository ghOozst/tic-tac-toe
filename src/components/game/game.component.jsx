import './game.style.css';
import Board from '../board/board.component';

const Game = () => {
  return (
    <div className="game-container">
      Tic-Tac-Toe
      <Board />
    </div>
  );
};

export default Game;
