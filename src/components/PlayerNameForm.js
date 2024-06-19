import React from 'react';
import { useState, useContext, useEffect} from 'react';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import MyTextInput from './MyTextInput';
import { mmMainFont } from '../data/colors';
import { Context as PlayerContext } from '../context/PlayerContext';

const PlayerNameForm = ({nameToChange, onFormSubmit, isMonsterForm})=>{
    const [inputName, setInputName] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const {state, changeName} = useContext(PlayerContext);
    const [startName, setStartName]=useState(state);
    useEffect(()=>{

        const awaitedName = async()=>{
            await setStartName(state);
            console.log(startName + ' is name after await (playerNameForm-24)');
        }
        if (!startName){
            awaitedName();
        }
      },);

    const onSubmitNameChange = async (inputName) => {
        if (inputName.trim() !== '') {
            setInputName('');
            changeName(inputName);
            setStartName(inputName);
            setIsOpen(false);
        }
      };

    return(
        <View style={styles.containerStyle}>
            <View>
                {isOpen? <View style={styles.horizontalBox}>
                        <MyTextInput onPress={onSubmitNameChange}
                        placeholder= {startName}
                        buttonText='change'></MyTextInput>
                        <TouchableOpacity onPress={()=>setIsOpen(!isOpen)}>
                                <Text><MaterialCommunityIcons name="close-box" size={24} color="black" />close</Text>
                        </TouchableOpacity>
                       </View> 
                        : 
                        <View style={styles.horizontalContainer}>
                            {!isMonsterForm? 
                                <View style={styles.welcomeContainer}>
                                    <Text style={styles.nameStyle}>Welcome {startName}</Text>
                                    <TouchableOpacity style={styles.horizontalIconContainer}onPress={()=>setIsOpen(!isOpen)}>
                                        <Feather name="edit" style={styles.editIcon} />
                                        <Text style={styles.editIcon}>change player name</Text>
                                    </TouchableOpacity>
                                </View>: 
                                <View style={styles.horizontalContainer}>
                                    <Text style={styles.nameStyle}>{startName}</Text>
                                    <TouchableOpacity style={styles.horizontalIconContainer}onPress={()=>setIsOpen(!isOpen)}>
                                        <Feather name="edit" style={styles.editIcon} />
                                        <Text style={styles.editIcon}>change</Text>
                                    </TouchableOpacity>             
                                </View>}                        
                        </View> }
            </View>
        {isMonsterForm? <Text style={styles.the}>the</Text>: null}
    </View>
    );
};

const styles=StyleSheet.create({
    containerStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
        },
        the:{
            fontSize: 32, 
            fontWeight: 'bold',
            fontFamily: mmMainFont,
        },
        nameStyle : {
            fontSize: 32, 
            fontWeight: 'bold',
            fontFamily: mmMainFont,
            textAlign: 'center'
        },
        nameContainer : {
            alignItems: 'center',
        },
        welcomeContainer:{
            display:'flex',
            alignItems: 'center',
            flexWrap:'wrap',
            marginBottom: 15,
        },
    editIcon:{
        paddingLeft:8,
        fontFamily: mmMainFont,
        fontSize: 22,
        color: 'rgba(139, 0, 0, 1.0)'
    },
    input: {
        height: 40,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderColor: 'gray',
        paddingHorizontal:10,
        marginHorizontal:20,
      },
      horizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap'
      },
      horizontalIconContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      horizontalBox:{
        borderWidth:6,
        borderColor:'red',
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '90%',
        alignContent: 'center',
        borderColor:'#8B0000',
        backgroundColor: 'rgba(139,0,0, .3)',
        borderRadius: 10
      }
});

export default PlayerNameForm;