import React from 'react'
import {Animated, StyleSheet, Dimensions} from 'react-native'

export default class SpringAnimated extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            springValue : new Animated.Value(0.1)
        }
    }

    
  componentDidMount() {
        Animated.spring(this.state.springValue,{
            toValue:1,
            friction:1,
        }).start()            
  }

    render(){
        let {springValue} = this.state
        return(
            <Animated.View style={[styles.animView, {transform: [{scale: this.state.springValue}]}]}>
                {this.props.children}
             </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    animView:{
        justifyContent:'space-around',
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
})
