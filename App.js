import { useState } from 'react';
//import { useFonts } from 'expo-font';
import { ImageBackground, StyleSheet, SafeAreaView, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/Colors';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

    function gameOverHandler() {
      setGameIsOver(true);
    }

    function startNewGameHandler() {
      setUserNumber(null);
      setGuessRounds(0);
    }

  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler} />;

  if (userNumber) {
    screen = ( <GameScreen userNumber={userNumber} onGameOver = {gameOverHandler}/>
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
    < GameOverScreen 
    userNumber={userNumber} 
    roundsNumber={guessRounds} 
    onStartNewGame={startNewGameHandler}
    />
    );
  }

  function gameOverHandler() {
    setGameIsOver (true);
  }
  
  return (
    <LinearGradient 
    colors = {['#4e0329','#ddb52f']}
    style = {styles.rootScreen}>
  
  <ImageBackground 
   source={require('./assets/images/image.jpg')}
   resizeMode = "cover"
   style = {styles.rootScreen}
   imageStyle = { styles.backgroundImage }>

 <SafeAreaView style = 
    {styles.rootScreen}>{screen}
    </SafeAreaView>
  </ImageBackground>
 </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
   
  },
  backgroundImage: {
    opacity: 0.15
  }
});

