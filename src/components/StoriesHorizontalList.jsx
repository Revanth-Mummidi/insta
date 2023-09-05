import { View, Text,Image,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'
import StoryContent from './StoryContent'

const StoriesHorizontalList = () => {
 return (
  <ScrollView horizontal={true}>
  <View style={{flex:1,flexDirection:'row',alignItems:'center',width:'100%' , height:90 , backgroundColor:'black'}}>
  <StoryContent/>
  <StoryContent/>
  <StoryContent/>
  <StoryContent/>
  <StoryContent/>
  <StoryContent/>
  <StoryContent/>
  <StoryContent/>
  <StoryContent/>
  </View>
  </ScrollView>
 )
}

export default StoriesHorizontalList