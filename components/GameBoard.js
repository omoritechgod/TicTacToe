import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import GameLogic from '../GameLogic/GameLogic';

const GameBoard = ({ onGameResultChange }) => { // Receive onGameResultChange as a prop
  const [gameState, setGameState] = useState(GameLogic.getInitialState());

  const handleBoxClick = (id) => {
    if (GameLogic.isSpaceEmpty(gameState.spaces, id)) {
      const updatedGameState = GameLogic.updateGameState(gameState, id);
      setGameState(updatedGameState);

      if (updatedGameState.gameResult) {
        onGameResultChange(updatedGameState.gameResult); // Call onGameResultChange when the game result changes
      }
    }
  };

  const renderBoxes = () => {
    return gameState.spaces.map((value, index) => (
      <TouchableOpacity
        key={index}
        style={styles.box}
        onPress={() => handleBoxClick(index)}
      >
        <Text style={styles.boxText}>{value}</Text>
      </TouchableOpacity>
    ));
  };

  const restartGame = () => {
    const initialState = GameLogic.getInitialState();
    setGameState(initialState);
  };

  useEffect(() => {
    if (gameState.gameResult) {
      onGameResultChange(gameState.gameResult); // Call onGameResultChange when the game result changes
    }
  }, [gameState.gameResult]);

  return (
    <View style={styles.container}>
      <Text style={styles.playerText}>Tic Tac Toe</Text>
      <TouchableOpacity style={styles.restartBtn} onPress={restartGame}>
        <Text>Restart</Text>
      </TouchableOpacity>
      <View style={styles.gameboard}>{renderBoxes()}</View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37505c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerText: {
    fontSize: 54,
    textTransform: 'uppercase',
    color: '#f2c14e',
    marginBottom: 40,
  },
  restartBtn: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f2c14e',
    color: '#333',
    borderColor: '#f2c14e',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 30,
  },
  gameboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  box: {
    height: width / 3 - 20,
    width: width / 3 - 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2d414b',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  boxText: {
    fontSize: 48,
    color: '#f2c14e',
  },
});

export default GameBoard;
