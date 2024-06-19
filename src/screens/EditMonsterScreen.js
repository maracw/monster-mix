import React, { useState } from "react";
import { View, StyleSheet, } from 'react-native';
import MyHeader from "../components/MyHeader";
import MonsterSliderForm from "../components/MonsterSliderForm";
import { SCREEN_HEIGHT } from "../data/constants";

const EditMonsterScreen = ({route})=>{
   
    const [monsterToEdit, setMonsterToEdit]=useState(route.params.item);
   
    return (
        <View style={styles.container}>
        <MyHeader title="Edit"></MyHeader>
          <MonsterSliderForm formType="edit" initialValues={monsterToEdit}></MonsterSliderForm>
        </View>
    )
};

const styles = StyleSheet.create({
  container:{

  }
});

export default EditMonsterScreen;