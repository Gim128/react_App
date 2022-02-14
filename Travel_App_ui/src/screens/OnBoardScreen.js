/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import COLOR from '../consts/color';

const OnBoardScreen = ({navigation}) => {
  return;
  <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0"/>
      <ImageBackground
        style = {{flex: 1}}
        source={require('../assets/onboardImage.jpg')}>
        <View style={style.details}>
            <Text style={{color: COLOR.white, fontSize: 35, fontWeight: 'bold'}}>Discover</Text>
        
            <Text style={{color: COLOR.white, fontSize: 35, fontWeight: 'bold'}}>World With Us</Text>

            <Text style={{color: COLOR.white, lineHeight: 25, marginTop: 15}}>lorem ipsum ffrrttnfkvjnffvjn ,cm v.jfbvujvbkjdb.JDNkjdk.jbkjvbfljbv</Text>
        </View>

        
       </ImageBackground>
  </View>;
};

const style = StyleSheet.create({
    details: {
        height: 50%,
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: 40,
    }
});

export default OnBoardScreen;
