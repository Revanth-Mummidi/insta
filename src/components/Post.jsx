import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'

let data = {
    caption: "Amazing trip",
    image: "https://images.unsplash.com/photo-1687552101002-ef37f58d161e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    likes: 100,
    liked: false,
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
const Post = () => {
    const [postData, setPostData] = useState(data)
    const [like,setLike]=useState(false)
    const [save,setSave]=useState(false)
    return (
        <View style={{ width: '100%', backgroundColor: 'black' }}>
            {/* header  */}
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image src={postData.user.profile} style={{ borderRadius: 20, width: 40, height: 40, border: '1px solid white' }} />
                    <Text style={{ textAlignVertical: "center", marginLeft: 10, color: 'white', fontWeight: 'bold' }} >{postData.user.name}</Text>
                </View>
                <TouchableOpacity>
                    <Icon name="options-vertical" style={{ color: 'white', textAlignVertical: 'center' }} size={25} />
                </TouchableOpacity>
            </View>
            {/* image  */}
            <Image src={postData.image} style={{ width: '100%', height: 500 }} />
            {/* Footer  */}
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 10, backgroundColor: 'black' }}>
                {/* Like,Comment,Share  */}
                <View style={{ flex: 1, flexDirection: 'row', maxWidth: 120, justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={()=>{setLike(!like)}}>
                        <Icon2 name={like?"heart":"heart-o"} size={30} style={{ color: like?"#FF6969":"white" }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon2 name="comment-o" size={30} style={{ color: 'white' }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon3 name="share" size={30} style={{ color: 'white' }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>{setSave(!save)}}>
                    <Icon2 name={save?"bookmark":"bookmark-o"} size={30} style={{ color: 'white' }} />
                </TouchableOpacity>
            </View>
            {/* Likes and Description  */}
            <View style={{ flex: 1, flexDirection: 'column', height: 40 }} >
                <Text style={{ color: 'white', marginLeft: 10 }}>{postData.likes} Likes</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', }}>{postData.user.name}</Text>
                    <Text style={{ color: 'white', marginLeft: 10 }}>{postData.caption}</Text>
                </View>
            </View>
        </View>
    )
}

export default Post