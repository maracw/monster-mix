import {Dimensions} from 'react-native';
import { topMonsterParts, midMonsterParts, bottomMonsterParts } from './monsterPartList';

const ITEM_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT= Dimensions.get("window").height;
const TOP_MONSTER_DATA =topMonsterParts;
const MID_MONSTER_DATA=midMonsterParts;
const BOTTOM_MONSTER_DATA=bottomMonsterParts;


export {ITEM_WIDTH, SCREEN_HEIGHT, TOP_MONSTER_DATA, MID_MONSTER_DATA, BOTTOM_MONSTER_DATA};