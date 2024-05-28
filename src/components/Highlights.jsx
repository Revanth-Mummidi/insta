import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react';

const Highlights = () => {
  const data = [
    {
      key: 1,
      image:
        'https://e1.pxfuel.com/desktop-wallpaper/149/450/desktop-wallpaper-instagram-highlight-covers-in-2020-black-instagram.jpg',
      name: 'Me',
    },
    {
      key: 2,
      image:
        'https://i.pinimg.com/originals/c0/e7/2f/c0e72fc9898ed49d82f6aeaaf4e5b1a9.jpg',
      name: 'Foods',
    },
    {
      key: 3,
      image:
        'https://i.pinimg.com/originals/07/b9/d2/07b9d2b7b195bc3975cf7154dc78b554.jpg',
      name: 'Movies',
    },
    {
      key: 4,
      image:
        'https://i0.wp.com/www.pinkpepperparadise.com/wp-content/uploads/2019/07/Instagram-Higlight-Cover-Handwritten-free-for-bloggers-blog.jpg?resize=1440%2C2560',
      name: 'Blogs',
    },
    {
      key: 5,
      image: require('../images/download.png'),
      name: 'New',
    },
  ];
  const [HighlightData, setHighlightData] = useState(data);
  return (
    <View style={{flexDirection: 'row', width: '100%', marginVertical: 5}}>
      <FlatList
        data={HighlightData}
        // keyExtractor={(item,index)}
        horizontal={true}
        renderItem={({item}) => {
          if (item.key != 5) {
            return (
              <TouchableOpacity >
                <View
                  style={{
                    backgroundColor: 'black',
                    alignItems: 'center',
                    marginHorizontal: 10,
                  }}>
                  <Image
                    source={{uri: item.image}}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 100,
                      height: 60,
                      width: 60,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '600',
                      color: 'white',
                      alignItems: 'center',
                      paddingTop: 4,
                    }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                onPress={() => {
                  let arr = HighlightData;
                  arr.push({
                    key: 8,
                    image:
                      'https://i0.wp.com/www.pinkpepperparadise.com/wp-content/uploads/2019/07/Instagram-Higlight-Cover-Handwritten-free-for-bloggers-blog.jpg?resize=1440%2C2560',
                    name: 'Blogs',
                  });
                  setHighlightData(arr);
                }}>
                <View
                  style={{
                    height: 60,
                    width: 60,
                    backgroundColor: 'black',
                    alignItems: 'center',
                    marginHorizontal: 10,
                  }}>
                  {/* <Image source={item.image} style={{borderRadius:100,height:60,width:60}}/> */}
                  <Icon name="pluscircleo" size={60} style={{color: 'grey'}} />
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '600',
                      color: 'white',
                      alignItems: 'center',
                      paddingTop: 4,
                    }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }
        }}
      />
    </View>
  );
};

export default Highlights;
