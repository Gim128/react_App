/* eslint-disable no-unreachable */
/* eslint-disable react/self-closing-comp */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Text, TextInput, ImageBackground, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLOR from '../consts/color';
import place from '../consts/place';
const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {

  const categoryIcons = [
    <Icon name="flight" size={25} color={COLOR.primary}/>,
    <Icon name="beach-access" size={25} color={COLOR.primary}/>,
    <Icon name="near-me" size={25} color={COLOR.primary}/>,
    <Icon name="palce" size={25} color={COLOR.primary}/>,
  ];

  const ListCategories = () => {
    return (
      <View style={style.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={style.iconContainer}>{icon}</View>

      ))}
    </View>
    );
  };

  const Card = ({place}) => {
    return 
    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('DetailsScreen', place)}>
    <ImageBackground style={style.cardImage} source={place.image}>
      <Text style={{color: COLOR.white, fontSize: 20, fontWeight: 'bold',marginTop: 10}}>{place.name}</Text>
      <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="place" size={20} color={COLOR.white}/>
          <Text style={{marginLeft: 5, color:COLOR.white}}>{place.location}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star" size={20} color={COLOR.white}/>
          <Text style={{marginLeft: 5, color:COLOR.white}}>5.0</Text>
        </View>
{/* 45:10 */}
      </View>
    </ImageBackground>
    </TouchableOpacity>
  }

  const RecomemdedCard = () => {
    return <ImageBackground style={style.rmCardImg} source={place.image}>
      <Text style={{color: COLOR.white, fontSize:22, fontWeight:'bold', marginTop:10}}>{place.name}</Text>
      <View style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}>
        <View style={{width: "100%", flexDirection: 'row', marginTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="place" size={22} color={COLOR.white}/>
            <Text style={{color: COLOR.white, marginLeft: 5}}>{place.location}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={22} color={COLOR.white}/>
            <Text style={{color: COLOR.white, marginLeft: 5}}>5.0</Text>
          </View>
         </View>
         <Text style={{color:COLOR.white, fontSize: 13}}
         >{place.details}</Text>
        </View>
    </ImageBackground>;
  }

  return <SafeAreaView
  style={{flex:1, backgroundColor: COLOR.white}}>
    <StatusBar translucent = {false} backgroundColor = {COLOR.primary}/>
    <View style = {style.header}>
      <Icon name="sort" size={28} color = {COLOR.white} />
      <Icon name="notifications-none" size={28} color = {COLOR.white} />
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style = {{backgroundColor: COLOR.primary, height: 120, paddingHorizontal: 20}}>
        <View>
        <Text style={style.headerTitle}>
          Explore the
        </Text>
        <Text style={style.headerTitle}>
          Beautiful Places
        </Text>
        <View style={style.inputConatiner}>
          <Icon name="search" size={20}/>
          <TextInput placeholder="Search place" style={{color: COLOR.grey}}/>
        </View>
        </View>
      </View>
      <ListCategories/>
      <Text style={style.sectionTitile}>Places</Text>
      <View>
        <FlatList
        contentContainerStyle={{paddingLeft:20}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={place} renderItem={({item}) => <Card place={item} />}/>
        <Text style = {style.sectionTitile}>Recomended</Text>
        <FlatList
        snapToInterval={width - 20}
        contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
        showsHorizontalScrollIndicator
        horizontal
        data={place}
        renderItem={({item})=> <RecomemdedCard place={item}/>}
        />
      </View>
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

  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLOR.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  sectionTitile: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },

  cardImage: {
    height:220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },

  rmCardImg: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },

});

export default HomeScreen;
