import { View, Text,FlatList,Image } from 'react-native'
import React from 'react'

const Highlights = () => {
    const data=
        {
            image:'https://e1.pxfuel.com/desktop-wallpaper/149/450/desktop-wallpaper-instagram-highlight-covers-in-2020-black-instagram.jpg',
            name:'Me',
        };
  return (
    <View style={{flexDirection:'row',width:'100%'}}>
    {/* <FlatList
      data={data}
      renderItem={(item)=>{ */}
        <View style={{height:60,width:60,backgroundColor:'black',alignItems:'center',marginHorizontal:10}}>
            <Image source={{uri:data.image}} style={{borderRadius:100,height:60,width:60}}/>
            <Text style={{fontSize:13,fontWeight:'600',color:'white',alignItems:'center',paddingTop:4}}>{data.name}</Text>
        </View>
        <View style={{flexDirection:'column',height:60,width:60,backgroundColor:'black',alignItems:'center',marginHorizontal:10}}>
            <Image source={{uri:data.image}} style={{borderRadius:100,height:60,width:60}}/>
            <Text style={{fontSize:13,fontWeight:'600',color:'white',alignItems:'center',paddingTop:4}}>{data.name}</Text>
        </View>
        <View style={{flexDirection:'column',height:60,width:60,backgroundColor:'black',alignItems:'center',marginHorizontal:10}}>
            <Image source={{uri:data.image}} style={{borderRadius:100,height:60,width:60}}/>
            <Text style={{fontSize:13,fontWeight:'600',color:'white',alignItems:'center',paddingTop:4}}>{data.name}</Text>
        </View>
       {/* }}
     /> */}
    </View>
  )
}

export default Highlights