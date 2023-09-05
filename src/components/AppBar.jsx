import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
const AppBar = ({navigation}) => {
  return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 10}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Instagram</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 60 ,marginRight:15}}>
        <Icon name="hearto" size={30} style={{marginRight: 15}}/>
        <Icon name="message1" size={30} style={{marginLeft: 15}}/>
      </View>
    </View>
  )
}
export default AppBar