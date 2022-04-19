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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from "@react-native-community/async-storage";
import { uriBase } from '../ApiStore/ApiClient';

const ChangePassword  = ( { route, navigation } ) => {

    const [langEnJp, setLangEnJp] = React.useState('');
    const [langStore, setLangStore] = React.useState([]);
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const [data, setData] = useState({
        old_password: '',
        new_password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidOldPassword: true,
        isValidNewPassword: true,
        isValidConfirmPassword: true,
        isSamePassword : true,
        secureNewPassword : true,
        secureConfirmPassword : true,
    });

    const textInputChange = (val) => {
        if(val.trim().length >= 13) {
            setData({
                ... data,
                old_password: val,
                check_textInputChange: true,
                isValidOldPassword: true
            })
        } else {
            setData({
                ... data,
                old_password: val,
                check_textInputChange: false,
                isValidOldPassword: false
            })
        }
    }

    const handleValidOldPsw = (val) => {
        if (val.trim().length >= 13) {
            setData({
                ... data,
                isValidOldPassword: true
            })
        } else {
            setData({
                ... data,
                isValidOldPassword: false
            })
        }
    }

    const handleNewPasswordChange = (val) => {
        if (val.trim().length > 13) {
            setData({
                ... data,
                new_password: val,
                isValidNewPassword: true
            });
        } else {
            setData({
                ... data,
                new_password: val,
                isValidNewPassword: false
            });
        }
    }

    const handleValidNewPsw = (val) => {
        if (val.trim().length > 13) {
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

    const handleValidConfirmPsw = (val) => {
        if (val.trim().length > 13) {
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

        if(val === data.new_password ){
            setData({
                ... data,
                confirm_password : val,
                isSamePassword: true
            })
        }else{
            setData({
                ... data,
                confirm_password : val,
                isSamePassword: false
            })

        } 

        
    }

    const handleConfirmPasswordChange = (val) => {
        // console.log({ confirmpass_length : val.trim().length })
        if (val.trim().length > 13) {
            setData({
                ... data,
                confirm_password: val,
                isValidConfirmPassword: true
            });
        } else {
            setData({
                ... data,
                confirm_password: val,
                isValidConfirmPassword: false
            });
        }

        if(val === data.new_password ){
            setData({
                ... data,
                confirm_password : val,
                isSamePassword: true
            })
        }else{
            setData({
                ... data,
                confirm_password : val,
                isSamePassword: false
            })

        } 

        console.log({ confirm_pass  : val.trim().length , new_pass : data.new_password.length })
        console.log( { valid : data.isValidConfirmPassword, same : data.isSamePassword  })
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

    const passChangeHandle = async(oldPassword, newPassword, confirmPassword) => {

        let memberID = await AsyncStorage.getItem("member_id");
        let tokenSave = await AsyncStorage.getItem("userToken");
        let companyStName = await AsyncStorage.getItem("companyStName");

        const { email, account } = route.params; //get parameters
        
        if ( oldPassword.trim().length == 0 || newPassword.trim().length == 0 || confirmPassword.trim().length == 0 ) {
            Alert.alert('Wrong Input!', 'All fields can\'t be empty.', [
                {text: 'Ok'}
            ]);
            return;
        }

        if( newPassword !== confirmPassword )
        {
            Alert.alert('Wrong Input!', langStore.password_and_confirm_must_be_same, [ {text : 'Ok'} ]);
            return;
        }

        const passWordChange = fetch(uriBase + "/changepass/chpass?company="+ companyStName +"&email="+ email +"&account="+ account +"&oldpass=" + data.old_password + "&newpass=" + data.new_password + "&member_id="+ memberID, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'access-token': tokenSave
            }
        })
        .then((response) => response.json())
        .then((foundUser) => {
            console.log(foundUser, " change password status");
            if (foundUser.status == 0) {
                Alert.alert('Invalid Input!', 'old, new or confirm password is incorrect.', [
                    {text: 'Ok'}
                ]);
                return;
            } else {
                Alert.alert("Successfully!", "Password was changed.", [
                    {text: 'Ok'}
                ]);
            }
            
            setData({
                old_password: '',
                new_password: '',
                confirm_password: '',
                check_textInputChange: false,
                secureTextEntry: true,
                isValidOldPassword: true,
                isValidNewPassword: true,
                isValidConfirmPassword: true,
                isSamePassword : true,
                secureNewPassword : true,
                secureConfirmPassword : true,
            });
           // return responseJson;
        })
        .catch((error) => {
            console.error(error);
            Alert.alert({error});
        });

    }

    const languageSwitch = async() => {

        let language = await AsyncStorage.getItem('lang');

        if(language == null) { 
            language = 'en';
        }
    
        if(language == 'en') {
            setLangEnJp(language);
        } else {
            setLangEnJp('jp');
        }

        console.log(language, " language is customer");

        try {
            fetch(uriBase + '/public_lang/get_hflr?lang='+ language +'&filename=changepass')
            .then((response) => response.json())
            .then((langResponse) => {
                
              console.log(langResponse.data, " language en changepass");
                
                setLangStore(langResponse.data);
                
            })
            .catch((error) => {
                console.error(error);
            });
        } catch (error) {
            // Error retrieving data
            console.error(error);
        }
    }

    const styles = isDarkTheme ? dark_theme_styles : light_theme_styles;

    useEffect(() => {
        setTimeout( async () => {
            languageSwitch(); //getting profile data in first load
            const unsubscribe = navigation.addListener('focus', () => {
                // The screen is focused
                // Call any action
                languageSwitch(); //getting profile data

                
              });

              let saved_theme = await AsyncStorage.getItem('appTheme');
              setIsDarkTheme(( saved_theme == "true" ) ? true : false)
            
        }, 300);
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
                        <View style={[ styles.headerRgtContainer]}>
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
                        </View>
                    </View>
                </View>
                
            </View>
            <ScrollView style={styles.container}>
                <Text style={{ fontSize: 23, margin: 10, textAlign: 'center', fontWeight: 'bold', color: '#2d9f88' }}>{ langStore.change_password }</Text>
               
                <View style={styles.formGroup}>

                    <Text style={ styles.text_label }>{ langStore.oldpassword }</Text>
                    <View style={ styles.action }>
                        <TextInput 
                            placeholder={ langStore.oldpassword }
                            placeholderTextColor= { isDarkTheme ? '#ccc' : '#adadad' }
                            autoCapitalize="none" 
                            secureTextEntry={true} 
                            onChangeText={(val) => textInputChange(val)}
                            value={data.old_password}
                            onEndEditing={(e) => handleValidOldPsw(e.nativeEvent.text)}
                            style={ styles.textInput }  />
                      
                    </View>
                   
                    <Text style={ { ...styles.text_label,  marginTop : 25 }  }>{ langStore.newpassword }</Text>
                    <View style={ styles.action }>
                        <TextInput 
                            placeholder={ langStore.newpassword }
                            placeholderTextColor= { isDarkTheme ? '#ccc' : '#adadad' }
                            autoCapitalize="none" 
                            secureTextEntry={data.secureNewPassword} 
                            onChangeText={(val) => handleNewPasswordChange(val)}
                            value={data.new_password}
                            onEndEditing={(e) => handleValidNewPsw(e.nativeEvent.text)}
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
                        <Text style={styles.errorMsg}>New password must be between 13 and more characters.</Text>
                    }
                    
                    <Text style={ { ...styles.text_label,  marginTop : 25 } }>{ langStore.newpasswordconfirm }</Text>
                    <View style={ styles.action }>
                        <TextInput 
                            placeholder={ langStore.newpasswordconfirm } 
                            placeholderTextColor= { isDarkTheme ? '#ccc' : '#adadad' }
                            autoCapitalize="none" 
                            secureTextEntry={data.secureConfirmPassword} 
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                            value={data.confirm_password}
                            onEndEditing={(e) => handleValidConfirmPsw(e.nativeEvent.text)}
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
                        <Text style={styles.errorMsg}>Confirm password must be between 13 and more characters.</Text>
                    }
                    {
                        data.isSamePassword ? null :
                        <Text style={styles.errorMsg}>{ langStore.password_and_confirm_must_be_same }</Text>
                    }
                    
                    <TouchableRipple style={styles.button}
                        onPress={() => {passChangeHandle(data.old_password, data.new_password, data.confirm_password)}}
                    >
                        <Text style={ styles.btnText }>{ langStore.ok }</Text>
                    </TouchableRipple>
                </View>

            </ScrollView>
        </View>
    );
}

export default ChangePassword;

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