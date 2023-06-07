import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                HomeScreen
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff22',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default HomeScreen;