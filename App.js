import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native'; // Import Alert and Text from react-native
import GameBoard from './components/GameBoard';

const App = () => {
  const [gameResult, setGameResult] = useState(null);

  // Function to show an alert when gameResult changes
  useEffect(() => {
    if (gameResult) {
      Alert.alert('Game Result', gameResult);
    }
  }, [gameResult]);

  return (
    <View style={styles.container}>
      <GameBoard onGameResultChange={(result) => setGameResult(result)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37505c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
