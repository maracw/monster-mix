import react from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import MyNavIcon from './MyNavIcon';
import { mmMainFont, mmRed } from '../data/colors';

const MainButton = ({onPress, buttonStyle, buttonContent, iconToInclude}) =>{
    
    const styleName = `styles.${buttonStyle}Style`;
    const textStyle=`styles.${buttonStyle}Text`;
    const hasIcon = iconToInclude!=null? true: false;
    
    const icon = ()=>{
        if (iconToInclude=='Edit'){
            return <MyNavIcon title="Edit" onPress={onPress}></MyNavIcon>
        }
        else if (iconToInclude=='Delete'){
            return <MyNavIcon title="Delete" onPress={onPress}></MyNavIcon>
        }
    };
    
   if(buttonStyle=='navigation'){
        return (
            <TouchableOpacity 
                style={styles.navigationStyle}
                onPress={()=>{onPress()}}>
                <Text style={styles.navigationText}>{buttonContent}</Text>
                <View>{hasIcon? icon: null}
                    </View>
            </TouchableOpacity>
    );}
    else {
        return (
            <TouchableOpacity 
                style={styles.submitStyle}
                onPress={()=>{onPress()}}>
                <Text style={styles.submitText}>{buttonContent}</Text>
            </TouchableOpacity>
        );
    }
    
};

const styles=StyleSheet.create({
submitText : {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 4,
},
submitStyle :{
    paddingHorizontal:10,
    marginHorizontal:20,
    width: '80%',
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: 'gray',
    marginBottom: 5,
},
navigationText : {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: mmMainFont
    },
navigationStyle : {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#692222',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: mmRed,
    padding: 10,    
    marginVertical: 5,  
    marginHorizontal: 10    
    },

 });

export default MainButton;