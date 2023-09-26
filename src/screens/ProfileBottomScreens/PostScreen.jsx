import { View, Text, FlatList ,Image} from 'react-native'
import React from 'react'

const PostScreen = () => {
    const data=[
        {
            key:'1',
            image:"https://images.unsplash.com/photo-1687552101002-ef37f58d161e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        },
        {
            key:'2',
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM--hVamcJhFyQcqARua0LV9c-opvPKdxCZw&usqp=CAU",
        },
        {
            key:'3',
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_O2hyzHQi-0hFB8z-4rbSzCwMPKruXrDBQ&usqp=CAU",
        },
        {
            key:'4',
            image:require('../../images/space-pillars-of-creation-nircam-image-8k-wallpaper-uhdpaper.com-496@0@h.jpg'),
        },
        {
            key:'5',
            image:require('../../images/19609.jpg'),
        },
        {
            key:'6',
            image:require('../../images/53090.jpg'),
        },
        {
            key:'7',
            image:require('../../images/92833.jpg'),
        },
        {
            key:'8',
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_O2hyzHQi-0hFB8z-4rbSzCwMPKruXrDBQ&usqp=CAU",
        },
        {
            key:'9',
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_O2hyzHQi-0hFB8z-4rbSzCwMPKruXrDBQ&usqp=CAU",
        },
    ];
  return (
    <View>
      <FlatList
      data={data}
      numColumns={3}
      horizontal={false}
      renderItem={({item})=>{
        // console.log(item.image);
        if(item.key<4)
        {
        return(
            <Image source={{uri:item.image}} style={{height:113,width:113,marginVertical:2,marginHorizontal:2}}/>
        )
        }
        else
        {
            return(
                <Image source={item.image} style={{height:113,width:113,marginVertical:2,marginHorizontal:2}}/>
            )
        }
      }}
      />
    </View>
  )
}

export default PostScreen