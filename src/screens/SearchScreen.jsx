import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import postData from '../backend/postData.json'

const SearchScreen = () => {
  return (
    <View style={{flex:1,flexDirection:'column',backgroundColor:'black'}}>
      <SearchNavBar/>
      <View style={{flex:1,flexDirection:'column'}}>
                 <FlatList
                  numColumns={3}
                  horizontal={false}
                  scrollEnabled={true}
                  data={postData.data}
                  renderItem={({item,index})=>{
                      return(
                        <View key={index} style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',margin:2}}>

                        <Image src={postData.data[index%5].image} style={{width:"100%",aspectRatio:`3/4`}}/>
                        </View>
                      )
                  }}  
                 />
      </View>
    </View>
  )
}

const SearchNavBar=()=>{
  return(
    <View style={{display:'flex',justifyContent:'start',alignItems:'center',flexDirection:'row',borderWidth:1,backgroundColor:"rgb(58, 57, 57)",borderColor:'grey',paddingHorizontal:20, paddingVertical:10,borderRadius:15,margin:10}}>
       <Icon name="search"  size={20}/>
       <Text style={{marginLeft:10,alignItems:'center',fontSize:15}}>Search</Text>
    </View>
  )
}

export default SearchScreen