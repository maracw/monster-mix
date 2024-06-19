import React, {  useContext } from "react";
import {  View, StyleSheet, TouchableOpacity} from 'react-native';
import GalleryItem from "./GalleryItem";
import MyIconButton from "./MyIconButton";
import { useNavigation } from "@react-navigation/native";
import { mmLightBlue } from "../data/colors";
import { Context } from "../context/MonsterContext";

const GalleryCard = ({item})=>{
    const navigation = useNavigation();
    const { deleteMonster } = useContext(Context);

    return (
        <View style={styles.cardStyle}>
            <TouchableOpacity onPress={() =>{ navigation.navigate('View', { id: item.id })}} >
				<GalleryItem item={item}/>
				<View style={styles.row}>
					<MyIconButton title="Edit" onPress={()=>{navigation.navigate('Edit', {id: item.id, item:item})}}></MyIconButton>
					<MyIconButton onPress={() => deleteMonster(item.id)} title="Delete"></MyIconButton>
				</View>
			</TouchableOpacity>
        </View>
    );
};

const styles=StyleSheet.create({
    cardStyle :{
        paddingHorizontal:4,
        paddingVertical:8,
        marginHorizontal: 10,
        marginBottom:15,
        alignSelf:'center',
        borderRadius: 10,
        backgroundColor: mmLightBlue,
        
        
    },
    row: {
        flexDirection:'row',
       // backgroundColor: '#ddd',
        justifyContent: 'space-around',
        // borderBottomLeftRadius:10,
        // borderBottomRightRadius:10
    },
});

export default GalleryCard;