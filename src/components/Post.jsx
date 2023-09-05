import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
const Post = () => {
    let postData = {
        caption: "Amazing sunset",
        image: "https://images.unsplash.com/photo-1687552101002-ef37f58d161e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        likes: 100,
        comments: [
            {
                user: "user1",
                text: "Beautiful!"
            },
            {
                user: "user2",
                text: "Love it!"
            }
        ],
        user: {
            name: "John Doe",
            age: 25,
            location: "New York",
            profile: "https://images.unsplash.com/photo-1687552101002-ef37f58d161e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
        }
    }
    return (
        <View style={{ width: '100%', marginTop: 10, backgroundColor: 'black' }}>
            {/* header  */}
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image src={postData.user.profile} style={{ borderRadius: 20, width: 40, height: 40, border: '1px solid white' }} />
                    <Text style={{ textAlignVertical: "center", marginLeft: 10, color: 'white', fontWeight: 'bold' }} >{postData.user.name}</Text>
                </View>
                <Icon name="options-vertical" style={{ color: 'white', textAlignVertical: 'center' }} size={25} />
            </View>
            {/* image  */}
            <Image src={postData.image} style={{ width: '100%', height: 500 }} />
            {/* Footer  */}
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 10,backgroundColor:'black' }}>
                {/* Like,Comment,Share  */}
                <View style={{flex:1,flexDirection:'row',maxWidth:120,justifyContent:'space-between'}}>
                <Icon2 name="heart-o" size={30} style={{color:'white'}} />
                <Icon2 name="comment-o" size={30} style={{color:'white'}}/>
                <Icon3 name="share" size={30} style={{color:'white'}}/>
                
                </View>
                <Icon2 name="bookmark-o" size={30} style={{color:'white'}}/>
            </View>
        </View>
    )
}

export default Post