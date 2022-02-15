/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLOR from '../consts/color';

const HomeScreen = ({navigation}) => {
  return <SafeAreaView
  style={{flex:1, backgroundColor: COLOR.white}}>
    <StatusBar translucent = {false} backgroundColor = {COLOR.primary}/>
    <View style = {style.header}>
      <Icon name="sort" size={28} color = {COLOR.white} />
      <Icon name="notifications-none" size={28} color = {COLOR.white} />
    </View>
    <ScrollView showsVerticalScrollIndicator={false}></ScrollView> 
    {/* 15.28 */}
  </SafeAreaView>;
};

const style = StyleSheet.create({
  header : { 
    paddingVertical : 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLOR.primary,
  },
});

export default HomeScreen;
