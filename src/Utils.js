import React from 'react'
import {Icon, Header, Left, Right,Body,Title} from 'native-base'
import {StyleSheet,View,Alert,BackHandler} from 'react-native'
import * as Progress from 'react-native-progress';
import { createStore } from 'redux';

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
			   <Progress.Bar progress={props.score/10} width={200} animationType="timing" />
			</View>
			
	)
}

export const ProgressCircle = () => {  
    return (  
       <View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <Progress.Circle
            size={200}
            progress={1}
            endAngle={0.5}
            direction="clockwise"
            thickness={3}
            strokeCap="round"
          />
       </View> 
      
    );  
} 


const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
},
progress:{
	margin:10
},
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

