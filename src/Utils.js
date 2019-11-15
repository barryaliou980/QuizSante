import React from 'react'
import {Icon, Header, Left, Right,Body,Title} from 'native-base'
import {StyleSheet,View,Alert,BackHandler} from 'react-native'
import * as Progress from 'react-native-progress';
import { createStore } from 'redux';

// les icones pour les bonnes reponses
import check from './assets/lottie/check.json'
import waou from './assets/lottie/waou.json'
import like from './assets/lottie/like.json'

// les icones pour les mauvaises reponses
import angry1 from './assets/lottie/angry1.json'
import angry3 from './assets/lottie/angry3.json'
import dislike from './assets/lottie/dislike.json'


export const HeaderCustom = props => {
	return( 
       <Header androidStatusBarColor='rgba(0,0,0,0.5)' noShadow={true} transparent>
	          <Left style={{flex:1, paddingLeft: 7}}>
	              <Icon name={props.LeftIcon} style={[styles.icon]} onPress={props.headerCustom} />
	          </Left>

	          <Body style={{flex:1}}>
                 <Title  style={[styles.title]}>{props.title}</Title>
              </Body>

	          <Right style={{flex:1, paddingRight: 7}}>
	            <Icon name={props.RightIcon} style={[styles.icon]} onPress={() => {}} />
	          </Right>
        </Header>
	)
} 

export function onBack(){
		    if(true){
		      Alert.alert(
		         "Quitter dans l'App",
		         "Voulez-vous quitter dans Quiz Santé",
		         [
		          {text: "Non", onPress: () =>{}, style: "cancel"},
		          {text: "OUI", onPress:() =>BackHandler.exitApp()},
		         ],
		         {cancelable: false}
		        )
		      return true;
		    }
		    return false;
}

export const ProgressBar = props =>{
	const width = props.width
	const height = props.height
	const innerHeight = props.innerHeight
	return(

			<View style={{flex:1, paddingTop:props.padding}} > 
			   <Progress.Bar progress={props.score/10} width={200} />
			</View>
			
	)
}

export const vrai_icon = [check, waou,like]
export const faux_icon = [angry1,angry3,dislike]
const styles = StyleSheet.create({
icon:{
		fontSize: 30
	},
title:{
		fontSize: 25,
	},


progress: {  
    borderColor: 'white',  
    borderWidth: 2,  
		borderRadius: 20,  
		marginTop:5,
}, 
inner:{  
		borderRadius: 20,  
    backgroundColor:'white',  
  }, 
})


const initialState = {switch:1}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      if(state.switch == 1)
       return {switch: 0}
      return {switch: 1}
    }
    return state
  }
 export const Store = createStore(reducer)

