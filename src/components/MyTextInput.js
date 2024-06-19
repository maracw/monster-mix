import React from 'react';
import { useState } from 'react';

import {Text, TextInput, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import MainButton from './MainButton';

const MyTextInput = ({onPress, title, buttonText, placeholder})=>{
    const [input, setInput] = useState('');


    const onClickSubmit= ()=>{
        if (input.trim() !== '') {
            setInput('');
          onPress(input);
          // setInputName('');
        }
    }
    return(
        <View style={styles.containerStyle}>
            <TextInput 
            style={styles.input}
            onChangeText={setInput}
            value={input}
            placeholder={placeholder? placeholder: ""}></TextInput>
            <MainButton buttonStyle='submit'
                buttonContent= 'change name'
                onPress={onClickSubmit}></MainButton>
        </View>
    );
};

const styles=StyleSheet.create({
    containerStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        },
    input: {
        height: 40,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'#fff',
        borderColor: 'gray',
        paddingHorizontal:10,
        marginHorizontal:20,
        width: '100%'
      },
});

export default MyTextInput;