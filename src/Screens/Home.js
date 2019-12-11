import React from 'react'
import {StyleSheet,Text,View,TouchableOpacity,StatusBar, ImageBackground, Image 
        } from 'react-native';
import FW5 from 'react-native-vector-icons/FontAwesome5'
import Backhandle from './ExitApp'
import AB from 'react-native-action-button';
import SpringAnimated from './SpringAnimated'
import ImgIcon from '../assets/icon.png'
import Background from '../assets/bg.jpg'
import {onBack} from '../Utils'
import { Audio } from 'expo-av';
import music from '../assets/sounds/music.mp3'
import { connect } from 'react-redux'

const source = music
const soundObject = new Audio.Sound();
class Home extends React.Component{

	playMusic = async (value) =>{
		try {
			await soundObject.loadAsync(source);
			this.play = soundObject
			if(value == 0) this.play.stopAsync()
			else{
				this.play.playAsync()
				this.play.setIsLoopingAsync(true)
				this.play.setVolumeAsync(0.1)
			} 
		} catch (error) { console.log(error) }
	}

  render(){
		this.playMusic(this.props.switch)
    return(
    	<Backhandle  onBack={onBack}>
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
						<Text style={styles.text}>Option</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}
					    onPress={onBack} >
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

  function mapStateToProps(state){
    return {switch: state.switch}
  }

  export default connect(mapStateToProps)(Home)
