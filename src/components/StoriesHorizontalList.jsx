import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import StoryContent from './StoryContent';
import storyData from '../backend/storyData.json';

const StoriesHorizontalList = () => {

  return (
    <ScrollView horizontal={true} >
      <View style={{ flex:1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'black' }}>
        {storyData.profiles.map((storyData, idx) => {
          return <StoryContent key={idx} storyData={storyData} />;
        })}
      </View>
    </ScrollView>
  );
};

export default StoriesHorizontalList;