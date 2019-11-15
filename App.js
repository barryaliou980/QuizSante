import React from 'react'
import Navigation from './src/Navigation/Navigation'
import { Provider } from 'react-redux'
import {Store} from './src/Utils'

export default class App extends React.Component{
  render(){
    console.disableYellowBox =true
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}
