import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
const Greeter = (props) => {
    return(
        <View style={styles.container}>
        <Text> {props.greeting}</Text>
        <TextInput placeholder='Enter the name' />
        <Button title ={props.buttontitle}/>
        </View>
    );
};
const styles= StyleSheet.create({
    container: {
        margin: 20,
    },
});
export default Greeter;