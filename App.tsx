import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import RootNavigatior from "./src/navigators/RootNavigator";

export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <RootNavigatior/>
      <StatusBar style="auto" />
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
