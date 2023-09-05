import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Post from '../components/Post';

const HomeScreen = () => {
  return (
    <ScrollView>
       <StoriesHorizontalList/>
       <Post/>
      <Post/>
    </ScrollView>
  )
}

export default HomeScreen

const StoriesHorizontalList=() => {
    return (
        <View style={{width:'100%' , height:100 , backgroundColor:'grey'}}>
            <Text>Stories</Text>
        </View>
    )
}