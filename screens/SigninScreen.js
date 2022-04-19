import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Image,
    Alert,
    Keyboard,
    BackHandler
} from 'react-native';

import { AuthContext } from '../components/content';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import AsyncStorage from '@react-native-community/async-storage';

import Users from '../model/users';

import { uriBase } from '../ApiStore/ApiClient';
import { ScrollView } from 'react-native-gesture-handler';



const SignInScreen = ( {navigation} ) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        company: '',
        check_textInputChange: false,
        check_CompanyChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        isValidCompany: true,
    });

    const [keyboardStatus, setKeyboardStatus] = useState(undefined);

    const [langStore, setLangStore] = React.useState([]);
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const { signIn } = React.useContext(AuthContext);
 
    const textInputChange = (val) => {
        if(val.length) {
            setData({
                ... data,
                email: val,
                check_textInputChange: true,
                isValidUser: true
            })
        } else {
            setData({
                ... data,
                email: val,
                check_textInputChange: false,
                isValidUser: false
            })
        }
    }

    const handleValidUser = (val) => {
        if (val.trim().length) {
            setData({
                ... data,
                isValidUser: true
            })
        } else {
            setData({
                ... data,
                isValidUser: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ... data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ... data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const handleCompanyChange = (val) => {
        if (val.trim().length >= 3) {
            setData({
                ... data,
                company: val,
                check_CompanyChange: true,
                isValidCompany: true
            });
            // Keyboard.dismiss();// remove focus from textinput
        } else {
            setData({
                ... data,
                company: val,
                check_CompanyChange: true,
                isValidCompany: false
            });
        }
    }

    const updateSecuryTextEngry = () => {
        setData({
            ... data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const loginHandle = async(userName, password, companySt) => {
        // const foundUser = Users.filter( item => {
        //     return userName == item.username && password == item.password;
        // } ); jkkkk
        
        
       await AsyncStorage.setItem('companyStName', companySt);
        
        if ( data.email.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password can\'t be empty.', [
                {text: 'Ok'}
            ]);
            return;
        }

        const loginUser = fetch(uriBase + '/login/uac_login?email='+userName+'&company='+companySt+'&password='+password)
        .then((response) => response.json())
        .then((foundUser) => {
            console.log(foundUser, " Get Email");
            if (foundUser.status == 0) {
                Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                    {text: 'Ok'}
                ]);
                return;
            }
            signIn(foundUser);
           // return responseJson;
        })
        .catch((error) => {                                                                                   
            console.error(error);
            Alert.alert("An Error Occured!")
        });

    }

    const getLanguageData = async() =>{
        try {
          let language = await AsyncStorage.getItem('lang') || 'en'; 
        try {
            fetch(uriBase + '/public_lang/get_hflr?lang='+ language +'&filename=login')
            .then((response) => response.json())
            .then((langResponse) => {
                
            // console.log(langResponse.data, " language");
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
        
        setTimeout( async () => {
           if(Keyboard.dismiss()) {
               console.log("keyoard is hide");
            }
        }, 500);



        

        getLanguageData();


    }, []);

    const styles = isDarkTheme ? dark_theme_styles : light_theme_styles;

    

    return (
        <ScrollView style={styles.container}>
            <View style={[styles.header, { alignContent: 'center', alignItems: 'center'}]}>
                {/* <Text style={styles.text_header}>Welcome!</Text> */}
                <Image 
                source={require("../img/phoenix-logo.png")}
                tintColor = { isDarkTheme ? "#009387" : "" }
                style={styles.logo} />
                <Text>{keyboardStatus}</Text>
            </View>
            <View style={styles.footer}>

                <Text style={styles.text_footer}>{ langStore.account }</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        // color="#05375a"
                        style = { styles.icon }
                        size={20}
                    />
                    <TextInput
                        placeholder={ langStore.account }
                        placeholderTextColor= { isDarkTheme ? '#ccc' : '#adadad' }
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ?
                    <Feather
                        name="check-circle"
                        color="green"
                        size={18}
                    />
                    : null }
                </View>
                {/* {
                    data.isValidUser ? null :
                    <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                } */}
                

                <Text style={[styles.text_footer,{marginTop: 35}]}>{ langStore.password }</Text>
                <View style={styles.action} >
                    <FontAwesome 
                        name="lock"
                        size={20}
                        style = { styles.icon }
                    />
                    <TextInput
                        placeholder={ langStore.password }
                        placeholderTextColor= { isDarkTheme ? '#ccc' : '#adadad' }
                        secureTextEntry={ data.secureTextEntry ? true : false }
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity 
                        onPress={updateSecuryTextEngry}
                    >
                        {data.secureTextEntry ? 
                            <Feather
                                name="eye-off"
                                color="gray"
                                size={18}
                            />
                            :
                            <Feather
                                name="eye"
                                color="gray"
                                size={18}
                            />
                        }
                    </TouchableOpacity>
                </View>
                {
                    data.isValidPassword ? null :
                    <Text style={styles.errorMsg}>Password must be 4 characters long.</Text>
                }

                <Text style={[styles.text_footer,{marginTop: 35}]}>{ langStore.company }</Text>
                <View style={styles.action} >
                    <FontAwesome 
                        name="building"
                        style = { styles.icon }
                        size={20}
                    />
                    <TextInput
                        placeholder={ langStore.company }
                        placeholderTextColor= { isDarkTheme ? '#ccc' : '#adadad' }
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleCompanyChange(val)}
                    />
                    {data.check_CompanyChange ?
                        <Feather
                            name="check-circle"
                            color="green"
                            size={18}
                        />
                    : null }
                    
                </View>
                {
                    data.isValidCompany ? null :
                    <Text style={styles.errorMsg}>Company must be 3 characters long.</Text>
                }

                <   View style={styles.button}>
                    <TouchableOpacity 
                        style={styles.signIn}
                        onPress={() => {loginHandle(data.email, data.password, data.company)}}
                    >
                        <Text style={styles.textSign}>{ langStore.login }</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate("ForgotPswScreen")}
                    style={[styles.textSign, {
                        marginTop: 15,
                        alignItems: "flex-end"
                        }
                        
                    ]}
                >
                    <Text style={styles.forgotPass}>{ langStore.forgot_password }?</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default SignInScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.2;

const dark_theme_styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#333333'
    },
    icon : {
        color : "#ccc"
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 20
    },
    footer: {
        flex: 3,
        backgroundColor: '#333333',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    logo: {
        height: height_logo,
        resizeMode: 'stretch',
        width: '80%'
    },
    text_header: {
        color: '#ddd',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#009387',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInputStyle: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        marginLeft: 2, 
        marginRight: 2,
        borderRadius: 10
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#ccc',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#009387",
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff",
    },
    forgotPass: {
        color : "#ccc",
        fontSize: 18, 
        backgroundColor: "#333"
    },
    icon : {
        color : '#00544D'
    }
  });

  
const light_theme_styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#ffffff'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 20
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    logo: {
        height: height_logo,
        resizeMode: 'stretch',
        width: '80%'
    },
    text_header: {
        color: '#ddd',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInputStyle: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        marginLeft: 2, 
        marginRight: 2,
        borderRadius: 10
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#009387",
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff",
    },
    forgotPass: {
        color : "#333",
        fontSize: 18, 
        backgroundColor: "#fff"
    }
  });
