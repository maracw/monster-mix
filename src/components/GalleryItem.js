import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import MonsterImage from "./MonsterImage";
import { bottomMonsterParts, midMonsterParts, topMonsterParts } from "../data/monsterPartList";
import MainButton from "./MainButton";
import { mmDarkBlue,  mmMainFont, mmDIsplayFont2 } from "../data/colors";

const GalleryItem = ({item}) =>{
    const {top, mid, bottom} = item;
    const topImageId=topMonsterParts[top].id;
    const midImageId=midMonsterParts[mid].id;
    const bottomImageId=bottomMonsterParts[bottom].id;

    if(!item){
        return <Text>no monster</Text>
    }
    else{
        return (

            <View style={styles.containerStyle}>
                
                <View style={styles.thumbnailContainer}>
                    <MonsterImage id={topImageId} styleName="thumbnail"></MonsterImage>
                    <MonsterImage id={midImageId} styleName="thumbnail"></MonsterImage>
                    <MonsterImage id={bottomImageId} styleName="thumbnail"></MonsterImage>
                </View>
                
                <View style={styles.descStyle}>
                    <Text style={styles.nameStyle}>
                      {item.monsterName}</Text>
                    <Text style={styles.monsterTypeStyle}>{item.monsterType}</Text>
                    <Text style={styles.madeBy}>made by {item.madeBy}</Text>
                </View>

            </View>
        )
    }
};

const styles = StyleSheet.create({
    containerStyle :{
        flexDirection: 'row',
        padding: 8,
        paddingBottom:2,
    },
    descStyle :{
        marginHorizontal: 10,
        flex:1
    },
    
    nameStyle : {
        fontSize: 32, 
        fontWeight: 'bold',
        color: 'black',
        fontFamily: mmMainFont,
      
    },
    monsterTypeStyle: {
        fontSize: 20, 
        color: mmDarkBlue,
        fontWeight: 'bold',
        fontStyle: mmDIsplayFont2
    },
    madeBy:{
        fontFamily: mmMainFont,
        fontSize: 20
    },
    thumbnailContainer : {
        borderWidth: 2,
        marginHorizontal:5,
        borderRadius : 10,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        width: 100
    }
});

export default GalleryItem;