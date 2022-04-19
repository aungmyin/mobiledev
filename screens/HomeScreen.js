import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    StatusBar,
    StyleSheet,
    Linking
} from 'react-native';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { useTheme, useRoute } from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { color } from 'react-native-reanimated';
import { uriBase } from '../ApiStore/ApiClient';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = ( { navigation } ) => {

    const { colors } = useTheme();

    const theme = useTheme();

    const [langStore, setLangStore] = React.useState([]);
    const [langEnJp, setLangEnJp] = React.useState('');
    const [listCustomer, setlistCustomer] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);

    const [userId, setUserId] = React.useState(null);
    const [userToken, setUserToken] = React.useState(null);
    const [data, setData] = React.useState([]);
    const [yourPrifle, setYourPrifle] = React.useState(null);
    const [companyProfile, setCompanyProfile] = React.useState(null);
    const [greetingMsg, setGreetingMsg] = React.useState(null);

    const getHours = new Date().getHours(); //To get the Current Year;
    const getMins = new Date().getMinutes(); //To get the Current Month; 

    const languageApi = async() => {
        let language = await AsyncStorage.getItem('lang');
        console.log(language, "Home store")

        if(language == null) {
            language = 'en';
            await AsyncStorage.setItem('lang', 'en');
        }
        
        if(language == 'en') {
            setLangEnJp(language);
            setYourPrifle('Your Profile');
        } else if(language == 'jp') {
            setLangEnJp('jp');
            setYourPrifle('あなたのプロフィール');
        } else {
            language = 'en';
            setLangEnJp('en');
            setYourPrifle('Your Profile');
        }

        console.log(language, langEnJp, "language check");

        try {
            fetch(uriBase + '/public_lang/get_hflr?lang='+ language +'&filename=home_mobile')
            .then((response) => response.json())
            .then((langResponse) => {
                
              //  console.log(langResponse.data, language, " language en");
                
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

    const goTopage = async(pgnum) => {

        await AsyncStorage.setItem('pgnum', pgnum.toString());

        navigation.navigate('HomeDrawer', { screen: 'Workreport', params: { pgnum: pgnum } });
    }

    const greetingMessage = () => {
        let getHours = new Date().getHours(); //To get the Current Year;
        let getMins = new Date().getMinutes(); //To get the Current Month; 

        //console.log(langStore, langEnJp, " current hour mins")

        if(getHours < 12) {

            setGreetingMsg(langStore.good_morning);  //good moring message before 12 o'clock

        } else if (getHours >= 12 && getHours < 16) {

            setGreetingMsg(langStore.good_afternoon); //good afternoon message after 12PM and before 4PM o'clock

        } else if(getHours >= 16 && getHours < 22) {

            setGreetingMsg(langStore.good_evening); //good moring message after 4PM to 22PM o'clock

        } else if(getHours >= 22 && getHours <= 24) {
            
            setGreetingMsg(langStore.midnight); //good moring message after 23PM o'clock

        } else {

            setGreetingMsg(langStore.good_day);
        }
    }

    const getWorkReportContent = async () => {
        let sYear = '';
        let sMonth = '';
       
        sYear = new Date().getFullYear(); //To get the Current Year;
        sMonth = new Date().getMonth() + 1; //To get the Current Month; 
        

        try{
            const memberID = await AsyncStorage.getItem('member_id');
            const tokenSave = await AsyncStorage.getItem('userToken');

            if(memberID != null) {
            
                //get work report data
                //fetch( uriBase + '/basic_user/basic_user_workreport_create?year='+ sYear +'&month='+ sMonth +'&member_id='+memberID, {
                
                fetch( uriBase + '/basic_user/basic_user_workreport_create?year='+ sYear +'&month='+ sMonth +'&member_id='+memberID, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'access-token': tokenSave
                    }
                })
                .then((response) => response.json())
                .then((json) => {
                    
                        setlistCustomer(json.customer_work_report);
                    
                        console.log(json, "Customer list")
                    }
                )
                .catch((error) => console.error(error))
                .finally(() => {
                    //updateCustomTranTotal(listTransport); //update customer total of Transporation
                });
                
               // setSelectedValue(1); //dropdown to switch pdf upload or attendance list in customer tag
                
                //switchScreen(selectedScreen); //select workreport tab

                //await AsyncStorage.removeItem('pgnum');
            }
        } catch (error) {
            // Error retrieving data
            console.error(error);
        };
        
        
    }

    const companyDetail = async() => {
        let tokenSave = await AsyncStorage.getItem('userToken');
        try {
            fetch(uriBase + '/company/company_detail?company_id=1',{
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'access-token': tokenSave
                }
            })
            .then((response) => response.json())
            .then(async(pResponse) => {
                
                setCompanyProfile(pResponse.show_detail);
                await AsyncStorage.setItem("comStartTime", pResponse.show_detail.start_work_time);
                await AsyncStorage.setItem("comEndTime", pResponse.show_detail.end_work_time);
                
                let startTime = pResponse.show_detail.start_work_time;
                let endTime = pResponse.show_detail.end_work_time;
                let lunchTime = pResponse.show_detail.lunch_break_time;

                let compWkTime = (hourToMins(endTime) - hourToMins(startTime)) - lunchTime;

                await AsyncStorage.setItem("compWkTime", compWkTime.toString());
                console.log( compWkTime, "company Time"); 
            })
            .catch((error) => {
                console.error(error);
            });

            // await AsyncStorage.setItem("comStartTime", companyProfile.start_work_time);
            // await AsyncStorage.setItem("comEndTime", companyProfile.end_work_time);

        } catch (error) {
            // Error retrieving data
            console.error(error);
        }

    }

    const hourToMins = (mins) => { //conver to minutes from hour format
        let res_mins = 0;
        
        if(mins.toString().length > 0 && typeof(mins) !== 'undefined' ){
            mins = mins.split(':');
            res_mins = (parseInt(mins[0]) * 60) + parseInt(mins[1]);
        }
    
        return ( res_mins );
    }

    const getMemberData = async() => {
        try {
            const memberID = await AsyncStorage.getItem('member_id');
            const tokenSave = await AsyncStorage.getItem('userToken');

            //get profile data
            fetch(uriBase + '/employee_detail/employee_info?member_id='+memberID, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'access-token': tokenSave
                }
            })
            .then((response) => response.json())
            .then(async(json) => {
               // console.log(json, "respone from api");
                if(json.status == 0) {
                    const keys = await AsyncStorage.getAllKeys();
                    await AsyncStorage.multiRemove(keys);
                }else {
                    setData(json.show_detail)
                    await AsyncStorage.setItem("mbAccount", json.show_detail.account);
                    console.log(json.show_detail, "Profiel detail")
                }
                
            })
            .catch((error) => console.error(error))
            .finally(async() => {
                //console.log(data, "get data");
            });

        } catch(e) {
            console.log(e);
        }
    }
    

    useEffect(() => {
        setTimeout(() => {
            languageApi(); //getting home data in first load
            companyDetail(); //get startTime and EndTime of company
            getMemberData();
            greetingMessage();
            getWorkReportContent();
            const unsubscribe = navigation.addListener('focus', () => {
                // The screen is focused
                // Call any action
                companyDetail(); //get startTime and EndTime of company
                languageApi();
                greetingMessage();
              });
            
        }, 500);
    }, []);

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle={ theme.dark ? 'light-content' : 'dark-content' } />
            <View style={styles.header}>
                {
                    (getHours < 12) 
                    ? (
                        <Text style={{ color: colors.text }}>{ langStore.good_morning }</Text>
                    ) 
                    : (getHours > 12 && getHours < 16) 
                    ? (
                        <Text style={{ color: colors.text }}>{ langStore.good_afternoon }</Text>
                    ) 
                    : (getHours > 16 && getHours < 22) 
                    ? (
                        <Text style={{ color: colors.text }}>{ langStore.good_evening }</Text>
                    ) 
                    : (getHours > 22 && getHours < 24) 
                    ? (
                        <Text style={{ color: colors.text }}>{ langStore.midnight }</Text>
                    )
                    : <Text style={{ color: colors.text }}>{ langStore.good_day }</Text>
                    
                }
                
                <Text style={styles.usernameBig}>{ data.last_name } { data.first_name }</Text>
            </View>
            <View style={styles.content}>
                <TouchableOpacity style={styles.menubox}
                    onPress={ () => navigation.navigate("Workreport") }
                >
                    <Text style={{ color: colors.text }}>{langStore.application}</Text>
                    <View style={styles.linkrow}>
                        <Text style={styles.linktxtleft}>{langStore.workreport_application}</Text>
                        <MaterialIcons 
                            name="navigate-next"
                            color="#666"
                            size={30}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.menubox}
                    onPress={() => goTopage(2)}
                >
                    <Text style={{ color: colors.text }}>{langStore.application}</Text>
                    <View style={styles.linkrow}>
                        <Text style={styles.linktxtleft}>{langStore.transportation_expense}</Text>
                        <MaterialIcons 
                            name="navigate-next"
                            color="#666"
                            size={30}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.menubox}
                    onPress={() => goTopage(3)}
                >
                    <Text style={{ color: colors.text }}>{langStore.application}</Text>
                    <View style={styles.linkrow}>
                        <Text style={styles.linktxtleft}>{langStore.customer_workreport}</Text>
                        <MaterialIcons 
                            name="navigate-next"
                            color="#666"
                            size={30}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menubox}
                    onPress={ () => navigation.navigate("Profile") }
                >
                    <View style={styles.linkrowContact}>
                        <Text style={styles.linktxtleft}>{ yourPrifle }</Text>
                        <MaterialIcons 
                            name="navigate-next"
                            color="#666"
                            size={30}
                        />
                    </View>
                </TouchableOpacity>
                {/* {
                    listCustomer.length > 0 ? (
                        
                    ):
                    <Text style={{ display: 'none' }}>&nbsp;</Text>
                } */}
                
                {/* <TouchableOpacity 
                    style={[styles.menubox, { backgroundColor: '#f0f0f0'}]}
                    onPress={()=>{Linking.openURL('tel:' + data.ph_mobile_private);} }
                >
                    <View style={styles.linkrowContact}>
                        <Icon 
                            name="phone"
                            color="#333"
                            size={25}
                            style={{ marginTop: 2, marginRight: 10 }}
                        />
                        <Text style={[styles.linktxtleft, {fontWeight: '400'}]}>{langStore.contact_title}</Text>
                        <MaterialIcons 
                            name="navigate-next"
                            color="#666"
                            size={30}
                        />
                    </View>
                </TouchableOpacity> */}
                
            </View>
            
            {/* <Button title="Profile"
                onPress={ () => navigation.navigate("Profile") }
            /> */}
        </ScrollView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    header: {
        flex: 1,
    },
    content: {
        flex: 4,
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
    usernameBig: {
        fontSize: 30,
        color: '#1dbc9c',
        fontWeight: 'bold'
    },
    menubox: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20
    },
    linkrow: {
        marginTop: 15,
        flexDirection: 'row'
    },
    linkrowContact: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
    },
    linktxtleft: {
        fontWeight: 'bold', 
        fontSize: 20, 
        color: '#666',
        width: '92%'
    }
});