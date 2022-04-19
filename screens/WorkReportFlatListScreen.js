import React, {useState, useEffect, useMemo } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Input,
    ActivityIndicator,
    Alert,
    Linking,
    FlatList,
    ScrollView
} from 'react-native';

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import { Avatar, TouchableRipple } from 'react-native-paper';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { CheckBox } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

import DateTimePicker from '@react-native-community/datetimepicker';

import {Picker} from '@react-native-picker/picker';

import DocumentPicker from 'react-native-document-picker';

import AttendanceTypeDropdown from '../components/AttendanceTypeDropdown';
import CustomAttendanceTypeDropdown from '../components/CustomAttendanceTypeDropdown';
import PworkhourDropdowns from '../components/PworkhourDropdown';

import base64 from 'react-native-base64';

import moment from 'moment';

import { uriBase } from '../ApiStore/ApiClient';
import { downloadFile } from '../ApiStore/DownloadLink';


const WorkreportScreen = ( { route, navigation, props} ) => {

    const { colors } = useTheme();
    //search by year and month
    const options = [{ value: 2010, label: '2010' }, { value: 2011, label: '2011' }, { value: 2012, label: '2012' }, { value: 2013, label: '2013' }, { value: 2014, label: '2014' }, { value: 2015, label: '2015' }, { value: 2016, label: '2016' }, { value: 2017, label: '2017' }, { value: 2018, label: '2018' }, { value: 2019, label: '2019' }, { value: 2020, label: '2020' }, { value: 2021, label: '2021' }, { value: 2022, label: '2022' }, { value: 2023, label: '2023' }, { value: 2024, label: '2024' }, { value: 2025, label: '2025' }, { value: 2026, label: '2026' }, { value: 2027, label: '2027' }, { value: 2028, label: '2028' }, { value: 2029, label: '2029' }, { value: 2030, label: '2030' }];
    const optionMonth = [{ value: 1, label: '01' }, { value: 2, label: '02' }, { value: 3, label: '03' }, { value: 4, label: '04' }, { value: 5, label: '05' }, { value: 6, label: '06' }, { value: 7, label: '07' }, { value: 8, label: '08' }, { value: 9, label: '09' }, { value: 10, label: '10' }, { value: 11, label: '11' }, { value: 12, label: '12' }];

    //Attendanece Type en
    const attendType = [
        { value: 0, label: '' }, 
        { value: 1, label: 'Public Holiday' }, 
        { value: 2, label: 'Shift Holiday' }, 
        { value: 3, label: 'Paid Holiday' }, 
        { value: 4, label: 'Half Holiday' }, 
        { value: 5, label: 'ABSENCE' }, 
        { value: 6, label: 'Delay' }, 
        { value: 7, label: 'Early' }, 
        { value: 8, label: 'Special Holiday' }, 
        { value: 9, label: 'Holiday Work' }, 
        { value: 10, label: 'Substitute Holiday' }, 
        { value: 11, label: 'Others' }
    ];

    //Transporation Type
    const [selectedTranValue, setSelectedTranValue] = useState(1);
    const [selectedTripValue, setSelectedTripValue] = useState(0);
    const [selectedVoucherFlg, setSelectedVoucherFlg] = useState(0);
    const [selectedDemanType, setSelectedDemanType] = useState(0);
    const [curLang, setCurLang] = useState(null);

    const tranList = [{value: 99, label: '---'}, {value: 1, label: 'Bus'}, {value: 2, label: 'Train'}, {value: 3, label: 'Taxi'}, {value: 4, label: 'Air Plan'}, {value: 5, label: 'Other'}];
    const routeType = [{value: 99, label: '---'}, {value: 0, label: 'One-Way'}, {value: 1, label: 'Round-Trip'}];
    const tranPrintFlg = [{value: 99, label: '---'}, {value: 0, label: 'No'}, {value: 1, label: 'Yes'}];
    const tranDemanType = [{value: 99, label: '---'}, {value: 0, label: 'In House'}, {value: 1, label: 'Customer'}];

    const tranOptions = [];

    const [removeID, setRemoveID] = useState(0);

    const [selectedValue, setSelectedValue] = useState(1);

    const [patternCount, setPatternCount] = useState(0);

    const [isLoading, setLoading] = React.useState(true);
    const [userId, setUserId] = React.useState(null); //current user id
    const [userToken, setUserToken] = React.useState(null);//current user token
    const [useYear, setUseYear] = React.useState(null);//current year
    const [useMonth, setUseMonth] = React.useState(null);//current month
    const [useMbid, setUseMbid] = React.useState(null);//current month

    const [isToggle, setIsToggle] = useState(false);
    const [isWorkTimeEnter, setIsWorkTimeEnter] = useState(true);
    const [isWorkTimeNotEnter, setIsWorkTimeNotEnter] = useState(true);

    const [isCheckBoxEnter, setIsCheckBoxEnter] = useState(false);//checkbox list handle Entered
    const [isCheckBoxNoEnter, setIsCheckBoxNoEnter] = useState(false);//checkbox list handle Not Entered
    const [isCheckBoxAll, setIsCheckBoxAll] = useState(true);//checkbox list handle Not Entered

    const [isWorkReportTg, setIsWorkReportTg] = useState(false); //screen switch wk
    const [isTranSportTg, setIsTranSportTg] = useState(false); //screen switch transport expense
    const [isCustomerTg, setIsCustomerTg] = useState(false); //screen switch Customer
    const [isExpenseTg, setIsExpenseTg] = useState(false); //screen switch Settlement Expense

    const [listDataSource, setlistDataSource] = useState([]);
    const [listTransport, setlistTransport] = useState([]);
    const [listSettleExpense, setlistSettleExpense] = useState([]);
    const [customerBill, setCustomerBill] = useState([]);
    const [totalTranBill, setTotalTranBill] = useState([]);
    const [customTotalTranBill, setCustomTotalTranBill] = useState([]);
    const [listCustomer, setlistCustomer] = useState([]);
    const [listProjectInfo, setlistProjectInfo] = useState([]);
    const [tWorkReport, settWorkReport] = useState([]);
    const [allData, setAllData] = useState([]);
    const [customerDpList, setCustomerDplist] = useState([]);
    const [memberInfo, setMemberInfo] = useState([]);
    const [companyProfile, setCompanyProfile] = useState([]);
    
    const [date, setDate] = useState(new Date());
    const [keyCheck, setKeyCheck] = useState(null);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [searchLoad, setSearchLoad] = useState(false);
    const [langEnJp, setLangEnJp] = React.useState('');
    const [langStore, setLangStore] = React.useState([]);

    
    const [adminFlg, setAdminFlg] = useState(0); //admin flg to display settlement or not
    const [totalSettleBill, setTotalSettleBill] = useState(0);

    const [pWorkValue, setPworkValue] = useState('');
    const [selectKey, setSelectKey] = useState('');

    const [selectedRouteValue, setSelectedRouteValue] = useState('');

    const [selectedScreen, setSelectedScreen] = useState(1);

    const [typeTime, setTypeTime] = useState(null);
    const [dataTran, setDataTran] = React.useState({
        amount: '',
        daily_transportation_detail_id: '',
        demand_type: 0,
        destination: '',
        from_area: '',
        print_flg: 99,
        to_area: '',
        transport_type: '',
        use_date: ''
    });

    const workHourList = [
        {
            "break_time": 60,
            "end_time": "18:00",
            "pattern": "A",
            "pattern_flg": 0,
            "start_time": "09:00",
            "working_time": "08:00"
        },
        {
            "break_time": 60,
            "end_time": "18:00",
            "pattern": "B",
            "pattern_flg": 0,
            "start_time": "09:30",
            "working_time": "07:30"
        },
        {
            "break_time": 0,
            "end_time": "00:00",
            "pattern": "C",
            "pattern_flg": 0,
            "start_time": "00:00",
            "working_time": "00:00"
        },
        {
            "break_time": 0,
            "end_time": "00:00",
            "pattern": "D",
            "pattern_flg": 0,
            "start_time": "00:00",
            "working_time": "00:00"
        },
        {
            "break_time": 0,
            "end_time": "00:00",
            "pattern": "E",
            "pattern_flg": 0,
            "start_time": "00:00",
            "working_time": "00:00"
        },
        {
            "break_time": 0,
            "end_time": "00:00",
            "pattern": "F",
            "pattern_flg": 0,
            "start_time": "00:00",
            "working_time": "00:00"
        }
    ];

    const getWorkReportContent = async () => {
        let sYear = '';
        let sMonth = '';
       
        sYear = new Date().getFullYear(); //To get the Current Year;
        sMonth = new Date().getMonth() + 1; //To get the Current Month; 
        
        setUseYear(sYear);
        setUseMonth(sMonth); //dfdfd

        try{
            const memberID = await AsyncStorage.getItem('member_id');
            const tokenSave = await AsyncStorage.getItem('userToken');
            setUseMbid(memberID);

            if(memberID != null) {
                // We have data!!
                setUserId(memberID);
                setUserToken(tokenSave);
            
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
                    setAllData(json);
                    setMemberInfo(json.member_info); //member info

                    setAdminFlg(json.member_info.admin_flg); //admin flg to display settlement expence or not

                    setlistDataSource(json.work_report_detail); //Workreport data list
                    setTotalTranBill(json.transport_expense.total_amount); //transporation total amount
                    setlistTransport(json.transport_expense.transport_expense_detail); //Transporation data list
                    
                    if(adminFlg == 1) {
                        setlistSettleExpense(json.expense_report.expense_report_detail); //settlement expense data
                    }
                    
                    setlistCustomer(json.customer_work_report);
                    setlistProjectInfo(json.project_info);
                    settWorkReport(json.work_report);

                    setPatternCount(json.project_info.length);

                    //console.log(patternCount, "Count of Pattern");

                    setPworkValue('');
                    
                    //workreport is set as default view
                    setIsWorkReportTg(true);
                    setIsTranSportTg(false);
                    setIsCustomerTg(false);
                    setIsExpenseTg(false);
                    firstLoadCustomTranTotal(); //update customer total of Transporation
                    }
                )
                .catch((error) => console.error(error))
                .finally(() => {
                    setLoading(false);
                    //updateCustomTranTotal(listTransport); //update customer total of Transporation
                });
                
                setSelectedValue(1); //dropdown to switch pdf upload or attendance list in customer tag
                
                //switchScreen(selectedScreen); //select workreport tab

                //await AsyncStorage.removeItem('pgnum');
            }
        } catch (error) {
            // Error retrieving data
            console.error(error);
        };
        
        
    }

    const screenChange = async() => {
        let displaySwitch = 1;
        let getSwitch = await AsyncStorage.getItem('pgnum');
        if(getSwitch > 0) {
            displaySwitch = getSwitch;
        }
        console.log(displaySwitch, "screen change");
        setSelectedScreen(displaySwitch);

        switchScreen(displaySwitch);
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

    const searchByYearMonth = async () => {

        let data = {
            "result": [{
              "FirstName": "Test1",
              "LastName": "User"
            }, {
              "FirstName": "user",
              "LastName": "user"
            }]
          }

        let addData = {
            "FirstName": "user2",
              "LastName": "user2"
        }
          
          //console.log(data.result, selectedTranValue);
          //console.log("------------ slicing -------------");
          var deletedItem = data.result.splice(0,1); // to delete item
          //var addedItem = data.result.splice(2,0, addData); // to delete item
          //console.log(data.result); // here no problem with undefined.
       
       // console.log(useYear, useMonth, data.result, "Search Click");

        setSearchLoad(true); //search loading display

        try{
            const memberID = await AsyncStorage.getItem('member_id');
            const tokenSave = await AsyncStorage.getItem('userToken');

            setUseMbid(memberID);

            if(memberID != null) {
                // We have data!!
                setUserId(memberID);
                setUserToken(tokenSave);
            
                //get work report data
            
                //fetch( uriBase + '/basic_user/basic_user_workreport_create?year='+ useYear +'&month='+ useMonth +'&member_id='+memberID, {
                fetch( uriBase + '/basic_user/basic_user_workreport_create?year='+ useYear +'&month='+ useMonth +'&member_id='+memberID, {
                   
                method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'access-token': tokenSave
                    }
                })
                .then((response) => response.json())
                .then((json) => {
                    setAllData(json);
                    setMemberInfo(json.member_info); //member info
                    setAdminFlg(json.member_info.admin_flg); //admin flg to display settlement expence or not
                    setlistDataSource(json.work_report_detail); //Workreport data list
                    setTotalTranBill(json.transport_expense.total_amount); //transporation total amount
                    setlistTransport(json.transport_expense.transport_expense_detail); //Transporation data list
                    
                    if(adminFlg == 1) {
                        setlistSettleExpense(json.expense_report.expense_report_detail); //settlement expense data
                    }
                    
                    setlistCustomer(json.customer_work_report);
                    setlistProjectInfo(json.project_info);

                    setPatternCount(json.project_info.length);

                   console.log(listDataSource, "Search Work report"); 

                    setPworkValue('');
                    
                    //workreport is set as default view
                    setIsWorkReportTg(true);
                    setIsTranSportTg(false);
                    setIsCustomerTg(false);
                    setIsExpenseTg(false);
                    setSearchLoad(false); //search load disable
                    firstLoadCustomTranTotal(); //update customer total of Transporation
                    //console.log(listTransport, " Customer data 3");
                })
                .catch((error) => console.error(error))
                .finally(() => {
                    setLoading(false);
                    //updateCustomTranTotal(listTransport); //update customer total of Transporation
                });

                setSelectedValue(1); //dropdown to switch pdf upload or attendance list in customer tag


            }

        } catch (error) {
            // Error retrieving data
            console.error(error);
        };
    }

    const createConfirmAlert = (ID) => { //remind to use to delete or not
        setRemoveID(ID);
        console.log("check id " + removeID);
        Alert.alert(
            "Delete Transporation:",
            "Are you sure to delete?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => { 
                console.log("OK Pressed " + removeID);
                removeTransporation(removeID); //to remove item
                setRemoveID(null);
                } 
              }
            ]
        );
    }

    const createConfirmAlertSettle = (ID) => { //remind to use to delete or not
        setRemoveID(ID);
        console.log("check id " + removeID);
        Alert.alert(
            "Delete Settlement:",
            "Are you sure to delete?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => { 
                console.log("OK Pressed " + removeID);
                removeSettlement(removeID); //to remove item
                setRemoveID(null);
                } 
              }
            ]
        );
    }


    const PworkhourDropdown = (props) => { // create pattern dropdown list
        let pWorkHour = [];
        
        
        if( props.dataFromParent.length > 0 ) {
            pWorkHour = props.dataFromParent[0]['working_hour'];
        } else {
            pWorkHour = workHourList;
        }

        setPworkValue(props.dataSeleted);
        
        //console.log(props.dataSeleted, " work hour p");
        return(
            <View style={ [styles.dropDownStyle] }>
                <Picker
                    selectedValue={pWorkValue}
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
        
        setPworkValue(itemVal);

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


    const loadWkDownloadInBrowser = async(targetUrl, Redir) => { //Download workreport as a file from browser
        let memberID = await AsyncStorage.getItem("member_id");
        let tokenSave = await AsyncStorage.getItem("userToken");
        let idname = await AsyncStorage.getItem("userName");
        let language = await AsyncStorage.getItem('lang');
        let short_comp = 'est';

        Linking.openURL(uriBase + targetUrl + "?member_id=" + memberID + "&idname=" + idname + "&lang=" + language + "&auth_token=" + tokenSave + "&year=" + useYear + "&month=" + useMonth + "&short_comp_name=" + short_comp + "&redirect=" + Redir);
    };

    const loadTranDownloadInBrowser = async() => { //Download transpration as a file from browser
        let memberID = await AsyncStorage.getItem("member_id");
        let tokenSave = await AsyncStorage.getItem("userToken");
        let userName = await AsyncStorage.getItem('userName');
        let language = await AsyncStorage.getItem('lang');

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
            .then((pResponse) => {
                
                setCompanyProfile(pResponse.show_detail);
                //console.log(pResponse.show_detail);
            })
            .catch((error) => {
                console.error(error);
            });
        } catch (error) {
            // Error retrieving data
            console.error(error);
        }
        //console.log("https://development.phoenix.xyz/general/excel/mobile_download/download_excel.php?member_id=" + base64.encode(memberID) + "&idname="+ base64.encode(userName) +"&year=" + base64.encode(useYear.toString()) + "&month="+ base64.encode(useMonth.toString()) +"&auth_token=" + tokenSave + "&short_comp_name="+ base64.encode(companyProfile.company_name_short) +"&lang="+ base64.encode(language) +"&redirect=" + base64.encode("transport"), " download tran")
        
        Linking.openURL( downloadFile + "/general/excel/mobile_download/download_excel.php?member_id=" + base64.encode(memberID.toString()) + "&idname="+ base64.encode(userName) +"&year=" + base64.encode(useYear.toString()) + "&month="+ base64.encode(useMonth.toString()) +"&auth_token=" + tokenSave + "&short_comp_name="+ base64.encode(companyProfile.company_name_short) +"&lang="+ base64.encode(language) +"&redirect=" + base64.encode("transport"));
    };
    

    const removeTransporation = (ID) => { //remove transporation by ID

        console.log(ID, " Remove transport");

        // confirm("Are you sure to delete!"); //remind to user 
        try {
            const myTran = [... listTransport];

            var deletedItem = myTran.splice(ID,1); 

            //console.log(myTran.length, myTran, "new tran");

            updateTranTotal(myTran); // all transporaton total

            updateCustomTranTotal(myTran); // Transporation fees by customer

            setlistTransport(myTran); //update data

        } catch (error) {
            // Error retrieving data
            console.error(error);
        }

    }

    const removeSettlement = (ID) => { //remove transporation by ID

        //console.log(ID, " Remove settlement");

        // confirm("Are you sure to delete!"); //remind to user 
        try {
            const myTran = [... listSettleExpense];

            var deletedItem = myTran.splice(ID,1); 

            updateSettleTotal(myTran); // all transporaton total

            setlistSettleExpense(myTran); //update data

        } catch (error) {
            // Error retrieving data
            console.error(error);
        }

    }

    const addTranSporation = () => { //Add transporation
        const toDate = new Date();
        //console.log(moment(toDate).format('yyyy-mm-DD HH:mm'), " Addd transport");

        let newTranItem = {"amount": 0, "daily_transportation_detail_id": "", "demand_type": 0, "destination": "", "from_area": "", "print_flg": 99, "rourte_type": 99, "to_area": "", "transport_type": 99, "use_date": moment(toDate).format('YYYY-MM-DD HH:mm:ss').toString()};
        
        // confirm("Are you sure to delete!"); //remind to user 
        try {
            const myTran = [... listTransport];

            var addItem = myTran.splice( myTran.length, 0, newTranItem); 

           // console.log(myTran.length, myTran, "added tran");

            updateTranTotal(myTran); // all transporaton total

            updateCustomTranTotal(myTran); // Transporation fees by customer

            setlistTransport(myTran); //update data

        } catch (error) {
            // Error retrieving data
            console.error(error);
        }
    }

    const addSettlementExpense = () => { //Add SettlementExpense
 
        const toDate = new Date();
        //console.log(moment(toDate).format('YYYY-MM-DD HH:mm:ss').toString(), listSettleExpense.expense_report_detail, " Addd settle");

        let newExpenseItem = {"ex_purpose": "", "ex_payee": "", "ex_attendee": "", "ex_amount": "", "ex_receipt_no": "", "ex_use_date": moment(toDate).format('YYYY-MM-DD HH:mm:ss').toString()};
        
        // confirm("Are you sure to delete!"); //remind to user 
        try {
            const myTran = [... listSettleExpense];

            var addItem = myTran.splice( myTran.length, 0, newExpenseItem); 

           // console.log(myTran.length, myTran, "added settle");

            updateSettleTotal(myTran); // all transporaton total

            setlistSettleExpense(myTran); //update data

        } catch (error) {
            // Error retrieving data
            console.error(error);
        }

        switchScreen(4); //Settlement screen keep display 
        
    }

    const updateTranTotal = (myTran) => { //total calculation of Transporation
        let tTotal = 0;

        for (let index = 0; index < myTran.length; index++) {
            tTotal = tTotal + parseInt(myTran[index].amount);
        }

        setTotalTranBill(tTotal);
    }

    const updateSettleTotal = (mySettle) => {
        let tSettle = 0;

        for (let index = 0; index < mySettle.length; index++) {
            tSettle = tSettle + parseInt(mySettle[index].ex_amount);
        }

       // console.log(tSettle, "total settla");

        setTotalSettleBill(tSettle);
    }

    const updateCustomTranTotal = (myTran) => { //custom total calculation of Transporation
        let tTotal = 0;

        //console.log(myTran.length, "income data");

        if(myTran == null) {
            myTran = [... listTransport];
        }

        //console.log(myTran.length, "income data update");

        for (let index = 0; index < myTran.length; index++) {
            if(parseInt(myTran[index].demand_type) == 1) {
                tTotal = tTotal + parseInt(myTran[index].amount);
            }  
        }

        setCustomTotalTranBill(tTotal);
    }

    const firstLoadCustomTranTotal = () => {
        let tTotal = 0;

        let myTran = [... listTransport];

        for (let index = 0; index < myTran.length; index++) {
            if(parseInt(myTran[index].demand_type) == 1) {
                tTotal = tTotal + parseInt(myTran[index].amount);
            }  
        }

       // console.log(tTotal, "first load customer total");

        setCustomTotalTranBill(tTotal);
    }

    const CustomerDropDown = (props) => {

        setSelectedValue(props.dataSeleted);

        //switchScreen(3); //select customer workreport tab
        
        return(
            <View style={ [styles.dropDownStyle, {width: 90}] }>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => customerDropDownSelect(itemValue)}
                >
                    {
                        props.dataFromParent.map((item, key) => {
                            return(
                                <Picker.Item style={{ padding: 5 }} label={ item.label } value={ item.value } key={key}  />
                            )
                        })
                    }
                </Picker>
            </View>
        )
        
    }

    const customerDropDownSelect = (itemVal) => {
        setSelectedValue(itemVal);

        let myArray = [... listDataSource];
        let myCustomArray = [... listCustomer];

        for (let index = 0; index < myArray.length; index++) {
            myCustomArray[0].customer_workreport_items[index]['customer_attendance_type'] = myArray[index]['atendance_type'];
            myCustomArray[0].customer_workreport_items[index]['customer_break_time'] = myArray[index]['total_break_time'];
            myCustomArray[0].customer_workreport_items[index]['customer_end_time'] = myArray[index]['end_time'];
            myCustomArray[0].customer_workreport_items[index]['customer_night_break_time'] = myArray[index]['night_break_time'];
            myCustomArray[0].customer_workreport_items[index]['customer_reason'] = myArray[index]['reason'];
            myCustomArray[0].customer_workreport_items[index]['customer_start_time'] = myArray[index]['start_time'];
            myCustomArray[0].customer_workreport_items[index]['customer_total_work_time'] = myArray[index]['total_work_time'];
        }
        
        setlistCustomer(myCustomArray);
       // console.log(myCustomArray[0].customer_workreport_items, "Customer detail itmes");
    }

    const SearchBoxYear = (props) => {
        let tYear = props.dataSeleted;
        //setUseYear(tYear);
        return(
            <View style={ [styles.dropDownStyle, {marginTop: 10, marginBottom: 10}] }>
                <Picker
                    selectedValue={tYear}
                    onValueChange={(itemValue, itemIndex) => setUseYear(itemValue)}
                >
                    {
                        props.dataYear.map((item, key) => {
                            return(
                                <Picker.Item style={{ padding: 5 }} label={ item.label } value={ item.value } key={key}  />
                            )
                        })
                    }
                </Picker>
            </View>
        )
    } 

    const SearchBoxMonth = (props) => {
        let tMonth = props.dataSeletedMonth;
        setUseMonth(tMonth);
        
        return(
            <View style={ [styles.dropDownStyle, {marginTop: 10, marginBottom: 10}] }>
                <Picker
                    selectedValue={props.dataSeletedMonth}
                    onValueChange={(itemValue, itemIndex) => setUseMonth(itemValue)}
                >
                    {
                        props.dataMonth.map((item, key) => {
                            return(
                                <Picker.Item style={{ padding: 5 }} label={ item.label } value={ item.value } key={key}  />
                            )
                        })
                    }
                </Picker>
            </View>
        )
    }

    const addStandardTime = (index) => {
        const myArray = [... listDataSource];

            myArray[index]['start_time'] = '09:00';
            myArray[index]['end_time'] = '18:00';
            myArray[index]['total_work_time'] = '08:00';
            myArray[index]['total_break_time'] = 60;

        // update to state
        setlistDataSource(myArray);
    }

    const checkBoxOnOffEntered = () => {// Entered
        if(isCheckBoxEnter) {
            setIsCheckBoxEnter(false);
            setIsCheckBoxNoEnter(false);
            setIsCheckBoxAll(true);

            setIsWorkTimeEnter(true);
            setIsWorkTimeNotEnter(false);
        } else {
            setIsCheckBoxEnter(true);
            setIsCheckBoxNoEnter(false);
            setIsCheckBoxAll(false);

            setIsWorkTimeEnter(false);
            setIsWorkTimeNotEnter(true);
        }   
    }

    const checkBoxOnOffNotEnter = () => { //Not Entered
        if(isCheckBoxNoEnter) {
            setIsCheckBoxNoEnter(false);
            setIsCheckBoxAll(true);
            setIsCheckBoxEnter(false);

            setIsWorkTimeEnter(false);
            setIsWorkTimeNotEnter(true);
        } else {
            setIsCheckBoxNoEnter(true);
            setIsCheckBoxAll(false);
            setIsCheckBoxEnter(false);

            setIsWorkTimeEnter(true);
            setIsWorkTimeNotEnter(false);
        }   

    }

    const checkBoxOnOffAll = () => {//All
        if(isCheckBoxAll) {
            setIsCheckBoxAll(false);
            setIsCheckBoxNoEnter(true);
            setIsCheckBoxEnter(false);

            setIsWorkTimeEnter(true);
            setIsWorkTimeNotEnter(true);
        } else {
            setIsCheckBoxAll(true);
            setIsCheckBoxEnter(false);
            setIsCheckBoxNoEnter(false);

            setIsWorkTimeEnter(false);
            setIsWorkTimeNotEnter(false);
        }   
    }
    

    const handleClick = (e, index) => {
        
        if(isToggle)
            setIsToggle(false); //when toggle is true
        else if(e == true)
            setIsToggle(true); //when click the expand
        else if(e == false)
            setIsToggle(false); //when click the collapse
        else
            setIsToggle(true); //when toggle is false

    }

    const updateSingleDate = (index) => { // Toggle effect of single Attendance box

        const myArray = [... listDataSource];

        myArray.map( (value, placeindex) => 
            placeindex === index ? myArray[placeindex]['isExpanded'] = !myArray[placeindex]['isExpanded']
            : myArray[placeindex]['isExpanded'] = false
        );

        // update to state
        setlistDataSource(myArray);
    }

    const updateCustomerSingleDate = (index) => { // Toggle effect of single Attendance box

        const myArray = [... listCustomer];

        myArray[0].customer_workreport_items.map( (value, placeindex) => 
            placeindex === index ? myArray[0].customer_workreport_items[placeindex]['isExpanded'] = !myArray[0].customer_workreport_items[placeindex]['isExpanded']
            : myArray[0].customer_workreport_items[placeindex]['isExpanded'] = false
        );

        switchScreen(3); //keep open customer workreport

        // update to state
        setlistCustomer(myArray);
    }

    const switchScreen = (screenType) => {
        
        if(screenType == 1) {
            setIsWorkReportTg(true);
            setIsTranSportTg(false);
            setIsCustomerTg(false);
            setIsExpenseTg(false);
        } else if(screenType == 2) {
            setIsWorkReportTg(false);
            setIsTranSportTg(true);
            setIsCustomerTg(false);
            setIsExpenseTg(false);
            firstLoadCustomTranTotal();// update customer's total amount
            console.log(screenType, "where to show")
        } else if(screenType == 3) {
            setIsWorkReportTg(false);
            setIsTranSportTg(false);
            setIsCustomerTg(true);
            setIsExpenseTg(false);
        } else if(screenType == 4) {
            setIsWorkReportTg(false);
            setIsTranSportTg(false);
            setIsCustomerTg(false);
            setIsExpenseTg(true);
        } else {
            setIsWorkReportTg(true);
            setIsTranSportTg(false);
            setIsCustomerTg(false);
            setIsExpenseTg(false);
        }

        //console.log(screenType, " screen type");
    }

    const replaceChangeVal= (index, keyName, txtVal) => {
        const myArray = [... listDataSource];
        const customArray = [... listCustomer];

            myArray[index][keyName] = txtVal;

            let totalWHmins = hourToMins(myArray[index]['total_work_time']);
            let totalOvtmins = hourToMins(myArray[index]['over_work_time']);
            
            if( (keyName == 'total_break_time') && (totalWHmins > 0) ) { //total break time, minus from total work time
                let tBreakTime = totalWHmins - parseInt(txtVal);

                myArray[index]['total_work_time'] = convertMinsToTime(tBreakTime);
                myArray[index]['total_break_time'] = txtVal;

                //for customer workreport
                customArray[0].customer_workreport_items[index]['customer_total_work_time'] = convertMinsToTime(tBreakTime);
                customArray[0].customer_workreport_items[index]['customer_break_time'] = txtVal;
            }


            if( (keyName == 'total_break_time') && (totalOvtmins > 0) ) { //total break time, minus from overtime
                let tOverTime = totalOvtmins - parseInt(txtVal);

                if(tOverTime > 0)
                    myArray[index]['over_work_time'] = convertMinsToTime(tOverTime);
                else
                    myArray[index]['over_work_time'] = '00:00';
            }
            
        // update to state
        setlistDataSource(myArray);
        
        //customer workreport startTime and endTime update
        customArray[0].customer_workreport_items[index]['customer_start_time'] = myArray[index]['start_time'];
        customArray[0].customer_workreport_items[index]['customer_end_time'] = myArray[index]['end_time'];

       // console.log(customArray[0].customer_workreport_items[index]['customer_start_time'], myArray[index]['start_time'],"update customer att list")
        
        //update to customer workreport
        setlistCustomer(customArray);
    }

    // fill night break time and reduce
    const replaceNightBT = (index, keyName, txtVal) => {
        const myArray = [... listDataSource];

        myArray[index][keyName] = txtVal;

        //reupdate the all field of current date
        startEndTimeCal(myArray[index]['start_time'], myArray[index]['end_time'], myArray, index, keyName, txtVal);
        
    }

    // fill night break time and reduce
    const replaceCustomerNightBT = (index, keyName, txtVal) => {
        const myArray = [... listCustomer];

        myArray[0].customer_workreport_items[index][keyName] = txtVal;

        //console.log(myArray[0].customer_workreport_items[index]['customer_start_time'], myArray[0].customer_workreport_items[index]['customer_end_time'], myArray[0].customer_workreport_items[index][keyName], "fill customer night breakTime");

        //reupdate the all field of current date
        startEndTimeCalCustomer(myArray[0].customer_workreport_items[index]['customer_start_time'], myArray[0].customer_workreport_items[index]['customer_end_time'], myArray, index, keyName, txtVal);
        
    }

    const replaceTranChangeVal= (index, keyName, txtVal) => {
        const myTArray = [... listTransport];

            if (txtVal.length > 0) {
                if(keyName == 'amount'){ //chaneg data type to int.
                    myTArray[index][keyName] = parseInt(txtVal);
                }else{
                    myTArray[index][keyName] = txtVal;
                }
                
            }

            updateSettleTotal(myTArray); //update amount
            
        // update to state
        setlistTransport(myTArray);
        
        //console.log(myTArray, " sub array");
    }

    const replaceSettleChangeVal= (index, keyName, txtVal) => {
        const myTArray = [... listSettleExpense];

            if (txtVal.length > 0) {
                if(keyName == 'amount'){ //chaneg data type to int.
                    myTArray[index][keyName] = parseInt(txtVal);
                }else{
                    myTArray[index][keyName] = txtVal;
                }
                
            }

        //update ex_amount
        updateSettleTotal(myTArray);
            
        // update to state
        setlistSettleExpense(myTArray);
        
       // console.log(myTArray, " sub array");
    }

    

    const removePDFCustomerWorkreport = async( wkClientID) => {
        //get data
        try {

            const memberID = await AsyncStorage.getItem('member_id');
            const tokenSave = await AsyncStorage.getItem('userToken');

            //get client information data
            const DelPDFaction = fetch(uriBase + "/workreport/workreport_pdf_delete?workreport_client_id=" + wkClientID + "&member_id="+ memberID, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'access-token': tokenSave
                }
            })
            .then((response) => response.json())
            .then((json) => {
                let delRes = json;
                if(delRes.status == 1) {
                    Alert.alert("Delete PDF", "File deleted successfully.");
                } else {
                    Alert.alert("Error", "Something was wrong!");
                }
               // console.log(delRes, " Delete pdf"); 
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

        } catch (error) {
            // Error retrieving data
            console.error(error);
        }
    }

    const checkWeekEnd = (myDate) => {
        // Get day of provided data 
        const day = moment(myDate).day();
        // Return true if it's saturday or sunday, either false
        return day === 6 || day === 0
    }

    const showTimepicker = (n, whatTime) => { //Timepicker on/off to fill start and end time
        showMode('time');
        setKeyCheck(n);
        setTypeTime(whatTime);
        console.log(n, " Show TimePicker dfd fd hello", keyCheck)
    };

    const showMode = (currentMode) => { //show timepicker on/off update
        setShow(true);
        setMode(currentMode);
    };

    const onChange = (event, selectedDate, itemIndex, keyName) => { //choose time from TimePicker for workreport
        
        //pWorkValue
        setShow(false);
        const currentDate = selectedDate;
        //setShow(Platform.OS === 'ios');
        const myArray = [... listDataSource];

        if( myArray[itemIndex]['pattern'].toString().length == 0 ) {
            Alert.alert("Error", "Please selct Pattern first.");
        } else {
            myArray[itemIndex][keyName] = moment(currentDate).format('HH:mm');
            //let addMins = parseInt(moment(currentDate).format('hh') * 60) + parseInt(moment(currentDate).format('mm'));
            
            startEndTimeCal(myArray[itemIndex]['start_time'], myArray[itemIndex]['end_time'], myArray, itemIndex, keyName);
            // update to state
            //setlistDataSource(myArray);
           // console.log(keyName, itemIndex, myArray[itemIndex][keyName], " selected date") 
            // setShow(false);
        }
        
    };

    const onChangeCustomer = (event, selectedDate, itemIndex, keyName) => { //choose time from TimePicker for customer workreport detail
        
        //pWorkValue
        setShow(false);
        const currentDate = selectedDate;
        //setShow(Platform.OS === 'ios');
        const myArray = [... listCustomer];

            myArray[0].customer_workreport_items[itemIndex][keyName] = moment(currentDate).format('HH:mm');
            //let addMins = parseInt(moment(currentDate).format('hh') * 60) + parseInt(moment(currentDate).format('mm'));
            
            startEndTimeCalCustomer(myArray[0].customer_workreport_items[itemIndex]['customer_start_time'], myArray[0].customer_workreport_items[itemIndex]['customer_end_time'], myArray, itemIndex, keyName);
            // update to state
            //setlistDataSource(myArray);
            //console.log(keyName, itemIndex, myArray[0].customer_workreport_items[itemIndex][keyName], " selected date") 
            // setShow(false);
        
        
    };

    const TranSporation = (props) => {
        const [selectedTranValue, setSelectedTranValue] = useState(props.dataSeleted);
        //const optionMonth = [{ value: 1, label: 'JAN' }, { value: 2, label: 'FEB' }, { value: 3, label: 'MAR' }, { value: 4, label: 'APR' }, { value: 5, label: 'MAY' }, { value: 6, label: 'JUN' }, { value: 7, label: 'JUL' }, { value: 8, label: 'AUG' }, { value: 9, label: 'SEP' }, { value: 10, label: 'OCT' }, { value: 11, label: 'NOV' }, { value: 12, label: 'DEC' }];
    
        return (
            
            <View style={styles.dropDownStyle}>
                <Picker
                    selectedValue={selectedTranValue}
                    style={{ height: 30, width: 120 }}
                    onValueChange={(itemValue, itemIndex) => onChangeTranType(itemIndex, props.dataFieldName, itemValue, props.dataKey)}
                >
                    {
                        props.dataFromParent.map((item, key) => {
                           // console.log(key, props.dataSeleted, " my Seleted")
                            return(
                                <Picker.Item label={ item.label } value={ item.value } key={key}  />
                            )
                        })
                    }
                    
                </Picker>
            </View>
        )
    }


    const onChangeTranType = (itemIndex, keyName, txtVal, index) => {
        let myTranArray = [... listTransport];

        if(keyName == 'transport_type'){
            setSelectedTranValue(itemIndex);
            myTranArray[index][keyName] = itemIndex;
        }else{
            setSelectedTranValue(txtVal);
            myTranArray[index][keyName] = txtVal;
        }

       // console.log(itemIndex, txtVal, keyName, myTranArray, selectedTranValue, "Transporation change")

        setlistTransport(myTranArray);
    }

    const RouteTypeComp = (props) => {
        setSelectedRouteValue(props.dataSeleted);
        //const optionMonth = [{ value: 1, label: 'JAN' }, { value: 2, label: 'FEB' }, { value: 3, label: 'MAR' }, { value: 4, label: 'APR' }, { value: 5, label: 'MAY' }, { value: 6, label: 'JUN' }, { value: 7, label: 'JUL' }, { value: 8, label: 'AUG' }, { value: 9, label: 'SEP' }, { value: 10, label: 'OCT' }, { value: 11, label: 'NOV' }, { value: 12, label: 'DEC' }];
    
        return (
            
            <View style={styles.dropDownStyle}>
                <Picker
                    selectedValue={selectedRouteValue}
                    style={{ height: 30, width: 120 }}
                    onValueChange={(itemValue, itemIndex) => onChangeRouteType(itemIndex, props.dataFieldName, itemValue, props.dataKey)}
                >
                    {
                        props.dataFromParent.map((item, key) => {
                           // console.log(key, props.dataSeleted, " my Seleted")
                            return(
                                <Picker.Item label={ item.label } value={ item.value } key={key}  />
                            )
                        })
                    }
                    
                </Picker>
            </View>
        )
    }

    const onChangeRouteType = (itemIndex, keyName, txtVal, index) => {
        let myTranArray = [... listTransport];

            setSelectedRouteValue(txtVal);
            myTranArray[index][keyName] = txtVal;
        
       // console.log(itemIndex, txtVal, keyName, myTranArray, selectedRouteValue, "Transporation change")

        

        setlistTransport(myTranArray);
    }

    
    //save workreport
    const saveWorkReport = async (saveType) => {

        const tokenSave = await AsyncStorage.getItem('userToken');
        const account = await AsyncStorage.getItem('userName');

        let customerWorkReport = null;
        let customerWorkReport2 = null;

        if(selectedValue == 1){
            //update customer report flg
            for (let index = 0; index < listCustomer.length; index++) {
                listCustomer[index].client_report_flg = selectedValue; 
            }

        } else {
            //update customer workreport
            if(listCustomer.length > 0) {
                customerWorkReport = listCustomer[0].customer_workreport_items;
            }
    
            if(listCustomer.length > 1) {
                customerWorkReport2 = listCustomer[1].customer_workreport_items;
            }
        }


        let totalWorkHour = total_work_time_cal(listDataSource); // get Total Working time of a month
        let totalNightWorkTime = total_night_work_time_cal(listDataSource);// get Total Night Working time of a month
        let totalOverTime = total_over_time_cal(listDataSource);// get Total Over time of a month
        let totalDeductionTime = total_deduction_time_cal(listDataSource); //get total dedution time
       // console.log(totalDeductionTime, "Total deduction a month")
        let workReport = [{
            "end_time": allData.work_report.end_time,
            "max_width_time": allData.work_report.max_width_time,
            "min_width_time": allData.work_report.min_width_time,
            "mng_deduction_time": totalDeductionTime,
            "mng_night_work_time": totalNightWorkTime,
            "mng_orver_work_time": totalOverTime,
            "mng_total_work_time": totalWorkHour,
            "rslt_absence_num": allData.work_report.rslt_absence_num,
            "rslt_deduction_time": totalDeductionTime,
            "rslt_harf_holiday": allData.work_report.rslt_harf_holiday,
            "rslt_holiday": allData.work_report.rslt_holiday,
            "rslt_night_work_time": totalNightWorkTime,
            "rslt_operated_time": totalWorkHour,
            "rslt_orver_work_time": totalOverTime,
            "rslt_salary_time": hourToMins(allData.work_report.rslt_salary_time),
            "rslt_special_holiday": allData.work_report.rslt_special_holiday,
            "rslt_total_holiday": allData.work_report.rslt_total_holiday,
            "start_time": allData.work_report.start_time,
            "working_time": allData.work_report.working_time
        }];

       let projectInfos = [{
            "client_id": listProjectInfo[0].client_id, 
            "client_name": listProjectInfo[0].client_name, 
            "client_report_flg": listProjectInfo[0].client_report_flg, 
            "contract_type": listProjectInfo[0].contract_type, 
            "contract_type_label": listProjectInfo[0].contract_type_label, 
            "end_contract_date": listProjectInfo[0].end_contract_date, 
            "individual_contract_id": listProjectInfo[0].individual_contract_id, 
            "individual_contract_no": listProjectInfo[0].individual_contract_no, 
            "max_width_time": listProjectInfo[0].max_width_time, 
            "min_width_time": listProjectInfo[0].min_width_time, 
            "mng_clt_total_work_time": hourToMins(listProjectInfo[0].mng_clt_total_work_time), 
            "project_id": listProjectInfo[0].project_id, 
            "project_name": listProjectInfo[0].project_name, 
            "working_time": listProjectInfo[0].working_time, 
            "workreport_client_id": listProjectInfo[0].workreport_client_id, 
        }];

        let newDatafm = {
            "member_info": [{ "account": account, "workreport_id": allData.workreport_id, "new_note": "" }],
            "work_report": workReport,
            "customer_work_report": listCustomer,
            "customer_work_report_detail": customerWorkReport,
            "customer_work_report_detail2": customerWorkReport2,
            "daily_transportation_id": allData.transport_expense.daily_transportation_id,
            "transport_expense_detail": listTransport,
            "project_info": projectInfos,
            "work_report_detail": listDataSource,
            "expense_report_detail": [],
            "customer_report_file": [],
            "lang": "en"
        }
        
        //console.info(listTransport, newDatafm, "Save Workreport ");
        
        setSearchLoad(true); //loading started

        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'access-token': tokenSave
            },
            body: JSON.stringify(newDatafm)
        };

        let serviceName = '';

        if(saveType == 1) {
            serviceName = '/workreport/workreport_update_mobile';
        } else {
            serviceName = '/basic_user/workreport_apply_change_mobile';
        }

       //const saveWrk = fetch(uriBase + '/workreport/workreport_update_mobile', requestOptions)
       const saveWrk = fetch(uriBase + serviceName, requestOptions)
            .then((response) => response.json())
            .then((json) => {
                const data = json;
                if(data.status == 1) {
                   Alert.alert("Successful", data.msg);
                } else {
                    if(data.msg){
                        Alert.alert("Error", data.msg);
                    }else if(data.message){
                        Alert.alert("Error", data.message);
                    } else {
                        Alert.alert("Error", data.error);
                    }
                    
                }
                
                console.log(data, " result of save");
                }
            ).catch((error) => console.error(error))
            .finally(() => setSearchLoad(false));
       
    }

    //start time and end time fill and calculate
    const startEndTimeCal = async(startTime, endTime, myArray, index, keyName, keyVal = '') => {
        

        let startWorkTime = await AsyncStorage.getItem("comStartTime");
        let endWorkTime = await AsyncStorage.getItem("comEndTime");

        let compTotalWkTime = hourToMins(endWorkTime) - hourToMins(startWorkTime);

        let myPatterns = [... listProjectInfo];

        let workPattern = myPatterns[0].working_hour;

        let stTimeMins = startTime.split(':');
        stTimeMins = (parseInt(stTimeMins[0]) * 60) + parseInt(stTimeMins[1]);
        let edTimeMins = endTime.split(':');
        edTimeMins = (parseInt(edTimeMins[0]) * 60) + parseInt(edTimeMins[1]);
        let overTime = 0;
        let workHour = 0;
        let curWkTime = 0;
        
        if( stTimeMins > edTimeMins ) {
            if(edTimeMins == 0){ // if endtime is 12:00 PM
                curWkTime = 1440 - stTimeMins;
            } else if(edTimeMins > 0){// if endtime is later than 00:00 AM
                curWkTime = (1440 - stTimeMins) + edTimeMins;
            }
            
        } else {
            curWkTime = edTimeMins - stTimeMins;
        }

        if(keyName == 'night_break_time'){ //check edit field is night breaktime or not
            curWkTime = curWkTime - parseInt(keyVal);
        } else if(parseInt(myArray[index]['night_break_time']) > 0) { // night break time is greater than 0
            curWkTime = curWkTime - parseInt(myArray[index]['night_break_time']);
        }

        workHour = curWkTime;
        let totalWorkHour = convertMinsToTime(curWkTime);
        
        //console.log(stTimeMins, edTimeMins, curWkTime, totalWorkHour, "stTime edTime")


        if(parseInt(myArray[index]['total_break_time']) > 0) { // break time calculation
            totalWorkHour = hourToMins(totalWorkHour) - parseInt(myArray[index]['total_break_time']);
            totalWorkHour = convertMinsToTime(totalWorkHour);
            //overTime = overTime - parseInt(myArray[index]['total_break_time']);
        }

        //early error to show
        let selectPt = getPatternIdbyNum(pWorkValue);

        //console.log(workPattern[selectPt].end_time, selectPt, pWorkValue, startWorkTime, endWorkTime, "Selected Pattern")

        if(hourToMins(workPattern[selectPt].end_time) > edTimeMins ){
            myArray[index]['atendance_type'] = 7; // attendance type early when deducation > 0
            myArray[index]['reason'] = 'Early'; // attendance type early when deducation > 0
        }

        if( (hourToMins(workPattern[selectPt].start_time) > stTimeMins) && (hourToMins(workPattern[selectPt].end_time) > edTimeMins ) ){
            myArray[index]['atendance_type'] = 7; // attendance type early when deducation > 0
            myArray[index]['reason'] = 'Early'; // attendance type early when deducation > 0
        } else {
            myArray[index]['atendance_type'] = 0; // attendance type early when deducation > 0
            myArray[index]['reason'] = ''; // attendance type early when deducation > 0
        }

        if(compTotalWkTime > hourToMins(workPattern[selectPt].working_time)){
            if (hourToMins(totalWorkHour) < compTotalWkTime) { //deducation reduce
                let deduction = compTotalWkTime - hourToMins(totalWorkHour);
                myArray[index]['deduction_time'] = convertMinsToTime(deduction);
                myArray[index]['atendance_type'] = 6; // attendance type dealy when deducation > 0
                //props.setSelectedAtTypeValue(6);
            }
        } else if( (compTotalWkTime < hourToMins(workPattern[selectPt].working_time)) || (compTotalWkTime == hourToMins(workPattern[selectPt].working_time))){
            if (hourToMins(totalWorkHour) > hourToMins(workPattern[selectPt].working_time)) { //deducation reduce
                let deduction = hourToMins(workPattern[selectPt].working_time) - hourToMins(totalWorkHour);
                myArray[index]['deduction_time'] = convertMinsToTime(deduction);
                myArray[index]['atendance_type'] = 6; // attendance type dealy when deducation > 0
                //props.setSelectedAtTypeValue(6);
            }
        }

        //compare current wk total time greater than company time to calcuate OverTime
        if(compTotalWkTime > hourToMins(workPattern[selectPt].working_time)){
            if(curWkTime > compTotalWkTime){
                overTime = curWkTime - compTotalWkTime;
            }

            myArray[index]['deduction_time'] = '00:00'; //replace 00:00 when over 8hours
        }
        else if(compTotalWkTime < hourToMins(workPattern[selectPt].working_time)){
            if(curWkTime > hourToMins(workPattern[selectPt].working_time)){
                overTime = curWkTime - hourToMins(workPattern[selectPt].working_time);
            }

            myArray[index]['deduction_time'] = '00:00'; //replace 00:00 when over 8hours
        }else if(compTotalWkTime == hourToMins(workPattern[selectPt].working_time)){
            if(curWkTime > hourToMins(workPattern[selectPt].working_time)){
                overTime = curWkTime - hourToMins(workPattern[selectPt].working_time);
            }
        }

        if(overTime > 0){
            myArray[index]['over_work_time'] = convertMinsToTime(overTime); //replace 00:00 when over 8hours
        }else{
            myArray[index]['over_work_time'] = '00:00';
        }

       // console.log(overTime, myArray[index]['over_work_time'], "Overtime cal")
        
        //night work time calculate til to 12:00 PM
        let nightBT = 0;
        if( hourToMins(myArray[index]['end_time']) > 1320 && hourToMins(myArray[index]['end_time']) <= 1439 ) { // last night working hour
           nightBT = hourToMins(myArray[index]['end_time']) - 1320;
           myArray[index]['night_work_time'] = convertMinsToTime(nightBT);
          // console.log(nightBT, "night breaktime")
        } else if(hourToMins(myArray[index]['end_time']) == 0){
            nightBT = 120;
            myArray[index]['night_work_time'] = convertMinsToTime(nightBT);
            //console.log(nightBT, "night breaktime")
        } else if(hourToMins(myArray[index]['end_time']) > 0 && hourToMins(myArray[index]['end_time']) <= 300){
            nightBT = 120 + hourToMins(myArray[index]['end_time']);
            myArray[index]['night_work_time'] = convertMinsToTime(nightBT);
            //console.log(nightBT, "night breaktime")
        }

        //night break time calculate
        let nightTotalWk = 0;
        if(keyName == 'night_break_time'){
            nightTotalWk = nightBT - parseInt(keyVal);
            myArray[index]['night_work_time'] = convertMinsToTime(nightTotalWk);
        }
        

        myArray[index]['total_work_time'] = totalWorkHour;
        
        // if(totalWorkHour > 480) { //greater than 8 hours
        //     let totalOT = totalWorkHour - 480;
        //     myArray[index]['over_work_time'] = convertMinsToTime(totalOT);
        // }

        setlistDataSource(myArray);

        //early type check
       // earlyErrToShow(edTimeMins, index, keyName);
        
    }


    //start time and end time fill and calculate
    const startEndTimeCalCustomer = async(startTime, endTime, myCustomerArray, index, keyName, keyVal = '') => {
        
        let myArray = myCustomerArray[0].customer_workreport_items;

        let stTimeMins = startTime.split(':');
        stTimeMins = (parseInt(stTimeMins[0]) * 60) + parseInt(stTimeMins[1]);
        let edTimeMins = endTime.split(':');
        edTimeMins = (parseInt(edTimeMins[0]) * 60) + parseInt(edTimeMins[1]);
        //let overTime = 0;
        //let workHour = 0;
        let curWkTime = 0;
        
        if( stTimeMins > edTimeMins ) {
            if(edTimeMins == 0){ // if endtime is 12:00 PM
                curWkTime = 1440 - stTimeMins;
            } else if(edTimeMins > 0){// if endtime is later than 00:00 AM
                curWkTime = (1440 - stTimeMins) + edTimeMins;
            }
            
        } else {
            curWkTime = edTimeMins - stTimeMins;
        }

       // workHour = curWkTime;
        let totalWorkHour = convertMinsToTime(curWkTime);
        
        //console.log(stTimeMins, edTimeMins, curWkTime, totalWorkHour, "stTime edTime")


        if(keyName == 'customer_break_time'){
            totalWorkHour = hourToMins(totalWorkHour) - parseInt(keyVal);
            totalWorkHour = convertMinsToTime(totalWorkHour);
            myArray[index]['customer_break_time'] = parseInt(keyVal);

        }else if(parseInt(myArray[index]['customer_break_time']) > 0) { // break time reduce calculation
            totalWorkHour = hourToMins(totalWorkHour) - parseInt(myArray[index]['customer_break_time']);
            totalWorkHour = convertMinsToTime(totalWorkHour);
            //overTime = overTime - parseInt(myArray[index]['total_break_time']);
        }

        //night break time calculate
        if(keyName == 'customer_night_break_time'){
            totalWorkHour = hourToMins(totalWorkHour) - parseInt(keyVal);
            myArray[index]['customer_night_break_time'] = parseInt(keyVal);
           // console.log(myArray[index]['customer_night_break_time'], "Customer Night BT")

        } else if(myArray[index]['customer_night_break_time'] > 0){
            
            totalWorkHour = hourToMins(totalWorkHour) - myArray[index]['customer_night_break_time'];
           // console.log(myArray[index]['customer_night_break_time'], "Customer Night BT")
        }

        myArray[index]['customer_total_work_time'] = convertMinsToTime(totalWorkHour);

        //assign the updated data to listCustomer
        myCustomerArray[0].customer_workreport_items = myArray;

        //update and refresh listCustomer
        setlistCustomer(myCustomerArray);
        
    }

    const textInputReason = (itemIndex, textInput) => { //reason need to fill when delay
        let myArray = [... listDataSource];

        myArray[itemIndex]['reason'] = textInput;

        setlistDataSource(myArray);

    }

    const earlyErrToShow = () => { //how to show early type is attendance dropdown
       // console.log("early type");

    }

    //regular function blog started
