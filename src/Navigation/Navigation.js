import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

/** importation des ecrans **/
import Home from '../Screens/Home'
import Quiz from '../Screens/Quiz'
import FinQuiz from '../Screens/FinQuiz'
import Alert from '../Screens/Alert'
import Score from '../Screens/Score'
import Option from '../Screens/Option'


    /**  navigation **/
     const Navigation = createAppContainer(createStackNavigator(
        { 
            Home:Home,
            Quiz:Quiz, 
            FinQuiz:FinQuiz, 
            Alert:Alert, 
            Score:Score, 
            Option:Option, 
        },
      {defaultNavigationOptions: {header:null}}
    ))



/** exporter la navigation **/
export default  Navigation
