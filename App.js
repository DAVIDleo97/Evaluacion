import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottonTab from './Navigator/BotonNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <BottonTab/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
