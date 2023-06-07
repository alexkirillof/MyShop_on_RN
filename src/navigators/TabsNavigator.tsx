import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Text, View} from 'react-native';
import HomeScreen from "../screens/HomeScreen";

export type TabsStackParamList = {
    Home: undefined
    Cart: undefined
    Payment:undefined
    Profile: undefined
}

const TabsStack = createBottomTabNavigator<TabsStackParamList>()

const Example =()=>{
    return <View/>
}
const TabsNavigator = () => {
    return (
       <TabsStack.Navigator screenOptions={{
           tabBarShowLabel: false,


       }}>
            <TabsStack.Screen name='Home'
                              component={HomeScreen}
                              options={{headerShown:false}}
            />
            <TabsStack.Screen name='Cart' component={Example}/>
            <TabsStack.Screen name='Payment' component={Example}/>
           <TabsStack.Screen name='Profile' component={Example}/>
    </TabsStack.Navigator>
    );
}



export default TabsNavigator;
