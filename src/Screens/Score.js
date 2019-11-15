import React, {Component} from 'react';  
import {TouchableOpacity, StyleSheet, Text, View,Dimensions} from 'react-native';
  
const {width, height} = Dimensions.get('window')
export default class Score extends Component {  

  render() { 
    return (  
      <View style={styles.container}>
        <Text>score !!!</Text>
      </View>  
    );  
  }  
}  
const styles = StyleSheet.create({ 
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
});  
