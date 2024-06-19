import React, { useEffect, useState, useContext } from "react";
import {Text, Image, View, StyleSheet} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "@react-navigation/native";
import MainButton from "../components/MainButton";
import { mmDIsplayFont2, mmDisplayFont, mmRed } from "../data/colors";
import { Context as PlayerContext } from "../context/PlayerContext";
import PlayerNameForm from "../components/PlayerNameForm";

//bug occurs on first render, nameForm is created before value for playerName is set
//setter function for using SecureStorage
async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

//getter function for using SecureStorage
  async function getValueFor(key, setter) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      await setter(result); 
    } else {
      setter("Friend"); // Set to "Friend" if no value is stored
      await save(key, "Friend"); // Optionally, save "Friend" as the default name
    }
  }

const HomeScreen = ()=>{
    const navigation = useNavigation(); 
    
    //create state variables for player name
    //const [inputName, setInputName] = useState('');
    const {state, changeName, getPlayer} = useContext(PlayerContext);
    const [playerName, setPlayerName] = useState(state);

    return (
        <View style={styles.container}>
            <Text style={styles.fancyFont}>MONSTER</Text>
            <Text style={styles.casualFont}>mix</Text>
            <PlayerNameForm nameToChange={null} onFormSubmit={null} isMonsterForm={false}/>
            <View style={styles.buttonContainer}>
                <MainButton buttonContent='MIX a New Monster' buttonStyle='navigation' 
                onPress={()=>navigation.navigate("Create")} />
                <MainButton 
                  buttonContent='View Gallery' buttonStyle='navigation'
                  onPress={()=>navigation.navigate("Gallery", { playerName: playerName })}/>
                <MainButton 
                  buttonContent='About this app' buttonStyle='navigation'
                  onPress={()=>navigation.navigate("About", { playerName: playerName })}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
    buttonContainer :{
        marginHorizontal: 15,
        marginBottom: 30,
        flexDirection:"column",
        justifyContent: 'space-between',
       
    },

    fancyFont : {
      fontFamily: mmDisplayFont, 
      fontSize: 40,
      color: mmRed,
    },
    casualFont : {
      fontFamily: mmDIsplayFont2,
      fontSize: 55,
      color: '#666'
    },
    playerName :{
      fontWeight: 'bold',
      fontSize: 20
    }

});

export default HomeScreen;