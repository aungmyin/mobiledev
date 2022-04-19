import React, { useState, useEffect } from "react";
import { 
    View,
    Text,
    Button,
    StyleSheet,
    TextInput, 
    Alert,
    Dimensions
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { TouchableRipple } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-community/async-storage";
import { uriBase } from '../ApiStore/ApiClient';
import { lang } from "moment";


const ForgotPasswordScreen  = ( { navigation } ) => {

    const [langStore, setLangStore] = React.useState([]);

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);


    const [data, setData] = useState({
        account: '',
        company: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidAccount: true,
        isValidCompany: true
    });

    const textInputChange = (val) => {
        if(val.length >= 4) {
            setData({
                ... data,
                account: val,
                check_textInputChange: true,
                isValidAccount: true
            })
        } else {
            setData({
                ... data,
                account: val,
                check_textInputChange: false,
                isValidAccount: false
            })
        }
    }
    
    const getLanguageData = async() =>{
        try {
          let language = await AsyncStorage.getItem('lang') || 'en'; 
        try {
            fetch(uriBase + '/public_lang/get_hflr?lang='+ language +'&filename=forgotpass')
            .then((response) => response.json())
            .then((langResponse) => {
                
            langResponse.data.rules = langResponse.data.rules.replace(/(\r\n|<([^>]+)>)/gm,'');
            console.log(langResponse.data, " language");
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

    const companyInputChange = (val) => {
        if(val.length >= 4) {
            setData({
                ... data,
                company: val,
                check_textInputChange: true,
                isValidCompany: true
            })
        } else {
            setData({
                ... data,
                company: val,
                check_textInputChange: false,
                isValidCompany: false
            })
        }
    }

    const handleValidAccount = (val) => {
        if (val.trim().length) {
            setData({
                ... data,
                isValidAccount: true
            })
        } else {
            setData({
                ... data,
                isValidAccount: false
            })
        }
    }

    const handleValidCompany = (val) => {
        if (val.trim().length >= 3) {
            setData({
                ... data,
                isValidCompany: true
            })
        } else {
            setData({
                ... data,
                isValidCompany: false
            })
        }
    }

    const forgotPassChangeHandle = async(checkAccount, checkCompany) => {

        let tokenSave = await AsyncStorage.getItem("userToken");
        
        if ( checkAccount.trim().length == 0 || checkCompany.trim().length == 0 ) {
            Alert.alert('Wrong Input!', 'All fields can\'t be empty.', [
                {text: 'Ok'}
            ]);
            return;
        }

        const forgotPswChange = fetch(uriBase + "/forgotpass/ask?company="+ checkCompany +"&email="+ checkAccount , {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'access-token': tokenSave
            }
        })
        .then((response) => response.json())
        .then(async (response) => {
            
            console.log( response );
            if (response.status == 0) {
                Alert.alert('Invalid Input!', 'account or company is incorrect.', [
                    {text: 'Ok'}
                ]);
                return;
            } else {
                
                let token = response.redirectURL.split("=")[1];
                AsyncStorage.setItem("reset_code_token", token);
                // Alert.alert("Successfully!", "Password was changed.", [
                //     {text: 'Ok'}
                // ]);

                navigation.navigate("ResetPasswordScreen");
            }
            
            setData({
                account: '',
                company: ''
            });
           // return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });

    }


    const styles = isDarkTheme ? dark_theme_styles : light_theme_styles;

    const setThemeFromStorage = async () => {
        let saved_theme = await AsyncStorage.getItem('appTheme');
        setIsDarkTheme(( saved_theme == "true" ) ? true : false)
    }
    
    useEffect(() => {

        getLanguageData();
        setThemeFromStorage();

    }, []);

    return(
        <View style={{ flex: 1}}>
            <View style={{ paddingLeft: 1, height: 62, paddingBottom: 6, paddingTop: 1, paddingRight: 5 }}>
                <View style={[styles.myRow, {marginTop: 8}]}>
                    <View style={styles.colums}>
                        <TouchableRipple onPress={()=> navigation.goBack() }>
                            <Icon name="ios-arrow-back" size={25} style={{margin: 5}} color="#707070"
                    backgroundColor="#009387" onPress={() => navigation.goBack()} ></Icon> 
                        </TouchableRipple>
                    </View>
                    <View style={[{ width: '50%', alignItems: 'flex-end', alignContent: 'flex-end'}]}>
                        {/* <View style={[ styles.headerRgtContainer]}>
                            <TouchableOpacity 
                                onPress={ () => navigation.navigate("Helps") }
                                style={styles.myRow}
                            >
                                <View style={{ marginTop: 1 }}>
                                    <Text style={{color: '#3ea0e6'}}>Help</Text>
                                </View>
                                <View style={ styles.QuestMark}>
                                    <Text style={styles.QuestMarkText}>?</Text> 
                                </View>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                </View>
                
            </View>
            <ScrollView style={styles.container}>
                <Text style={{ fontSize: 23, margin: 10, textAlign: 'center', fontWeight: 'bold', color: '#2d9f88' }}> { langStore.forgot_password } </Text>
                        
            
                <View style={styles.formGroup}>

                    <Text style={ styles.text_label }>{ langStore.account_label }</Text>
                    <View style={styles.action}> 
                        <TextInput 
                            placeholder={ langStore.account }
                            placeholderTextColor= { isDarkTheme ? '#ccc' : '#adadad' }
                            autoCapitalize="none" 
                            onChangeText={(val) => textInputChange(val)}
                            value={data.account}
                            onEndEditing={(e) => handleValidAccount(e.nativeEvent.text)}
                            style={ styles.textInput }  />
                    
                    </View>
                    
                    <Text style={ [ styles.text_label,{marginTop: 15} ] }>{ langStore.company }</Text>
                    <View style={styles.action}>
                        <TextInput 
                            placeholder={ langStore.company }
                            placeholderTextColor= { isDarkTheme ? '#ccc' : '#adadad' }
                            autoCapitalize="none"  
                            onChangeText={(val) => companyInputChange(val)}
                            value={data.company}
                            onEndEditing={(e) => handleValidCompany(e.nativeEvent.text)}
                            style={ styles.textInput }  />
                    </View>
                    
                    <View style={ styles.alert }>
                        <Text style={ styles.alert_text}> { langStore.rules } </Text>
                    </View>
               
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => {forgotPassChangeHandle(data.account, data.company)}}
                    >
                        <Text style={styles.textSign}>{ langStore.ok }</Text>
                    </TouchableOpacity>
                    
                </View>
                

            </ScrollView>
        </View>
    );

}

export default ForgotPasswordScreen;


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
    formGroup: {
        flex: 3,
        backgroundColor: '#333',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    alert: {
        paddingHorizontal: 15, 
        backgroundColor: 'orange', 
        paddingVertical: 15, 
        marginBottom: 15, 
        borderRadius: 15, 
        borderColor: '#e0ad15', 
        borderWidth: 1,
        marginTop : 30,
    },
    alert_text :{
        fontSize: 14,
        color : '#343'
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
    text_label: {
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
    button: {
        alignItems: 'center',
        marginTop: 20,
        width : '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#009387",
        borderRadius: 10,
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
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff",
    },
    forgotPass: {
        color : "#ccc",
        fontSize: 18, 
        backgroundColor: "#333"
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
    alert: {
        paddingHorizontal: 15, 
        backgroundColor: '#ffe8a3', 
        paddingVertical: 15, 
        marginBottom: 15, 
        borderRadius: 15, 
        borderColor: '#e0ad15', 
        borderWidth: 1,
        marginTop : 30,
    },
    alert_text :{
        fontSize: 14,
        color : '#343'
    },
    formGroup: {
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
    text_label: {
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
        marginTop: 20,
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