import React, {Component} from 'react';  
import {TouchableOpacity, StyleSheet, Text, View,Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import {Icon, Header, Left, Right,Body,Title,Switch} from 'native-base'
// import {HeaderCustom} from '../Utils'
import Animation from 'lottie-react-native';
import coin1 from '../assets/lottie/coin1.json'
const {width, height} = Dimensions.get('window')
export default class Score extends Component {  

  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      indeterminate: true,
    };
  }

  componentDidMount(){
    this.animate()
    this.anim.play()
  }


  animate() {
    let progress = 0;
    this.setState({ progress });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress = 0.5;
        this.setState({ progress });
      }, 500);
    }, 1500);
  }

  render() { 
    const nav = this.props.navigation
    return (  
      <View style={styles.container}>
          <Header androidStatusBarColor='rgba(0,0,0,0.5)' noShadow={true} transparent> 
            <Left style={{flex:1, paddingLeft: 7}}>
              <Icon name="arrow-back" style={{color:'white',fontSize:30}} onPress={() =>nav.goBack()} />
            </Left>
            <Right />
          </Header>
        <View style={styles.content}>
          <View style={styles.content1}>
              <Progress.Circle
                style={styles.progress}
                progress={this.state.progress}
                endAngle={0.5}
                showsText={true}
                size={150}
                strokeCap="around"
                thickness={9}
                allowFontScaling={false}
                direction="counter-clockwise"
              />
              <Text style={styles.text1}>Votre meilleur score {'\n'} est de 50 points</Text>
          </View>
          <View style={{padding:30}}>
             <Animation ref={anim => {this.anim = anim}} source={coin1} loop={false} />
             <View style={{paddingVertical:20}} />
          </View>
          <Text style={styles.text2}>Montant gagné {'\n'} est de 500 GNF</Text>
      </View>  
      </View>  
    );  
  }  
}  
const styles = StyleSheet.create({ 
  container:{
      flex:1,
      backgroundColor:'#000033'
  },
  progress: {
    margin: 10,
  },
  content:{
    backgroundColor:"rgba(255, 255, 255, 0.3)",
    borderRadius:30,
    paddingVertical:height/4,
    margin:20
  },
  content1:{
    // flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  text1:{
   color:'white',
   fontWeight:'bold',
   fontSize:20
  },
  text2:{
   color:'white',
   fontWeight:'bold',
   fontSize:20,
   alignSelf:'center'
  },
});  
