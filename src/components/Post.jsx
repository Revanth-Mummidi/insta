import { View, Text, Image, TouchableOpacity ,useWindowDimensions} from 'react-native'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'

const Post = ({data}) => {
    const [postData, setPostData] = useState(data)
    const [like,setLike]=useState(false)
    const [save,setSave]=useState(false)
    //const bottomSheet = useRef();
    const {height}=useWindowDimensions();

    function handleLike()
    {    
        setLike(!like)
        
    }
    return (
        <View style={{ width: '100%', backgroundColor: 'black' }}>
            {/* Header  */}
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image src={data.user.profile} style={{ borderRadius: 20, width: 40, height: 40 }} />
                    <Text style={{ textAlignVertical: "center", marginLeft: 10, color: 'white', fontWeight: 'bold' }} >{data.user.name}</Text>
                </View>
                <TouchableOpacity>
                    <Icon name="options-vertical" style={{ color: 'white', textAlignVertical: 'center' }} size={25} />
                </TouchableOpacity>
            </View>
            {/* image  */}
            <Image src={data.image} style={{ width: '100%', height: 500 }} />
            {/* Footer  */}
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 10, backgroundColor: 'black' }}>
                {/* Like,Comment,Share  */}
                <View style={{ flex: 1, flexDirection: 'row', maxWidth: 120, justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={()=>{handleLike()}}>
                        <Icon2 name={like?"heart":"heart-o"} size={30} style={{ color: like?"#FF6969":"white" }} />
                    </TouchableOpacity>
                    {/* comment  */}
                    {/* <BottomSheet hasDraggableIcon={false} ref={bottomSheet} height={height}  >
                     
                         <Text style={{color:'white',fontWeight:'bold',textAlign:'center',backgroundColor:'#272829'}}>Comments</Text>
                        <PostComments/>
            

                    </BottomSheet> */}
                    <TouchableOpacity >
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
                <Text style={{ color: 'white', marginLeft: 10 }}>{like?data.likes+1:data.likes} Likes</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', }}>{data.user.name}</Text>
                    <Text style={{ color: 'white', marginLeft: 10 }}>{data.caption}</Text>
                </View>
            </View>
        </View>
    )
}

export default Post