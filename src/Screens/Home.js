
import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity,AsyncStorage, Dimensions,
         StatusBar, Alert,BackHandler, ImageBackground, Image,Animated, Easing 
        } from 'react-native';
import FW5 from 'react-native-vector-icons/FontAwesome5'
import Backhandle from './ExitApp'
import AB from 'react-native-action-button';
import SpringAnimated from './SpringAnimated'

import ImgIcon from '../assets/icon.png'
import chek from '../assets/lottie/check.json'
import Animation from 'lottie-react-native';
import Background from '../assets/bg.jpg'
import * as Progress from 'react-native-progress';

const {width, height} = Dimensions.get('window')
export default class Home extends React.Component{
			constructor(props) {
			    super(props)
			    this.state = {
			      musicPlay:false,
			      showUser:false,
			      storeScore: 5,
			      progress: new Animated.Value(0),
			    }
		    }
		     componentDidMount(){
		     	 Animated.timing(this.state.progress, {
				      toValue: 1,
				      duration: 5000,
				      easing: Easing.linear,
				    }).start();

			      AsyncStorage.getItem('musicPlay')
			        .then((musicPlay) =>{
			        	this.setState({musicPlay:musicPlay})
			        })

		        AsyncStorage.getItem('storeScore')
		        .then((storeScore) =>{
		        	if(storeScore > 5)
		        	   this.setState({storeScore})
		        })
			 }

		onBack = () => {
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

  render(){
    return (
    	<Backhandle  onBack={this.onBack} >
    	<ImageBackground style={styles.container} source={Background}>

			<SpringAnimated>
    		 <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
    		    <View  style={{ alignItems:'center'}}>
		   	            <Image source={ImgIcon} style={styles.icon} />
					    <Text  style={{ fontSize: 50, paddingBottom: 10, fontWeight:'bold',textAlign:'center' ,color:'#fff'}}>
					        Quiz Sante
					    </Text>
					    <Text  style={{fontWeight:'bold',textAlign:'center' ,color:'#fff', fontSize:17}}>
					        sur les risques sanitaires
					    </Text>
						{/* <View style={{flexDirection:'row'}} >
							<FW5 name="cog" size={20} style={{color:'white',paddingHorizontal:10}} />
							<FW5 name="cog" size={20} style={{color:'white',paddingHorizontal:10}} />
						</View> */}
				    </View>



    		    <View  style={{ alignItems:'center'}}>
					<TouchableOpacity style={styles.button} onPress={() =>this.props.navigation.navigate('Quiz')} >
					  <Text style={styles.text} >Commencer</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button}
					    onPress={() =>this.props.navigation.navigate('Score')} >
						<Text style={styles.text} >Score</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() =>this.props.navigation.navigate('Option')} >
						<Text style={styles.text} >Option</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}
					    onPress={this.onBack} >
						<Text style={styles.text} >Quitter</Text>
					</TouchableOpacity>
				</View>

					<AB buttonColor="rgb(3,1,59)" size={40}
						renderIcon={() => <FW5 name='bell' color='white' size={20} />}
						onPress={() => this.props.navigation.navigate('Alert')}/>

				    <View />
  			</SpringAnimated>
    	 </ImageBackground>
    	 </Backhandle>

    );
  }
}


const styles = StyleSheet.create({
	container:{
		flex:1
	},
	button:{
	width: 230,
	height: 45,
	backgroundColor: 'rgb(3,1,59)',
	borderRadius: 30,
	justifyContent:'center',
	marginVertical: 5
},
icon: {
	height: 40,
	width: 40,
	borderRadius: 35,
	paddingBottom: 10
},
text:{
	color: 'white',
	fontSize: 18,
	textAlign:'center'
},
 modal:{
    backgroundColor: '#000033',
    borderRadius: 15,
    marginVertical: 85,
    marginHorizontal: 30,
    paddingHorizontal: 10,
    paddingTop: 20,
    flex:1, 
    justifyContent:'center', 
    alignItems:'center'
  },
 contentModal:{
     textAlign:'center',
     fontSize: 18,
     color: '#fff',
	paddingTop: 20

  },
 check:{
 	alignSelf:'center',
 	height: 80,
	width: 80,
 },
  score: {
    color: "white",
    fontSize: 20,
    fontWeight:'bold',
    textAlign:'center'
  },
  scoreContent:{

  },  
  spaceAround: {
    flex: 1,
    flexDirection: 'column',
  }
})
