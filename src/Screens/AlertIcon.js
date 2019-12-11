import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

import check from '../assets/check.gif'
import love from '../assets/love.gif'
import like from '../assets/like.gif'
import start from '../assets/start.gif'


import angry from '../assets/angry.gif'
import angry2 from '../assets/angry2.gif'
import error from '../assets/error.gif'

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: "center", 
    justifyContent: "center"
  },
  circle: {
    // backgroundColor: "#ff4136",
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  circleCorrect: {
    // backgroundColor: "#28A125"
  },
  icon: {
    width: screen.width / 2
  }
});

export const AlertIcon = ({ correct, visible }) => {
  if (!visible) return null;

  const faux_icon = [angry,angry2,error]
  const vrai_icon = [check,love,like,start]
  Icons = icon => icon[Math.floor(Math.random() * icon.length)]
  const icon = correct ? this.Icons(vrai_icon) : this.Icons(faux_icon)

  const circleStyles = [styles.circle];

  if (correct) {
    circleStyles.push(styles.circleCorrect);
  }

  return (
    <View style={styles.container}>
      <View style={circleStyles}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
    </View>
  );
};
