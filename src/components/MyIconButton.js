import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {ITEM_WIDTH} from '../data/constants';
import { mmDarkBlue, mmMainFont } from "../data/colors";

const MyIconButton = ({title, onPress})=>{
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
        iconText=title
    }
};
    return (
        <View style={styles.buttonStyle}>
        <TouchableOpacity style={styles.iconContainer}
            onPress={onPress}>
            <Text style={styles.iconText}>{iconText}</Text>
            {iconName? <FontAwesome style={styles.icon} name={iconName} />: null}
        </TouchableOpacity>
        </View>

    )
};

const styles=StyleSheet.create({
    iconContainer:{
        paddingVertical:5,
        paddingHorizontal: 5,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
    
    },
    iconText :{
        fontFamily: mmMainFont,
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        paddingRight:8,
    },
    icon:{
        color:'#fff',
        fontSize:28,
    },
    buttonStyle : {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#003349',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: mmDarkBlue,
    paddingVertical:4, 
    paddingHorizontal:8,
    margin: 15,
    minWidth: ITEM_WIDTH/3,
          
    },
});

export default MyIconButton;