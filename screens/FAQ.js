import React, { useState, useEffect } from "react";
import { 
    View,
    Text,
    Button,
    StyleSheet,
    useWindowDimensions,
    TextInput
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import { uriBase } from '../ApiStore/ApiClient';
import { TouchableRipple } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import RenderHTML from "react-native-render-html";

const FAQScreen = ( {navigation} ) => {

    const [langStore, setLangStore] = React.useState([]);
    const [langEnJp, setLangEnJp] = React.useState('');
    const windowWidth = useWindowDimensions().width;

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
            fetch(uriBase + '/public_lang/get_hflr?lang='+ language +'&filename=faq')
            .then((response) => response.json())
            .then((langResponse) => {
                
              console.log(langResponse.data, " language en faq");
                
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
            languageSwitch(); //getting profile data in first load
            const unsubscribe = navigation.addListener('focus', () => {
                // The screen is focused
                // Call any action
                languageSwitch(); //getting profile data
              });
            
        }, 500);
    }, []);

    

    return (
        <View style={{ flex: 1}}>
            <View style={{ paddingLeft: 3, height: 60, paddingBottom: 6, paddingTop: 6, paddingRight: 5 }}>
                <View style={[styles.myRow]}>
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
            <ScrollView style={styles.container}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#1dbc9c' }}>{ langStore.faq }</Text>
                <View style={[styles.boxwithBorder, {backgroundColor: '#f2f2f2', borderColor: '#f2f2f2'}]}>
                    <Text style={[styles.subTitle, {color: '#148f76'}]}>{ langStore.customer_information_not_exist }</Text>
                    <Text style={[styles.subTitle, {color: '#333'}]}>{ langStore.customer_information_content_error_answer_header_mobile }</Text>
                    <RenderHTML contentWidth={ windowWidth } style={{ fontSize: 18 }} source={{ html: langStore.customer_information_not_exist_answer_text_mobile }} />
                </View>
                

                <View style={styles.boxwithBorder}>
                    <Text style={styles.subTitle}>
                        { langStore.inputtime_of_workingoutside }
                    </Text>
                    <Text style={styles.subTitle}>
                        { langStore.inputtime_of_workingoutside_answer_header_mobile }
                    </Text>
                    <RenderHTML contentWidth={ windowWidth } source={{ html: langStore.inputtime_of_workingoutside_answer_text_mobile }} />
                    
                </View>   

                <View style={[styles.boxwithBorder, {backgroundColor: '#f2f2f2', borderColor: '#f2f2f2'}]}>
                    <Text style={styles.subTitle}>
                        { langStore.inputtime_of_workspansmonth }
                    </Text>
                    <RenderHTML contentWidth={ windowWidth } source={{ html: langStore.inputtime_of_workspansmonth_answer_text_mobile }} />
                    
                </View>  

                <View style={[styles.boxwithBorder, { marginBottom: 40}]}>
                    <Text style={styles.subTitle}>
                        { langStore.unable_uploading_workreport_pdf_answer_header_mobile }
                    </Text>
                    <RenderHTML contentWidth={ windowWidth } source={{ html: langStore.unable_uploading_workreport_pdf_answer_text_mobile }} />
                    
                </View> 

                <View style={[styles.boxwithBorder, { marginBottom: 40}]}>
                    <Text style={styles.subTitle}>
                        { langStore.midnightbreak_at_nightshift }
                    </Text>
                    <RenderHTML contentWidth={ windowWidth } source={{ html: langStore.midnightbreak_at_nightshift_answer }} />
                    
                </View> 

            </ScrollView>
        </View>
    )

}

export default FAQScreen;

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