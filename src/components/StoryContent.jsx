import { View, Text,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const StoryContent = ({storyData}) => {
    
    return (
       <TouchableOpacity>
      <View style={{flex:1,flexDirection:'row',alignItems:'center',width:90 , height:90 , backgroundColor:'black'}}>
        <View style={{flex:1,flexDirection:'column',justifyContent:'space-between'}}>
        <Image src={storyData.image} style={{width:70,height:70,borderRadius:50,marginLeft:8,borderWidth:3,borderColor:'orange',alignSelf:'center'}}/>
      
        <Text style={{fontWeight:'bold',color:'white',fontSize:13,textAlign:'center'}}>{storyData.name}</Text>
        </View>
      </View>
      </TouchableOpacity>
    )
}

export default StoryContent