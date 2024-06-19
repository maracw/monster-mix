import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MyNavIcon from './MyNavIcon';
import { useNavigation } from '@react-navigation/native';
import { mmDisplayFont } from '../data/colors';

const MyHeader = ({title})=>{
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <MyNavIcon title="Home"
            onPress={()=>navigation.navigate('Home')}></MyNavIcon>
            <Text style={styles.screenTitle}>{title}</Text>
            <MyNavIcon title="Gallery"
            onPress={()=>navigation.navigate('Gallery')}></MyNavIcon>
        </View>
    )
};

const styles=StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth:2,
        marginTop:40,
        backgroundColor:'white',
        justifyContent: 'space-between',
        alignItems:'flex-end'
    },
    screenTitle:{
        textAlign: 'center',
        fontFamily: mmDisplayFont, 
        fontSize: 40,
        color: "#8B0000",
        paddingVertical:10,
       
        
    },
});

export default MyHeader;