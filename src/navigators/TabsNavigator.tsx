import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Text, View} from 'react-native';
import HomeScreen from "../screens/HomeScreen";
import Icons from "@expo/vector-icons/MaterialIcons";

export type TabsStackParamList = {
    Home: undefined
    Cart: undefined
    Payment: undefined
    Profile: undefined
}

const TabsStack = createBottomTabNavigator<TabsStackParamList>()

const Example = () => {
    return <View/>
}
const TabsNavigator = () => {
    return (
        <TabsStack.Navigator screenOptions={{
            tabBarShowLabel: false,
        }}>
            <TabsStack.Screen name='Home'
                              component={HomeScreen}
                              options={{
                                  headerShown: false,
                                  tabBarIcon(props) {
                                      return <Icons name='home' {...props}/>
                                  }
                              }}
            />
            <TabsStack.Screen name='Cart'
                              component={Example}
                              options={{
                headerShown: false,
                tabBarIcon(props) {
                    return <Icons name='shopping-cart' {...props}/>
                }
            }}/>
            <TabsStack.Screen name='Payment'
                              component={Example}
                              options={{
                headerShown: false,
                tabBarIcon(props) {
                    return <Icons name='payments' {...props}/>
                }
            }}/>
            <TabsStack.Screen name='Profile'
                              component={Example}
                              options={{
                headerShown: false,
                tabBarIcon(props) {
                    return <Icons name='person' {...props}/>
                }
            }}/>
        </TabsStack.Navigator>
    );
}


export default TabsNavigator;
