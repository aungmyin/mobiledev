import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';
import { TouchableRipple } from 'react-native-paper';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { uriBase } from '../ApiStore/ApiClient';


const SplashScreen = ( {navigation} ) => {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const [langStore, setLangStore] = React.useState([]);
    
    const styles = isDarkTheme ? dark_theme_styles : light_theme_styles;

    const getLangData = async () => {
        try {
            let language = await AsyncStorage.getItem('lang') || 'en'; 
          try {
              fetch(uriBase + '/public_lang/get_hflr?lang='+ language +'&filename=mobile_splash_screen')
              .then((response) => response.json())
              .then((langResponse) => {
                  
              //console.log(langResponse.data, " language");
              setLangStore(langResponse.data);
                  
                  
              })
              .catch((error) => {
                  console.error(error);
              });
              } catch (error) {
                  console.error(error);
              }
            
          } catch (error) {
            // Error retrieving data
            console.error(error);
          };
    }
    
    const setThemeFromStorage = async () => {
        let saved_theme = await AsyncStorage.getItem('appTheme');
        setIsDarkTheme(( saved_theme == "true" ) ? true : false)
    }

    useEffect( () => {
        

        setThemeFromStorage();
        getLangData();

    }, []);



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                source={require("../img/phoenix-logo.png")}
                tintColor = { isDarkTheme ? "#009387" : "" }
                style={styles.logo} />
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>{ langStore.intro_text }</Text>
                <Text style={styles.text}>{ langStore.signin_with_account }</Text>
                <View style={styles.button}>
                    <TouchableRipple onPress={() => navigation.navigate("SigninScreen")}>
                        <View style={styles.signIn}>
                            <Text style={styles.textSign}>{ langStore.get_started }</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color="#009387"
                                size={20}
                            />
                        </View>
                    </TouchableRipple>
                </View>
            </View>
        </View>
    );
}

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const dark_theme_styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#333',
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#007A70',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      height: height_logo,
      resizeMode: 'stretch',
      width: '90%'
  },
  title: {
      color: '#05375a',
      fontSize: 25,
      fontWeight: 'bold'
  },
  text: {
      color: '#333',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
      backgroundColor: '#333'
  },
  textSign: {
      color: '#009387',
      fontWeight: 'bold',
      margin: 15
  }
});

const light_theme_styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#009387',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      height: height_logo,
      resizeMode: 'stretch',
      width: '90%'
  },
  title: {
      color: '#05375a',
      fontSize: 25,
      fontWeight: 'bold'
  },
  text: {
      color: '#ddd',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
      backgroundColor: '#fff'
  },
  textSign: {
      color: '#009387',
      fontWeight: 'bold',
      margin: 15
  }
});