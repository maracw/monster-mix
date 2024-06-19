import React, { useState, useContext } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/MonsterContext';

import MainButton from './MainButton';
import NameForm from './NameForm';
import MonsterSlide from './MonsterSlide';

import {  TOP_MONSTER_DATA, MID_MONSTER_DATA, BOTTOM_MONSTER_DATA} from '../data/constants';
import { mmMainFont } from '../data/colors';


const MonsterSliderForm = ({formType, initialValues})=>{
    const navigation=useNavigation();
    const {editMonster, addMonster} = useContext(Context);
    const saveText = formType=="new"? "Save Monster" : "Update Monster";

    const [monsterName, setMonsterName] = useState(initialValues.monsterName ? initialValues.monsterName : 'New Monster');

    const [top, setTop] = useState(initialValues.top? initialValues.top : 0);
    const [mid, setMid] = useState(initialValues.mid? initialValues.mid : 0);
    const [bottom, setBottom]=useState(initialValues.bottom? initialValues.bottom : 0);

    const [isReset, setIsReset]= useState(false);
    const [isRandom, setIsRandom]=useState(false);
  
    const [topType, midType, bottomType] = [TOP_MONSTER_DATA[top].namePart, MID_MONSTER_DATA[mid]
    .namePart, BOTTOM_MONSTER_DATA[bottom].namePart];
    
    const randomMonsterParts= async ()=>{
        await setIsRandom(true);
        setIsRandom(false);
      }
    const resetMonsterParts = async () =>{
        await setIsReset(true);
        setTop(0);
        setMid(0);
        setBottom(0);
        setIsReset(false);
        };
    function onChangeMonster (index, position){
        if (position=="top"){
            setTop(index);
        }
        else if(position=="mid"){
            setMid(index);
        }
        else if (position=="bottom"){
            setBottom(index);
        }
        else{
            return null;
        }
    }

    const changeName = async (inputName) => {
        if (inputName.trim() !== '') {
            setMonsterName(inputName);
        }
    };

    const onClickSave = ()=>{
        let monsterFromForm = { ... initialValues, 
            monsterName,
            monsterType:`${topType}-${midType}-${bottomType}`,
            top,
            mid,
            bottom,
        };
        if (formType=='edit'){
            editMonster(monsterFromForm, () => navigation.navigate('Gallery'));
        }
        else {
            addMonster(monsterFromForm, () => navigation.navigate('Gallery'));
        }
    };

    return (
        <View style={styles.formContainer}>
            <View style={styles.nameContainer} >
                <NameForm nameToChange={monsterName} onFormSubmit={changeName} isMonsterForm={true}/>
                <Text style={styles.nameStyle}>{topType}-{midType}-{bottomType}</Text>
            </View>
            <View style={styles.monsterContainer}>
                <MonsterSlide position="top" monsterList={TOP_MONSTER_DATA} startIndex={top} onChangeMonster={onChangeMonster} isResetFromForm={isReset} isRandomFromForm={isRandom}></MonsterSlide>
                <MonsterSlide position="mid" monsterList={MID_MONSTER_DATA} startIndex={mid} onChangeMonster={onChangeMonster} isResetFromForm={isReset} isRandomFromForm={isRandom}></MonsterSlide>
                <MonsterSlide position="bottom" monsterList={BOTTOM_MONSTER_DATA} startIndex={bottom} onChangeMonster={onChangeMonster} isResetFromForm={isReset} isRandomFromForm={isRandom}></MonsterSlide>
            </View>
            <View style={styles.bottomButtonContainer}>
                <MainButton
                    buttonStyle="navigation"
                    onPress={()=>{resetMonsterParts()}}
                    buttonContent="Reset" />
                <MainButton
                    buttonStyle="navigation"
                    onPress={onClickSave}
                    buttonContent={saveText} />
                <MainButton
                    buttonStyle="navigation"
                    onPress={()=>{randomMonsterParts()}}
                    buttonContent="random" />
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    formContainer:{
        justifyContent: 'space-between',
    },
    nameStyle : {
        fontSize: 32, 
        fontWeight: 'bold',
        fontFamily: mmMainFont,
    },
    nameContainer : {
        alignItems: 'center',
    },
    monsterContainer:{

    },
    bottomButtonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal:4,
        marginTop:'auto',
        alignSelf: 'flex-end'
      },
 
});

export default MonsterSliderForm;