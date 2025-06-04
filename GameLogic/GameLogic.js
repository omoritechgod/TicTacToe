const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

const getInitialState = () => ({
  currentPlayer: X_TEXT,
  spaces: Array(9).fill(null),
  winnerIndicator: "#2d414b",
  playerText: "Tic Tac Toe",
  gameResult: null, // Add a gameResult field to track the game result
});

const isSpaceEmpty = (spaces, id) => {
  return spaces[id] === null;
};

const updateGameState = (currentState, id) => {
  const updatedSpaces = [...currentState.spaces];
  updatedSpaces[id] = currentState.currentPlayer;

  const winner = playerHasWon(updatedSpaces);
  const currentPlayer = currentState.currentPlayer === X_TEXT ? O_TEXT : X_TEXT;

  const updatedState = {
    currentPlayer,
    spaces: updatedSpaces,
    playerText: winner ? `${currentState.currentPlayer} has won!` : "Tic Tac Toe",
    gameResult: winner ? `${currentState.currentPlayer} has won!` : "You Lose", // Update game result
  };

  return updatedState;
};

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const playerHasWon = (spaces) => {
  for (const condition of winningCombos) {
    const [a, b, c] = condition;

    if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
      return condition;
    }
  }
  return null;
};

const restartGame = () => {
  return getInitialState();
};

export default {
  getInitialState,
  isSpaceEmpty,
  updateGameState,
  playerHasWon,
  restartGame,
};
