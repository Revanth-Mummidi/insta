import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Post from '../components/Post';
import StoriesHorizontalList from '../components/StoriesHorizontalList';

const HomeScreen = () => {
  return (
    <ScrollView>
       <StoriesHorizontalList/>
       <Post/>
      <Post/>
      <Post/>
    </ScrollView>
  )
}

export default HomeScreen
