import { isNumber } from 'lodash';
import React, { useState } from 'react';
import { SafeAreaView,StyleSheet, Text, TextInput, View,Keyboard } from 'react-native';
import { Button, Input } from "react-native-elements";
import {computeDistance,computeBearing} from "../util/helper";

export default CalculatorScreen =({buttontitle})=>{
    let [lat1, setLat1] = useState('');
    let [long1, setLong1] = useState('');
    let [lat2, setLat2] = useState('');
    let [long2, setLong2] = useState('');
    let [output,setOutput]=useState(null);
    let [err,setErr]=useState(null);

    
    const handleChange=(text,param)=>{
        const floatRegExp = new RegExp('^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$')
        if (floatRegExp.test(text)) {
            setErr(null);
        }else{
            setErr("Enter Numeric");
        }
        
        if(param=="lat1") setLat1(text);
        else if(param=="long1") setLong1(text);
        else if(param=="lat2") setLat2(text);
        else setLong2(text);
    }
    
    const clear=()=>{
        setLat1('');
        setLong1('');
        setLat2('');
        setLong2('');
        setOutput(null)
    }


    const compute=()=>{
        if
        let out={};
        out.distance=computeDistance(lat1,long1,lat2,long2);
        out.bearing=computeBearing(lat1,long1,lat2,long2);
        setOutput({...out});
    }
    return (
        <SafeAreaView>
        <Input
          type="text"
          style={styles.input}
          value={lat1}
          onChangeText={newText => handleChange(newText,"lat1")}
          placeholder="Enter Latitude for point 1"
          keyboardType='decimal-pad'
          
        />
        <Input
          type="text"
          style={styles.input}
          value={long1}
          onChangeText={newText => handleChange(newText,"long1")}
          placeholder="Enter Longitude for point 1"
          keyboardType='decimal-pad'
          
        />
       <Input
          type="text"
          style={styles.input}
          value={lat2}
          onChangeText={newText => handleChange(newText,"lat2")}
          placeholder="Enter Latitude for point 2"
          keyboardType='decimal-pad'
          
        />
         <Input
          type="text"
          style={styles.input}
          value={long2}
          onChangeText={newText => handleChange(newText,"long2")}
          placeholder="Enter Longitude for point 2"
          keyboardType='decimal-pad'
          
        />
        <Button title="calculate" style={styles.button} onPress={compute}/>
        <Button title="clear" style={styles.button} onPress={clear}/>
        {output!=null &&
        <Text>{`Distance :${output.distance} `}</Text>}
        {output!=null &&
        <Text>{`Bearing :${output.bearing} `}</Text>}
        {err!=null &&
        <Text>{`${err}`}</Text>}
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
      height: 20,
      margin: 1,
      borderBottomWidth:0,
      padding:1
    },
    button:{
        marginTop:5,
        marginBottom:10
    }
  });
  