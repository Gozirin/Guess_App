import { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Text, FlatList} from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons'

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * 
    (max - min )) + min;

    if ( rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen ({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween (minBoundary, 
    maxBoundary, 
    userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction) 
    { // direction => 'lower', 'greater'//
    if (
    (direction === 'lower' && currentGuess<userNumber) || 
    (direction === 'greater' && currentGuess 
    <userNumber) 
    ){
        Alert.alert("Don't Lie", 'You Know That This is Wrong...', [{text: 'SORRY!', style: 'cancel'}, 
    ]);
        return;

    }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary  = currentGuess + 1;
        }
        console.log(minBoundary,maxBoundary);
        const newRndNumber = generateRandomBetween (minBoundary, 
        maxBoundary, 
        currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => 
            [newRndNumber,...prevGuessRounds]);
        
    }

    return (
    <View style = {styles.screen}>
     <Title>OPPONENT'S GUESS</Title>
     <NumberContainer>{currentGuess}</NumberContainer>

    <Card>
        <InstructionText style={styles.InstructionText}>HIGHER OR LOWER?</InstructionText>
        
        <View style={styles.buttonsContainer}>
        <View style={styles.buttonsContainer}>
         <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
        <Ionicons
          name = "md-remove" 
          size={24}
          color = "white"/>
         </PrimaryButton>
         </View>
         
         <View style={styles.buttonsContainer}>
         <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
         <Ionicons
          name = "md-add" 
          size={24}
          color = "white"/>
         </PrimaryButton>
         </View>
         </View>
         
         </Card>
         <View>
            {/* {guessRounds.map(guessRound => 
            <Text key={guessRound}>{guessRound}
            </Text>)} */}
         </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
        
    },

    buttonContainer: {},

    InstructionText:{
        marginBottom: 12,
        
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    },
});