import React from 'react';

import {StyleSheet, Text, View, ScrollView, SafeAreaView, Image} from 'react-native';

const HomeScreen = () => {
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={{paddingHorizontal:24, flexDirection:"row", alignItems:"center", gap:8}}>
                    <Image style={{width:52, aspectRatio:1}}></Image>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};


export default HomeScreen;
