// Using WebView to Pick and Upload files in React Native

// Import React
import React, { useState, useEffect } from 'react';
// Import core components
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { WebView } from 'react-native-webview';

import { TouchableRipple } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import AsyncStorage from '@react-native-community/async-storage';


const WebView_PDF_Upload = ({route, navigation}) => {

    const [storeData, setStoreData] = useState({
        memberId: '',
        tokenSave: '',
        gYear: '',
        gMonth: '',
        project_id: '',
        individual_contract_id: '',
        workreport_client_id: ''
    });

    const memberId_Token = async() => {
        const { sYear, sMonth, project_id, individual_contract_id, workreport_client_id } = route.params; //get parameters
        const member_id =  await AsyncStorage.getItem('member_id');
        const saveToken =  await AsyncStorage.getItem('userToken');

        setStoreData({
            ... storeData,
            memberId: member_id,
            tokenSave: saveToken,
            gYear: sYear,
            gMonth: sMonth,
            project_id: project_id,
            workreport_client_id: workreport_client_id,
            individual_contract_id: individual_contract_id

        });

        console.log(storeData, " detail")
    }

    const goBacknReoload = async () => {
        await AsyncStorage.setItem("updatePDF", 'true');
        let checkval = await AsyncStorage.getItem("updatePDF");

        navigation.navigate("Workreport");

        console.log(checkval, "Value Check")
    }

    const ViewOfHtml = () => {

        return(
            <WebView
                source={{ 
                    uri: 'https://development.phoenix.xyz/general/?page=customer_work_report_upload&member_id=' + 
                    storeData.memberId + '&sYear=' + storeData.gYear + '&sMonth=' + storeData.gMonth + '&tskey=' + 
                    storeData.tokenSave + '&individual_contract_id=' + storeData.individual_contract_id + 
                    '&project_id=' + storeData.project_id + '&workreport_client_id=' + storeData.workreport_client_id 
                }} 
             
                textZoom={100}
            />
        )
    }

    useEffect(() => {
        setTimeout(() => {
            memberId_Token();
            const unsubscribe = navigation.addListener('focus', () => {
                // The screen is focused
                // Call any action
                memberId_Token();
                ViewOfHtml();
              });
            
        }, 300);
    }, []);

    return(
        <View style={{ flex: 1}}>
            <View style={{ paddingLeft: 3, height: 60, paddingBottom: 6, paddingTop: 6, paddingRight: 5 }}>
                <View style={[styles.myRow]}>
                    <View style={[styles.colums, {marginTop: 6}]}>
                        <TouchableRipple 
                        onPress={()=> navigation.navigate('Workreport', {
                            pdfYear: storeData.gYear,
                            pdfMonth: storeData.gMonth,
                            pdfBack: 'true'
                        }) }
                        >
                            <Icon name="ios-arrow-back" size={25} style={{margin: 5}} color="#707070"
                            backgroundColor="#009387" 
                            //onPress={() => navigation.goBack()} 
                            ></Icon> 
                        </TouchableRipple>
                    </View>
                    <View style={[{ width: '50%', alignItems: 'flex-end', alignContent: 'flex-end'}]}>
                        <View style={[ styles.headerRgtContainer]}>
                            <TouchableOpacity 
                                onPress={ () => navigation.navigate("Helps") }
                                style={styles.myRow}
                            >
                                <View style={{ marginTop: 5 }}>
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
                <ViewOfHtml />
            </View>
        </View>
        
    )
}

export default WebView_PDF_Upload;

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
    headerRgtContainer: {
      backgroundColor: '#cbe9ff', borderWidth: 1, borderColor: '#3ea0e6', paddingHorizontal: 10, paddingVertical: 8, borderRadius: 15,
    },
    QuestMark: {
      marginBottom: 15,  borderWidth: 1, borderColor: '#3ea0e6', paddingHorizontal: 11, paddingVertical: 5, marginLeft: 5, borderRadius: 15
    },
    QuestMarkText: {
      fontSize: 12, color: '#3ea0e6'
    },
    subTitle: {
        fontSize: 22, fontWeight: 'bold', color: '#707071', marginTop: 20
    },
    boxwithBorder: {
        padding: 15, borderRadius: 15, borderWidth: 1, borderColor: '#ccc', marginTop: 20
    }
});