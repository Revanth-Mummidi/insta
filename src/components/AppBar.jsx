import { View, Text, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppBar = ({ navigation }) => {
  const instaUrl = "https://www.pngmart.com/files/21/Instagram-PNG-Transparent.png";
  
  return (
    
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%",height:57, alignItems:'center', backgroundColor: 'black' }}>
      <Image source={{ uri: instaUrl }} style={{ width: 150, height: 40 }} resizeMode='contain' />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width:80, marginRight: 15 }}>
        <TouchableOpacity>
        <Icon name="hearto" size={25} style={{ marginRight: 15, color: 'white' }} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Icon name="message1" size={25} style={{ marginRight: 10, color: 'white' }} />
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

export default AppBar;
