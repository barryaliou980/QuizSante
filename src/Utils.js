import React from 'react'
import {Icon, Header, Left, Right,Body,Title} from 'native-base'
import {StyleSheet, Text, Dimensions,View} from 'react-native'
import * as Progress from 'react-native-progress';


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

