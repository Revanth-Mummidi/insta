import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Post from '../components/Post';
import StoriesHorizontalList from '../components/StoriesHorizontalList';
import AppBar from '../components/AppBar';

import postData from '../backend/postData.json'

const HomeScreen = () => {
  return (
    <ScrollView>
      <AppBar/>
      <StoriesHorizontalList />

      {postData.data.map((post, idx) => {
        return <Post key={idx} data={post}  />;
      })}
    </ScrollView>
  );
};
 
export default HomeScreen
