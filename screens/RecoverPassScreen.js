import React, { useState, useEffect } from "react";
import { 
    View,
    Text,
    Button,
    StyleSheet,
    TextInput, 
    Alert
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { TouchableRipple } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-community/async-storage";
import { uriBase } from '../ApiStore/ApiClient';

const RecoverPassScreen  = ( { navigation } ) => {

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
                        
                    </View>
                </View>
                
            </View>
            <ScrollView style={styles.container}>
                <Text style={{ fontSize: 23, margin: 10, textAlign: 'center', fontWeight: 'bold', color: '#2d9f88' }}>Forgot password</Text>
                <View style={styles.fullrow}>
                    <View style={ styles.titleBlk }>
                        <Text style={ styles.titleText }>Forgot password</Text>
                    </View>
                    <View>
                        <TextInput 
                            placeholder='fill account'
                            autoCapitalize="none" 
                            onChangeText={(val) => textInputChange(val)}
                            value={data.account}
                            onEndEditing={(e) => handleValidAccount(e.nativeEvent.text)}
                            style={ styles.textInputStyle }  />
                        {
                            data.isValidAccount ? null :
                            <Text style={styles.errorMsg}>Account can't empty and 4 characters long.</Text>
                        }
                    </View>
                </View>
                <View style={styles.fullrow}>
                    <View style={ styles.titleBlk }>
                        <Text style={ styles.titleText }>Company</Text>
                    </View>
                    <View>
                        <TextInput 
                            placeholder='fill company'
                            autoCapitalize="none"  
                            onChangeText={(val) => companyInputChange(val)}
                            value={data.company}
                            onEndEditing={(e) => handleValidCompany(e.nativeEvent.text)}
                            style={ styles.textInputStyle }  />
                        {
                            data.isValidCompany ? null :
                            <Text style={styles.errorMsg}>Company can't empty and 3 characters long.</Text>
                        }
                    </View>
                </View>
                
                <View style={styles.fullrow}>
                    <View >
                        <TouchableRipple style={styles.btnStyle}
                            onPress={() => {forgotPassChangeHandle(data.account, data.company)}}
                        >
                            <Text style={ styles.btnText }>Send</Text>
                        </TouchableRipple>
                    </View>
                </View>
            </ScrollView>
        </View>
    )

}

export default RecoverPassScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        paddingTop: 10,
    },
    header: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#ffcc00'
    },
    content: {
        flex: 3,
        marginTop: 15
    },
    myRow: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    colums: {
        width: '50%',
        paddingBottom: 8
    },
    textInputStyle: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        marginLeft: 2, 
        marginRight: 2,
        borderRadius: 10
    },
    fullrow: {
        width: '100%',
        padding: 10
    },
    titleBlk: {
        padding: 10
    },
    titleText: {
        color: '#666',
        fontWeight: 'bold'
    },
    btnStyle: {
        borderRadius: 10, backgroundColor: '#2d9f88', padding: 10
    },
    btnText: {
        fontSize: 15, textAlign: 'center', color: '#fff', fontWeight: 'bold'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    headerRgtContainer: {
      backgroundColor: '#cbe9ff', borderWidth: 1, borderColor: '#3ea0e6', paddingHorizontal: 10, paddingVertical: 8, borderRadius: 15,
    },
    QuestMark: {
      marginBottom: 15,  borderWidth: 1, borderColor: '#3ea0e6', paddingHorizontal: 11, paddingVertical: 5, marginLeft: 5, borderRadius: 15
    },
    QuestMarkText: {
      fontSize: 12, color: '#3ea0e6'
    }
});