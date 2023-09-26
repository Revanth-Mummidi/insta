import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import React,{useState} from 'react'
import TabScreen from '../screens/ProfileBottomScreens/TabScreen';

const ProfilePosts = () => {
    const [isPost,setIsPost]=useState(true);
    const [isReel,setIsReel]=useState(false);
    const [isTags,setIsTags]=useState(false);
    const handlePost=()=>{
        setIsPost(true);
        setIsReel(false);
        setIsTags(false);
    }
    const handleReels=()=>{
        setIsPost(false);
        setIsReel(true);
        setIsTags(false);
    }
    const handleTags=()=>{
        setIsPost(false);
        setIsReel(false);
        setIsTags(true);
    }
  return (
    <View style={{flex:1,flexDirection:'column',backgroundColor:'black'}}>
    <View style={{backgroundColor:'black',flex:1,flexDirection:'row',justifyContent:'space-around',marginVertical:15}}>
     <TouchableOpacity onPress={handlePost}>
      <Icon name="grid-on" size={30} style={{color:isPost?'white':'rgba(255,255,255,0.6)'}}/>
      </TouchableOpacity >
      <TouchableOpacity onPress={handleReels} >
      <Icon name="video-collection" size={30} style={{color:isReel?'white':'rgba(255,255,255,0.6)'}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTags}>
      <Icon name="person-pin" size={30} style={{color:isTags?'white':'rgba(255,255,255,0.6)'}}/>
      </TouchableOpacity>
    </View>
   
    </View>
  )
}

export default ProfilePosts