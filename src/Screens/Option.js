import React, { Component } from 'react';
import {StyleSheet,View,Text,Dimensions, TouchableOpacity, AsyncStorage } from 'react-native';
import {Icon, Header, Left, Right,Body,Title,Switch} from 'native-base'
import FW5 from 'react-native-vector-icons/FontAwesome5'
// import Sound from 'react-native-sound';


const {width, height} = Dimensions.get('window')

export default class Option extends Component {
    constructor(props) {
          super(props)
          this.state = {
            musicPlay:false,
            switchValue: true,
            switchSon: false,
            // Sound:new Sound('music.mp3')
          }
    }
  
  componentDidMount(){
      AsyncStorage.getItem('switchValue')
        .then((switchValue) =>{
          this.setState({switchValue:switchValue})
        })
  }

  toggleSwitch = value =>{
    AsyncStorage.setItem('switchValue',value); 
    AsyncStorage.setItem('musicPlay',value); 
    this.setState({switchValue: value})
    // if(value === true){
    //    this.state.Sound.play()
    //    this.state.Sound.setNumberOfLoops(-1)
    // }else{
    //   this.state.Sound.stop()
    // }
  }

  toggleSwitchSon = value =>{
    this.setState({switchSon: value})
  }
  
  render() {
    return (
      <View style={styles.container}>
          <Header 
              androidStatusBarColor='rgba(0,0,0,0.5)'
              noShadow={true} transparent> 
	          <Left style={{flex:1, paddingLeft: 7}}>
	              <Icon name="arrow-back" 
                  style={{color:'white', fontSize:30}}
                  onPress={() =>this.props.navigation.goBack()}
                  />
	          </Left>
	          <Right />
        </Header>
         
              <FW5 name='cog' style={styles.icon} />
              <Text  style={{ fontSize: 30, paddingBottom: 15, fontWeight:'bold',textAlign:'center' ,color:'#fff'}}>Paramètres</Text>

              <View style={styles.padding}>
                <Text style={styles.text}>Activer la Musique</Text>
                <Switch 
                  style={{fontSize:30}} 
                  onValueChange = {this.toggleSwitch}
                  value = {this.state.switchValue}/>

              </View>
          <View style={styles.padding}>
                <Text style={[styles.text,{paddingBottom:20} ]}>
                Activer le Son        </Text>
                <Switch 
                  style={{fontSize:30}} 
                  onValueChange = {this.toggleSwitchSon}
                  value = {this.state.switchSon}/> 

          </View>

          <TouchableOpacity style={styles.button} >
            <Text style={styles.textButton}>Réinitialiser le score</Text>
          </TouchableOpacity>
          </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgb(3,1,59)',
    flex:1,
  },
  text:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },  
  icon:{
    alignSelf:'center',
    color:'white',
    fontSize:90,
    paddingTop: height / 6,
  },
  padding:{
    flexDirection:'row',
    paddingVertical:5,
    justifyContent:'space-around',
    alignItems:'center',
  },
  button: {
  	  width: 220,
  	  height: 40,
  	  backgroundColor: 'white',
  	  borderRadius: 30,
      alignSelf: 'center',
    },
  textButton:{
    color: 'black',
    fontSize:18,
    textAlign:'center',
    padding:5,
    fontWeight:'bold'
  }
});