import React from 'react';
import Dracula1 from '../images/Dracula-1.png';
import Penguin from '../images/timeline-80.jpg';
import { Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


//as import

//as require

//as uri

//svg rendered as component

const MonsterImages=()=>{

    const importedImg = {
        src: Penguin
    }
    const requiredImg = require('../images/Dracula-1.png');
    const uriImg = 'https://maracwilliams.com/assets/2019mouse-ikUluEdq.jpg';
/*
            <Image style={{height: 400, width:400, resizeMode: 'contain'}} source={{uri: uriImg}}></Image>
            <Image style={styles.small} source={{uri: uriImg}}></Image>
            <Image style={styles.small} source={requiredImg}></Image>
            <Image style={{height: 400, width:400, resizeMode: 'contain'}} source={importedImg.src}></Image>
    */
    return (
        <ScrollView horizontal>
            <Image style={{height: 400, width:400, resizeMode: 'contain'}} source={Penguin}></Image>
        </ScrollView>
       
    );
}

const styles = StyleSheet.create({
    small: {
        height: 150, 
        width: 150,
        resizeMode: 'contain',
        
    }
})

export default MonsterImages;