const reportFlg = (mbData) => { //report flag 0 or 1 checking function
    let report_flg = 0;

    console.log(mbData);

    if(mbData.expense_report_flg) {
        report_flg = mbData.expense_report_flg;
    }
    
    return ( report_flg );
}

const convertMinsToTime = (mins) => { //convert min to hour function
    let hours = Math.floor(mins / 60);
    let minutes = mins % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return ( hours +':'+ minutes );
}

const total_night_work_time_cal = (listDSource) => { // get Total Working time of a month
    const myArray = [... listDSource];

    let totalNightWorkTime = 0;

    for (let index = 0; index < myArray.length; index++) {
        if(typeof(myArray[index]['night_work_time']) !== 'undefined'){
            totalNightWorkTime += hourToMins(myArray[index]['night_work_time']);
            //console.log(myArray[index]['total_work_time'], "detail tworktime");
        }
          
    }

    return ( totalNightWorkTime );
}

const hourToMins = (mins) => { //conver to minutes from hour format
    let res_mins = 0;
    
    if(mins.toString().length > 0 && typeof(mins) !== 'undefined'){
        mins = mins.split(':');
        res_mins = (parseInt(mins[0]) * 60) + parseInt(mins[1]);
    }

    return ( res_mins );
}

    
const total_over_time_cal = (listDSource) => { // get Total Working time of a month
    const myArray = [... listDSource];

    let totalOverTime = 0;

    for (let index = 0; index < myArray.length; index++) {
        if(typeof(myArray[index]['over_work_time']) !== 'undefined'){
            totalOverTime += hourToMins(myArray[index]['over_work_time']);
            //console.log(myArray[index]['total_work_time'], "detail tworktime");
        }
    }

    return ( totalOverTime );
}


