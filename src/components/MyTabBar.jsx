import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flex:0, flexDirection: 'row' ,justifyContent:'space-around',padding:10,alignItems:'center',backgroundColor:'black' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity key={index}
            // accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{  }}
          >
            
                
                <Icon onPress={onPress} onLongPress={onLongPress}  style={{ color: isFocused ? '#FFFF' : 'grey' }} size={30} name={label=="Home" ? "home" : label=="Search" ? "search" : label=="Post" ? "plus" : label=="Reels" ? "video-camera" : label=="Profile" ? "user": ""} />
            
              
        
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default MyTabBar
// ...

