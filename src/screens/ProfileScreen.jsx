import { View, Text } from 'react-native'
import React from 'react'
import ProfileBar from '../components/ProfileBar'
import ProfileSection from '../components/ProfileSection'
import Highlights from '../components/Highlights'
const ProfileScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:'black',flexDirection:'column',justifyContent:'space-between'}}>
    <View style={{flexDirection:'column',justifyContent:'space-between'}}>
      <ProfileBar/>
      <ProfileSection/>
    </View>
    <View style={{flex:1,flexDirection:'row'}}>
      <Highlights/>
    </View>
    </View>
  )
}

export default ProfileScreen