const getProjectDetailItem = (index, keyName, listPjSource) => {// get project detail item
    const myTArray = [... listPjSource];

    myTArray[index][keyName];

    return ( myTArray[index][keyName] );
}

const getPatternIdbyNum = (ptKey) => { // Pattern id by number
    let ptNumber = 9;
    if(ptKey == 'A'){
        ptNumber = 0;
    } else if(ptKey == 'B'){
        ptNumber = 1;
    } else if(ptKey == 'C'){
        ptNumber = 2;
    } else if(ptKey == 'D'){
        ptNumber = 3;
    }else if(ptKey == 'E'){
        ptNumber = 4;
    }else if(ptKey == 'F'){
        ptNumber = 5;
    }

    return ( ptNumber );

}

const total_work_time_cal = (listDSource) => { // get Total Working time of a month
    const myArray = [... listDSource];

    let totalWorkTime = 0;

    for (let index = 0; index < myArray.length; index++) {
        if(typeof(myArray[index]['total_work_time']) !== 'undefined'){
            totalWorkTime += hourToMins(myArray[index]['total_work_time']);
            //console.log(myArray[index]['total_work_time'], "detail tworktime");
        }
    }

    return ( totalWorkTime );
}

const total_deduction_time_cal = (listDSource) => { // get Total deduction time of a month
    const myArray = [... listDSource];

    let deduction_time = 0;

    for (let index = 0; index < myArray.length; index++) {
        if(typeof(myArray[index]['deduction_time']) !== 'undefined'){
            deduction_time += hourToMins(myArray[index]['deduction_time']);
            //console.log(myArray[index]['total_work_time'], "detail tworktime");
        }
 
    }

    return ( deduction_time );
}

    

    const getTimeFromMins = (mins) => {
        // do not include the first validation check if you want, for example,
        // getTimeFromMins(1530) to equal getTimeFromMins(90) (i.e. mins rollover)
        if ( mins < 0) {
            throw new RangeError("Valid input should be greater than or equal to 0 and less than 1440.");
        }
        var h = mins / 60 | 0,
            m = mins % 60 | 0;
            console.log(h, m, "get time form min")
        moment.utc().hours(h).minutes(m).format("hh:mm");

    }

    const DateItem = ({item, index}) => (
        (isWorkReportTg) ? (
        (checkWeekEnd(item.report_date) || (item.atendance_type == 1)) ? (
        // weekend block start
        <View key={index} style={[styles.workingHour, { borderColor: '#e3e3e3' }]}>
            <TouchableOpacity 
                style={[styles.workingHourHead, styles.myRow, { backgroundColor: '#e3e3e3', borderRadius: (isToggle || item.isExpanded ) ? 0 : 15 } ]} 
                onPress={ () => updateSingleDate(index) }
            >
                <View style={{ width: '10%', paddingTop: 5 }}>
                    <Text style={ [styles.dateBlk, {paddingTop: 5}] }>
                        <MaterialIcons
                            name="check"
                            color="#707070"
                            size={22}
                            style={{ fontWeight: 'bold', color: '#707070' }}
                        />
                    </Text>
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={ styles.dateBlk }>{moment(item.report_date).format('DD/MMM/YYYY')}</Text>
                    <Text style={{ color: '#7c7277' }}>{langStore.no_entries}</Text>
                </View>
                <View style={{ width: '10%', paddingLeft: 5, paddingTop: 5 }}>
                    { ( isToggle || item.isExpanded ) ? (
                        <MaterialIcons
                            name="navigate-next"
                            color="#707070"
                            size={30}
                            style={{ transform: [{rotate: '-90deg'}], fontWeight: 'bold', color: '#707070' }}
                        />
                        )
                        :
                        <MaterialIcons
                            name="navigate-next"
                            color="#707070"
                            size={30}
                            style={{ transform: [{rotate: '90deg'}], fontWeight: 'bold', color: '#707070'  }}
                        />
                    }
                </View>
            </TouchableOpacity>
            {   (isToggle || item.isExpanded) ? (
                <View style={ [styles.workingHourContent, {display: (isToggle || item.isExpanded) ? 'flex' : 'none'}] }>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>{langStore.work_hours}</Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '45%' }}>
                                    {/* <TextInput value={item.start_time} textAlign={'center'} style={ styles.textInputStyle } /> */}
                                    <TouchableRipple onPress={() => showTimepicker(index, 'start_time')} style={ [styles.textInputStyle, { padding: 7 }] }>
                                        <Text>{item.start_time}</Text>
                                    </TouchableRipple>
                                    {show && (keyCheck == index) && (typeTime == 'start_time') && ( 
                                        <DateTimePicker
                                            value={date}
                                            mode="time"
                                            is24Hour={true}
                                            display="spinner"
                                            onChange={(event, date) => {onChange(event, date, index, 'start_time')}}
                                        />
                                    )}
                                </View>
                                <View style={{ width: '10%' }}>
                                    <Text style={{ paddingTop: 7, paddingLeft: 5 }}>/</Text>
                                </View>
                                <View style={{ width: '45%' }}>
                                    {/* <TextInput value={item.end_time} textAlign={'center'} style={ styles.textInputStyle } /> */}
                                    <TouchableRipple onPress={() => showTimepicker(index, 'end_time')} style={ [styles.textInputStyle, { padding: 7 }] }>
                                        <Text>{item.end_time}</Text>
                                    </TouchableRipple>
                                    {show && (keyCheck == index) && (typeTime == 'end_time') && ( 
                                        <DateTimePicker
                                            value={date}
                                            mode="time"
                                            is24Hour={true}
                                            display="spinner"
                                            onChange={(event, date) => {onChange(event, date, index, 'end_time')}}
                                        />
                                    )}
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>&nbsp;</Text>
                        </View>
                        <View style={styles.columPd}>
                            { (listProjectInfo.length > 0 && item.isExpanded ) ? (
                                <PworkhourDropdown dataFromParent={listProjectInfo}  dataSeleted={item.pattern} dataSelectKey={index} />
                            ) : 
                                <TouchableOpacity >
                                    <Text style={{ width: '100%', backgroundColor: '#2d9f88', padding: 5, borderRadius: 10, textAlign: 'center', color: '#fff'}}>Standard Times</Text>
                                </TouchableOpacity>
                            }
                            
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>{ langStore.break_time }</Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '30%' }}>
                                    <TextInput value={item.total_break_time.toString()} onChangeText={txt => replaceChangeVal(index, 'total_break_time', txt)} textAlign={'center'} style={ styles.textInputStyle } />
                                    
                                </View>
                                <View style={{ padding: 7 }}>
                                    <Text>minutes</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>{ langStore.night_break_time }</Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '30%' }}>
                                    <TextInput value={item.night_break_time.toString()} onChangeText={txt => replaceNightBT(index, 'night_break_time',txt) } textAlign={'center'} style={ styles.textInputStyle } />
                                </View>
                                <View style={{ padding: 7 }}>
                                    <Text>minutes</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>{ langStore.working_hour }</Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '45%' }}>
                                    <TextInput value={item.total_work_time} editable = {false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                </View>
                                <View style={{ padding: 7 }}>
                                    <Text>&nbsp;</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>{ langStore.amount_overtime }</Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '45%' }}>
                                    <TextInput value={item.over_work_time.toString()} editable = {false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                </View>
                                <View style={{ padding: 7 }}>
                                    <Text>&nbsp;</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>{ langStore.late_night_working_hours } </Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '45%' }}>
                                    <TextInput value={item.night_work_time.toString()} editable={false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                </View>
                                <View style={{ padding: 7 }}>
                                    <Text>&nbsp;</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>{ langStore.deduction }</Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '45%' }}>
                                    <TextInput value={item.deduction_time} editable={false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                </View>
                                <View style={{ padding: 7 }}>
                                    <Text>&nbsp;</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text style={{ marginTop: 15 }}>{ langStore.attendance_type }</Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '100%' }}>
                                { isToggle || item.isExpanded ? 
                                    <AttendanceTypeDropdown dataFromParent={attendType} dataSeleted={item.atendance_type} />
                                : <Text>&nbsp;</Text>
                                }
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>{ langStore.reason }</Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '100%' }}>
                                    <TextInput 
                                        value={item.reason} textAlign={'center'} 
                                        style={ styles.textInputStyle } 
                                        onChangeText={(val) => textInputReason(index,val)}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    
                </View> 
                )
                :
                <Text style={{display: 'none'}}>&nbsp;</Text>
            }
        </View> 
        ) : 
        ( moment.duration(item.total_work_time.toString()).asMinutes() > 0 && isWorkTimeEnter ) ? (
            <View key={index} style={[styles.workingHour, { borderColor: '#f2f2f2' }]}>
                <TouchableOpacity
                    style={[styles.workingHourHead, styles.myRow, { backgroundColor: '#f2f2f2', borderRadius: (isToggle || item.isExpanded) ? 0 : 15 } ]} 
                    onPress = { () => updateSingleDate(index) }
                >
                    <View style={{ width: '10%', paddingTop: 5 }}>
                        <Text style={ [styles.dateBlk, {paddingTop: 5}] }>
                            <MaterialIcons
                                name="check"
                                color="#707070"
                                size={22}
                                style={{ fontWeight: 'bold', color: '#707070' }}
                            />
                        </Text>
                    </View>
                    <View style={{ width: '80%' }}>
                        <Text style={ styles.dateBlk }>{moment(item.report_date).format('DD/MMM/YYYY')}</Text>
                        <Text style={{ color: '#7c7277' }}>{ langStore.wkhour_entered }</Text>
                    </View>
                    <View style={{ width: '10%', paddingLeft: 5, paddingTop: 5 }}>
                        { (isToggle || item.isExpanded) ? (
                            <MaterialIcons
                                name="navigate-next"
                                color="#707070"
                                size={30}
                                style={{ transform: [{rotate: '-90deg'}], fontWeight: 'bold', color: '#707070' }}
                            />
                            )
                            :
                            <MaterialIcons
                                name="navigate-next"
                                color="#707070"
                                size={30}
                                style={{ transform: [{rotate: '90deg'}], fontWeight: 'bold', color: '#707070'  }}
                            />
                        }
                    </View>
                </TouchableOpacity>
                { (isToggle || item.isExpanded) ? (
                <View style={ [styles.workingHourContent, {display: (isToggle || item.isExpanded) ? 'flex' : 'none'}] }>
                    
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>{langStore.work_hours}</Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '45%' }}>
                                    {/* <TextInput value={item.start_time} textAlign={'center'} style={ styles.textInputStyle } /> */}
                                    <TouchableRipple onPress={() => showTimepicker(index, 'start_time')} style={ [styles.textInputStyle, { padding: 7 }] }>
                                        <Text>{item.start_time}</Text>
                                    </TouchableRipple>
                                    {show && (keyCheck == index) && (typeTime == 'start_time') && ( 
                                        <DateTimePicker
                                            value={date}
                                            mode="time"
                                            is24Hour={true}
                                            display="spinner"
                                            onChange={(event, date) => {onChange(event, date, index, 'start_time')}}
                                        />
                                    )}
                                </View>
                                <View style={{ width: '10%' }}>
                                    <Text style={{ paddingTop: 7, paddingLeft: 5 }}>/</Text>
                                </View>
                                <View style={{ width: '45%' }}>
                                    {/* <TextInput value={item.end_time} textAlign={'center'} style={ styles.textInputStyle } /> */}
                                    <TouchableRipple onPress={() => showTimepicker(index, 'end_time')} style={ [styles.textInputStyle, { padding: 7 }] }>
                                        <Text>{item.end_time}</Text>
                                    </TouchableRipple>
                                    {show && (keyCheck == index) && (typeTime == 'end_time') && ( 
                                        <DateTimePicker
                                            value={date}
                                            mode="time"
                                            is24Hour={true}
                                            display="spinner"
                                            onChange={(event, date) => {onChange(event, date, index, 'end_time')}}
                                        />
                                    )}
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>&nbsp;</Text>
                        </View>
                        <View style={styles.columPd}>
                            { (listProjectInfo.length > 0 && item.isExpanded ) ? (
                                <PworkhourDropdown dataFromParent={listProjectInfo}  dataSeleted={item.pattern} dataSelectKey={index} />
                            ) : 
                                <TouchableOpacity >
                                    <Text style={{ width: '100%', backgroundColor: '#2d9f88', padding: 5, borderRadius: 10, textAlign: 'center', color: '#fff'}}>Standard Times</Text>
                                </TouchableOpacity>
                            }
                            
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>{ langStore.break_time }</Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '30%' }}>
                                    <TextInput value={item.total_break_time.toString()} onChangeText={txt => replaceChangeVal(index, 'total_break_time', txt)} textAlign={'center'} style={ styles.textInputStyle } />
                                    
                                </View>
                                <View style={{ padding: 7 }}>
                                    <Text>minutes</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>{ langStore.night_break_time }</Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '30%' }}>
                                    <TextInput value={item.night_break_time.toString()} onChangeText={txt => replaceNightBT(index, 'night_break_time',txt) } textAlign={'center'} style={ styles.textInputStyle } />
                                </View>
                                <View style={{ padding: 7 }}>
                                    <Text>minutes</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>{ langStore.working_hour }</Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '45%' }}>
                                    <TextInput value={item.total_work_time} editable = {false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                </View>
                                <View style={{ padding: 7 }}>
                                    <Text>&nbsp;</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>{ langStore.amount_overtime }</Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '45%' }}>
                                    <TextInput value={item.over_work_time.toString()} editable = {false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                </View>
                                <View style={{ padding: 7 }}>
                                    <Text>&nbsp;</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>{ langStore.late_night_working_hours } </Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '45%' }}>
                                    <TextInput value={item.night_work_time.toString()} editable={false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                </View>
                                <View style={{ padding: 7 }}>
                                    <Text>&nbsp;</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>{ langStore.deduction }</Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '45%' }}>
                                    <TextInput value={item.deduction_time} editable={false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                </View>
                                <View style={{ padding: 7 }}>
                                    <Text>&nbsp;</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text style={{ marginTop: 15 }}>{ langStore.attendance_type }</Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '100%' }}>
                                { isToggle || item.isExpanded ? 
                                    <AttendanceTypeDropdown dataFromParent={attendType} dataSeleted={item.atendance_type} />
                                : <Text>&nbsp;</Text>
                                }
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.myRow}>
                        <View style={styles.columPd}>
                            <Text>{ langStore.reason }</Text>
                        </View>
                        <View style={styles.columPd}>
                            <View style={ styles.myRow }>
                                <View style={{ width: '100%' }}>
                                    <TextInput 
                                        value={item.reason} textAlign={'center'} 
                                        style={ styles.textInputStyle } 
                                        onChangeText={(val) => textInputReason(index,val)}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                
                
                </View> 
                )
                :
                <Text style={{display: 'none'}}>&nbsp;</Text>
            }
            </View> 
        ) : 
        ( (moment.duration(item.total_work_time.toString()).asMinutes() == 0) && isWorkTimeNotEnter ) ? (
            // weekday with blue block start
            <View key={index} style={[styles.workingHour, { borderColor: '#d6f2ec' }]}>
                <TouchableOpacity style={[styles.workingHourHead, styles.myRow, { backgroundColor: '#d6f2ec', borderRadius: (isToggle || item.isExpanded ) ? 0 : 15 } ]} 
                    onPress = { () => updateSingleDate(index) }
                >
                    <View style={{ width: '10%', paddingTop: 5 }}>
                        <Text style={ styles.dateBlk }> !</Text>
                    </View>
                    <View style={{ width: '80%' }}>
                        <Text style={ styles.dateBlk }>{moment(item.report_date).format('DD/MMM/YYYY')}</Text>
                        <Text style={{ color: '#7c7277' }}>{ langStore.wkhour_not_entered }</Text>
                    </View>
                    <View style={{ width: '10%', paddingLeft: 5, paddingTop: 5 }}>
                        
                        { ( isToggle || item.isExpanded ) ? (
                            <MaterialIcons
                                name="navigate-next"
                                color="#707070"
                                size={30}
                                style={{ transform: [{rotate: '-90deg'}], fontWeight: 'bold', color: '#707070' }}
                            />
                            )
                            :
                            <MaterialIcons
                                name="navigate-next"
                                color="#707070"
                                size={30}
                                style={{ transform: [{rotate: '90deg'}], fontWeight: 'bold', color: '#707070'  }}
                            />
                        }
                        
                    </View>
                </TouchableOpacity>
                { ( isToggle || item.isExpanded ) ? (
                    <View style={ [styles.workingHourContent, {display: ( isToggle || item.isExpanded ) ? 'flex': 'none'} ] } >
                        <View style={styles.myRow}>
                            <View style={styles.columPd}>
                                <Text>{langStore.work_hours}</Text>
                            </View>
                            <View style={styles.columPd}>
                                <View style={ styles.myRow }>
                                    <View style={{ width: '45%' }}>
                                        {/* <TextInput value={item.start_time} textAlign={'center'} onChangeText={txt => replaceChangeVal(key, 'start_time', txt)} style={ styles.textInputStyle } /> */}
                                        <TouchableRipple onPress={() => showTimepicker(index, 'start_time')} style={ [styles.textInputStyle, { padding: 7 }] }>
                                            <Text>{item.start_time.toString()}</Text>
                                        </TouchableRipple>
                                        {show && (keyCheck == index) && (typeTime == 'start_time') && ( 
                                            <DateTimePicker
                                                value={date}
                                                mode="time"
                                                is24Hour={true}
                                                display="spinner"
                                                onChange={(event, date) => {onChange(event, date, index, 'start_time')}}
                                            />
                                        )}
                                    </View>
                                    <View style={{ width: '10%' }}>
                                        <Text style={{ paddingTop: 7, paddingLeft: 5 }}>/</Text>
                                    </View>
                                    <View style={{ width: '45%' }}>
                                        {/* <TextInput value={item.end_time} textAlign={'center'} onChangeText={txt => replaceChangeVal(key, 'end_time', txt)} style={ styles.textInputStyle } /> */}
                                        <TouchableRipple onPress={() => showTimepicker(index, 'end_time')} style={ [styles.textInputStyle, { padding: 7 }] }>
                                            <Text>{item.end_time}</Text>
                                        </TouchableRipple>
                                        {show && (keyCheck == index) && (typeTime == 'end_time') && ( 
                                            <DateTimePicker
                                                value={date}
                                                mode="time"
                                                is24Hour={true}
                                                display="spinner"
                                                onChange={(event, date) => {onChange(event, date, index, 'end_time')}}
                                            />
                                        )}
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.myRow}>
                            <View style={styles.columPd}>
                                <Text>&nbsp;</Text>
                            </View>
                            <View style={styles.columPd}>
                                { ( patternCount > 0 && item.isExpanded) ? (
                                    <PworkhourDropdown dataFromParent={listProjectInfo}  dataSeleted={99} dataSelectKey={key} />
                                ) : 
                                    <TouchableOpacity 
                                        onPress = { () => { addStandardTime(key) } }
                                        style={{ borderColor: '#fff', borderWidth: 1, borderRadius: 11 }}
                                    >
                                        <Text style={{ width: '100%', backgroundColor: '#2d9f88', padding: 5, borderRadius: 10, textAlign: 'center', color: '#fff'}} >Standard Times</Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
                        <View style={styles.myRow}>
                            <View style={styles.columPd}>
                                <Text>{ langStore.break_time }</Text>
                            </View>
                            <View style={styles.columPd}>
                                <View style={ styles.myRow }>
                                    <View style={{ width: '30%' }}>
                                        <TextInput value={item.total_break_time.toString()} textAlign={'center'} onChangeText={txt => replaceChangeVal(index, 'total_break_time', txt)} style={[ styles.textInputStyle ]} />
                                    </View>
                                    <View style={{ padding: 7 }}>
                                        <Text>minutes</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.myRow}>
                            <View style={styles.columPd}>
                                <Text>{ langStore.night_break_time }</Text>
                            </View>
                            <View style={styles.columPd}>
                                <View style={ styles.myRow }>
                                    <View style={{ width: '30%' }}>
                                        <TextInput value={item.night_break_time.toString()} textAlign={'center'} style={ styles.textInputStyle } />
                                    </View>
                                    <View style={{ padding: 7 }}>
                                        <Text>minutes</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.myRow}>
                            <View style={styles.columPd}>
                                <Text>{ langStore.working_hour }</Text>
                            </View>
                            <View style={styles.columPd}>
                                <View style={ styles.myRow }>
                                    <View style={{ width: '45%' }}>
                                        <TextInput value={item.total_work_time} editable={false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                    </View>
                                    <View style={{ padding: 7 }}>
                                        <Text>&nbsp;</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.myRow}>
                            <View style={styles.columPd}>
                                <Text>{ langStore.amount_overtime }</Text>
                            </View>
                            <View style={styles.columPd}>
                                <View style={ styles.myRow }>
                                    <View style={{ width: '45%' }}>
                                        <TextInput value={item.over_work_time.toString()} editable={false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                    </View>
                                    <View style={{ padding: 7 }}>
                                        <Text>&nbsp;</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.myRow}>
                            <View style={styles.columPd}>
                                <Text>{ langStore.late_night_working_hours } </Text>
                            </View>
                            <View style={styles.columPd}>
                                <View style={ styles.myRow }>
                                    <View style={{ width: '45%' }}>
                                        <TextInput value={item.night_work_time} editable={false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                    </View>
                                    <View style={{ padding: 7 }}>
                                        <Text>&nbsp;</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.myRow}>
                            <View style={styles.columPd}>
                                <Text>{ langStore.deduction }</Text>
                            </View>
                            <View style={styles.columPd}>
                                <View style={ styles.myRow }>
                                    <View style={{ width: '45%' }}>
                                        <TextInput value={item.deduction_time} editable={false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                    </View>
                                    <View style={{ padding: 7 }}>
                                        <Text>&nbsp;</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.myRow}>
                            <View style={styles.columPd}>
                                <Text style={{ marginTop: 15 }}>{ langStore.atendance_type }</Text>
                            </View>
                            <View style={styles.columPd}>
                                <View style={ styles.myRow }>
                                    <View style={{ width: '100%' }}>
                                    { isToggle || item.isExpanded ? 
                                        <AttendanceTypeDropdown dataFromParent={attendType} dataSeleted={item.atendance_type} />
                                        : <Text>&nbsp;</Text>
                                    }
                                        </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.myRow}>
                            <View style={styles.columPd}>
                                <Text>{ langStore.reason }</Text>
                            </View>
                            <View style={styles.columPd}>
                                <View style={ styles.myRow }>
                                    <View style={{ width: '100%' }}>
                                        <TextInput value={item.reason} textAlign={'center'} style={ styles.textInputStyle } />
                                    </View>
                                </View>
                            </View>
                        </View>
                        
                    </View> 
                    )
                    :
                    <Text style={{display: 'none'}}>&nbsp;</Text>
                }
            </View>
        ) : 
        <View><Text>Work report do not exist.</Text></View>
        ) : console.log("off wk report")
    );


    useEffect(() => {
        setTimeout(() => {
            languageApi(); //getting workreport data in first load
            
            const unsubscribe = navigation.addListener('focus', () => {
                // The screen is focused
                // Call any action
                languageApi(); //getting workreport data

                screenChange();
            });
            screenChange();
            getWorkReportContent();

        }, 300);
    }, []);

    // if( isLoading ) {
    //     return(
    //       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    //         <ActivityIndicator size="large"/>
    //       </View>
    //     );
    // }
    

    return (
        <View style={{ flex: 1}}>
 
            <FlatList
                ListHeaderComponent={()=>
                    <View>
                        <View style={ styles.header }>
                            <View style={styles.menubox} >
                                <Text style={{ color: colors.text }}>{langStore.applications}</Text>
                                <View style={styles.linkrow}>
                                    <Text style={styles.linktxtleft}>{langStore.work_report} {langStore.applications}</Text>
                                    <Text style={styles.monthyear}>{useYear}/{useMonth}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.content}>
                            <View style={[styles.myRow]}>
                                <View style={[styles.colums, { width: '33%' }]}>
                                    <SearchBoxYear dataYear={options} dataSeleted={useYear} />
                                </View>
                                <View style={[styles.smcolums, { marginTop: 15 }]}><Text>/</Text></View>
                                <View style={[styles.colums, { width: '27%' }]}>
                                    <SearchBoxMonth dataMonth={optionMonth} dataSeletedMonth={useMonth} />
                                </View>
                                <View style={[styles.colums]}>
                                    <TouchableOpacity 
                                        onPress={ () => searchByYearMonth() }
                                        style={[styles.btnStyle, {
                                            backgroundColor: "#f2fffd",
                                            padding: 12
                                            }
                                        ]}
                                    >
                                        <Text>{ langStore.search }</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.myRow, {marginBottom: 15}]}>
                                <Text style={[styles.statusRow, {marginLeft: 5}]}><Text style={{color: '#666'}}>{langStore.status}:</Text> &nbsp;&nbsp;&nbsp;Not Applied</Text>
                            </View>
                            <TouchableRipple onPress={ ()=> { navigation.navigate("ClientDrawer", {
                                sYear: useYear,
                                sMonth: useMonth,
                                sLang: langEnJp
                            }) } }>
                                <View style={[styles.myRow, styles.customerStyle]}>
                                    <Text style={styles.custtxtleft}>{langStore.customer_details}</Text>
                                    <MaterialIcons
                                        name="navigate-next"
                                        color="#707070"
                                        size={30}
                                    />
                                </View>
                            </TouchableRipple>
                            <View style={[styles.myRow, {marginBottom: 5, marginTop: 15}]}>
                                <View style={styles.midColum}>
                                    <Text style={[{marginLeft: 10, color: '#666', fontWeight: 'bold'}]}>{langStore.transportation_expenses}</Text>
                                </View>
                                <View style={[styles.smcolums, {paddingTop: 5}]}>
                                    <Text>Yes</Text>
                                </View>
                            </View>
                            <View style={[styles.myRow, {marginBottom: 15, borderBottomColor: '#666', borderBottomWidth: 1, borderStyle: 'dashed', paddingBottom: 15}]}>
                                <View style={styles.midColum}>
                                    <Text style={[{marginLeft: 10, color: '#666', fontWeight: 'bold'}]}>
                                        {langStore.expenses}
                                    </Text>
                                </View>
                                <View style={[styles.smcolums, {paddingTop: 5}]}>
                                    <Text>No</Text>
                                </View>
                            </View>
                            <ScrollView horizontal={true} style={{ marginBottom: 15 }}>
                                <TouchableOpacity style={ isWorkReportTg ? styles.tabsActive : styles.tabs } onPress={ () => switchScreen(1) }>
                                    <Text style={{color: isWorkReportTg ? '#2ec1a3' : '#333'}}>{langStore.work_report}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={ isTranSportTg ? styles.tabsActive : styles.tabs } onPress={ () => switchScreen(2) }>
                                    <Text style={{color: isTranSportTg ? '#2ec1a3' : '#333'}}>{langStore.transportation_expense}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={ isCustomerTg ? styles.tabsActive : styles.tabs } onPress={ () => switchScreen(3) }>
                                    <Text style={{color: isCustomerTg ? '#2ec1a3' : '#333'}}>{langStore.customer_details}</Text>
                                </TouchableOpacity>
                                { adminFlg == 1 ? (
                                    <TouchableOpacity style={ isExpenseTg ? styles.tabsActive : styles.tabs } onPress={ () => switchScreen(4) }>
                                        <Text style={{color: isExpenseTg ? '#2ec1a3' : '#333'}}>{langStore.settlement_expense}</Text>
                                    </TouchableOpacity>
                                ): console.log("settle expense off")
                                }
                                {/* <TouchableOpacity style={ isExpenseTg ? styles.tabsActive : styles.tabs } onPress={ () => switchScreen(4) }>
                                    <Text style={{color: isExpenseTg ? '#2ec1a3' : '#333'}}>Settlement Expense</Text>
                                </TouchableOpacity> */}
                            </ScrollView>

                            <View style={[styles.filterBlk, { display: isWorkReportTg ? 'flex' : 'none' }]}>
                                <View style={{ padding: 15, borderBottomColor: '#ddd', borderBottomWidth: 1, marginBottom: 15 }}>
                                    <View style={styles.myRow}>
                                        <View style={{ width: '90%'}}>
                                            <Text style={{color: colors.text, fontWeight: 'bold', marginBottom: 15}}>{ langStore.filter }</Text>
                                        </View>
                                        <View>
                                        {/* <MaterialIcons
                                            name="expand-more"
                                            color="#707070"
                                            size={23}
                                        /> */}
                                        <MaterialIcons
                                            name="expand-less"
                                            color="#707070"
                                            size={25}
                                        />
                                        </View>
                                    </View>
                                    <View style={[styles.myRow, { paddingBottom: 5 }]}>
                                        <View style={{ width: '50%' }}>
                                            <CheckBox 
                                                size={20}
                                                containerStyle={{ borderWidth: 0, backgroundColor: '#fff', padding: 2 }}
                                                title={ langStore.wkhour_not_entered }
                                                uncheckedColor="#ddd"
                                                checkedColor="#666"
                                                textStyle={{ color: '#666', fontWeight: '500' }}
                                                checked={isCheckBoxEnter}
                                                onPress={ () => { checkBoxOnOffEntered() } }
                                            /> 
                                        </View>
                                    
                                        <View style={{ width: '50%' }}>
                                            <CheckBox 
                                                size={20}
                                                containerStyle={{ borderWidth: 0, backgroundColor: '#fff', padding: 2 }}
                                                title={ langStore.wkhour_entered }
                                                uncheckedColor="#ddd"
                                                checkedColor="#666"
                                                textStyle={{ color: '#666', fontWeight: '500' }}
                                                checked={isCheckBoxNoEnter}
                                                onPress={ () => { checkBoxOnOffNotEnter() } }
                                            />
                                        </View>
                                        <View>
                                            <CheckBox 
                                                size={20}
                                                containerStyle={{ borderWidth: 0, backgroundColor: '#fff', padding: 2 }}
                                                title={ langStore.all }
                                                uncheckedColor="#ddd"
                                                checkedColor="#666"
                                                textStyle={{ color: '#666', fontWeight: '500' }}
                                                checked={isCheckBoxAll}
                                                onPress={ () => { checkBoxOnOffAll() } }
                                            />
                                        </View>
                                    </View> 
                                </View>
                                {/* end filter */}
                                <View style={[styles.myRow, { paddingLeft: 15, paddingBottom: 15 }]}>
                                    <TouchableRipple onPress={ () => handleClick(true) } >
                                        <View style={styles.signIn}>
                                            <MaterialIcons
                                                name="import-export"
                                                color="#707070"
                                                size={25}
                                                style={{ transform: [{rotate: '45deg'}] }}
                                            />
                                            <Text style={{ color: colors.text }}>{ langStore.expand_dates }</Text>
                                        </View>
                                    </TouchableRipple>
                                    <TouchableRipple onPress={ () => handleClick(false) }>
                                        <View style={styles.signIn}>
                                            <MaterialIcons
                                                name="compare-arrows"
                                                color="#707070"
                                                size={25}
                                                style={{ transform: [{rotate: '135deg'}] }}
                                            />
                                            <Text style={{ color: colors.text }}>{ langStore.collapse_dates }</Text>
                                        </View>
                                    </TouchableRipple>
                                </View>
                            </View>
                            <View style={[styles.myRow, {marginBottom: 15, paddingBottom: 15, display: isWorkReportTg ? 'flex' : 'none' }]}>
                                <View style={styles.midColum}>
                                    <Text style={[{marginLeft: 10, color: '#666', fontWeight: 'bold'}]}>
                                        <Text style={{ color: '#ccc'}}>{ langStore.jump_to }:</Text> { langStore.total } &nbsp;&nbsp;&nbsp; { langStore.result }
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                }

                data={listDataSource}
                renderItem={ DateItem }
                keyExtractor={(item, index) => index.toString()}
                legacyImplementation={true}
                windowSize={150}
                removeClippedSubviews={true}
                initialNumToRender={20}
                updateCellsBatchingPeriod={20}
                maxToRenderPerBatch={250}
            />
            
     
            { searchLoad ? (
                <View style={ styles.loadRow }>
                    <Text style={{ color: '#fff'}}>Loading ...</Text>
                </View>
            ): 
                <View style={{display: 'none'}}></View>
            }
                
            
            <View style={ styles.footer }>
                <View style={ styles.myRow }>
                    <View style={[styles.button, { marginRight: 5}]}>
                        <TouchableRipple onPress={ () => saveWorkReport(1) }>
                            <View style={[styles.saveData, { backgroundColor: '#6fd3bf' }]}>
                                <Text style={styles.textSave}>{langStore.store_change}</Text>
                            </View>
                        </TouchableRipple>
                    </View>
                    <View style={[styles.button, {marginRight: 3}]}>
                        <TouchableRipple onPress={ () => saveWorkReport(2) }>
                            <View style={[styles.saveData, {backgroundColor: '#2d9f88'}]}>
                                <Text style={styles.textSave}>{langStore.apply_change}</Text>
                            </View>
                        </TouchableRipple>
                    </View>
                    {/* <View style={[styles.button]}>
                        <TouchableRipple>
                            <View style={[styles.saveData, {backgroundColor: '#2d9f88'}]}>
                                <Text style={styles.textSave}>Apply Expense</Text>
                            </View>
                        </TouchableRipple>
                    </View> */}
                </View>
                
            </View>
        </View>
    );
}

