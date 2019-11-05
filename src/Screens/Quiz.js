import React, { Component } from 'react';
import {Alert,BackHandler,StyleSheet,Text,View,Button,Dimensions,ScrollView,TouchableOpacity, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Data from '../Data/Data'
import Backhandle from './ExitApp'

import {ProgressBar} from '../Utils'
const { width, height } = Dimensions.get('window')
let tab_new = []


export default class Quiz extends Component {

  onBack = () => {
        if(true){
          Alert.alert(
             "Quitter dans l'App",
             "Voulez-vous Annuler le Quiz",
             [
              {text: "Non", onPress: () =>{}, style: "cancel"},
              {text: "OUI", onPress:() =>this.props.navigation.goBack()},
             ],
             {cancelable: false}
            )
          return true;
        }
        return false;
      }

  constructor(props){
    super(props);
    this.qst_id = 0
    this.score = 0
    const data_new = Data.quiz.quiz1
    tab_new = Object.keys(data_new).map( function(k) { return data_new[k] })
    this.state = {
        question : tab_new[this.qst_id].question,
        reponse  : tab_new[this.qst_id].reponse,
        borderColor: 'transparent',
        option_id:0,
    }
  }


  _handleAnswer(UserReponse, option_id) {
        if(tab_new[this.qst_id].reponse == UserReponse)
          this.score ++
        setTimeout(() =>{
          if(this.qst_id<tab_new.length-1){ 
            this.qst_id++
            this.setState({
                 question : tab_new[this.qst_id].question,
                 reponse  : tab_new[this.qst_id].reponse,
            });
          }
          else{
            this.props.navigation.navigate('FinQuiz',{
              score: this.score,
              sizeTab: tab_new.length
            })
          }
          this.setState({option_id: 0})
        },1300)
  }

  render() {
      var op = tab_new[this.qst_id].reponse
      var op_id = this.state.option_id
    return (
      <Backhandle  onBack={this.onBack} >
      <ScrollView style={{backgroundColor: 'rgb(3,1,59)'}}>
          <View style={styles.main_container}>
              <View style={styles.container}>
                    <View style={styles.questionContent}>
                    <View style={styles.contentProgress}>
                          <ProgressBar score={this.score} padding={10} />
                          <View>
                              <Text style={styles.textScore}>
                                {this.score+"/"+tab_new.length}
                              </Text>
                          </View>
                     </View>
                      <Text style={styles.question}>
                        {this.state.question}
                      </Text>
                    </View>
                    <View style={{paddingTop: 40}}/>

                    <TouchableHighlight
                      style={[styles.button, {borderColor:(op == "option1" && op_id == 1) ? "green" :(op != "option1" && op_id == 1) ? "red" : "transparent"}]}
                      underlayColor='rgb(168,100,31)'
                      onPress={() => this._handleAnswer("option1", this.setState({option_id:1}))}
                      >
                      <Text style={styles.answer}>
                         {tab_new[this.qst_id].option1}
                      </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                      style={[styles.button, {borderColor:(op == "option2" && op_id == 2) ? "green" :(op != "option2" && op_id == 2) ? "red" : "transparent"}]}
                      underlayColor='rgb(168,100,31)'
                      onPress={() => this._handleAnswer("option2" , this.setState({option_id:2}))}
                      >
                      <Text style={styles.answer}>{tab_new[this.qst_id].option2}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                      style={[styles.button, {borderColor:(op == "option3" && op_id == 3) ? "green" :(op != "option3" && op_id == 3) ? "red" : "transparent"}]}
                      underlayColor='rgb(168,100,31)'
                      onPress={() => this._handleAnswer("option3" , this.setState({option_id:3}))}
                      >
                      <Text style={styles.answer}>{tab_new[this.qst_id].option3}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                      style={[styles.button, {borderColor:(op == "option4" && op_id == 4) ? "green" :(op != "option4" && op_id == 4) ? "red" : "transparent"}]}
                      underlayColor='rgb(168,100,31)'
                      onPress={() => this._handleAnswer("option4" , this.setState({option_id:4}))}
                      >
                      <Text style={styles.answer}>{tab_new[this.qst_id].option4}</Text>
                    </TouchableHighlight>
                  </View>
          </View>
      </ScrollView>
      </Backhandle>

    );
  }
}


const styles = StyleSheet.create({
  questionContent: {
    backgroundColor: 'rgb(168,100,31)',
    width: width,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    paddingTop:40,
  },
  question: {
    fontSize: 28,
    margin: 15,
    color: "white",
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50
  },
  main_container: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-between",
  },
  answer: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
    padding: 10,
    marginLeft: 20
  },
  button: {
    backgroundColor: 'rgb(168,100,31)',
    flexDirection: 'row',
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
    marginVertical: 3,
    borderColor:'#fff',
    borderWidth:5,
    marginHorizontal: 20
  }, 
textScore:{
		fontWeight:'bold',
		fontSize:19,
    color:'white'
  },
contentProgress:{
    flexDirection:'row',
    paddingHorizontal:40,
    justifyContent:'space-around',
  },
});
