import React from 'react';
import { useState } from 'react';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

const MyCollapse = ({children, title})=>{
    //set state for open/closed default is closed
    const [isOpen, setIsOpen]= useState(false);
//     <View>
//     <TouchableOpacity
//         style={styles.heading}         
//         onPress={() => setIsOpen((value) => !value)}
//         activeOpacity={0.8}>
//         <Text>heading</Text>
//         <Feather name={isOpen? "chevron-up": "chevron-down"} size={24} color="black" />
        
//     </TouchableOpacity>
//     <View>
//         {isOpen? {children}: null}
//     </View>


// </View>
    return (
        <View>
            <TouchableOpacity 
                activeOpacity={0.4}
                style={styles.heading}
                onPress={() => setIsOpen((value) => !value)}>
                <Text >{title}</Text>
                <Feather name={isOpen? "chevron-up": "chevron-down"} size={34} color="black" />
            </TouchableOpacity>
            {isOpen? 
            <View>
                {children}
                </View> : null}      
            </View>
        
    )
};

const styles = StyleSheet.create({
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        padding: 10,
      },
    content: {
    marginTop: 6,
    marginLeft: 2,
    },
});

export default MyCollapse;