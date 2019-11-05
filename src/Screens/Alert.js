import React, {Component} from 'react';  
import {Image,Button,View,StyleSheet,Text, TouchableOpacity} from 'react-native';  

export default class Alert extends Component{ 
  render() {  
    return (  
      <View style={styles.container}>
          <Text>Alerts !!!</Text>
      </View>  
    );  
  }  
}  
const styles = StyleSheet.create({ 
  container:{
      flex:1,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center'
    },
  icon:{
    height: 80,
    width: 80,
},
});  