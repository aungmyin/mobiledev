/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React, { useEffect } from 'react';
 import { ActivityIndicator, View} from 'react-native';
 import { 
   NavigationContainer, 
   DefaultTheme as NavigationDefaultTheme,
   DarkTheme as NavigationDarkTheme
 } from '@react-navigation/native';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import ClientInformation from './screens/ClientInformation';
 
 import { 
   Provider as PaperProvider, 
   DarkTheme as PaperDarkTheme,
   DefaultTheme as PaperDefaultTheme
 } from 'react-native-paper';
 
 import MainStackScreen from './screens/MainTabsScreen';
 
 import DrawerContent from './screens/DrawContent';
 
 import {AuthContext} from './components/content';
 import { uriBase } from './ApiStore/ApiClient';
 
 import RootStackScreen from './screens/RootStackScreen';
 
 import AsyncStorage from '@react-native-community/async-storage';
 import ChangePassword from './screens/ChangePassword';
 import HelpScreen from './screens/HelpScreen';
 import UserGuideScreen from './screens/UserGuide';
 import FAQScreen from './screens/FAQ';
 import WebView_PDF_Upload from './screens/PDFupload';
 import WorkReportFlatListScreen from './screens/WorkReportFlatListScreen';
 
 const Drawer = createDrawerNavigator();
 
 const App = () => {
 
   // const [isLoading, setIsLoading] = React.useState(true);
   // const [userToken, setUserToken] = React.useState(null);
 
   const [isDarkTheme, setIsDarkTheme] = React.useState(false);
 
   const initialLoginState = {
     isLoading: true,
     userName: null,
     userToken: null,
     loginUser: null
   };
 
   const CustomDefaultTheme = {
     ...NavigationDefaultTheme,
     ...PaperDefaultTheme,
     colors: {
       ...NavigationDefaultTheme.colors,
       ...PaperDefaultTheme.colors,
       background: '#ffffff',
       text: '#333333'
     }
   };
 
   const CustomDarkTheme = {
     ...NavigationDarkTheme,
     ...PaperDarkTheme,
     colors: {
       ...NavigationDarkTheme.colors,
       ...PaperDarkTheme.colors,
       background: '#333333',
       text: '#ffffff',
       bluetext: '#666666'
     }
   };

    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
 
 
   const loginReducer = (preState, action) => {
     switch(action.type) {
       case 'RETRIEVE_TOKEN':
         return {
           ...preState,
           userToken: action.userToken,
           isLoading: false
         };
       case 'LOGIN':
         return {
           ...preState,
           userName: action.id,
           userToken: action.token,
           isLoading: false
         };
       case 'LOGOUT':
         return {
           ...preState,
           userName: null,
           userToken: null,
           isLoading: false
         };
       case 'REGISTER':
         return {
           ...preState,
           userName: action.id,
           userToken: action.userToken,
           isLoading: false
         };
     }
   }
 
   const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
   const [langStore, setLangStore] = React.useState([]);
    const [langEnJp, setLangEnJp] = React.useState('');

    const [userId, setUserId] = React.useState(null);
    const [userToken, setUserToken] = React.useState(null);
    const [data, setData] = React.useState([]);
    const [yourPrifle, setYourPrifle] = React.useState(null);
 
   const authContext = React.useMemo(() => ({
     signIn: async(foundUser) => {
       // setUserToken('fgjk');
       // setIsLoading(false);
       
       const userToken = foundUser['access-token'];
       const userName = foundUser.name;
       const member_id = String(foundUser.member_id);
 
       try {
         await AsyncStorage.setItem('userToken', userToken);
         await AsyncStorage.setItem('member_id', member_id);
         await AsyncStorage.setItem('userName', userName);
         //await AsyncStorage.setItem('lang', 'jp');
       } catch(e) {
         console.log(e);
       } 
         
        console.log('user token: ', userToken, foundUser.name, member_id);
        dispatch({ type: 'LOGIN', id: userName, token: userToken });
     },


     signOut: async() => {
       // setUserToken(null);
       // setIsLoading(false);
       try {
         await AsyncStorage.removeItem('userToken');
         setUserToken(null);
        //  const theme = await AsyncStorage.getItem('appTheme');
        //  const keys = await AsyncStorage.getAllKeys();
        //  await AsyncStorage.multiRemove(keys);
        // await AsyncStorage.setItem( 'appTheme' , theme ); 
         
       } catch(e) {
         console.log(e);
       }
 
       dispatch({ type: 'LOGOUT' });
     },
     signUp: () => {
       setUserToken('fgjk');
       setIsLoading(false);
     },

     toggleTheme: async() => {

        setIsDarkTheme( isDarkTheme => !isDarkTheme );
        await AsyncStorage.setItem( 'appTheme' , String(!isDarkTheme) );
        console.log(await AsyncStorage.getItem('appTheme'))
     },

     getProfile: async() => {
      

      try {
        const value = await AsyncStorage.getItem('member_id');
        const tokenSave = await AsyncStorage.getItem('userToken');
        let language = await AsyncStorage.getItem('lang') || "en"; 

        console.log( { LANG_APP : language })
      
        if(language == 'en') {
          setLangEnJp(language);
          setYourPrifle('Your Profile');
        } else {
          setLangEnJp('jp');
          setYourPrifle('あなたのプロフィール');
        }

        console.log(language, langEnJp, "language check");

      try {
          fetch(uriBase + '/public_lang/get_hflr?lang='+ language +'&filename=employee_detail')
          .then((response) => response.json())
          .then((langResponse) => {
              
          //console.log(langResponse.data, " language en profile");
              
              setLangStore(langResponse.data);
              
          })
          .catch((error) => {
              console.error(error);
          });
      } catch (error) {
          // Error retrieving data
          console.error(error);
      }

        if (value !== null) {
          // We have data!!
          setUserId(value);
          setUserToken(tokenSave);
          //console.log(userId, userToken, uriBase, "I got token 5");
          
          //get profile data
          fetch(uriBase + '/employee_detail/employee_info?member_id='+value, {
              method: 'GET',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'access-token': tokenSave
              }
          })
          .then((response) => response.json())
          .then((json) => setData(json.show_detail))
          .catch((error) => console.error(error))
          .finally(() => console.log("finally"));

         console.log(data, " my profile data");
        }
        
      } catch (error) {
        // Error retrieving data
        console.error(error);
      };
     }
   }));
 
   useEffect(() => {
     setTimeout(async() => {
       //setIsLoading(false)
       let userToken;
       let theme;
       userToken = null;
 
       try {
         //assign null to userToken
         userToken = await AsyncStorage.getItem('userToken');
         setUserToken(userToken);
         console.log("Token Check: ", userToken);

         theme = await AsyncStorage.getItem("appTheme");
         console.log( { default_stored_theme : theme } );
         theme = (theme == "true") ? true : false;
         console.log({stored_theme : typeof theme, theme });
         setIsDarkTheme(theme);
         
       } catch(e) {
         console.log(e);
       } 
        console.log('user token 3: ', userToken);
       dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
     }, 1000);
   }, []);
 
   if( loginState.isLoading ) {
     return(
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <ActivityIndicator size="large"/>
       </View>
     );
   }
 
   return (
     <PaperProvider theme={theme}>
       <AuthContext.Provider value={authContext}>
         <NavigationContainer theme={theme}>
           { loginState.userToken != null || userToken != null ? (
             <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }>
               <Drawer.Screen name="HomeDrawer" component={MainStackScreen} />
               <Drawer.Screen name="ClientDrawer" component={ClientInformation} />
               <Drawer.Screen name="ChangePassword" component={ChangePassword} />
               <Drawer.Screen name="Helps" component={HelpScreen} />
               <Drawer.Screen name="UserGuide" component={UserGuideScreen} />
               <Drawer.Screen name="WVFileUpload" component={WebView_PDF_Upload} />
               <Drawer.Screen name="FAQ" component={FAQScreen} />
               <Drawer.Screen name="FlatScreen" component={WorkReportFlatListScreen} />
             </Drawer.Navigator>
           )
           :
             <RootStackScreen />
           }
           
           {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }>
             <Drawer.Screen name="HomeDrawer" component={MainStackScreen} />
           </Drawer.Navigator> */}
         </NavigationContainer>
       </AuthContext.Provider>
     </PaperProvider>
   );
 }
 
 
 export default App;
 