import React from "react";
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { mmMainFont, mmRed } from "../data/colors";

const MyNavIcon = ({title, onPress})=>{
let iconName;
let iconText;

switch (title){
    case "Home" :{
        iconText="Home";
        iconName="home";
        break;
    }
    case "Edit":{
        iconText="Edit";
        iconName="pencil-square-o" ;
        break;
    }
    case "Delete":{
        iconText= "Delete";
        iconName="trash";
        break;
    }
    case "Gallery":{
        iconText="Gallery";
        iconName="image";
        break;
    }
    default: {
    }
};
    return (
        <TouchableOpacity style={styles.iconContainer}
            onPress={onPress}>
            <FontAwesome style={styles.icon} name={iconName} />
            <Text style={styles.iconText}>{iconText}</Text>
        </TouchableOpacity>
    )
};

const styles=StyleSheet.create({
    iconContainer:{
        paddingVertical:10,
        paddingHorizontal: 18,
        flexDirection:'column',
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'center',
    
    },
    iconText :{
        fontFamily: mmMainFont
    },
    icon:{
        color:mmRed,
        fontSize:28,
    }
});

export default MyNavIcon;