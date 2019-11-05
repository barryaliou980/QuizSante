import React from 'react'
import Navigation from './src/Navigation/Navigation'

export default class App extends React.Component{
  render(){
  	console.disableYellowBox =true
    return (
    	<Navigation />
    );
  }
}