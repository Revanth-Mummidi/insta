import {View, Text, Image, TouchableOpacity} from 'react-native';
import storyData from '../backend/storyData.json';
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react';

const ProfileSection = () => {
  return (
    <View
      style={{
        // height:100,
        flexDirection: 'column',
        justifyContent: 'space-between',
        // backgroundColor: 'blue',
        width:'100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          // backgroundColor: 'blue',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_O2hyzHQi-0hFB8z-4rbSzCwMPKruXrDBQ&usqp=CAU',
            }}
            style={{
              borderRadius: 100,
              height: 80,
              width: 80,
              margin: 10,
              borderColor: 'grey',
              borderWidth: 4,
            }}
            />
            </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 14, fontWeight: '500'}}>
            Revanth
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '900'}}>
              5
            </Text>
            <Text>Posts</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '900'}}>
              266
            </Text>
            <Text>Followers</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '900'}}>
              308
            </Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          // flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
         backgroundColor:'black',
  
         width:'100%',
         paddingVertical:20,
          // marginVertical:10,
   
        }}>
        <View
          style={{flexDirection:'row',justifyContent:'center',height:35,width:"40%",alignItems:'center', backgroundColor: '#272829',borderRadius:10}}>
         <TouchableOpacity>
          <Text style={{fontWeight: '400', color: 'white',alignItems:'center'}}>Edit profile</Text>
         </TouchableOpacity>
        </View>
        <View
          style={{flexDirection:'row',justifyContent:'center',width:"40%",height:35, alignItems: 'center', backgroundColor: '#272829',borderRadius:10}}>
          <TouchableOpacity>
          <Text style={{fontWeight: '400', color: 'white'}}>Share profile</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{flexDirection:'row',justifyContent:'center',width: "10%",height:35, alignItems: 'center', backgroundColor: '#272829',borderRadius:10}}>
         <TouchableOpacity>
          <Icon name='person-add' size={20}/>
         </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileSection;
