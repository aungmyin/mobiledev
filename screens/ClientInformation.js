import React, { useState, useEffect, useMemo } from "react";
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CheckBox } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { uriBase } from '../ApiStore/ApiClient';
import moment from 'moment';
import ContractType from "../components/ContractType";

const ClientInformation = ( { route, navigation, isFocused, onFocus, onBlur} ) => {

    const [allData, setAllData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [langEnJp, setLangEnJp] = useState('');
    const [langStore, setLangStore] = useState([]);
    const [projectInfo, setProjectInfo] = useState([]);
    const [clientInfo, setClientInfo] = useState([]);
    const [patternList, setPatternList] = useState([]);
    const [clientList, setClientList] = useState([]);
    const [clientSwitch, setClientSwitch] = useState(false);
    const [useYear, setUseYear] = useState('');
    const [useMonth, setuseMonth] = useState('');
    const [Year, setYear] = useState('');
    const [Month, setMonth] = useState('');
    const [focused, setFocused] = useState(false);
    const [count, setCount] = useState(0);
    const[contractType, setContractType] = useState(['monthly_contract','fixed_contract','time_contract']);
    

    onFocus = () => {
       
             let params = route.params;
             console.log({ params });
       
       }

    const getClientData = async() => {
        
        const tokenSave = await AsyncStorage.getItem('userToken');

        const { sYear, sMonth } = route.params; //get parameters  
        
        
        setUseYear(sYear);
        setuseMonth(sMonth);

        //get data
        try {

            const memberID = await AsyncStorage.getItem('member_id');

            console.log(sYear, sMonth, "parameter");

            console.log(memberID, "testing ");

            //get client information data
            fetch(uriBase + "/basic_user/basic_user_workreport_detail?year=" + sYear + "&month=" + sMonth + "&member_id="+ memberID, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'access-token': tokenSave
                }
            })
            .then((response) => response.json())
            .then((json) => {
                // let clientData = json;

                if(json.status == 1)
                {
                    setAllData(json);
                    setClientInfo(json.customer_work_report);
                    setProjectInfo(json.project_info);
                    setClientSwitch(false);
                }
                else{
                    setAllData([]);
                    setClientInfo([]);
                    setProjectInfo([]);
                    setClientSwitch(false);
                }
                // if(json.project_info.length > 0) {
                //     setPatternList(json.project_info[0].working_hour);
                // }
                

                console.log({ ClientInfo : json }); 
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

        } catch (error) {
            // Error retrieving data
            console.error(error);
        }

        

    }

    const contractTypeList = [ 
        { value: 1, label: 'Monthly Contract' }, 
        { value: 2, label: 'Fixed Contract' }, 
        { value: 3, label: 'Time Contract' }
    ];

    const deleteCustomer = async(wkClientId,targetKey) => { //delete the customer information
        // console.log(wkClientId, "Delete Customer ...");

        const memberID = await AsyncStorage.getItem('member_id');
        const tokenSave = await AsyncStorage.getItem('userToken');

        const { useYear, useMonth } = route.params; //get parameters

        try {
            fetch(uriBase + '/workreport/customer_info_delete?member_id='+ memberID +'&workreport_client_id='+ wkClientId, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'access-token': tokenSave
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {
                
            //    console.log(responseJson, " delete customer");
               if(responseJson.status == 1) {
                    Alert.alert(responseJson.message);
                    setClientList([]);
               } else {
                    Alert.alert(responseJson.message);
               }
                
            })
            .catch((error) => {
                console.error(error);
            });
        } catch (error) {
            // Error retrieving data
            console.error(error);
        }

        setTimeout(() => {
            getClientData();
        }, 500);
    }

    function indivl_contract_no(index) {
        let myData = [...allData.project_info];

        // console.log({ individual_contract_no_list : myData })
        // console.log( { target_id : index })

        let indivalContractNo = "";

        if(myData.length && myData[index] !== undefined ) {
            indivalContractNo = myData[index].individual_contract_no || "";
        }

        return indivalContractNo;

    }

    function contractTypeValue(index) {
        let myData = [... allData.project_info];
        let contractTypeVal = "";
       // console.log(myData, "project detail")
        if(myData.length && index in myData) {
            contractTypeVal = myData[index].contract_type;
        }

        return contractTypeVal;

    }

    const customerLists = async() => {
 
        // console.log( "List Customer ...");


        const memberID = await AsyncStorage.getItem('member_id');
        const tokenSave = await AsyncStorage.getItem('userToken');

        const { sYear, sMonth } = route.params; //get parameters

        try {
            fetch(uriBase + '/workreport/customer_information?member_id='+ memberID +'&year='+ sYear +'&month='+ sMonth, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'access-token': tokenSave
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {
                let clientLists = responseJson;
                setClientList(clientLists);
                setClientSwitch(true);

               console.log(clientList, "customer list");
               if(clientList.status == 0 && clientSwitch) {
                    Alert.alert('Error', clientList.message)
               }
               
            })
            .catch((error) => {
                console.error(error);
            });
        } catch (error) {
            // Error retrieving data
            console.error(error);
        }
    }

    const addCustomer = async(projects) => { // add customer to workreport
  

        const memberID = await AsyncStorage.getItem('member_id');
        const tokenSave = await AsyncStorage.getItem('userToken');

        const { sYear, sMonth } = route.params; //get parameters
        setClientList([]);


        try {
            fetch(uriBase + '/workreport/customer_info_add?member_id='+ memberID +'&year='+ sYear +'&month='+ sMonth + '&individual_contract_id='+ parseInt(projects.individual_contract_id) +'&project_id='+ parseInt(projects.project_id) +'&client_id='+ parseInt(projects.client_id), {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'access-token': tokenSave
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {

                console.log({projectInfo});
                if(responseJson.status == 1) {
                    Alert.alert(responseJson.message);
                    let new_client_list = [ ...clientList, [] ];
                    setClientList(new_client_list);
                    let new_project_info = [ ...projectInfo, [] ];
                    setProjectInfo(new_project_info);
                    setClientSwitch(false);
                
               } else {
                    Alert.alert(responseJson.message);
               }
            })
            .catch((error) => {
                console.error(error);
            });
        } catch (error) {
            // Error retrieving data
            console.error(error);
        }
        setTimeout(() => {
            getClientData();
        }, 500);
    }

    const emailNotifyEmail = async() => {
        const memberID = await AsyncStorage.getItem('member_id');
        const tokenSave = await AsyncStorage.getItem('userToken');
        const { sYear, sMonth } = route.params; //get parameters

        // console.log(memberID, tokenSave, sMonth, " parameter")
        let language = await AsyncStorage.getItem('lang');
        try {
            fetch( uriBase + '/basic_user/noti_unassign_email?member_id='+ memberID +'&year='+ sYear +'&month='+ sMonth + '&lang='+ language, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'access-token': tokenSave
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {
                let emailStatus = responseJson;
                if (emailStatus.status == 1) {
                    Alert.alert("Successful", capitalizeFirstLetter(emailStatus.message));
                } else {
                    Alert.alert("Error", capitalizeFirstLetter(emailStatus.message));
                }
                // console.log(emailStatus, "Notify email send");
            })
            .catch((error) => {
                console.error(error);
            });
        } catch (error) {
            // Error retrieving data
            console.error(error);
        }
    }

    function capitalizeFirstLetter(string) { // to change Uppercase of first charactor of paragraph
        return string.charAt(0).toUpperCase() + string.slice(1);
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

        // console.log(language, " language is customer");

        try {
            fetch(uriBase + '/public_lang/get_hflr?lang='+ language +'&filename=customer_information')
            .then((response) => response.json())
            .then((langResponse) => {
                
                console.log(langResponse.data, " language en customer_information");
                
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
            setAllData([]);
            setClientInfo([]);
            setProjectInfo([]);
            setClientSwitch(false);
            languageSwitch(); //get language title
            getClientData(); //getting profile data in first load
            setClientSwitch(false);
    }, [route]);


    return(
        <View style={{ flex: 1}}>
            <View style={{ paddingLeft: 3, height: 60, paddingBottom: 6, paddingTop: 6, paddingRight: 5 }}>
                <View style={[styles.myRow]}>
                    <View style={[styles.colums, {marginTop: 6}]}>
                        <TouchableRipple onPress={()=> navigation.goBack() }>
                            <Icon name="ios-arrow-back" size={25} style={{margin: 5}} color="#707070"
                    backgroundColor="#009387" onPress={() => navigation.navigate("Workreport", {
                        sYear: useYear,
                        sMonth: useMonth,
                        sLang: langEnJp
                    }) } ></Icon> 
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
                <View style={ [styles.myRow, {marginBottom: 5}] }>
                    <Text style={{ color: '#727070' }}>{ langStore.application }</Text>
                </View>
                <View style={ [styles.myRow] }>
                    <Text style={{ fontWeight: 'bold', fontSize: 23, color: '#707070' }}>{ langStore.customer_information }</Text>
                </View>
                {/* <View style={ [styles.colorBox] }>
                    <View style={[styles.myRow, { borderBottomWidth: 1, borderBottomColor: '#666', paddingBottom: 15, borderStyle: 'dotted' }]}>
                        <View style={{ width: '15%' }}>
                           
                            <MaterialIcons
                                name="edit"
                                color="#707070"
                                size={25}
                                style={{margin: 5}}
                            />
                        </View>
                        <View style={{ width: '85%' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#707070', marginTop: 7 }}>{ langStore.edit_customer_info }</Text>
                            <Text>
                                { langStore.if_there_is_any_incompleteness }
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.myRow]}>
                        <View style={{ width: '15%' }}>
                            <MaterialIcons
                                name="delete"
                                color="#707070"
                                size={25}
                                style={{marginTop: 10}}
                            />
                        </View>
                        <View style={{ width: '85%' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#707070', marginTop: 13 }}>{ langStore.delete_customer_info }</Text>
                            
                        </View>
                    </View>
                    
                </View> */}
                {
                    ( clientInfo.length ) ? (
                    clientInfo.map((item, key) => {
                       return(
                                <View key={key} style={styles.customerBox}>

                                <View style={{marginTop: 15}}>
                                    <Text style={ [styles.fontColor, {fontWeight: 'bold'}] }>{ langStore.individual_agreement_no }</Text>
                                    <Text>{ indivl_contract_no(key) }</Text>
                                </View>

                                <View style={{marginTop: 15}}>
                                    <Text style={ [styles.fontColor, {fontWeight: 'bold'}] }>{ langStore.customer_name }</Text>
                                    <Text>{ item.client_name }</Text>
                                </View>

                                <View style={{marginTop: 15}}>
                                    <Text style={ [styles.fontColor, {fontWeight: 'bold'}] }>{ langStore.project_name }</Text>
                                    <Text>{ item.project_name }</Text>
                                </View>

                                <View style={{marginTop: 15}}>
                                    <Text style={ [styles.fontColor, {fontWeight: 'bold'}] }>{ langStore.contract_period }</Text>
                                    <Text>{ moment(item.start_contract_date).format('YYYY/MM/DD') } 〜 { moment(item.end_contract_date).format('YYYY/MM/DD') }</Text>
                                </View>

                                <View style={{marginTop: 15}}>
                                    <Text style={ [styles.fontColor, {fontWeight: 'bold'}] }>{ langStore.standard_unit_price_type }</Text>
                                    <View style={{ width: '60%' }}>
                                        <ContractType dataFromParent={contractTypeList} dataSeleted={contractTypeValue(key)} />
                                    </View>
                                </View>

                                <View style={{marginTop: 15}}>
                                    <Text style={ [styles.fontColor, {fontWeight: 'bold'}] }>{ langStore.during_working_hours }</Text>
                                    { 
                                        (typeof projectInfo !== "undefined" && typeof projectInfo[key] !== "undefined") ? 
                                        <Text> { projectInfo[key].min_width_time + ' h ~ ' + projectInfo[key].max_width_time + " h" }  </Text>
                                        : <Text>--</Text>
                                    }
                                </View>  

                              
            
                                <View style={{marginTop: 15,  flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
                                    <Text style={ [styles.fontColor, {fontWeight: 'bold', flex: 1, alignSelf: 'stretch'}] }>{ langStore.working_hour } </Text>
                                    <Text style={ [styles.fontColor, {fontWeight: 'bold', flex: 1, alignSelf: 'stretch'}] }>{ langStore.total } </Text>
                                </View>
            
                                {
                                    (projectInfo.length > 0 && key in projectInfo && ("working_hour" in projectInfo[key]) ) ? (
                                        projectInfo[key].working_hour.map((item, key) => {
                                            if(item.pattern_flg == 1) {
                                                return(
                                                    <View key={key} style={{marginTop: 5,  flex: 1, alignSelf: 'stretch', flexDirection: 'row'}} >
                                                        <CheckBox 
                                                            size={20}
                                                            containerStyle={{ borderWidth: 0, backgroundColor: '#fff', padding: 2 }}
                                                            title={ langStore.working_hour_pattern + ' ' + item.pattern }
                                                            uncheckedColor="#ddd"
                                                            checkedColor="#666"
                                                            textStyle={{ color: '#666', fontWeight: '500' }}
                                                            style={{ flex: 1, alignSelf: 'stretch' }}
                                                            checked={false}
                                                            onPress={ () => { console.log("hello") } }
                                                        />
                                                        <Text style={{ flex: 1, alignSelf: 'stretch', marginTop: 8 }}>{ item.start_time } - { item.end_time } {'\n\n'} { langStore.break_time } { item.break_time } min. {'\n\n'} { item.working_time }h</Text>
                                                    </View>
                                                )
                                            }
                                            
                                        })
                                        
                                    ): console.log("project pattern")
                                }
                            <View style={[styles.deadlinetxt, { marginRight: 10, marginTop: 15}]}>
                                <Text style={{ color: '#66666f' }}>{ langStore.if_there_is_any_incompleteness }</Text>
                            </View> 
                            <View style={[styles.myRow, styles.removeBtn, { display: 'flex', marginTop: 5}]}>
                                    <View style={{ alignItems: 'flex-start' }}>
                                        <TouchableRipple onPress={() => { deleteCustomer(item.workreport_client_id,key) }}>
                                            <View style={[styles.removeBtn, {borderColor: '#707070', backgroundColor: '#f2f2f2', borderWidth: 1}]}>
                                                <MaterialIcons
                                                    name="delete"
                                                    color="#707070"
                                                    size={20}
                                                    style={{marginTop: 0}}
                                                />
                                                <Text style={[styles.textSign, {color: '#707070'}]}>
                                                    { langStore.delete_customer_info }
                                                </Text>
                                            </View>
                                        </TouchableRipple>
                                    </View>
                                </View>
                                
                            </View>


                       ) 
                    })
                    ) : 
                    <View style={styles.colorBox}>
                        <Text style={[styles.subTitle, { marginBottom: 5 }]}>{ langStore.project_not_found }</Text>
                        <Text style={{ marginBottom: 10 }}>{ langStore.please_contact_the_sales_representative_and_add_the_project_information }</Text>
                        <TouchableRipple onPress={() => { emailNotifyEmail() }}>
                            <View style={[styles.removeBtn, {borderColor: '#707070', borderWidth: 1}]}>
                                <Text style={[styles.textSign, {color: '#707070'}]}>
                                    { langStore.notify }
                                </Text>
                            </View>
                        </TouchableRipple>
                    </View>
                }

                
                
                <View style={{ paddingLeft: 10, marginTop: 20 }}>
                
                    <View style={[styles.myRow, styles.patternAdd, {marginBottom: 20, display: 'flex'}]}>
                        <View style={{ alignItems: 'flex-start' }}>
                            <TouchableRipple onPress={() => { customerLists() }}>
                                <View style={[styles.removeBtn, {borderColor: '#707070', borderWidth: 1}]}>
                                    <Text style={[styles.textSign, {color: '#707070'}]}>
                                       + { langStore.customer }
                                    </Text>
                                </View>
                            </TouchableRipple>
                        </View>
                    </View>
                </View>
                { 
                    clientSwitch && (clientList.length > 0) ? (
                        <View>
                        <Text style={{fontSize: 28, marginBottom: 10}} >{langStore.contract_list}</Text>
                        {
                        clientList.map((items, key) => {
                           
                                return(<View key={key} style={{marginTop: 5, marginBottom: 5, borderWidth: 1, padding: 10, borderColor: '#ccc', borderRadius: 12}}>
                                    <View style={styles.myRow}>
                                        <View style={styles.colums}>
                                            <Text>{ langStore.customer_name }</Text>
                                        </View>
                                        <View style={styles.colums}>
                                        <Text>{ items.client_name }</Text>
                                        </View>
                                    </View>
                                    <View style={styles.myRow}>
                                        <View style={styles.colums}>
                                            <Text>{ langStore.project_name }</Text>
                                        </View>
                                        <View style={styles.colums}>
                                            <Text>{ items.project_name }</Text>
                                        </View>
                                    </View>
                                    <View style={styles.myRow}>
                                        <View style={styles.colums}>
                                            <Text>{ langStore.contract_type }</Text>
                                        </View>
                                        <View style={styles.colums}>
                                            <Text>{ langStore[contractType[items.contract_type - 1]] }</Text>
                                        </View>
                                    </View>
                                    <View style={styles.myRow}>
                                        <View style={styles.colums}>
                                            <Text>{ langStore.contract_period }</Text>
                                        </View>
                                        <View style={styles.colums}>
                                            <Text>{ moment(items.start_contract_date).format('YYYY/MM/DD') } ~ { moment(items.end_contract_date).format('YYYY/MM/DD') }</Text>
                                        </View>
                                    </View>
                                    <View style={styles.myRow}>
                                        <View style={styles.colums}>
                                            <Text>{ langStore.max_working_hours }</Text>
                                        </View>
                                        <View style={styles.colums}>
                                            <Text>{ items.max_width_time+' h' }</Text>
                                        </View>
                                    </View>
                                    <View style={styles.myRow}>
                                        <View style={styles.colums}>
                                            <Text>{ langStore.min_working_hours }</Text>
                                        </View>
                                        <View style={styles.colums}>
                                            <Text>{ items.min_width_time+' h' }</Text>
                                        </View>
                                    </View>
                                    <View style={styles.myRow}>
                                        <View style={styles.colums}>
                                        <Text>{ langStore.action }</Text>
                                        </View>
                                        <View style={styles.colums}>
                                            <TouchableRipple onPress={() => { addCustomer(items) }}>
                                                <View style={[styles.removeBtn, {borderColor: '#707070', borderWidth: 1, backgroundColor: '#f2f2f2'}]}>
                                                    <Text style={[styles.textSign, {color: '#707070'}]}>
                                                        { langStore.choose }
                                                    </Text>
                                                </View>
                                            </TouchableRipple>
                                        </View>
                                    </View>
                                </View>)
                                
                        })
                        }
                        </View>
                    )
                    
                    : <View></View>
                    
                }
                
                
                <View style={{ marginBottom: 15 }}></View>
            </ScrollView>
        </View>
    )
}

export default ClientInformation;

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
    colorBox: {
        borderColor: '#1dbc9c', borderWidth: 2, marginTop: 30, padding: 15, borderRadius: 15, backgroundColor: '#f2fffd'
    },
    mycontent: {
        marginTop: 30,
        color: '#707070'
    },
    fontColor: {
        color: '#707070',
        fontSize: 18,
        paddingBottom: 5
    },
    patternAdd: {
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingBottom: 25, 
        paddingTop: 10,
        borderBottomColor: '#cdcdcd', 
        borderBottomWidth: 1,
        borderStyle: 'dotted'
    },
    removeBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 7,
        borderRadius: 10
    },
    textSign: {
        color: '#25ab8f',
        fontSize: 14,
        fontWeight: 'bold',
    }, 
    customerBox: {
        marginTop: 15, paddingLeft: 10, paddingBottom: 10, paddingTop: 10, borderColor: '#ccc', borderWidth: 1, borderRadius: 10
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
        fontWeight: 'bold', fontSize: 17, color: '#707070', marginTop: 7
    },
    deadlinetxt: {
        paddingHorizontal: 15, backgroundColor: '#ffe8a3', paddingVertical: 15, marginBottom: 15, borderRadius: 15, borderColor: '#e0ad15', borderWidth: 1
    }
});