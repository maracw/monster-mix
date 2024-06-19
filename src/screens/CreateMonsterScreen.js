import React, { useState } from "react";
import {View} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import MyHeader from "../components/MyHeader";
import MonsterSliderForm from "../components/MonsterSliderForm";
import { getPlayerName } from "../hooks/usePlayerContext";

const CreateMonsterScreen =({route})=>{
    const navigation = useNavigation(); 

    const [monster, setMonster] = useState({
        monsterName: 'my monster',
        madeBy: getPlayerName(),
        id: Math.floor(Math.random() * 99999),
        top : 0, 
        mid:0,
        bottom:0,
    });

    return(
        <View>
            <MyHeader title="Create"></MyHeader>
            <MonsterSliderForm formType="new" initialValues={monster}></MonsterSliderForm>
        </View>
    );

}

export default CreateMonsterScreen;