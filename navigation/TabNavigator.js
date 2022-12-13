import React from 'react'
import  CreateBottomNavigator from 'react-navigation/bottom-tabs'
import Feed from "../screens/Feed"
import CreatePost from "../screens/CreatePost"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const BottomTabNavigator =()=>{
return(
    <Tab.navigator
    screenoptions={({route})=>({
        tabBarIcon:({focuse,color,size})=>{
            let iconName;
            if(route.name === 'Feed'){
                iconName = focused 
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'CreatePost'){
                iconName = focused ? 'create' : 'create-outline';
            }
            return <IonIcons name={iconName} size={size} color={color}/>
        },
    })}
    tabBaroptions={{
        activeTintColor:'tomato',
        inactiveTintColor: 'gray',
    }}
    >
        <Tab.Screen name="Feed" component={Feed}/>
        <Tab.Screen name="CreatePost" component={CreatePost}/>

    </Tab.navigator>
)

}

export default BottomTabNavigator 