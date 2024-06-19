import React, { useEffect, useContext, useRef } from "react";
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import {StyleSheet, Text, View, Alert} from 'react-native';
import MyHeader from "../components/MyHeader";

import { Context } from "../context/MonsterContext";
import MonsterImage from "../components/MonsterImage";
import MainButton from "../components/MainButton";
import { topMonsterParts, midMonsterParts, bottomMonsterParts } from "../data/monsterPartList";
import { mmDIsplayFont2, mmDisplayFont, mmMainFont, mmRed } from "../data/colors";
import { ScrollView } from "react-native-gesture-handler";


const ViewMonsterScreen =({route})=>{
    const {state, editMonster}= useContext(Context);
    const imageRef = useRef();
    const [status, requestPermission] = MediaLibrary.usePermissions();

    //find monster by id
    const id = route.params.id;
    const monsterToView = state.find(monster => monster.id === id);
    
    const[top, mid, bottom]= [monsterToView.top, monsterToView.mid, monsterToView.bottom];
    const topImageId=topMonsterParts[top].id;
    const midImageId=midMonsterParts[mid].id;
    const bottomImageId=bottomMonsterParts[bottom].id;
    
    const [adjective, hobby, location] = [topMonsterParts[top].madLib, midMonsterParts[mid].madLib, bottomMonsterParts[bottom].madLib];
    
    useEffect(() => {
        // Request permissions when the component mounts
        if (!status || status.status !== 'granted') {
          requestPermission();
        }
      }, [status]);

    const onSaveImageAsync = async () => {
        try {
            const localUri = await captureRef(imageRef, {
            height: 440,
            quality: 1,
            });

            if (localUri) {
            await MediaLibrary.saveToLibraryAsync(localUri);
            Alert.alert("Saved!", "The image has been saved to your gallery.");
            }
        } catch (error) {
            console.error("Failed to save the image", error);
            Alert.alert("Error", "Failed to save the image.");
        }
    };

    return (
        <ScrollView>
            <MyHeader title="View"></MyHeader>
            <View style={styles.captureContainer} ref={imageRef} collapsable={false}>
                <Text style={styles.monsterName}>{monsterToView.monsterName}</Text>
                <Text style={styles.mixedBy}>mixed by {monsterToView.madeBy}</Text>
                <MonsterImage id={topImageId} styleName="view"></MonsterImage>
                <MonsterImage id={midImageId} styleName="view"></MonsterImage>
                <MonsterImage id={bottomImageId} styleName="view"></MonsterImage> 
                <Text style={styles.madLib}><Text style={styles.madLibMonsterName}>{monsterToView.monsterName}</Text> is a {adjective} {monsterToView.monsterType}, who likes to {hobby} in their {location}.</Text>
            </View>
            <MainButton onPress={onSaveImageAsync}  buttonContent="Save image to phone gallery"
                buttonStyle="navigation"
            ></MainButton>
        </ScrollView>
        
    )

};

const styles= StyleSheet.create({
    captureContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop:5,
        backgroundColor: '#fff',
    },
    monsterName: {
        fontFamily: mmDisplayFont, 
        fontSize: 40,
        color: mmRed,
        textAlign:'center',
        padding:10
    },
    mixedBy: {
        fontFamily: mmDIsplayFont2,
        fontSize: 24,
        color: '#000'
    },
    madLib : {
        fontFamily: mmMainFont,
        fontSize: 24    ,
        color: '#000',
        padding:10,
        textAlign: 'center'
    },
    madLibMonsterName : {
       color: mmRed,

    }
});

export default ViewMonsterScreen;