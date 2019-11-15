import React, {Component} from 'react';  
import {View,StyleSheet,Text} from 'react-native';
import { connect } from 'react-redux'

class Show extends Component{ 

  render() { 
    console.log(this.props) 
    return (  
      <View style={styles.container}>
            <Text>{this.props.counter} </Text>
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
    }
});  

  function mapStateToProps(state){
    return {counter: state.counter}
  }

  export default connect(mapStateToProps)(Show)