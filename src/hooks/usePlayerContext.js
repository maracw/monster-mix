import { useContext } from 'react';
import { Context as PlayerContext } from "../context/PlayerContext";


function usePlayerContext(){
    return useContext(PlayerContext);
}
function getPlayerName(){
    const{ state } =useContext(PlayerContext);
    if(state!=null){
        return state;
    }

}

export {usePlayerContext, getPlayerName};