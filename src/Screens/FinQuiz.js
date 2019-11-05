import React, { Component } from 'react';
import {StyleSheet,StatusBar,TouchableOpacity,View,Text,Animated,Dimensions,Easing, AsyncStorage, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AB from 'react-native-action-button';
import FW5 from 'react-native-vector-icons/FontAwesome5'
import Animation from 'lottie-react-native';
import confetti from '../assets/lottie/confetti.json'
import trophy3 from '../assets/lottie/trophy3.json'
import check from '../assets/lottie/check.json'
import * as Progress from 'react-native-progress';


import {ProgressBar} from '../Utils'

var {width, height} = Dimensions.get('window')
export default class Playquiz extends Component {
  constructor(props){
    super(props)
    this.state = {
      fadeValue: new Animated.Value(0),
      score: this.props.navigation.getParam('score', ''),
      sizeTab: this.props.navigation.getParam('sizeTab',''),
      storeScore:0
    }
  }

   componentDidMount(){
         this.anim1.play();
         this.anim2.play();
        AsyncStorage.getItem('storeScore')
        .then((storeScore) =>{
          this.setState({storeScore:storeScore})
        })
    }
 

  _onPressBack(){
    this.props.navigation.goBack()
  }

  _anima(score){
    if(score > 5){
      return(
          <View style={{flex:1}}>
           <Animation ref={anim1 => {this.anim1 = anim1}} source={trophy3} loop={true} />
           <Animation ref={anim2 => {this.anim2 = anim2}} source={confetti} loop={true} />
          </View>
      )
    }else{
        return(
          <View style={{flex:1}}>
           <Animation ref={anim1 => {this.anim1 = anim1}} source={check} loop={false} />
           <Animation ref={anim2 => {this.anim2 = anim2}} source={confetti} loop={false} />
          </View>
        )
    }
  }

  _scoreMessage(score, sizeTab){
      return (
          <View style={styles.spaceAround}>
            <View style={{flex:1}} >
              {this._anima(score)}
            </View>
            <View />
            <View style={styles.scoreContent} >
                  <Text style={styles.bravo}>Bravo</Text>
                  <View style={{justifyContent:'center', alignItems:'center'}}>
                  <Progress.Bar progress={score/10} width={200} />
                  </View>
                  <Text style={styles.score}>
                      votre score est de: {score*10+"/"+sizeTab*10} points
                  </Text>
                  <View style={{justifyContent:'center', alignItems:'center', paddingTop:10}}>
                   <TouchableOpacity
                       onPress={() =>this.props.navigation.navigate('Home')} >
                       <FW5 name='redo' size={30} color='white' />
                  </TouchableOpacity>
                </View>
            </View>
          </View>
      )
  }


  render() {
    const {score,sizeTab} = this.state
    
    if(score > 5){
        if(score > this.state.storeScore)
           AsyncStorage.setItem('storeScore',score); 
        return  this._scoreMessage(score,sizeTab)
    }else{
        return  this._scoreMessage(score,sizeTab)
    }
}
}


const styles = StyleSheet.create({
  score: {
    color: "white",
    fontSize: 20,
    fontWeight:'bold',
    textAlign:'center'
  },

  button:{
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  text:{
    fontSize: 25,
    fontWeight:'bold'
  },
  bravo: {
    color: "white",
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  scoreContent:{

  },  
  spaceAround: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: "space-evenly",
    backgroundColor:'#000033',
    paddingHorizontal:10
  }
});