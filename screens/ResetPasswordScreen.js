import React, { useState, useEffect, useMemo } from "react";
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from "@react-native-community/async-storage";
import { uriBase } from '../ApiStore/ApiClient';
import { lang } from "moment";


const ResetPasswordScreen  = ( { navigation } ) => {

    const [langStore, setLangStore] = React.useState([]);

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const [data, setData] = useState({
        resetcode : '',
        newpassword : '',
        confirmpassword : '',
        check_textInputChange: false,
        secureTextEntry: true,
        secureNewPassword: true,
        secureConfirmPassword: true,
        isValidResetCode: true,
        isValidNewPassword: true,
        isValidConfirmPassword : true
    });

    const getLanguageData = async() =>{

        console.log('Getting language....');

        let language = await AsyncStorage.getItem('lang') || 'en'; 
   
        fetch(uriBase + '/public_lang/get_hflr?lang='+ language +'&filename=forgotpassconfirm')
        .then((response) => response.json())
        .then((langResponse) => {
            
        // console.log(langResponse.data, " language");
        setLangStore(langResponse.data);
            
            
        })
        .catch((error) => {
            // console.error({ languageError : error});
        });
      

    }
    
    const resetCodeInputChange = (val) => {
            setData({
                ... data,
                resetcode: val,
                check_textInputChange: true,
                isValidResetCode: true
            })
    }
    

    const passwordInputChange = (val) => {
        if(val.trim().length >= 13) {
            setData({
                ... data,
                newpassword: val,
                check_textInputChange: true,
                isValidNewPassword: true
            })
        } else {
            setData({
                ... data,
                newpassword: val,
                check_textInputChange: false,
                isValidNewPassword: false
            })
        }
    }

    const confirmPasswordInputChange = (val) => {
        if(val.trim().length >= 13) {
            setData({
                ... data,
                confirmpassword: val,
                isValidConfirmPassword: true
            })
        } else {
            setData({
                ... data,
                confirmpassword: val,
                isValidConfirmPassword: false
            })
        }
    }

    const handleResetCode = (val) => {
        if (val.trim().length) {
            setData({
                ... data,
                isValidResetCode: true
            })
        } else {
            setData({
                ... data,
                isValidResetCode: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 13) {
            setData({
                ... data,
                isValidNewPassword: true
            })
        } else {
            setData({
                ... data,
                isValidNewPassword: false
            })
        }
    }

    const handleConfirmPasswordChange = (val) => {
        if (val.trim().length >= 13) {
            setData({
                ... data,
                isValidConfirmPassword: true
            })
        } else {
            setData({
                ... data,
                isValidConfirmPassword: false
            })
        }
    }

    const updateSecuryNewPassword = () => {
        setData({
            ... data,
            secureNewPassword: !data.secureNewPassword
        })
    }
    const updateSecuryConfirmPassword = () => {
        setData({
            ... data,
            secureConfirmPassword: !data.secureConfirmPassword
        })
    }

    const resetPassChangeHandle = async(reset_code, new_password, confirm_password) => {


        if( !data.isValidConfirmPassword || !data.isValidNewPassword )
        {
            return;
        }
        else if(new_password !== confirm_password){
            Alert.alert( "Error Status", "New Password and Confirm Password must be same!" );
            return;
        }
        else if(new_password == "" && confirm_password == "" && reset_code == ""){
            Alert.alert( "Input Field Error", "Input Field Required!" );
            return;
        }
        else{

                let saved_rest_code_token = await AsyncStorage.getItem('reset_code_token');
        
                console.log( { saved_rest_code_token } )
                fetch ( uriBase + `/recoverpass/reset?code=${saved_rest_code_token}&reset=${reset_code}`, {
                    method: 'GET',
                    headers: {
                        'Access-Control-Allow-Origin': "*",
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'access-token': saved_rest_code_token
                    }
                })
                .then( res => res.json()  )
                .then( res => {
                    if( !res.status )
                    {
                        console.log({ check_code :  res })
                        Alert.alert( "Reset Code Status" , "Invalid Code!")
                        return;
                    }
        
                    let resetcode_acess_token = res.token; 
                    fetch( uriBase + `/forgotpass/ch/chpassword?code=${resetcode_acess_token}&newpass=${new_password}&confirm_pass=${confirm_password}` , {
                        method: 'GET',
                        headers: {
                            'Access-Control-Allow-Origin': "*",
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'access-token': resetcode_acess_token
                        }
                    })
                    .then( res => res.json() )
                    .then( res => { 
                        console.log({res})
                        if(res.status == 0)
                        {
                            let err = res.error;
                            Alert.alert("Password Reset Status", err )
                            return;
                        }
        
                        Alert.alert("Successfully!", "Password was changed.", [
                            {text: 'Ok'}
                        ]);
        
                        navigation.navigate("SigninScreen");
        
                    })
                    .catch( err => console.log({err}) )
                    
                })
                .catch( err => console.log(err) )
        }


    }

    const styles = isDarkTheme ? dark_theme_styles : light_theme_styles;

    const setThemeFromStorage = async () => {
        let saved_theme = await AsyncStorage.getItem('appTheme');
        setIsDarkTheme(( saved_theme == "true" ) ? true : false)
    }

    
    useEffect(() => {

        console.log('GOT TO RESET SCREEN....');
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
                <Text style={{ fontSize: 23, margin: 10, textAlign: 'center', fontWeight: 'bold', color: '#2d9f88' }}> Reset Password </Text>
             
                <View style={styles.formGroup}>
                    
                    <Text style={ styles.text_label }> Reset Code </Text>
                    <View style={styles.action}> 
                        <TextInput 
                            placeholder='Reset Code'
                            placeholderTextColor= { isDarkTheme ? '#cccccc' : '#333333' }
                            autoCapitalize="none" 
                            onChangeText={(val) => resetCodeInputChange(val)}
                            keyboardType= "number-pad"
                            value={data.resetcode}
                            onEndEditing={(e) => handleResetCode(e.nativeEvent.text)}
                            style={ styles.textInput }  />
                           
                    
                    </View>

                    <Text style={ [ styles.text_label,{marginTop: 15} ] }>{ langStore.newpassword }</Text>
                    <View style={styles.action}>
                        <TextInput 
                            placeholder={ langStore.newpassword }
                            placeholderTextColor= { isDarkTheme ? '#cccccc' : '#333333' }
                            secureTextEntry={ data.secureNewPassword }
                            autoCapitalize="none"  
                            onChangeText={(val) => passwordInputChange(val)}
                            value={data.company}
                            onEndEditing={(e) => handlePasswordChange(e.nativeEvent.text)}
                            style={ styles.textInput }  />
                             <TouchableOpacity onPress={updateSecuryNewPassword} >
                                {data.secureNewPassword ? 
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
                         data.isValidNewPassword ? null :
                        <Text style={styles.errorMsg}>Password must be between 13 and more characters long.</Text>
                    }

                    <Text style={ [ styles.text_label,{marginTop: 15} ] }>{ langStore.confirmnewpassword }</Text>
                    <View style={styles.action}>
                        <TextInput 
                            placeholder={ langStore.confirmnewpassword }
                            placeholderTextColor= { isDarkTheme ? '#cccccc' : '#333333' }
                            secureTextEntry={ data.secureConfirmPassword ? true : false }
                            autoCapitalize="none"  
                            onChangeText={(val) => confirmPasswordInputChange(val)}
                            value={data.confirmpassword}
                            onEndEditing={(e) => handleConfirmPasswordChange(e.nativeEvent.text)}
                            style={ styles.textInput }  />
                        <TouchableOpacity onPress={updateSecuryConfirmPassword} >
                            {data.secureConfirmPassword ? 
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
                         data.isValidConfirmPassword ? null :
                        <Text style={styles.errorMsg}>Password must be between 13 and more characters long.</Text>
                    }

                    <TouchableRipple 
                        style={styles.button}
                        onPress={() => {resetPassChangeHandle(data.resetcode, data.newpassword, data.confirmpassword)}}
                    >
                        <Text style={ styles.btnText }>{ langStore.ok }</Text>
                    </TouchableRipple>
                    
                </View>
                
               

            </ScrollView>
        </View>
    );

}

export default ResetPasswordScreen;

   
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
        marginTop: 50,
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
        marginTop: 50,
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