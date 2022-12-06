import { Text, View, StyleSheet, Image } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';


function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
 return(
 <View styles= {styles.rootContainer}>
    <Title>GAME OVER!</Title>
    
    <View style= {styles.imageContainer}>
    <Image style = {styles.image}
    source={require('../assets/images/success.png')}/>
    </View>
    
    <Text style = {styles.summaryText}>
        Your Phone Needed 
        <Text style = {styles.highlight}>{roundsNumber}</Text> 
        rounds to Guess The Number 
        <Text style = {styles.highlight}>{userNumber}</Text>.
    </Text>
    <PrimaryButton>Start New Game</PrimaryButton>
  
  </View>
 );
}

export default GameOverScreen;


const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor:  Colors.primary800,
        overflow: 'hidden',
        margin: 36,
     },

     image: {
        width: '100%',
        height:'100%',
     },
     
     summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24,
     },
     
     highlight: {
        fontWeight: 'bold',
       // fontFamily: 'open-sans-bold',
        color:Colors.primary500,
     },

});