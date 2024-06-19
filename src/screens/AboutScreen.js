import React from 'react';
import {Text, View, StyleSheet, Linking} from 'react-native';
import MyHeader from '../components/MyHeader';
import { mmDIsplayFont2, mmDisplayFont, mmMainFont, mmRed } from '../data/colors';
import { Link } from '@react-navigation/native';
import MyIconButton from '../components/MyIconButton';

const AboutScreen = ()=>{
    const url ='https://en.wikipedia.org/wiki/Penguin';
    const canOpen = async ()=>await Linking.canOpenURL(url);
    const onClickLink = async ()=>{
        if (canOpen){
            await Linking.openURL(url);
        }
        else{
            Alert.alert(`There is a problem opening this URL: ${url}`); 
        }
    };

    return (
        <View>
            <MyHeader title="About"></MyHeader>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Monster Mix is made by Mara Williams for CS 235IM Mobile App Development.</Text>
                <Text style={styles.textStyle}>Fonts used in this app: </Text>
                <Text style={styles.miltonianText}>Miltonian Tattoo</Text>
                <Text style={styles.pangolinText}>Pangolin Regular</Text>
                <Text style={styles.comicNeueText}>Comic Neue Bold Italic</Text>
                <View>
                    <MyIconButton title="See some Penguins" onPress={onClickLink}></MyIconButton>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        textAlign: 'center',
        marginVertical: 10
    },
    textStyle: {
        fontFamily: mmMainFont,
        fontSize: 22,
        marginVertical:8
    },
   container : {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:15,
        marginTop: 30
    
    },
    pangolinText :{
        fontFamily: mmMainFont,
        fontSize: 36,
        color:mmRed
    },
    miltonianText: {
        fontFamily: mmDisplayFont, 
        fontSize: 36
    },
    comicNeueText:{
        fontFamily: mmDIsplayFont2,
        fontSize:36
    }
});

export default AboutScreen;