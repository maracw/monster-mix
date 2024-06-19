import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import imageIndex from '../data/imageIndex';

const width = Dimensions.get('window').width;
const height= Dimensions.get('window').height/3;  

const MonsterImage = ({id, styleName}) =>{

    const dynamicImage = imageIndex[id];
    let dynamicStyle;
    if(styleName==="view"){
        dynamicStyle= styles.viewStyle;
    }
    else if (styleName==="thumbnail"){

        dynamicStyle= styles.thumbnailStyle;
    }
    else{
        dynamicStyle= styles.imageStyle;
    }
    
    return <Image style={dynamicStyle} source={dynamicImage}></Image>
};

const styles=StyleSheet.create({
    imageStyle: {
        borderRadius : 10,
        resizeMode: 'contain',
        width:{width},
        height:150
    },
    thumbnailStyle: {
        resizeMode: 'contain',
        width:'100%',
        height:50,
    },
    viewStyle: {
        borderRadius : 10,
        resizeMode: 'contain',
        width:'66%',
        height:120,
    }
})
export default MonsterImage;