import React from "react";
import {SafeAreaView,StyleSheet,Text,View,Dimensions,Alert} from "react-native";
import { quizData } from "../Data/quizData";
import { Button, ButtonContainer } from "./Button";
import Backhandle from './ExitApp'
import {ProgressBar,vrai_icon,faux_icon} from '../Utils'
import LottieView from 'lottie-react-native';


const { width, height } = Dimensions.get('window')


export default class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      activeQuestionIndex: 0,
      answered: false,
      quizData:quizData,
      isDisable: false,
      answerCorrect: false,
      totalCount: 0,
    }
  }

  componentDidMount(){
    this.setState({
      totalCount:this.state.quizData.length
    })
  }
  Icons = icon => icon[Math.floor(Math.random() * icon.length)]
  alertIcon(correct){
    const icon = correct ? this.Icons(vrai_icon) : this.Icons(faux_icon)
    return <LottieView source={icon} autoPlay loop={false} />;
  }

  random(){
   const {quizData,answerCorrect} = this.state
   return  Math.floor(Math.random() * quizData.length)
  }

  onBack = () =>{
        if(true){
          Alert.alert(
             "Quitter dans l'App",
             "Voulez-vous quitter dans Quiz Santé",
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

  answer = (correct,question,id) => {
    this.setState({isDisable:true})
    this.alertIcon()
    this.setState(
      state => {
        const nextState = { answered: true };
        if (correct) {
          nextState.score = state.score + 1;
          nextState.answerCorrect = true;
          // alert(question)
        } else {
          nextState.answerCorrect = false;
        }

        return nextState;
      }, () => { setTimeout(() => this.nextQuestion(), 1000); }
    );
  };

  nextQuestion = () => {
     this.setState(state => {
      if(state.activeQuestionIndex < 4){
        const nextIndex = state.activeQuestionIndex + 1;
        return {
          activeQuestionIndex: nextIndex,
          answered: false,
          isDisable:false
        };
      } else{
          this.props.navigation.navigate('FinQuiz',{
              score: this.state.score,
              sizeTab:this.state.totalCount
          })
      }
    }
    );
  };

  render() {
   const {q = quizData,isDisable,answerCorrect} = this.state
   const question = q[this.random()];
    return (
      <Backhandle  onBack={this.onBack}>
      <View style={styles.container}>
        <SafeAreaView style={styles.safearea}>
          <View>
            <View style={styles.contentProgress}>
                <ProgressBar score={this.state.score} padding={10} />
                <View>
                    <Text style={styles.textScore}>
                      {`${this.state.score}/${this.state.totalCount}`}
                    </Text>
                </View>
            </View>
            <View style={styles.questionContent}>
              <Text style={styles.question}>
                  {question.question}
                </Text>
            </View>

            {isDisable && this.alertIcon(answerCorrect)}
            <ButtonContainer>
              {question.answers.map(answer => (
                <Button
                key={answer.id}
                text={answer.text}
                id={answer.id}
                corr={answer.correct}
                disabled={isDisable}
                onPress={() => this.answer(answer.correct,question.question, answer.id)}
                />
              ))}
            </ButtonContainer>
          </View>

        </SafeAreaView>
      </View>
      </Backhandle>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(3,1,59)',
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  },
  contentProgress:{
    flexDirection:'row',
    paddingHorizontal:40,
    justifyContent:'space-around',
  },
  textScore:{
    fontWeight:'bold',
    fontSize:19,
    color:'white'
  },
  questionContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 15,
    paddingVertical:30,
    marginVertical:20,
  },
  question: {
    textAlign: 'center',
    color: "#fff",
    fontSize: 25,
    fontWeight:'bold'
  },
});