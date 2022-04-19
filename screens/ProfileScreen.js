import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    StatusBar,
    StyleSheet,
    Image,
    ActivityIndicator,
    Keyboard
} from 'react-native';

import { Avatar, TouchableRipple } from 'react-native-paper';

import { useTheme } from '@react-navigation/native';
import { ScrollView, State, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import moment from 'moment';

import { uriBase } from '../ApiStore/ApiClient';

const ProfileScreen = ( {navigation} ) => {

    const { colors } = useTheme();

    const theme = useTheme();

    const [langStore, setLangStore] = React.useState([]);
    const [langEnJp, setLangEnJp] = React.useState('');
    
    const [isLoading, setLoading] = React.useState(true);

    const [userId, setUserId] = React.useState(null);
    const [userToken, setUserToken] = React.useState(null);
    const [data, setData] = React.useState([]);
    
    const [yourPrifle, setYourPrifle] = React.useState(null);

    const getProfileData = async() =>{
        try {
          const value = await AsyncStorage.getItem('member_id');
          const tokenSave = await AsyncStorage.getItem('userToken');
          let language = await AsyncStorage.getItem('lang');

          if(language == null) { 
                language = 'en';
          }
        
          if(language == 'en') {
            setLangEnJp(language);
            setYourPrifle('Your Profile');
          } else {
            setLangEnJp('jp');
            setYourPrifle('あなたのプロフィール');
          }

        //   console.log(language, langEnJp, "language check");

        try {
            fetch(uriBase + '/public_lang/get_hflr?lang='+ language +'&filename=employee_info')
            .then((response) => response.json())
            .then((langResponse) => {
                
            console.log(langResponse.data, " language en profile");
                
                setLangStore(langResponse.data);
                
            })
            .catch((error) => {
                console.error(error);
            });
        } catch (error) {
            // Error retrieving data
            console.error(error);
        }

          if (value !== null) {
            // We have data!!
            setUserId(value);
            setUserToken(tokenSave);
            //console.log(userId, userToken, uriBase, "I got token 5");
            
            //get profile data
            fetch(uriBase + '/employee_detail/employee_info?member_id='+value, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'access-token': tokenSave
                }
            })
            .then((response) => response.json())
            .then((json) => {
                json.show_detail['photo'] = json.image
                setData(json.show_detail)
                // console.log({ memeberId : value })
                console.log( { profile_dsata : json })
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

        //    console.log(data, " my profile data");
          }
          
        } catch (error) {
          // Error retrieving data
          console.error(error);
        };

    }

    useEffect(() => {
        setTimeout(() => {
            getProfileData(); //getting profile data in first load
            const unsubscribe = navigation.addListener('focus', () => {
                // The screen is focused
                // Call any action
                getProfileData(); //getting profile data
              });
            
        }, 500);
    }, []);

    const getDiffYear = (date) => {
        let sec_date = moment(date)
        let today = moment();
        let diff_year = today.diff(sec_date, 'year')
        return diff_year;
    };

    const empoloyee_types_language_set = [ langStore.executives, langStore.regular_employees, langStore.contract_employees, langStore.part_timer, langStore.side_job ]; 
    const employee_status_value = ["",  langStore.enrolled, langStore.suspended, langStore.retired];
    const authority = ["", langStore.super_user, langStore.admin_user, langStore.manage_user, langStore.basic_user];
    const gender = [ langStore.unknown , langStore.male, langStore.female ]

    // if( isLoading ) {
    //     return(
    //       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    //         <ActivityIndicator size="large"/>
    //       </View>
    //     );
    // }


    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle={ theme.dark ? 'light-content' : 'dark-content' } />
            <View style={{ marginTop: 10 }}><Text style={{ color: colors.text, fontSize: 18 }}>{ langStore.employee_information }</Text></View>
            <View style={styles.header}>
                
                <Avatar.Image 
                    source={ data.photo == "" ? require("../img/manshape.png") : {
                        uri: data.photo
                    } }
                    size={150}
                    style={{ marginTop: 10, marginBottom: 10 }}
                />
                <Text style={{color: colors.text, fontSize: 18}}>{ data.last_name } { data.first_name } </Text>
                <Text style={{color: colors.text, fontSize: 16}}>
                    <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.account_label}: </Text> 
                        {data.account}
                </Text>
                <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <TouchableOpacity
                        style={{ borderWidth: 2, borderColor: '#2fc2a6', alignItems: 'center', borderRadius: 10 }}
                        onPress={ () => navigation.navigate("ChangePassword",{
                            email: data.email1,
                            account: data.account
                        }) }    
                    >
                        <Text style={{ color: '#2fc2a6', padding: 8}}>{langStore.change_password}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.company_name}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{data.company_name}</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.employee_no}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{data.member_no}</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.account}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{data.account}</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.employee_name}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{data.last_name} {data.first_name}</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.employee_name} ({langStore.jp_kana})</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{data.last_name_kana} {data.first_name_kana}</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.postal_code}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{data.postal_code1}</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.address} 1</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{data.address1}</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.address} 2</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{data.address2}</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.phone_no}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{data.tel}</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.mobile_no}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{data.ph_mobile}</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.mobile_no_private}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{data.ph_mobile_private}</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.birthday}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{ (data.birthday !== null) ? moment(data.birthday).format('YYYY-MM-DD')+" ( "+getDiffYear(data.birthday) +" "+ langStore.years_old+" )"   : '--'} </Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.gender}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{gender[data.gender]}</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.email_address}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{data.email1}</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.email_address2}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{data.email2}</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.own_department}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{data.own_depart}</Text>
                    </View>
                </View>
                
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.sales_representative}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{ data.sales_status ? data.sales_rep_name : '--'}</Text>
                    </View>
                </View>
               
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.hire_date}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{moment(data.hired_date).format('YYYY-MM-DD')} ( {getDiffYear(data.hired_date)+1} {langStore.years}  )</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.employment_type}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{ empoloyee_types_language_set[data.employment_type_id] }</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.employment_status}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{ employee_status_value[data.employment_status_id] }</Text>
                    </View>
                </View>
                
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.position}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{data.position_name}</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.authority}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{ authority[data.authority_type] }</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.social_number}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{data.social_securty_num}</Text>
                    </View>
                </View>
                <View style={styles.myRow}>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text, fontWeight: 'bold'}}>{langStore.note}</Text>
                    </View>
                    <View style={styles.colums}>
                        <Text style={{color: colors.text}}>{data.note}</Text>
                    </View>
                </View>
            </View>
            {/* <Button title="Go to detail again"
                onPress={ () => navigation.push("Profile") }
            />
            <Button title="Go to Home"
                onPress={ () => navigation.navigate("Home") }
            />
            <Button title="Go to back"
                onPress={ () => navigation.goBack() }
            />
            <Button title="Go to first screen"
                onPress={ () => navigation.popToTop() }
            /> */}
        </ScrollView>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    header: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'
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
    }
});