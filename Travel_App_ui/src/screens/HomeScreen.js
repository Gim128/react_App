/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLOR from '../consts/color';

const HomeScreen = ({navigation}) => {

  const categoryIcons = [
    <Icon name='flight' size={25} color={COLOR.primary}/>,
    <Icon name='beach-access' size={25} color={COLOR.primary}/>,
    <Icon name='near-me' size={25} color={COLOR.primary}/>,
    <Icon name='palce' size={25} color={COLOR.primary}/>,
  ];

  const ListCategories = () => {
    return (
      <View style={style.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index}>{icon}</View>
          // 24.00
      ))}
    </View>
    );
  };

  return <SafeAreaView
  style={{flex:1, backgroundColor: COLOR.white}}>
    <StatusBar translucent = {false} backgroundColor = {COLOR.primary}/>
    <View style = {style.header}>
      <Icon name="sort" size={28} color = {COLOR.white} />
      <Icon name="notifications-none" size={28} color = {COLOR.white} />
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style = {{backgroundColor: COLOR.primary, height: 120, paddingHorizontal: 20,}}>
        <View>
        <Text style={style.headerTitle}>
          Explore the
        </Text>
        <Text style={style.headerTitle}>
          Beautiful Places
        </Text>
        <View style={style.inputConatiner}>
          <Icon name='search' size={20}/>
          <TextInput placeholder='Search place' style={{color: COLOR.grey}}/>
        </View>
        </View>
      </View>
      <ListCategories/>
    </ScrollView>

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

  headerTitle: {
    color: COLOR.white,
    fontWeight: 'bold',
    fontSize: 23,
  },

  inputConatiner: {
    height: 60,
    width: '100%',
    backgroundColor: COLOR.white,
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  
});

export default HomeScreen;
