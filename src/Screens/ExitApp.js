import React, { Component } from 'react';
import { StyleSheet,  Text, View, Alert, TouchableOpacity, BackHandler} from 'react-native';
import {withNavigation } from 'react-navigation'

class Backhandle extends Component {

  static navigationOptions = {
    tittle: 'Profile'
  }
  
  constructor(props){
    super(props);
    this.didFocus =  this.props.navigation.addListener('didFocus',
    payload =>{
       BackHandler.addEventListener('hardwareBackPress', this.onBack)
    })
  }

  componentDidMount(){
    this.willBlur = 
    this.props.navigation.addListener('willBlur',
    payload =>{
      BackHandler.removeEventListener('hardwareBackPress', this.onBack)

    })
  }

  onBack = () =>{
    return this.props.onBack()
  }

  componentWillUnmount(){
    this.didFocus.remove()
    this.willBlur.remove()
    BackHandler.removeEventListener('hardwareBackPress', this.onBack)
  }

  render() {
    return this.props.children

  }
}

export default withNavigation(Backhandle)
 


          