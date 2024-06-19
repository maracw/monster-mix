## Tutorials used

### Importing Fonts
https://blog.logrocket.com/adding-custom-fonts-react-native/ 
Shows how to set up react-native-config file to export fonts held inside of assets folder
1. Create fonts folder inside assets
2. Copy in ttf files needed
3. Create react-native-config file
4. Run npx react-native-asset
5. Add fonts to stylesheet

Well - expo documentation
1. npx expo install expo-font
2. at runtime - add require statement, async loading
3. BETTER - add expo fonts to app.json in the plugins and include an array of font files
https://docs.expo.dev/develop/user-interface/fonts/#embed-font-in-a-native-project

  "plugins": [
      "expo-font",
      {
        "fonts": ["./assets/fonts/Portcullion.ttf","./assets/fonts/PoetsenOne-Regular.ttf" ]
      }
    ]

      "plugins": [
      "expo-font",

    ]
    no error
      "plugins": [
      "expo-font",
      {
        "fonts": [ ]
      }
    ]
    Yes error
Starting project at /Users/marawilliams/Repos/CS235/Monster-mix
PluginError: Plugin is an unexpected type: object
PluginError: Plugin is an unexpected type: object
    at withStaticPlugin (/Users/marawilliams/Repos/CS235/Monster-mix/node_modules/@expo/config-plugins/build/plugins/withStaticPlugin.js:132:11)
    at /Users/marawilliams/Repos/CS235/Monster-mix/node_modules/@expo/config-plugins/build/plugins/withPlugins.js:30:84
    at Array.reduce (<anonymous>)
    at withPlugins (/Users/marawilliams/Repos/CS235/Monster-mix/node_modules/@expo/config-plugins/build/plugins/withPlugins.js:30:18)
    at withConfigPlugins (/Users/marawilliams/Repos/CS235/Monster-mix/node_modules/@expo/config/build/plugins/withConfigPlugins.js:36:47)
    at fillAndReturnConfig (/Users/marawilliams/Repos/CS235/Monster-mix/node_modules/@expo/config/build/Config.js:218:78)
    at getConfig (/Users/marawilliams/Repos/CS235/Monster-mix/node_modules/@expo/config/build/Config.js:274:10)
    at startAsync (/Users/marawilliams/Repos/CS235/Monster-mix/node_modules/@expo/cli/build/src/start/startAsync.js:94:68)
    at expoStart (/Users/marawilliams/Repos/CS235/Monster-mix/node_modules/@expo/cli/build/src/start/index.js:117:12)

    trying google fonts
    You need to install each one 
    npx expo install @expo-google-fonts/miltonian-tattoo
    then add the import statement - in App?
    then add it to the use fonts hook in app
    https://docs.expo.dev/develop/user-interface/fonts/#use-a-google-font
    https://github.com/expo/google-fonts/tree/master/font-packages
    https://directory-by-atiladev-com.netlify.app/
    
I worked out how to import and use Google Fonts in my project. It uses the expo-fonts library. The documentation has several ways to set yourself up. This is the version that worked best for me.

Note - you have to install each font individually by name. So if you want the bold version and the italic version of the font, you need to import each one.

    find the font you want to use and get its library name

    run the install command using npx

npx expo install expo-font @expo-google-fonts/inter
  

    add import statements in App.js. You need to import the useFonts hook and the font itself 

import { useFonts } from 'expo-font'; 
import { Inter_900Black, Inter_100Thin } from '@expo-google-fonts/inter';


    Inside your exported App function, use the useFonts hook to load the fonts.

   let [fontsLoaded] = useFonts({
     Inter_900Black, Inter_100Thin,
  });
  if (!fontsLoaded) {
    return null;
  }

    When you want to add another font, repeat the step to install the font library using npx, add the import statement to App.js, add the font family name to the list argument in the useFonts hook call.


To find (most) Google Fonts, you can search the expo/google-fonts directory on github. For a visual search, I used this directory. If you click on a font, you can copy the install command, the import statement, and the list of font names. 

##Expo 51 and collapse
I used the Collapsible example as a model in the home screen. However, the expo example app is typescript not js. That means passing children is a little wierd. In the TS, tou can nest RN elements as usual. In my version, you set up a children property and then use equals open curly brace - write the RN elements as usual, closed curly brace and then close angle bracket for My Collapse.
Works with Text, View, a custom component like MainButton, Image
FOr Image I was worried that the MyCollapse does not have Image imported, but it was fine

BUT styles transfer, but they are weird unless they are inline

Referenced this link [netlify blog](https://www.netlify.com/blog/2020/12/17/react-children-the-misunderstood-prop/)

##Nested Text
You can nest text which lets you make spans for styling, essentially

##Flatlist business
https://gist.github.com/dozsolti/6d01d0f96d9abced3450a2e6149a2bc3
helpful onScroll logic used in MyFlatList to find index of visible item

helpful article on create react app alternatives https://www.freecodecamp.org/news/how-to-create-a-react-app-in-2024/