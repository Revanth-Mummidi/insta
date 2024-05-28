import { View, Text, FlatList ,Image} from 'react-native'
import React from 'react'

const TabScreen = () => {
  
    const data=[
     
      {
          key:4,
          image:require('../../images/space-pillars-of-creation-nircam-image-8k-wallpaper-uhdpaper.com-496@0@h.jpg'),
      },
      {
          key:5,
          image:require('../../images/19609.jpg'),
      },
      {
          key:6,
          image:require('../../images/53090.jpg'),
      },
      {
          key:7,
          image:require('../../images/92833.jpg'),
      },
   
  ];
return (
  <View>
    <FlatList
    data={data}
    numColumns={3}
    horizontal={false}
    scrollEnabled={false}
    renderItem={({item})=>{
      // console.log(item.image);
      if(item.key>=4)
      {
          return(
              <Image source={item.image} style={{height:113,width:113,marginVertical:2,marginHorizontal:2}}/>
          )
      }
      else
      {
          return(
              <Image source={{uri:item.image}} style={{height:113,width:113,marginVertical:2,marginHorizontal:2}}/>
          )
      }
    }}
    />
  </View>
)
  
}

export default TabScreen