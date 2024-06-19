import React, { useEffect, useReducer } from 'react';
import * as SecureStore from 'expo-secure-store';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch) => { return () => {} } }
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

const fetchMonsters = async () => {
  try {
  // try {
  //     await SecureStore.deleteItemAsync('monsters');
  //   } catch (error) {
  //     console.error('Error deleting value in SecureStore:', error);
  //   }
    const savedData = await SecureStore.getItemAsync('monsters');
  
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      dispatch({ type: 'set_monsters', payload: parsedData });
    } else {
      dispatch({ type: 'set_monsters', payload: [] });
    }
  
 
  } catch (error) {
    console.error('Error retrieving app data from SecureStore:', error);
  }
};
const fetchPlayer = async () => {
  try {
    // try {
    //   await SecureStore.deleteItemAsync('name');
    // } catch (error) {
    //   console.error('Error deleting value in SecureStore:', error);
    // }
    const savedData = await SecureStore.getItemAsync("name");
    
    if (savedData) {
      const playerName = JSON.parse(savedData);
      console.log("fetched name in context (createDataContext-44) "+ playerName);
      dispatch({ type: 'set_player', payload: playerName });
    } else {
      dispatch({ type: 'set_player', payload: {playerName:'friendly person who is not a monster'} });
    }
  
 
  } catch (error) {
    console.error('Error retrieving PLAYER data from SecureStore:', error);
  }
};

    useEffect(() => {
      console.log("useEffect in createDataContext");
      fetchPlayer();
      fetchMonsters();
      
    }, []);

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
