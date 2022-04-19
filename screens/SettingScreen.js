import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-community/async-storage';

import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { TouchableRipple } from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import { uriBase } from '../ApiStore/ApiClient';

const SettingScreen = ( {route, navigation} ) => {
    const [selectedValue, setSelectedValue] = useState(1);
    const [date, setDate] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [langSelected, setLangSelected] = useState(null);
    const [dropSelected, setDropSelected] = useState(null);
    
    const [langStore, setLangStore] = React.useState([]);
    const [langEnJp, setLangEnJp] = React.useState('');

    const [singleFile, setSingleFile] = useState(null);

    const optionMonth = [{ value: 1, label: 'JAN' }, { value: 2, label: 'FEB' }, { value: 3, label: 'MAR' }, { value: 4, label: 'APR' }, { value: 5, label: 'MAY' }, { value: 6, label: 'JUN' }, { value: 7, label: 'JUL' }, { value: 8, label: 'AUG' }, { value: 9, label: 'SEP' }, { value: 10, label: 'OCT' }, { value: 11, label: 'NOV' }, { value: 12, label: 'DEC' }];

    

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showMode2 = (currentMode) => {
        setShow2(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = (n) => {
        if(n == 1)
            showMode('time');
        else
            showMode2('time');

        console.log(n, " Show TimePicker dfd fd hello")
    };

    const onChange = (event, selectedDate, itemIndex) => {
        if(itemIndex == 1) {
            const currentDate = selectedDate || date;
            setShow(Platform.OS === 'ios');
            setDate(currentDate);
            console.log(event, date, itemIndex, " selected date")
        } else {
            const currentDate = selectedDate || date2;
            setShow2(Platform.OS === 'ios');
            setDate2(currentDate);
            console.log(event, date2, itemIndex, " selected date")
        } 
        
    };

    

    const languageSwitch = async (curLang) => {
        let langSelect = await AsyncStorage.getItem('lang');
        
        console.log( { selectValue : curLang } )
        
        if(parseInt(curLang) === 0) {
            setLangSelected(curLang);
            await AsyncStorage.setItem('lang', 'en');
        }else{
            setLangSelected(curLang);
            await AsyncStorage.setItem('lang', 'jp');
        }

        langSelect = await AsyncStorage.getItem('lang');

        console.log(curLang, langSelect, langSelected, "did selected");

        languageApi();

    }

    const LangSwitchList = (props) => { // create pattern dropdown list
        let pWorkHour = [];
        
        pWorkHour = workHourList;
        
        setDropSelected(props.dataSelectKey);
        
        console.log(props.dataSelectKey, " work hour p");
        return(
            <View style={ [styles.dropDownStyle] }>
                <Picker
                    selectedValue={dropSelected}
                    onValueChange={(itemValue, itemIndex) => selectedPatternFill(itemValue, props.dataSelectKey, pWorkHour, itemIndex)}
                >
                     <Picker.Item style={{ padding: 5 }} label={  '---' } value={ 99 } key={99}  />
                    {
                        pWorkHour.map((item, key) => {
                            if(item.pattern_flg == 1) {
                                return(
                                    <Picker.Item style={{ padding: 5 }} label={  item.pattern + ' 勤務時間_パタン' } value={ item.pattern } key={key}  />
                                )
                            }
                            
                        })
                    }
                </Picker>
            </View>
        )
  
    }

    //fill calculated value to workreport by selected date.
    const selectedPatternFill = (itemVal, index, ptlist, itemIndex) => {
        const myArray = [... listDataSource];
        
        setDropSelected(itemVal);

        let pIndex = itemIndex - 1;

        //console.warn(selectKey, itemVal, pIndex, "select pattern cur id");

       //console.log(ptlist, "Get pattern by id");

        if((pIndex >= 0) && (index >=0)) { //check selected empty vlaue 
            myArray[index]['start_time'] = ptlist[pIndex].start_time;
            myArray[index]['end_time'] = ptlist[pIndex].end_time;
            myArray[index]['total_work_time'] = ptlist[pIndex].working_time;
            myArray[index]['total_break_time'] = ptlist[pIndex].break_time;
            myArray[index]['pattern'] = itemVal;

            // update to state
            setlistDataSource(myArray);
        } 

    }

    

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

        const optionLangs = [{ value: 0, label: 'English' }, { value: 1, label: 'Japan' }];
   
        const optionLangsJP = [{ value: 0, label: '英語' }, { value: 1, label: '日本語' }];
    
    
    const workreport_history = async() => {
        const tokenSave = await AsyncStorage.getItem('userToken');
        try {
            fetch(uriBase + '/workreport/workreport_history_log?individual_contract_id=16102', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'access-token': tokenSave
                }
            })
            .then((response) => response.json())
            .then((langResponse) => {
                
               console.log(langResponse, "workreport history");
                
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
        setTimeout(async () => {

            languageApi(); //getting workreport data

            let langSelect = await AsyncStorage.getItem('lang');
            let langeKey = ( langSelect == 'en') ? 0 : 1;
            setLangSelected(langeKey);
            console.log({savedLange : langSelect})

            const unsubscribe = navigation.addListener('focus', () => {
                
                // The screen is focused
                // Call any action
                languageApi(); //getting workreport data
            });
            
        }, 500);
    }, []);

    console.log(langSelected, "change value")

    return (
        <View style={styles.container}>
            {
                langEnJp == 'en' ? (
                    <Text style={{ fontWeight: 'bold' }}>language:</Text>
                ):
                <Text style={{ fontWeight: 'bold' }}>言語:</Text>
            }
            <View style={{ borderColor: '#ccc', borderWidth: 3, marginTop: 5}}>
                { 
                    langEnJp == 'en' ? (
                        <Picker
                            pickerSt
                            selectedValue={langSelected}
                            style={{ height: 30, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => languageSwitch(itemValue)}
                        >
        
                            { 
                                optionLangs.map((item, key) => {
                                    console.log(key, item.label, "my dropdown")
                                    return(
                                        <Picker.Item label={ item.label } value={ item.value } key={key}  />
                                    )
                                })
                            }
                        </Picker>
                    ):
                        <Picker
                            pickerSt
                            selectedValue={langSelected}
                            style={{ height: 30, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => languageSwitch(itemValue)}
                        >
        
                            { 
                                optionLangsJP.map((item, key) => {
                                    console.log(key, item.label, "my dropdown")
                                    return(
                                        <Picker.Item label={ item.label } value={ item.value } key={key}  />
                                    )
                                })
                            }
                        </Picker>
                } 
                
                
            </View>
            
        </View>
    );
} 

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      alignItems: "center"
    },
    dropDownStyle: {
        borderWidth: 1, borderColor: '#ccc', height: 53, marginLeft: 5, marginRight: 5, borderRadius: 10
    }
});