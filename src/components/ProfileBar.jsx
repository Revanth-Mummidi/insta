import { View, Text, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import Icon1 from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/EvilIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileBar = ({ navigation }) => {
//   const instaUrl = "https://www.pngmart.com/files/21/Instagram-PNG-Transparent.png";
  
  return (
    
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%",height:57, alignItems:'center', backgroundColor: 'black' }}>
      {/* <Image source={{ uri: instaUrl }} style={{ width: 150, height: 40 }} resizeMode='contain' /> */}
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginLeft:20}}>
            revanth_mummidi
        </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center',width:80, marginRight: 15 }}>
        <TouchableOpacity>
        <Icon1 name="diff-added" size={25}  style={{color: 'white' }} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Icon name="navicon" size={30} style={{ marginRight: 10, color: 'white' }} />
        </TouchableOpacity>
      </View>
      
    </View>
    
  );
};

export default ProfileBar;
