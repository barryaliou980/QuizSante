import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
const bg = "rgba(255, 255, 255, 0.3)"
const styles = StyleSheet.create({
  button: {
    backgroundColor: bg,
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
    marginVertical: 3,
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
    paddingVertical: 10,
    fontWeight:'bold',
    fontSize:15,
    marginLeft: 20,
    marginRight:50
  },
  icon:{
    backgroundColor:'#fff',
    borderRadius:20,
    height:25,
    width:25,
    textAlign:'center',
    fontSize:15,
    fontWeight:'bold',
    margin:10,
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal:5
  }
});

export const Button = ({ text,id,disabled,corr, onPress = () => {} }) => (
  <TouchableOpacity 
    onPress={onPress} 
    disabled={disabled} 
    corr={corr}
    style={[styles.button,{
    backgroundColor:bg}]}>
    <Text style={styles.icon}>{id == 1 ? "A" : (id == 2 ? "B": (id == 3 ? "C": "D"))}</Text>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export const ButtonContainer = ({ children }) => (
  <View style={styles.buttonContainer}>{children}</View>
);
