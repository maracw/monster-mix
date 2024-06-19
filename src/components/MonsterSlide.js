import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, FlatList, Dimensions} from 'react-native';
import MonsterImage from "./MonsterImage";
import { ITEM_WIDTH } from '../data/constants';

const MonsterSlide = ({ position, monsterList, startIndex, onChangeMonster, isResetFromForm, isRandomFromForm})=>{
const [items, setItems]=useState(monsterList);
const [currentIndex, setCurrentIndex]=useState(startIndex);
const ref=useRef(null);

useEffect(()=>{
    
    if (!isResetFromForm && !isRandomFromForm){
        return;
    }
    else if (isRandomFromForm){
        randomItem();
    }
    else if (isResetFromForm){
        setCurrentIndex(0);
        resetItem();
        }
},[isRandomFromForm, isResetFromForm]);

const resetItem = ()=>{
    if (ref.current) {
      ref.current.scrollToIndex({index: 0}) 
        }
    };

const randomItem=()=>{
        const randomIndex = Math.floor(Math.random()*items.length);
        setCurrentIndex(randomIndex);
        scrollToIndex(randomIndex);
      }

const scrollToIndex = ( index) => {
    if(ref.current){
        ref.current.scrollToIndex({
            animated: true,
            index: index,
          });
        }
    };
    

return (
    <View>
   <FlatList
        data={items}
        ref={ref}
        horizontal
        keyExtractor={(item) => item.id} 
        snapToAlignment="start"
        decelerationRate={"fast"} 
        snapToInterval={ITEM_WIDTH} 
        getItemLayout={(data, index) => (
            {length: ITEM_WIDTH, offset: ITEM_WIDTH * index, index}
          )}
        initialScrollIndex={startIndex}
        onScroll={(event)=>{
            const totalWidth = event.nativeEvent.layoutMeasurement.width;
            const xPosition = event.nativeEvent.contentOffset.x;
            const newIndex = Math.round(xPosition / totalWidth);
            if (newIndex !== currentIndex) {
                setCurrentIndex(newIndex);
                onChangeMonster(newIndex, position);
            }}  
        }
        extraData={startIndex}
        renderItem={({ item }) =><View style={styles.swipePart}>
            <MonsterImage id={item.id} styleName="imageStyle"></MonsterImage>
        </View>}
    >

        </FlatList>
    </View>
    )
};
const styles=StyleSheet.create({
    swipePart:{
        borderBottomWidth:2,
        borderTopWidth:2,
        width:Dimensions.get("window").width,
        height:'auto',
        marginBottom:2
    }
});

export default MonsterSlide;