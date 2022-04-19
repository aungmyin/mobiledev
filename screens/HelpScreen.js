import React, { useState, useEffect } from "react";
import { 
    View,
    Text,
    Button,
    StyleSheet,
    TextInput
} from "react-native";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableRipple } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import { uriBase } from '../ApiStore/ApiClient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HelpScreen = ({navigation}) => {
    
    const [langStore, setLangStore] = React.useState([]);
    const [langEnJp, setLangEnJp] = React.useState('');

    const languageApi = async() => {
        let language = await AsyncStorage.getItem('lang');
       // console.log(language, "Workreport store");

        if(language == null) {
            language = 'en';
        }
        
        if(language == 'en') {
            setLangEnJp(language);
        } else {
            setLangEnJp('jp');
        }

        try {
            fetch(uriBase + '/public_lang/get_hflr?lang='+ language +'&filename=work_report')
            .then((response) => response.json())
            .then((langResponse) => {
                
               // console.log(langResponse.data, language, "workreport language en");
                
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

    useEffect(() => {
        setTimeout(() => {
            languageApi(); //getting profile data in first load
            const unsubscribe = navigation.addListener('focus', () => {
                // The screen is focused
                // Call any action
                languageApi(); //getting profile data
              });
            
        }, 300);
    }, []);

    return (
        <View style={{ flex: 1}}>
            <View style={{ paddingLeft: 3, height: 60, paddingBottom: 6, paddingTop: 6, paddingRight: 5 }}>
                <View style={styles.myRow}>
                    <View style={[styles.colums, {marginTop: 6}]}>
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
                                <View style={{ marginTop: 3 }}>
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
            <View style={styles.container}>
                <Text style={{ color: '#1dbc9c', fontSize: 24, fontWeight: 'bold', marginBottom: 30}}>Need Help?</Text>

                <View style={[styles.myRow, {borderColor: '#ddd', borderWidth: 1, borderRadius: 15, padding: 10, marginVertical: 20}]}>
                    <TouchableOpacity 
                        style={styles.myRow} 
                        onPress={ () => navigation.navigate("UserGuide") }
                    >
                        <View style={[styles.colums, {padding: 15}]}>
                                <Text>{ langStore.user_guide }</Text>
                        </View>
                        <View style={[styles.colums, { alignItems: 'flex-end', padding: 5}]}>
                            <Icon name="ios-arrow-forward" size={25} style={{margin: 5}} color="#707070"
                            backgroundColor="#009387" onPress={() => navigation.goBack()} ></Icon> 
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.myRow, {borderColor: '#ddd', borderWidth: 1, borderRadius: 15, padding: 10}]}>
                    <TouchableOpacity 
                        style={styles.myRow} 
                        onPress={ () => navigation.navigate("FAQ") }
                    >
                        <View style={[styles.colums, {padding: 15}]}>
                            <Text>{ langStore.faq }</Text>
                        </View>
                        <View style={[styles.colums, { alignItems: 'flex-end', padding: 5}]}>
                            <Icon name="ios-arrow-forward" size={25} style={{margin: 5}} color="#707070"
                            backgroundColor="#009387" onPress={() => navigation.goBack()} ></Icon>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1 }}>

            </View>
        </View>
    );
    
}

export default HelpScreen;

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