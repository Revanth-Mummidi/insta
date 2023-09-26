import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ProfileBar from '../components/ProfileBar';
import ProfileSection from '../components/ProfileSection';
import Highlights from '../components/Highlights';
import ProfilePosts from '../components/ProfilePosts';
const ProfileScreen = () => {
  return (
    <>
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View
          style={{flexDirection: 'column', justifyContent: 'space-between'}}>
          <ProfileBar />
          <ProfileSection />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Highlights />
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row',backgroundColor:'black'}}>
        <ProfilePosts />
      </View>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;
