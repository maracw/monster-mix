import React from 'react';
import {Text, View, StyleSheet, Linking, Image, ImageBackground, Dimensions} from 'react-native';
import MyHeader from '../components/MyHeader';
import { mmDIsplayFont2, mmDisplayFont, mmMainFont, mmRed, mmLightBlue } from '../data/colors';
import { Link } from '@react-navigation/native';
import MyIconButton from '../components/MyIconButton';
import MonsterImages from '../data/monsterImages';
import Penguin from '../images/timeline-80.jpg';


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
        

                <ImageBackground source={Penguin} style={styles.container}>
                    <View style={styles.innerContainer}>
                    <Text style={styles.textStyle}>Monster Mix was made by Mara Williams for CS 235IM Mobile App Development. Mara did all the drawings and they are copyright Mara Williams 2024.</Text>
                    <Text style={styles.textStyle}>Fonts used in this app: </Text>
                    <Text style={styles.miltonianText}>Miltonian Tattoo</Text>
                    <Text style={styles.pangolinText}>Pangolin Regular</Text>
                    <Text style={styles.comicNeueText}>Comic Neue Bold Italic</Text>
                    <MyIconButton title="See some Penguins" onPress={onClickLink}></MyIconButton>
                    </View>

                </ImageBackground>
            </View>
    );
};

const styles = StyleSheet.create({
    thumbnailStyle: {
        resizeMode: 'contain',
        width:'100%',
        height:50,
    },
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
        height: Dimensions.get("window").height,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        alignItems:'flex-end'
    
    },
    innerContainer: {
        marginHorizontal:10,
        padding:10,
        width: Dimensions.get("window").width*.6,
        backgroundColor: '#fffd',
    },
    pangolinText :{
        fontFamily: mmMainFont,
        fontSize: 22,
        color:mmRed
    },
    miltonianText: {
        fontFamily: mmDisplayFont, 
        fontSize: 22
    },
    comicNeueText:{
        fontFamily: mmDIsplayFont2,
        fontSize:20
    }
});

export default AboutScreen;