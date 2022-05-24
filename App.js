import React from 'react';
import { Text,StyleSheet, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import CalculatorScreen from './screens/CalculatorScreen';
 
export default function App() {
 return (
   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <SafeAreaView style={styles.container} >
       <Text>Hello Earth</Text>
       <CalculatorScreen />
     </SafeAreaView>
   </TouchableWithoutFeedback>
 );
}
 
const styles = StyleSheet.create({
 container: {
   backgroundColor: "#fff",
   margin: 20,
   flex: 1
 },
});

