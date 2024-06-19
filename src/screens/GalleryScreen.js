import React, {  useContext } from "react";
import {  View, StyleSheet, FlatList, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import MainButton from "../components/MainButton";
import { Context } from '../context/MonsterContext';
import MyHeader from "../components/MyHeader";
import GalleryCard from "../components/GalleryCard";
import {mmMainFont} from '../data/colors';
import { getPlayerName } from "../hooks/usePlayerContext";
const GalleryScreen = ({route})=>{
	const { state } = useContext(Context);
    const navigation=useNavigation();
    const playerName = getPlayerName();
	return (
		<View style={styles.containerStyle}>
			<MyHeader title="Gallery"></MyHeader>
		{state.length>0?
			<FlatList
				style={styles.listContainer}
				data={state}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return <GalleryCard item={item}></GalleryCard>}}
				/>:
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>There are no monsters to look at! You should make a monster.</Text>
                    <MainButton buttonContent='MIX a New Monster' buttonStyle='navigation' 
                onPress={()=>navigation.navigate("Create", { playerName: playerName })} />
                </View>

				}

		</View>
		);
}; 

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'center',
    },
	listContainer:{
		marginTop:15
	},
    horizontalContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    icon: {
        fontSize: 40,
        marginHorizontal: 15,
        marginVertical: 5
      },
    row: {
        flexDirection:'row',
        backgroundColor: '#ddd',
        justifyContent: 'flex-end',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    textContainer:{
        marginHorizontal:10
    },
    textStyle:{
        fontFamily: mmMainFont,
        fontSize: 34,
        color: '#000',
        padding:20,
        textAlign: 'center',

    }

});

export default GalleryScreen;