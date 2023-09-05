import { View, Text,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const StoryContent = () => {
    let profiles=[
        {
        image:"https://images.unsplash.com/photo-1687552101002-ef37f58d161e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        name:"Jhon Doe",
    },
    {
        image:"https://images.unsplash.com/photo-1687552101002-ef37f58d161e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        name:"Revanth",
    },
    {
        image:"https://images.unsplash.com/photo-1687552101002-ef37f58d161e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        name:"Sriram",
    },
    {
        image:"https://images.unsplash.com/photo-1687552101002-ef37f58d161e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        name:"Uday",
    },
    {
        image:"https://images.unsplash.com/photo-1687552101002-ef37f58d161e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        name:"Ram",
    }
]
    return (
       <TouchableOpacity>
      <View style={{flex:1,flexDirection:'row',alignItems:'center',width:'100%' , height:90 , backgroundColor:'black'}}>
        <View style={{flex:1,flexDirection:'column',justifyContent:'space-between'}}>
        <Image src={profiles[2].image} style={{width:60,height:60,borderRadius:50,marginLeft:8,borderWidth:3,borderColor:'orange',alignSelf:'center'}}/>
        <Text style={{fontWeight:'bold',color:'white',fontSize:13,textAlign:'center'}}>{profiles[2].name}</Text>
        </View>
      </View>
      </TouchableOpacity>
    )
}

export default StoryContent