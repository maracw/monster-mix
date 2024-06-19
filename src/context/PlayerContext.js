import createDataContext from './createDataContext';
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  try {
    const jsonValue = JSON.stringify(value);
    await SecureStore.setItemAsync(key, jsonValue);
  } catch (error) {
    console.error('Error saving value to SecureStore:', error);
  }
}

// const defaultName = 'friendly person who is not a monster';
const defaultName = null;

const playerReducer = (state, action) => {
  switch (action.type) {

    case 'set_player':
      console.log(action.payload);
      return action.payload.playerName;

    case 'edit_player':
      console.log('NAME ' + action.payload.playerName);
      const newName= action.payload.playerName;
      save("name", newName);
      return newName;
    case 'get_player':
      return state;
    default:
      return state;
  }
};

const changeName = (dispatch) => {
  return (playerName, callback) => {
    //callback is navigation
    dispatch({ type: 'edit_player', payload: { playerName } });
    if (callback) {
      callback();
    }
  };
};
const getPlayer = (dispatch)=>{
//   return dispatch({type: 'get_player'});
// 
return () => {
  //callback is navigation
  dispatch({ type: 'get_player' });

};


}

export const { Context, Provider } = createDataContext(
  playerReducer,
  { changeName, getPlayer},
 defaultName
);
