import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider as MonsterProvider} from './src/context/MonsterContext';
import CreateMonsterScreen from './src/screens/CreateMonsterScreen';
import HomeScreen from './src/screens/HomeScreen';
import EditMonsterScreen from './src/screens/EditMonsterScreen';
import AboutScreen from './src/screens/AboutScreen';
import GalleryScreen from './src/screens/GalleryScreen';
import ViewMonsterScreen from './src/screens/ViewMonsterScreen';
//import SwipeCreate from './src/screens/SwipeCreate';
import { Provider as PlayerProvider } from './src/context/PlayerContext';
import { useFonts } from 'expo-font'; 
import { MiltonianTattoo_400Regular } from '@expo-google-fonts/miltonian-tattoo';
import { Pangolin_400Regular } from '@expo-google-fonts/pangolin';
import { ComicNeue_700Bold_Italic} from '@expo-google-fonts/comic-neue';
import { useEffect } from 'react';
//import SwipeEditScreen from './src/screens/SwipeEditScreen';

const Stack = createStackNavigator();

export default function App() {

   let [fontsLoaded] = useFonts({
    MiltonianTattoo_400Regular, Pangolin_400Regular,  ComicNeue_700Bold_Italic
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <PlayerProvider>
      <MonsterProvider>
      <NavigationContainer>
         <Stack.Navigator >
          <Stack.Screen options={{headerShown: false }} name="Home" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false }} name="Gallery" component={GalleryScreen}/> 
          <Stack.Screen options={{headerShown: false }} name="View" component={ViewMonsterScreen}/>
          <Stack.Screen options={{headerShown: false }}name="About" component={AboutScreen}/>
          <Stack.Screen options={{headerShown: false }} name="Create" component={CreateMonsterScreen}/>
          <Stack.Screen options={{headerShown: false }} name="Edit" component={EditMonsterScreen}/>
        </Stack.Navigator> 
    </NavigationContainer>
    </MonsterProvider>
    </PlayerProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