export default WorkreportScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        margin: 15,
    },
    content: {
        flex: 4,
        margin: 15
    },
    loadRow: {
        backgroundColor: '#000', 
        position: 'absolute', 
        bottom: 65, 
        left: 10, 
        right: 10, 
        flex: 1, 
        paddingVertical: 10, 
        paddingHorizontal: 15,
        opacity: 0.8,
        borderRadius: 10
    },
    footer: {
        backgroundColor: '#37c3a7', 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        flex: 1, 
        paddingVertical: 10, 
        paddingHorizontal: 15
    },
    transportFooter: {
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingBottom: 25, 
        paddingTop: 10,
        borderBottomColor: '#cdcdcd', 
        borderBottomWidth: 1,
        borderStyle: 'dotted'
    },
    myRow: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    colums: {
        width: '30%',
        paddingBottom: 8
    },
    signIn: {
        width: 155,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 7,
        borderRadius: 15
    },
    removeBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 7,
        borderRadius: 10
    },
    saveData: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 8,
        borderRadius: 15,
        borderColor: '#72d5c1', 
        borderWidth: 1,
    },
    textSign: {
        color: '#25ab8f',
        fontSize: 14,
        fontWeight: 'bold',
    },
    textSave: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    smcolums: {
        width: '10%',
        paddingTop: 13,
        alignItems: 'center'
    },
    midColum: {
        width: '87%',
        paddingTop: 5,
        paddingBottom: 5
    },
    usernameBig: {
        fontSize: 30,
        color: '#1dbc9c',
        fontWeight: 'bold'
    },
    menubox: {
        borderRadius: 20,
        paddingRight: 20,
        marginTop: 20
    },
    linkrow: {
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
        width: '80%'
    },
    custtxtleft: {
        fontSize: 18, 
        color: '#666',
        width: '88%'
    },
    monthyear: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#666'
    },
    btnStyle: {
        marginTop: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#29bfa1',
        padding: 5,
        borderRadius: 10
    },
    statusRow: {
        fontWeight: '700', 
        color: '#feaa49', 
        fontSize: 16
    },
    customerStyle: {
        backgroundColor: '#f2fffd',
        borderColor: '#67d2bc',
        borderWidth: 2,
        padding: 11,
        borderRadius: 15,
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
    },
    tabsActive: {
        padding: 10, borderColor: '#67d2bc', borderWidth: 2, borderRadius: 15, marginRight: 15
    },
    tabs: {
        padding: 10, borderColor: '#7a7a7a', borderWidth: 2, borderRadius: 15, marginRight: 15
    },
    filterBlk: {
        marginTop: 25, marginBottom: 15, borderRadius: 15, borderWidth: 1, borderColor: '#ddd'
    },
    workingHour: {
        borderWidth: 1, borderRadius: 15, marginBottom: 20, marginHorizontal: 20
    },
    workingHourHead: {
        width: '100%', 
        padding: 15, 
        borderTopLeftRadius: 15, 
        borderTopRightRadius: 15
    },
    dateBlk: {
        fontSize: 20, fontWeight: 'bold', color: '#707070', marginBottom: 6
    },
    columPd: {
        width: '50%',
        padding: 5,
    },
    workingHourContent: {
        padding: 15
    },
    textInputStyle: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        marginLeft: 2, 
        marginRight: 2,
        borderRadius: 10
    },
    totalResult: {
        borderRadius: 15,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 20
    },
    dropDownStyle: {
        borderWidth: 1, borderColor: '#ccc', height: 53, marginLeft: 5, marginRight: 5, borderRadius: 10
    },
    editDisabled: {color: '#000', backgroundColor: '#ffffe0'}

});





