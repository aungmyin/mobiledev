import React, {useCallback, useState, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Input,
    ActivityIndicator,
    Alert,
    Linking,
    ScrollView,
    Keyboard
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

import PworkhourDropdowns from '../components/PworkhourDropdown';

import base64 from 'react-native-base64';

import moment from 'moment';
import momentz from 'moment-timezone';

import { uriBase } from '../ApiStore/ApiClient';
import { downloadFile } from '../ApiStore/DownloadLink';
import debounce from 'lodash.debounce';


const WorkreportScreen = ( { route, navigation, props} ) => {

    const { colors, bluecolor } = useTheme();
    //search by year and month
    const options = [{ value: 2010, label: '2010' }, { value: 2011, label: '2011' }, { value: 2012, label: '2012' }, { value: 2013, label: '2013' }, { value: 2014, label: '2014' }, { value: 2015, label: '2015' }, { value: 2016, label: '2016' }, { value: 2017, label: '2017' }, { value: 2018, label: '2018' }, { value: 2019, label: '2019' }, { value: 2020, label: '2020' }, { value: 2021, label: '2021' }, { value: 2022, label: '2022' }, { value: 2023, label: '2023' }, { value: 2024, label: '2024' }, { value: 2025, label: '2025' }, { value: 2026, label: '2026' }, { value: 2027, label: '2027' }, { value: 2028, label: '2028' }, { value: 2029, label: '2029' }, { value: 2030, label: '2030' }];
    const optionMonth = [{ value: 1, label: '01' }, { value: 2, label: '02' }, { value: 3, label: '03' }, { value: 4, label: '04' }, { value: 5, label: '05' }, { value: 6, label: '06' }, { value: 7, label: '07' }, { value: 8, label: '08' }, { value: 9, label: '09' }, { value: 10, label: '10' }, { value: 11, label: '11' }, { value: 12, label: '12' }];


    //Transporation Type
    const [selectedTranValue, setSelectedTranValue] = useState(1);
    const [selectedTripValue, setSelectedTripValue] = useState(0);
    const [selectedVoucherFlg, setSelectedVoucherFlg] = useState(0);
    const [selectedDemanType, setSelectedDemanType] = useState(0);
    const [curLang, setCurLang] = useState(null);

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
    const [pdfture, setpdfture] = React.useState(null);//current year

    const [isToggle, setIsToggle] = useState(false);
    const [isWorkTimeEnter, setIsWorkTimeEnter] = useState(true);
    const [isWorkTimeNotEnter, setIsWorkTimeNotEnter] = useState(true);
    const [isWorkTimeHoliday, setIsWorkTimeHoliday] = useState(true);

    const [isCheckBoxEnter, setIsCheckBoxEnter] = useState(false);//checkbox list handle Entered
    const [isCheckBoxNoEnter, setIsCheckBoxNoEnter] = useState(false);//checkbox list handle Not Entered
    const [isCheckBoxAll, setIsCheckBoxAll] = useState(true);//checkbox list handle Not Entered

    const [isWorkReportTg, setIsWorkReportTg] = useState(false); //screen switch wk
    const [isTranSportTg, setIsTranSportTg] = useState(false); //screen switch transport expense
    const [isCustomerTg, setIsCustomerTg] = useState(false); //screen switch Customer
    const [isCustomerTg2, setIsCustomerTg2] = useState(false); //screen switch Customer
    const [isCustomerTg3, setIsCustomerTg3] = useState(false); //screen switch Customer
    const [isCustomerTg4, setIsCustomerTg4] = useState(false); //screen switch Customer
    const [isCustomerTg5, setIsCustomerTg5] = useState(false); //screen switch Customer
    const [isExpenseTg, setIsExpenseTg] = useState(false); //screen switch Settlement Expense

    const [listDataSource, setlistDataSource] = useState([]);
    const [listTransport, setlistTransport] = useState([]);
    const [listSettleExpense, setlistSettleExpense] = useState([]);
    const [customerBill, setCustomerBill] = useState([]);
    const [totalTranBill, setTotalTranBill] = useState(0);
    const [customTotalTranBill, setCustomTotalTranBill] = useState([]);
    const [listCustomer, setlistCustomer] = useState([]);
    const [customerIndex, setCustomerIndex] = useState(0);
    const [listProjectInfo, setlistProjectInfo] = useState([]);
    const [tWorkReport, settWorkReport] = useState([]);
    const [allData, setAllData] = useState([]);
    const [customerDpList, setCustomerDplist] = useState([]);
    const [memberInfo, setMemberInfo] = useState({
        status: '',
        note: ''
    });
    const [memberNote, setMemberNote] = useState('');
    const [companyProfile, setCompanyProfile] = useState([]);

    const [patternUpdate, setPatternUpdate] = useState([]);

    const [date, setDate] = useState(new Date());
    const [keyCheck, setKeyCheck] = useState(null);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [searchLoad, setSearchLoad] = useState(false);
    const [langEnJp, setLangEnJp] = React.useState('');
    const [langStore, setLangStore] = React.useState([]);
    const [notEnter, setNotEnter] = useState(null);
    const [tranData, setTranData] = useState({
        tranKey: '',
        check_textInputChange: false,
    });
    const [choiceEraly, setChoiceEraly] = useState(null);
    const [tranOnoff, setTranOnoff] = useState(null);
    
    const [errorArray, setErrorArray] = React.useState([]);
    
    const [adminFlg, setAdminFlg] = useState(0); //admin flg to display settlement or not
    const [totalSettleBill, setTotalSettleBill] = useState(0);

    const [pWorkValue, setPworkValue] = useState('');
    const [selectKey, setSelectKey] = useState('');

    const [selectedRouteValue, setSelectedRouteValue] = useState('');
    const [workReportHistory, setWorkReportHistory] = useState([]);

    const [selectedScreen, setSelectedScreen] = useState(1);

    let customer_index = 0;

    const [customReason, setCustomReason] = useState('');

    const [nightBreakTime, setNightBreakTime] = useState('');

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

    const [bkTimeNbtTime, setBkTimeNbtTime] = useState(null);

    const [checkDealyErr, setCheckDealyErr] = useState(null);
    const [checkEarlyErr, setCheckEarlyErr] = useState(null);

    const checktoRefresh = async() => {
        let getValR = await AsyncStorage.getItem("updatePDF");
        return getValR;
    }

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

        setTranOnoff(null)
       
        sYear = new Date().getFullYear(); //To get the Current Year;
        sMonth = new Date().getMonth() + 1; //To get the Current Month; 
        
        setUseYear(sYear);
        setUseMonth(sMonth); //dfdfd

        setSearchLoad(true); //search loading display

        setCheckEarlyErr(null);
        setCheckDealyErr(null);

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
                    //console.log(JSON.stringify(allData), "workreport data")
                    setMemberInfo(json.member_info); //member info
                    if(json.expense_report.length > 0) {
                        setAdminFlg(1); //admin flg to display settlement expence or not
                    }
                    setlistDataSource(json.work_report_detail); //Workreport data list
                    setTotalTranBill(json.transport_expense.total_amount); //transporation total amount
                    setlistTransport(json.transport_expense.transport_expense_detail); //Transporation data list
                    
                    if(json.expense_report.length > 0) {
                        setlistSettleExpense(json.expense_report.expense_report_detail); //settlement expense data
                    }
                    
                    setlistCustomer(json.customer_work_report);
                    console.log({ customerWorkReport : json.customer_work_report});
                    setlistProjectInfo(json.project_info);
                    settWorkReport(json.work_report);

                    setPatternCount(json.project_info.length);

                    setMemberNote('');

                    setPworkValue('');
                    
                    //workreport is set as default view
                    setIsWorkReportTg(true);
                    setIsTranSportTg(false);
                    setIsCustomerTg(false);
                    setIsCustomerTg2(false);
                    setIsExpenseTg(false);
                    firstLoadCustomTranTotal(); //update customer total of Transporation
                    setSearchLoad(false); //search load disable
                    setNightBreakTime(0);

                    setTranOnoff(null);

                  //  setErrorArray([]);
                    }
                )
                .catch((error) => console.error(error))
                .finally(() => {
                    setLoading(false);
                });
                
                
               workPatternUpdate();
            }
        } catch (error) {
            // Error retrieving data
            console.error(error);
        };

        await AsyncStorage.removeItem("updatePDF");
        setpdfture(null);
        
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

        // let data = {
        //     "result": [{
        //       "FirstName": "Test1",
        //       "LastName": "User"
        //     }, {
        //       "FirstName": "user",
        //       "LastName": "user"
        //     }]
        //   }

        // let addData = {
        //     "FirstName": "user2",
        //       "LastName": "user2"
        // }
          
          //console.log(data.result, selectedTranValue);
          //console.log("------------ slicing -------------");
          //var deletedItem = data.result.splice(0,1); // to delete item
          //var addedItem = data.result.splice(2,0, addData); // to delete item
          //console.log(data.result); // here no problem with undefined.
       
       // console.log(useYear, useMonth, data.result, "Search Click");

        setSearchLoad(true); //search loading display

        setCheckEarlyErr(null);
        setCheckDealyErr(null);

        setTranOnoff(null);

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
                    //console.log(JSON.stringify(allData), "workreport data")
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

                    console.log(JSON.stringify(listProjectInfo), JSON.stringify(listCustomer), memberID, "work report list");

                    setMemberNote('');

                    setPworkValue('');
                    
                    //workreport is set as default view
                    setIsWorkReportTg(true);
                    setIsTranSportTg(false);
                    setIsCustomerTg(false);
                    setIsCustomerTg2(false);
                    setIsExpenseTg(false);
                    setSearchLoad(false); //search load disable
                    firstLoadCustomTranTotal(); //update customer total of Transporation
                    setNightBreakTime(0);
                    
                    setTranOnoff(null);

                 // console.log( JSON.stringify(memberInfo), "transport list");
                })
                .catch((error) => console.error(error))
                .finally(() => {
                    setLoading(false);
                    
                });
                workPatternUpdate();
                //setSelectedValue(1); //dropdown to switch pdf upload or attendance list in customer tag
               // setErrorArray([]); //reset error array
            }

        } catch (error) {
            // Error retrieving data
            console.error(error);
        };

        

        await AsyncStorage.removeItem("updatePDF");
        setpdfture(null);
    }

    //Attendanece Type en
    const attendType = [
        { value: 0, label: '' }, 
        { value: 1, label: langStore.public_holiday }, 
        { value: 2, label: langStore.shift_holiday }, 
        { value: 3, label: langStore.paid_holiday }, 
        { value: 4, label: langStore.half_holiday }, 
        { value: 5, label: langStore.absence }, 
        { value: 6, label: langStore.delay }, 
        { value: 7, label: langStore.early }, 
        { value: 8, label: langStore.special_holiday }, 
        { value: 9, label: langStore.holiday_work }, 
        { value: 10, label: langStore.substitute_holiday }, 
        { value: 11, label: langStore.others }
    ];

    const tranList = [ {value: 2, label: langStore.train}, {value: 1, label: langStore.bus}, {value: 3, label: langStore.taxi}, {value: 4, label: langStore.airplane}, {value: 5, label: langStore.other}];
    const routeType = [{value: 0, label: langStore.one_way}, {value: 1, label: langStore.round_trip}];
    const tranPrintFlg = [ {value: 0, label: langStore.no}, {value: 1, label: langStore.yes}];
    const tranDemanType = [{value: 0, label: langStore.in_house}, {value: 1, label: langStore.customer}];

    

    const workreport_history = async() => {
        const tokenSave = await AsyncStorage.getItem('userToken');
        let indivd_contract_id = 0;
        if(listProjectInfo.length > 0) {
            indivd_contract_id = listProjectInfo[0].individual_contract_id;
        }

        //console.log(listProjectInfo, "check for workreport  history")
        
        try {
            fetch(uriBase + '/workreport/workreport_history_log?individual_contract_id='+ indivd_contract_id, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'access-token': tokenSave
                }
            })
            .then((response) => response.json())
            .then((langResponse) => {
                setWorkReportHistory(langResponse);
                console.log({indivd_contract_id});
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

    const createConfirmAlert = (ID) => { //remind to use to delete or not
        setRemoveID(ID);
        console.log("check id " + ID);
        Alert.alert(
            langStore.delete_transporation + ":",
            langStore.are_you_sure_to_delete + "?",
            [
              {
                text: langStore.cancel,
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: langStore.ok, onPress: () => { 
                console.log("OK Pressed " + ID);
                removeTransporation(ID); //to remove item
                setRemoveID(null);
                } 
              }
            ]
        );
    }

    // duplication transportation single row.
    const duplicateTransportation = (ID) => {
        const toDate = new Date();
        const myTran = [... listTransport];
        //console.log(moment(toDate).format('yyyy-mm-DD HH:mm'), " Addd transport");

        let newTranItem = {"amount": myTran[ID].amount, "daily_transportation_detail_id": "", "demand_type": myTran[ID].demand_type, "destination": myTran[ID].destination, "from_area": myTran[ID].from_area, "print_flg": myTran[ID].print_flg, "rourte_type": myTran[ID].rourte_type, "to_area": myTran[ID].to_area, "transport_type": myTran[ID].transport_type, "use_date": moment(myTran[ID].use_date).format('YYYY-MM-DD HH:mm:ss').toString()};
        
        // confirm("Are you sure to delete!"); //remind to user 
        try {
            

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

    const createConfirmAlertSettle = (ID) => { //remind to use to delete or not
        setRemoveID(ID);
        console.log("check id " + removeID);
        Alert.alert(
            langStore.delete_settlement + ":",
            langStore.are_you_sure_to_delete + "?",
            [
              {
                text: langStore.cancel,
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: langStore.ok, onPress: () => { 
                console.log("OK Pressed " + removeID);
                removeSettlement(removeID); //to remove item
                setRemoveID(null);
                } 
              }
            ]
        );
    }

    const yesNoList = [
        { value: 0, label: 'No' }, 
        { value: 1, label: 'Yes' }
    ];

    const yesNoListJP = [
        { value: 0, label: '無し' }, 
        { value: 1, label: '有り' }
    ];

    const PworkhourDropdown = (props) => { // create pattern dropdown list
        let pWorkHour = [];
        let ptStartDate = '';
        let ptEndDate = '';
        let ReportDate = '';
        
        if( props.dataFromParent.length > 0 ) {
           // pWorkHour = props.dataFromParent[0]['working_hour'];

            for (let index = 0; index < props.dataFromParent.length; index++) {
                //const element = array[index];
                ptStartDate = new Date(props.dataFromParent[index].start_contract_date);
                ptEndDate = new Date(props.dataFromParent[index].end_contract_date);
                ReportDate = new Date(props.dataReportDate);

                if ( ptStartDate.getTime() <= ReportDate.getTime() && ptEndDate.getTime() >= ReportDate.getTime() ) {
                    pWorkHour = props.dataFromParent[index]['working_hour'];
                    //console.log(pWorkHour, ptEndDate, ptStartDate, " work hour p if");
                    break;
                    
                } 
            }
        

        }

        setPworkValue(props.dataSeleted);
        
        //console.log(pWorkHour, " work hour p");

        if (pWorkHour.length > 0) {
            return(
                <View style={ [styles.dropDownStyle] }>
                    <Picker
                        selectedValue={props.dataSeleted}
                        enabled={memberInfo.status == 1 || memberInfo.status == 3 ? true : false }
                        onValueChange={(itemValue, itemIndex) => selectedPatternFill(itemValue, props.dataSelectKey, pWorkHour, itemIndex)}
    
                    >
                         <Picker.Item style={{ padding: 5 }} label={  '---' } value={ 99 } key={99}  />
                        {
                            pWorkHour.map((item, key) => {
                                if(item.pattern_flg == 1) {
                                    return(
                                        <Picker.Item style={{ padding: 5 }} label={  item.pattern + ' ' + langStore.working_hour_pattern } value={ item.pattern } key={key}  />
                                    )
                                }
                                
                            })
                        }
                    </Picker>
                </View>
            )
        } else {
            return(
                <TouchableOpacity 
                    onPress = { () => { addStandardTime(props.dataSelectKey) } }
                    disabled={memberInfo.status == 1 || memberInfo.status == 3 ? false : true }
                    style={{ borderColor: '#fff', borderWidth: 1, borderRadius: 11 }}
                >
                    <Text style={{ width: '100%', backgroundColor: '#2d9f88', padding: 5, borderRadius: 10, textAlign: 'center', color: '#fff'}}>{ langStore.standard_hours }</Text>
                </TouchableOpacity>
            )
        }
  
    }

    //customer attendance dropdown
    const CustomAttendanceTypeDropdown = (props) => {

       // const [customAtTypeValue, setCustomAtTypeValue] = useState(props.dataSeleted);
        
        return(
            <View style={ [styles.dropDownStyle, {marginTop: 10, marginBottom: 10}] }>
                <Picker
                    selectedValue={props.dataSeleted}
                    enabled={memberInfo.status == 1 || memberInfo.status == 3 ? true : false}
                    onValueChange={(itemValue, itemIndex) => selectedAttendDropDown(props.dataMkey,itemValue, props.dataSelectKey, itemIndex)}
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

    //fill calculated value to workreport by selected date.
    const selectedAttendDropDown = (mKey, itemVal, index, itemIndex) => {
        const myArray = [... listCustomer];
      
        myArray[mKey].customer_workreport_items[index]['customer_attendance_type'] = itemVal;

        let customer_reason = myArray[mKey].customer_workreport_items[index]['customer_reason'];

        if( parseInt(itemVal) == 1 || parseInt(itemVal) == 2 || parseInt(itemVal) == 3 || parseInt(itemVal) == 5 || parseInt(itemVal) == 8 || parseInt(itemVal) == 10 ) {
            myArray[mKey].customer_workreport_items[index].customer_start_time = '00:00';
            myArray[mKey].customer_workreport_items[index].customer_end_time = '00:00';
            myArray[mKey].customer_workreport_items[index].customer_break_time = 0;
            myArray[mKey].customer_workreport_items[index].customer_night_break_time = 0;
            myArray[mKey].customer_workreport_items[index].customer_total_work_time = '00:00';
        }

        if( parseInt(itemVal) > 2 && customer_reason.length == 0 ) {
            myArray[mKey].customer_workreport_items[index].customer_reason_error = true;
        } else {
            myArray[mKey].customer_workreport_items[index].customer_reason_error = false;
        }

        console.warn(index, itemVal, itemIndex, mKey, myArray[mKey].customer_workreport_items[index], "select custom dropdown");


        // update to state
        setlistCustomer(myArray);  

    }

    //fill calculated value to workreport by selected date.
    const selectedPatternFill = (itemVal, index, ptlist, itemIndex) => {
        const myArray = [... listDataSource];
        
        setPworkValue(itemVal);

        let pIndex = itemIndex - 1;

        console.warn(selectKey, itemVal, ptlist[pIndex], pWorkValue, "select pattern cur id");

       console.log(pIndex, "Get pattern by id");

        if((pIndex >= 0) && (index >=0)) { //check selected empty vlaue 
            myArray[index]['start_time'] = ptlist[pIndex].start_time;
            myArray[index]['end_time'] = ptlist[pIndex].end_time;
            myArray[index]['total_work_time'] = ptlist[pIndex].working_time;
            myArray[index]['total_break_time'] = ptlist[pIndex].break_time;
            myArray[index].night_break_time = 0;
            myArray[index].deduction_time = '00:00';
            myArray[index]['pattern'] = itemVal;
            // update to state
            //setlistDataSource(myArray);
            console.warn(itemVal, "select pattern cur id");
            //night work time calculate til to 12:00 PM
            let nightWKHour = 0;
            let keyName = 'end_time';
        
            let ActWkTime2 = parseInt(ActWkTime2) - (parseInt(myArray[index].total_break_time) + parseInt(myArray[index].night_break_time));

            if (hourToMins(myArray[index]['start_time']) > hourToMins(myArray[index]['end_time'])) { //startTime > endTime

                if( hourToMins(myArray[index]['end_time']) > 1320 && hourToMins(myArray[index]['end_time']) < 1440 ) { // last night working hour
                    nightWKHour = hourToMins(myArray[index]['end_time']) - 1320;
                    
                    if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                        nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                    }

                    myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                    // console.log(nightBT, "night breaktime")
                } else if(hourToMins(myArray[index]['end_time']) == 0){
                    nightWKHour = 120; // 10:00PM to 12:00PM
                    
                    if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                        nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                    }

                    myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                    //console.log(nightBT, "night breaktime")
                } else if((hourToMins(myArray[index]['end_time']) > 0) && (hourToMins(myArray[index]['end_time']) <= 300)  ){
                    
                    nightWKHour = 120 + hourToMins(myArray[index]['end_time']);

                    if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                        nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                    }
                    
                    myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                    
                    console.log(nightWKHour, myArray[index]['night_work_time'], ActWkTime2, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime <= 300")



                } else if(hourToMins(myArray[index]['end_time']) > 300 && (hourToMins(myArray[index]['start_time']) > hourToMins(myArray[index]['end_time'])) ){
                    
                    nightWKHour = 120 + 300;

                    if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                        nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                    }
                    myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                    console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 300")

                } else {
                    //night break time calculate
                    let nightTotalWk = 0;
                    if(keyName == 'night_break_time'){
                        nightTotalWk = nightWKHour - parseInt(keyVal);
                        myArray[index]['night_work_time'] = convertMinsToTime(nightTotalWk);
                    }
                    myArray[index]['night_work_time'] = '00:00';
                }
            } else {
                //endTime > startTime
                //console.warn(hourToMins(myArray[index]['start_time']), "StartTime")

                if(hourToMins(myArray[index]['start_time']) == 0){
                    if (hourToMins(myArray[index]['end_time']) >= 300) {
                        //endTime >= 300
                        nightWKHour = 300 - hourToMins(myArray[index]['start_time']);
                    } else {
                        //endTime < 300
                        nightWKHour = hourToMins(myArray[index]['end_time']) - hourToMins(myArray[index]['start_time']);
                    }

                    //nightwkhour > Act wk hour
                    if (ActWkTime2 < nightWKHour) {
                        nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                    }
                    
                    if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                        nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                    }

                    myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                    //console.log(nightBT, "night breaktime")
                } else if((hourToMins(myArray[index]['start_time']) > 0) && (hourToMins(myArray[index]['start_time']) <= 300)  ){
                    
                    if (hourToMins(myArray[index]['end_time']) >= 300) {
                        //endTime >= 300
                        nightWKHour = 300 - hourToMins(myArray[index]['start_time']);
                    } else {
                        //endTime < 300
                        nightWKHour = hourToMins(myArray[index]['end_time']) - hourToMins(myArray[index]['start_time']);
                    }

                    //nightwkhour > Act wk hour
                    // if (ActWkTime2 < nightWKHour) {
                    //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                    // }
                    
                    if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                        nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                    }
                    console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime <= 300")

                    myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                } else if((hourToMins(myArray[index]['end_time']) > 1320) && (hourToMins(myArray[index]['end_time']) < 1440) ){
                    nightWKHour = hourToMins(myArray[index]['end_time']) - 1320;

                    if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                        nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                    }

                    //nightwkhour > Act wk hour
                    // if (ActWkTime2 < nightWKHour) {
                    //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                    // }
                    console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 1320")

                    myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                } else if((hourToMins(myArray[index]['end_time']) == 0) ){
                    nightWKHour = 120;

                    if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                        nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                    }

                    //nightwkhour > Act wk hour
                    // if (ActWkTime2 < nightWKHour) {
                    //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                    // }
                    console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 1320")

                    myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                }  else {
                    //night break time calculate
                    let nightTotalWk = 0;
                    if(keyName == 'night_break_time'){
                        nightTotalWk = nightWKHour - parseInt(keyVal);
                        myArray[index]['night_work_time'] = convertMinsToTime(nightTotalWk);
                    }
                    myArray[index]['night_work_time'] = '00:00';
                }
            }

    
            setlistDataSource(myArray);
        } else {
            myArray[index]['start_time'] = '00:00';
            myArray[index]['end_time'] = '00:00';
            myArray[index]['total_work_time'] = '00:00';
            myArray[index]['total_break_time'] = 0;
            myArray[index]['night_break_time'] = 0;
            myArray[index].night_work_time = '00:00';
            myArray[index].over_work_time = '00:00';
            myArray[index].deduction_time = '00:00';
            myArray[index]['pattern'] = '0';

            // update to state
            setlistDataSource(myArray);
        }

    }


    const loadWkDownloadInBrowser = async( targetUrl, Redir) => { //Download workreport as a file from browser
        let memberID = await AsyncStorage.getItem("member_id");
        let tokenSave = await AsyncStorage.getItem("userToken");
        let idname = await AsyncStorage.getItem("userName");
        let language = await AsyncStorage.getItem('lang');
        let short_comp = 'est';

        Linking.openURL(downloadFile + targetUrl + "?member_id=" + base64.encode(memberID.toString()) + "&idname=" + base64.encode(idname.toString()) + "&lang=" + base64.encode(language) + "&auth_token=" + tokenSave + "&year=" + base64.encode(useYear.toString()) + "&month=" + base64.encode(useMonth.toString()) + "&short_comp_name=" + base64.encode(short_comp.toString()) + "&redirect=" + base64.encode(Redir.toString()));
    };

    const loadCustomerWkDownloadInBrowser = async( targetUrl, Redir, mIndex, wkClientID) => { //Download workreport as a file from browser
        let memberID = await AsyncStorage.getItem("member_id");
        let tokenSave = await AsyncStorage.getItem("userToken");
        let workreport_client_id = wkClientID;
        let short_comp = allData.company_name_short;
        console.log(downloadFile + targetUrl + "?member_id=" + base64.encode(memberID.toString()) + "&workreport_client_id=" + base64.encode(workreport_client_id.toString()) + "&short_comp_name=" + base64.encode(short_comp.toString()) + "&authtoken=" + tokenSave );

        Linking.openURL(downloadFile + targetUrl + "?member_id=" + base64.encode(memberID.toString()) + "&workreport_client_id=" + base64.encode(workreport_client_id.toString()) + "&short_comp_name=" + base64.encode(short_comp.toString()) + "&authtoken=" + tokenSave );
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

        let newTranItem = {"amount": 0, "daily_transportation_detail_id": "", "demand_type": 0, "destination": "", "from_area": "", "print_flg": 0, "rourte_type": 0, "to_area": "", "transport_type": 1, "use_date": moment(toDate).format('YYYY-MM-DD HH:mm:ss').toString()};
        
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

            if( !isNaN(parseInt(myTran[index].amount)) ) { //checking int or not
                tTotal = tTotal + parseInt(myTran[index].amount);
                console.log(myTran[index].amount, "total trans Amout")
            } else {
                tTotal = tTotal + 0;
            }
            
        }

        if(tTotal == null) {
            tTotal = 0;
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

        console.log(tTotal, "custom total transport")

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

        //setSelectedValue(props.dataSeleted);

        //switchScreen(3); //select customer workreport tab
        
        return(
            <View style={ [styles.dropDownStyle, {width: '90%', backgroundColor: '#ffffff'}] }>
                <Picker
                    selectedValue={props.dataSeleted}
                    onValueChange={(itemValue, itemIndex) => customerDropDownSelect(itemValue, props.dataCkey)}
                    enabled={memberInfo.status == 1 || memberInfo.status == 3 ? true : false}
                >
                    {
                        props.dataFromParent.map((item, key) => {
                            return(
                                <Picker.Item style={{ padding: 5, color: '#333' }} label={ item.label } value={ item.value } key={key}  />
                            )
                        })
                    }
                </Picker>
            </View>
        )
        
    }

    const customerDropDownSelect = (itemVal, cKey) => {
       // setSelectedValue(itemVal);

        let myArray = [... listDataSource];
        let myCustomArray = [... listCustomer];

        myCustomArray[cKey].client_report_flg = itemVal; //update client report flg (Dropdown)

        for (let index = 0; index < myArray.length; index++) {
            myCustomArray[cKey].customer_workreport_items[index]['customer_attendance_type'] = myArray[index]['atendance_type'];
            myCustomArray[cKey].customer_workreport_items[index]['customer_break_time'] = myArray[index]['total_break_time'];
            myCustomArray[cKey].customer_workreport_items[index]['customer_end_time'] = myArray[index]['end_time'];
            myCustomArray[cKey].customer_workreport_items[index]['customer_night_break_time'] = myArray[index]['night_break_time'];
            myCustomArray[cKey].customer_workreport_items[index]['customer_reason'] = myArray[index]['reason'];
            myCustomArray[cKey].customer_workreport_items[index]['customer_start_time'] = myArray[index]['start_time'];
            myCustomArray[cKey].customer_workreport_items[index]['customer_total_work_time'] = myArray[index]['total_work_time'];
        }
        
        setlistCustomer(myCustomArray);
        //console.log( listCustomer, myCustomArray[cKey].client_report_flg, "Customer detail itmes");
    }

    const SearchBoxYear = (props) => {
        let tYear = props.dataSeleted;
        //setUseYear(tYear);
        return(
            <View style={ [styles.dropDownStyle, {marginTop: 10, marginBottom: 10, color: colors.text, backgroundColor: '#fff'}] }>
                <Picker
                    selectedValue={tYear}
                    onValueChange={(itemValue, itemIndex) => setUseYear(itemValue)}
                >
                    {
                        props.dataYear.map((item, key) => {
                            return(
                                <Picker.Item style={{ padding: 5, color: colors.bluetext }} label={ item.label } value={ item.value } key={key}  />
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
            <View style={ [styles.dropDownStyle, {marginTop: 10, marginBottom: 10, color: colors.text, backgroundColor: '#fff'}] }>
                <Picker
                    selectedValue={useMonth}
                    onValueChange={(itemValue, itemIndex) => setUseMonth(itemValue)}
                >
                    {
                        props.dataMonth.map((item, key) => {
                            return(
                                <Picker.Item style={{ padding: 5, color: colors.bluetext }} label={ item.label } value={ item.value } key={key}  />
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
            myArray[index].night_work_time = '00:00';
            myArray[index].deduction_time = '00:00';
            myArray[index].night_break_time = 0;
            myArray[index].over_work_time = '00:00';
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
            setIsWorkTimeHoliday(false);
        } else {
            setIsCheckBoxEnter(true);
            setIsCheckBoxNoEnter(false);
            setIsCheckBoxAll(false);

            setIsWorkTimeEnter(false);
            setIsWorkTimeNotEnter(true);
            setIsWorkTimeHoliday(false);
        }   
    }

    const checkBoxOnOffNotEnter = () => { //Not Entered
        if(isCheckBoxNoEnter) {
            setIsCheckBoxNoEnter(false);
            setIsCheckBoxAll(true);
            setIsCheckBoxEnter(false);

            setIsWorkTimeEnter(false);
            setIsWorkTimeNotEnter(true);
            setIsWorkTimeHoliday(false);
        } else {
            setIsCheckBoxNoEnter(true);
            setIsCheckBoxAll(false);
            setIsCheckBoxEnter(false);

            setIsWorkTimeEnter(true);
            setIsWorkTimeNotEnter(false);
            setIsWorkTimeHoliday(false);
        }   

    }

    const checkBoxOnOffAll = () => {//All
        console.log(isWorkTimeHoliday, isWorkTimeEnter, isWorkTimeNotEnter, isCheckBoxAll, "All dispaly frist")
        if(isCheckBoxAll) {
            setIsCheckBoxAll(false);
            setIsCheckBoxNoEnter(true);
            setIsCheckBoxEnter(false);

            setIsWorkTimeEnter(true);
            setIsWorkTimeNotEnter(true);
            setIsWorkTimeHoliday(true);
        } else {
            setIsCheckBoxAll(true);
            setIsCheckBoxEnter(false);
            setIsCheckBoxNoEnter(false);

            setIsWorkTimeEnter(true);
            setIsWorkTimeNotEnter(true);
            setIsWorkTimeHoliday(true);
            console.log(isWorkTimeHoliday, isWorkTimeEnter, isWorkTimeNotEnter, isCheckBoxAll, "All dispaly end")
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

    const updateCustomerSingleDate = (sIndex, mIndex, index) => { // Toggle effect of single Attendance box

        const myArray = [... listCustomer];

        myArray[0].customer_workreport_items.map( (value, placeindex) => 
            placeindex === index ? myArray[mIndex].customer_workreport_items[placeindex]['isExpanded'] = !myArray[mIndex].customer_workreport_items[placeindex]['isExpanded']
            : myArray[mIndex].customer_workreport_items[placeindex]['isExpanded'] = false
        );
        console.log(sIndex, "Screen change")
        switchScreen(sIndex); //keep open customer workreport

        // update to state
        setlistCustomer(myArray);
    }

    const switchScreen = (screenType) => {
        
        
        if(screenType == 1) {
            setIsWorkReportTg(true);
            setIsTranSportTg(false);
            setIsCustomerTg(false);
            setIsCustomerTg2(false);
            setIsCustomerTg3(false);
            setIsCustomerTg4(false);
            setIsCustomerTg5(false);
            setIsExpenseTg(false);
            setCustomerIndex(0);
            customer_index = 0;
        } else if(screenType == 2) {
            setIsWorkReportTg(false);
            setIsTranSportTg(true);
            setIsCustomerTg(false);
            setIsCustomerTg2(false);
            setIsCustomerTg3(false);
            setIsCustomerTg4(false);
            setIsCustomerTg5(false);
            setIsExpenseTg(false);
            setCustomerIndex(0);
            firstLoadCustomTranTotal();// update customer's total amount
            console.log(screenType, "where to show")
        } else if(screenType == 3) {
            setIsWorkReportTg(false);
            setIsTranSportTg(false);
            setIsCustomerTg(true);
            setIsCustomerTg2(false);
            setIsCustomerTg3(false);
            setIsCustomerTg4(false);
            setIsCustomerTg5(false);
            setIsExpenseTg(false);
            setCustomerIndex(0);
           // CustomerDetailBox(props);
        } else if(screenType == 4) {
            setIsWorkReportTg(false);
            setIsTranSportTg(false);
            setIsCustomerTg(false);
            setIsCustomerTg2(false);
            setIsCustomerTg3(false);
            setIsCustomerTg4(false);
            setIsCustomerTg5(false);
            setIsExpenseTg(true);
            setCustomerIndex(0);
            customer_index = 0;
        } else if(screenType == 5) {
            setIsWorkReportTg(false);
            setIsTranSportTg(false);
            setIsCustomerTg(false);
            setIsCustomerTg2(true);
            setIsCustomerTg3(false);
            setIsCustomerTg4(false);
            setIsCustomerTg5(false);
            setIsExpenseTg(false);
            setCustomerIndex(1);
            customer_index = 1;
           // CustomerDetailBox(props);
        console.log(screenType, customerIndex, customer_index, " screen type 5");
        } else if(screenType == 6) {
            setIsWorkReportTg(false);
            setIsTranSportTg(false);
            setIsCustomerTg(false);
            setIsCustomerTg2(false);
            setIsCustomerTg3(true);
            setIsCustomerTg4(false);
            setIsCustomerTg5(false);
            setIsExpenseTg(false);
            setCustomerIndex(2);
            customer_index = 2;
           // CustomerDetailBox(props);
        } else if(screenType == 7) {
            setIsWorkReportTg(false);
            setIsTranSportTg(false);
            setIsCustomerTg(false);
            setIsCustomerTg2(false);
            setIsCustomerTg3(false);
            setIsCustomerTg4(true);
            setIsCustomerTg5(false);
            setIsExpenseTg(false);
            setCustomerIndex(3);
            customer_index = 3;
           // CustomerDetailBox(props);
        } else if(screenType == 8) {
            setIsWorkReportTg(false);
            setIsTranSportTg(false);
            setIsCustomerTg(false);
            setIsCustomerTg2(false);
            setIsCustomerTg3(false);
            setIsCustomerTg4(false);
            setIsCustomerTg5(true);
            setIsExpenseTg(false);
            setCustomerIndex(4);
            customer_index = 4;
           console.log(isCustomerTg5, "display 5 customer")
        } else {
            setIsWorkReportTg(true);
            setIsTranSportTg(false);
            setIsCustomerTg(false);
            setIsCustomerTg2(false);
            setIsCustomerTg3(false);
            setIsCustomerTg4(false);
            setIsCustomerTg5(false);
            setIsExpenseTg(false);
            setCustomerIndex(0);
        }

        //CustomerDetailBox;
        console.log(screenType, customerIndex, " screen type");
    }

    const replaceBKhour = (index, keyName, txtVal) => {
        const myArray = [... listDataSource];
        myArray[index][keyName] = txtVal.trim().replace(/[-+ #*;,.<>\{\}\[\]\(\)\\\/]/gi, '');

        setlistDataSource(myArray);
    }

    const replaceChangeVal= async (index, keyName, txtVal) => {
        const myArray = [... listDataSource];
        const customArray = [... listCustomer];
        const myProject = [... listProjectInfo];

        myArray[index][keyName] = txtVal;
       // setlistDataSource(myArray);
        //let totalWHmins = hourToMins(myArray[index]['total_work_time']);
        let totalWHmins = totalWorkTimeCal(myArray[index]['start_time'], myArray[index]['end_time']);
        let totalOvtmins = hourToMins(myArray[index]['over_work_time']);
        let deductionTime = 0;
        let tBreakTime = 0;
        let rTotalWHmin = 0;
        let itemIndex = index;

        tBreakTime = parseInt(txtVal);

        //compare with actual working time and breaktime
        if( tBreakTime >= parseInt(totalWHmins) ) {
            //break time is equal or greater than total time
            setBkTimeNbtTime(index);
            myArray[index]['breakTimeError'] = true;
        } else if (txtVal.length == 0) {
            myArray[index]['breakTimeError'] = true;
        } else {
            setBkTimeNbtTime(null);
            myArray[index]['breakTimeError'] = false;
            

            //company working time
            let comStartTime = await AsyncStorage.getItem("comStartTime");
            let comEndTime = await AsyncStorage.getItem("comEndTime");
            let compWorkingTime = await AsyncStorage.getItem("compWkTime");

            //console.log(comStartTime, comEndTime, compWorkingTime, "COmpany Time")
            
            if( (keyName == 'total_break_time') && (totalWHmins > 0) && (txtVal.toString().length > 0) ) { //total break time, minus from total work time
                rTotalWHmin = totalWHmins - (parseInt(txtVal) + parseInt(myArray[index].night_break_time));

                myArray[index]['total_work_time'] = convertMinsToTime(rTotalWHmin);
              //  myArray[index]['total_break_time'] = txtVal;

                //overtime calculation
                if(keyName == 'total_break_time' && myProject.length == 0 && rTotalWHmin > compWorkingTime  ) {
                    totalOvtmins = rTotalWHmin - compWorkingTime ;
                    
                    if (totalOvtmins > 0) {//over time
                        myArray[index]['over_work_time'] = convertMinsToTime(totalOvtmins);
                    } else {
                        myArray[index]['over_work_time'] = '00:00';
                    }

                    myArray[index].deduction_time = '00:00';

                    //Delay msg display
                    if ( hourToMins(myArray[index]['start_time']) > hourToMins(comStartTime)) {
                        if(parseInt(myArray[index].atendance_type) != 6) { // if not already selected delay
                            myArray[index].delay = true;  
                        }
                        myArray[index].early = false; 
                    } else {
                        myArray[index].early = false;  
                    }

                    //early msg display
                    if ( hourToMins(myArray[index]['end_time']) < hourToMins(comEndTime)) {
                        if(parseInt(myArray[index].atendance_type) != 7) { // if not already selected early
                            myArray[index].early = true;  
                        }
                        myArray[index].delay = false; 
                    } else {
                        myArray[index].delay = false;  
                    }

                    myArray[index].total_work_time = convertMinsToTime(rTotalWHmin);  

                    console.log(compWorkingTime, totalWHmins, " checking if no exist")

                    //night work time calculate til to 12:00 PM
                    let nightWKHour = 0;
                    index = itemIndex;

                    let ActWkTime2 = totalWorkTimeCal(myArray[index]['start_time'], myArray[index]['end_time']);
                    ActWkTime2 = ActWkTime2 - (parseInt(myArray[index].total_break_time) + parseInt(myArray[index].night_break_time));
                    console.log(ActWkTime2, "total wk hour")
                    if (hourToMins(myArray[index]['start_time']) > hourToMins(myArray[index]['end_time'])) { //startTime > endTime

                        if( hourToMins(myArray[index]['end_time']) > 1320 && hourToMins(myArray[index]['end_time']) < 1440 ) { // last night working hour
                            nightWKHour = hourToMins(myArray[index]['end_time']) - 1320;
                            
                            if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                                nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                            }

                            myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                            // console.log(nightBT, "night breaktime")
                        } else if(hourToMins(myArray[index]['end_time']) == 0){
                            nightWKHour = 120; // 10:00PM to 12:00PM
                            
                            if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                                nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                            }

                            myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                            //console.log(nightBT, "night breaktime")
                        } else if((hourToMins(myArray[index]['end_time']) > 0) && (hourToMins(myArray[index]['end_time']) <= 300)  ){
                            
                            nightWKHour = 120 + hourToMins(myArray[index]['end_time']);

                            if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                                nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                            }
                            console.log(nightWKHour, ActWkTime2, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime <= 300")

                            myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                        } else if(hourToMins(myArray[index]['end_time']) > 300 && (hourToMins(myArray[index]['start_time']) > hourToMins(myArray[index]['end_time'])) ){
                            
                            nightWKHour = 120 + 300;

                            if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                                nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                            }
                            myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                            console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 300")

                        } else {
                            //night break time calculate
                            let nightTotalWk = 0;
                            if(keyName == 'night_break_time'){
                                nightTotalWk = nightWKHour - parseInt(txtVal);
                                myArray[index]['night_work_time'] = convertMinsToTime(nightTotalWk);
                            }
                            myArray[index]['night_work_time'] = '00:00';
                        }
                    } else {
                        //endTime > startTime
                        //console.warn(hourToMins(myArray[index]['start_time']), "StartTime")

                        if(hourToMins(myArray[index]['start_time']) == 0){
                            if (hourToMins(myArray[index]['end_time']) >= 300) {
                                //endTime >= 300
                                nightWKHour = 300 - hourToMins(myArray[index]['start_time']);
                            } else {
                                //endTime < 300
                                nightWKHour = hourToMins(myArray[index]['end_time']) - hourToMins(myArray[index]['start_time']);
                            }

                            //nightwkhour > Act wk hour
                            if (ActWkTime2 < nightWKHour) {
                                nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                            }
                            
                            if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                                nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                            }

                            myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                            //console.log(nightBT, "night breaktime")
                        } else if((hourToMins(myArray[index]['start_time']) > 0) && (hourToMins(myArray[index]['start_time']) <= 300)  ){
                            
                            if (hourToMins(myArray[index]['end_time']) >= 300) {
                                //endTime >= 300
                                nightWKHour = 300 - hourToMins(myArray[index]['start_time']);
                            } else {
                                //endTime < 300
                                nightWKHour = hourToMins(myArray[index]['end_time']) - hourToMins(myArray[index]['start_time']);
                            }

                            //nightwkhour > Act wk hour
                            // if (ActWkTime2 < nightWKHour) {
                            //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                            // }
                            
                            if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                                nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                            }
                            console.log(nightWKHour, ActWkTime2, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime <= 300")

                            myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                        } else if((hourToMins(myArray[index]['end_time']) > 1320) && (hourToMins(myArray[index]['end_time']) < 1440) ){
                            nightWKHour = hourToMins(myArray[index]['end_time']) - 1320;

                            if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                                nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                            }

                            //nightwkhour > Act wk hour
                            // if (ActWkTime2 < nightWKHour) {
                            //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                            // }
                            console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 1320")

                            myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                        } else if((hourToMins(myArray[index]['end_time']) == 0) ){
                            nightWKHour = 120;

                            if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                                nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                            }

                            //nightwkhour > Act wk hour
                            // if (ActWkTime2 < nightWKHour) {
                            //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                            // }
                            console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 1320")

                            myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                        }  else {
                            //night break time calculate
                            let nightTotalWk = 0;
                            if(keyName == 'night_break_time'){
                                nightTotalWk = nightWKHour - parseInt(txtVal);
                                myArray[index]['night_work_time'] = convertMinsToTime(nightTotalWk);
                            }
                            myArray[index]['night_work_time'] = '00:00';
                        }
                    }

                } else if(keyName == 'total_break_time' && myProject.length == 0 && rTotalWHmin <= compWorkingTime ){
                    //rTotalWHmin is withou value of BK and NBK
                    deductionTime = compWorkingTime - rTotalWHmin;

                    if (deductionTime > 0) {//deducation time
                        myArray[index].deduction_time = convertMinsToTime(deductionTime);  
                    } else {
                        myArray[index].deduction_time = '00:00';
                    }
                    
                    myArray[index]['over_work_time'] = '00:00';

                    myArray[index].total_work_time = convertMinsToTime(rTotalWHmin);  

                    //Delay msg display
                    if ( hourToMins(myArray[index]['start_time']) > hourToMins(comStartTime)) {
                        
                        if(parseInt(myArray[index].atendance_type) != 6) { // if not already selected delay
                            myArray[index].delay = true;  
                        }
                        myArray[index].early = false; 
                    } else {
                        myArray[index].early = false;  
                    }

                    //early msg display
                    if ( hourToMins(myArray[index]['end_time']) < hourToMins(comEndTime)) {
                        
                        if(parseInt(myArray[index].atendance_type) != 7) { // if not already selected early
                            myArray[index].early = true;  
                        } 
                        myArray[index].delay = false; 
                    } else {
                        myArray[index].delay = false;  
                    }

                    console.log(deductionTime, "deducation cal today")

                    //night work time calculate til to 12:00 PM
                    let nightWKHour = 0;
                    index = itemIndex;

                    let ActWkTime2 = totalWorkTimeCal(myArray[index]['start_time'], myArray[index]['end_time']);
                    ActWkTime2 = ActWkTime2 - (parseInt(myArray[index].total_break_time) + parseInt(myArray[index].night_break_time));
                    console.log(ActWkTime2, "total wk hour")
                    if (hourToMins(myArray[index]['start_time']) > hourToMins(myArray[index]['end_time'])) { //startTime > endTime

                        if( hourToMins(myArray[index]['end_time']) > 1320 && hourToMins(myArray[index]['end_time']) < 1440 ) { // last night working hour
                            nightWKHour = hourToMins(myArray[index]['end_time']) - 1320;
                            
                            if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                                nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                            }

                            myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                            // console.log(nightBT, "night breaktime")
                        } else if(hourToMins(myArray[index]['end_time']) == 0){
                            nightWKHour = 120; // 10:00PM to 12:00PM
                            
                            if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                                nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                            }

                            myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                            //console.log(nightBT, "night breaktime")
                        } else if((hourToMins(myArray[index]['end_time']) > 0) && (hourToMins(myArray[index]['end_time']) <= 300)  ){
                            
                            nightWKHour = 120 + hourToMins(myArray[index]['end_time']);

                            if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                                nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                            }
                            console.log(nightWKHour, ActWkTime2, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime <= 300")

                            myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                        } else if(hourToMins(myArray[index]['end_time']) > 300 && (hourToMins(myArray[index]['start_time']) > hourToMins(myArray[index]['end_time'])) ){
                            
                            nightWKHour = 120 + 300;

                            if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                                nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                            }
                            myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                            console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 300")

                        } else {
                            //night break time calculate
                            let nightTotalWk = 0;
                            if(keyName == 'night_break_time'){
                                nightTotalWk = nightWKHour - parseInt(txtVal);
                                myArray[index]['night_work_time'] = convertMinsToTime(nightTotalWk);
                            }
                            myArray[index]['night_work_time'] = '00:00';
                        }
                    } else {
                        //endTime > startTime
                        //console.warn(hourToMins(myArray[index]['start_time']), "StartTime")

                        if(hourToMins(myArray[index]['start_time']) == 0){
                            if (hourToMins(myArray[index]['end_time']) >= 300) {
                                //endTime >= 300
                                nightWKHour = 300 - hourToMins(myArray[index]['start_time']);
                            } else {
                                //endTime < 300
                                nightWKHour = hourToMins(myArray[index]['end_time']) - hourToMins(myArray[index]['start_time']);
                            }

                            //nightwkhour > Act wk hour
                            if (ActWkTime2 < nightWKHour) {
                                nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                            }
                            
                            if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                                nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                            }

                            myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                            //console.log(nightBT, "night breaktime")
                        } else if((hourToMins(myArray[index]['start_time']) > 0) && (hourToMins(myArray[index]['start_time']) <= 300)  ){
                            
                            if (hourToMins(myArray[index]['end_time']) >= 300) {
                                //endTime >= 300
                                nightWKHour = 300 - hourToMins(myArray[index]['start_time']);
                            } else {
                                //endTime < 300
                                nightWKHour = hourToMins(myArray[index]['end_time']) - hourToMins(myArray[index]['start_time']);
                            }

                            //nightwkhour > Act wk hour
                            // if (ActWkTime2 < nightWKHour) {
                            //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                            // }
                            
                            if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                                nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                            }
                            console.log(nightWKHour, ActWkTime2, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime <= 300")

                            myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                        } else if((hourToMins(myArray[index]['end_time']) > 1320) && (hourToMins(myArray[index]['end_time']) < 1440) ){
                            nightWKHour = hourToMins(myArray[index]['end_time']) - 1320;

                            if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                                nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                            }

                            //nightwkhour > Act wk hour
                            // if (ActWkTime2 < nightWKHour) {
                            //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                            // }
                            console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 1320")

                            myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                        } else if((hourToMins(myArray[index]['end_time']) == 0) ){
                            nightWKHour = 120;

                            if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                                nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                            }

                            //nightwkhour > Act wk hour
                            // if (ActWkTime2 < nightWKHour) {
                            //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                            // }
                            console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 1320")

                            myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                        }  else {
                            //night break time calculate
                            let nightTotalWk = 0;
                            if(keyName == 'night_break_time'){
                                nightTotalWk = nightWKHour - parseInt(txtVal);
                                myArray[index]['night_work_time'] = convertMinsToTime(nightTotalWk);
                            }
                            myArray[index]['night_work_time'] = '00:00';
                        }
                    }

                }  else if (keyName == 'total_break_time' && myProject.length > 0 ) {
                    //get pattern's working time 
                    let selectedNum = searchPattern(myArray[index]['pattern']);
                    let ptStartDate = '';
                    let ptEndDate = '';
                    let ReportDate = '';
                    let pWorkHour = '';
                    let ptWorkTime = '';
                    
                    //search project with current date
                    for (let index2 = 0; index2 < myProject.length; index2++) {
                        //const element = array[index];
                        ptStartDate = new Date(myProject[index2].start_contract_date);
                        ptEndDate = new Date(myProject[index2].end_contract_date);
                        ReportDate = new Date(myArray[index].report_date);
        
                        if ( ptStartDate.getTime() <= ReportDate.getTime() && ptEndDate.getTime() >= ReportDate.getTime() ) {
                            pWorkHour = myProject[index2]['working_hour'];
                            console.log(pWorkHour, ptEndDate, ptStartDate, myArray[index].report_date, " work hour p if");
                            break;
                            
                        } 
                    }

                    for (let index3 = 0; index3 < pWorkHour.length; index3++) {
                        
                        if (myArray[index]['pattern'] == pWorkHour[index3].pattern ) {
                            ptWorkTime = pWorkHour[index3].working_time;
                            console.log(pWorkHour[index3].working_time, "Select Work TIme");
                            break;
                        }
                        
                    }
                    
                    let ptTotalWkMin = hourToMins(ptWorkTime);
                    
                    deductionTime = ptTotalWkMin - (totalWHmins - (parseInt(txtVal) + parseInt(myArray[index].night_break_time)));
                    
                    if (deductionTime > 0) {
                        myArray[index]['deduction_time'] = convertMinsToTime(deductionTime);
                    }else {
                        myArray[index]['deduction_time'] = '00:00';
                    }
                    

                    console.log(deductionTime, compWorkingTime, ptTotalWkMin, totalWHmins, parseInt(txtVal), parseInt(myArray[index].night_break_time), "deduction cal 1")
                    
                    if(ptTotalWkMin > parseInt(compWorkingTime) && ptTotalWkMin < totalWHmins) { //pattern wktime greater than companyTime
                        //breaktime calculate 
                        totalOvtmins = totalWHmins - ptTotalWkMin;
                        totalOvtmins = totalOvtmins - (tBreakTime + parseInt(myArray[index].night_break_time));
                        // console.log(myProject.length, totalWHmins, totalOvtmins, parseInt(txtVal), "breaktime check")
                        
                        
                        if(totalOvtmins > 0) {
                            myArray[index]['over_work_time'] = convertMinsToTime(totalOvtmins);
                        } else
                            myArray[index]['over_work_time'] = '00:00';
                        
                        console.log(ptTotalWkMin, compWorkingTime, totalWHmins, "Over TIme cal wrong")
                    } else if (ptTotalWkMin <= parseInt(compWorkingTime) && parseInt(compWorkingTime) < totalWHmins) {//companyTime greater than or equal with patternTime
                        
                        //breaktime is greater than  0
                        totalOvtmins = totalWHmins - ( parseInt(compWorkingTime) + (tBreakTime + parseInt(myArray[index].night_break_time)));
                        
                        console.log(myProject.length, totalWHmins, parseInt(compWorkingTime), totalOvtmins, parseInt(txtVal), ptTotalWkMin, "breaktime check")

                        if(totalOvtmins > 0) {
                            myArray[index]['over_work_time'] = convertMinsToTime(totalOvtmins);
                        } else
                            myArray[index]['over_work_time'] = '00:00';
                    } else {
                        myArray[index]['over_work_time'] = '00:00';
                    }

                    
                }

                //for customer workreport
                // if(customArray.length > 0) {
                //     customArray[0].customer_workreport_items[index]['customer_total_work_time'] = convertMinsToTime(tBreakTime);
                //     customArray[0].customer_workreport_items[index]['customer_break_time'] = txtVal;
                // }
                
                //console.log(customArray, "CustomArray");
            }

        }

            
        // update to state
        setlistDataSource(myArray);
        
        //customer workreport startTime and endTime update
        // if(customArray.length > 0) {
        //     customArray[0].customer_workreport_items[index]['customer_start_time'] = myArray[index]['start_time'];
        //     customArray[0].customer_workreport_items[index]['customer_end_time'] = myArray[index]['end_time'];
        // }
       // console.log(customArray[0].customer_workreport_items[index]['customer_start_time'], myArray[index]['start_time'],"update customer att list")
        
        //update to customer workreport
        //setlistCustomer(customArray);
    }

    const searchPattern = (ptKey) => {
        let ptNum = 0;
        if(ptKey == 'A'){
            ptNum = 0;
        }else if(ptKey == 'B'){
            ptNum = 1;
        }else if(ptKey == 'C'){
            ptNum = 2;
        }else if(ptKey == 'D'){
            ptNum = 3;
        }else if(ptKey == 'E'){
            ptNum = 4;
        }else if(ptKey == 'F'){
            ptNum = 5;
        }

        return ( ptNum );

    }

    const updateNightBreakTime = (index, keyName, txtVal) => {
        let myArray = [... listDataSource];
        myArray[index][keyName] = txtVal.replace(/[-+ #*;,.<>\{\}\[\]\(\)\\\/]/gi, '');
        //myArray[index][keyName] = txtVal;
        setlistDataSource(myArray);
        setNightBreakTime(txtVal);

    }

    // fill night break time and reduce
    const replaceNightBT = async (index, keyName, txtVal) => {
        const myArray = [... listDataSource];
        let actDeduction = 0;
        //console.log(hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), " night work time")
        let itemIndex = index;
        //error show night wk total is 0 when user add night bk time
        //if ( parseInt(myArray[index]['night_work_time']) == 0 || (parseInt(txtVal) > 0 && ( parseInt(txtVal) < parseInt(myArray[index]['night_work_time'])) ) ) {
        if ( hourToMins(myArray[index].night_work_time) == 0 && parseInt(txtVal) > 0){
            myArray[index][keyName] = txtVal;
            myArray[index].night_breaktime_error = true;
            setlistDataSource(myArray);
            console.log(myArray[index], "night bk time reset if")

        } 
        else if (txtVal.length == 0) {
            myArray[index][keyName] = txtVal;
            myArray[index].night_breaktime_error = true;
            setlistDataSource(myArray);
            console.log("night bk time reset else if1")
        } //night bk time > 0 and sm than night bk
        else if(parseInt(txtVal) > 0 && hourToMins(myArray[index]['night_work_time']) < parseInt(txtVal) ){
            
            myArray[index][keyName] = txtVal;
            myArray[index].night_breaktime_error = true;
            setlistDataSource(myArray);
            console.log("night bk time reset else if2")
        } //night bk time == 0 and night_work_time = 0
        else if(parseInt(txtVal) == 0 && hourToMins(myArray[index]['night_work_time']) == 0 ){
            
            myArray[index][keyName] = txtVal;
            myArray[index].night_breaktime_error = false;
            setlistDataSource(myArray);
            console.log("night bk time reset else if3")
        }
        else {
            
            myArray[index][keyName] = txtVal;
            
            myArray[index].night_breaktime_error = false;

            console.log("night bk time reset else")

            if(listProjectInfo.length == 0){
                console.log(keyName, itemIndex, "Project not found")
                let totalWorkingHour = 0;
                let overTime = 0;
                let midNightOverTime = 0;
                let deductionTime = 0;
                let companyTime = await AsyncStorage.getItem("compWkTime");
                let comStartTime = await AsyncStorage.getItem("comStartTime");
                let comEndTime = await AsyncStorage.getItem("comEndTime");
                let endTimes = 0;
                let breakTime = parseInt(myArray[itemIndex]['total_break_time']) > 0 ? parseInt(myArray[itemIndex]['total_break_time']) : 0;
                let nightBreakTime2 = parseInt(myArray[itemIndex]['night_break_time']) > 0 ? parseInt(myArray[itemIndex]['night_break_time']) : 0;

               // myArray[itemIndex][keyName] = moment(currentDate).format('HH:mm');

                //Actual Working Hour when endtime greater than start time
                if(hourToMins(myArray[itemIndex]['start_time']) < hourToMins(myArray[itemIndex]['end_time'])) {
                    totalWorkingHour = hourToMins(myArray[itemIndex]['end_time']) - hourToMins(myArray[itemIndex]['start_time']);
                    myArray[itemIndex]['total_work_time'] = convertMinsToTime(totalWorkingHour);
                    
                    if(totalWorkingHour > companyTime) { //compare with company time and totalWkTime
                        overTime = parseInt(totalWorkingHour) - (parseInt(companyTime) + parseInt(breakTime) + parseInt(nightBreakTime2));

                        if(overTime > 0) //overTime is greater than 0
                            myArray[itemIndex]['over_work_time'] = convertMinsToTime(overTime);
                        else 
                            myArray[itemIndex]['over_work_time'] = '00:00';

                    } else {
                        myArray[itemIndex]['over_work_time'] = '00:00';
                    }

                    if(totalWorkingHour > 1320) { // greater than 10:00PM
                        midNightOverTime = totalWorkingHour - 1320;
                        myArray[itemIndex]['night_work_time'] = convertMinsToTime(midNightOverTime);
                    } else {
                        myArray[itemIndex]['night_work_time'] = '00:00';
                    }

                    if(breakTime > 0) { // if break time > 0 calculation
                    let actWokringHour = totalWorkingHour - (parseInt(breakTime) + nightBreakTime2);
                        myArray[itemIndex]['total_work_time'] = convertMinsToTime(actWokringHour);
                    } else {
                        myArray[itemIndex]['total_break_time'] = 0;
                    }

                    //if(companyTime > totalWorkingHour ) { // deduction calculation
                       
                        deductionTime = companyTime - (totalWorkingHour - ( breakTime + nightBreakTime2 ) );

                        //when start time is greater than comp start time
                        if( hourToMins(myArray[itemIndex]['start_time']) > hourToMins(comStartTime)) {
                           
                            if(myArray[itemIndex].atendance_type != 6 ) {
                                myArray[itemIndex].delay = true;//early error msg is on
                                myArray[itemIndex]['early'] = false; 
                            } else {
                                myArray[itemIndex]['early'] = false; 
                            }
                        } //when end time is smaller than comp end time
                        else if (hourToMins(myArray[itemIndex]['end_time']) < hourToMins(comEndTime)) {
                            
                           
                            if(endTimes > 0 && endTimes < hourToMins(myArray[itemIndex]['start_time']) ){
                                endTimes = (1440 - hourToMins(myArray[itemIndex]['start_time'])) + endTimes;
                            }

                            if(myArray[itemIndex].atendance_type != 7 ) {
                                myArray[itemIndex].early = true;//early error msg is on
                                myArray[itemIndex]['delay'] = false; 
                            } else {
                                myArray[itemIndex]['delay'] = false; 
                            }
                            
                        } else {
                            myArray[itemIndex]['early'] = false;
                            myArray[itemIndex]['delay'] = false;
                        }
                        
                        myArray[itemIndex]['deduction_time'] = convertMinsToTime(deductionTime);
                    // } else {
                    //     myArray[itemIndex]['early'] = false; //reset value

                    //     myArray[itemIndex]['delay'] = false; //reset value

                    //     myArray[itemIndex]['deduction_time'] = '00:00';
                    // }

                    // if(typeof(errorArray[itemIndex]) !== 'undefined') {
                    //    if(errorArray[itemIndex].hasOwnProperty('key')) {
                    //     console.warn("hello", itemIndex);
                    //    }
                    // }
                    console.log(companyTime,  hourToMins(myArray[itemIndex]['end_time']) , hourToMins(comEndTime), endTimes, " total WK Hour st l");

                    
                } else if(hourToMins(myArray[itemIndex]['start_time']) > hourToMins(myArray[itemIndex]['end_time']) && hourToMins(myArray[itemIndex]['end_time']) >= 0 ){
                    
                    if(hourToMins(myArray[itemIndex]['end_time']) == 0) {
                        
                        totalWorkingHour = 1440 - hourToMins(myArray[itemIndex]['start_time']);
                        myArray[itemIndex]['total_work_time'] = convertMinsToTime(totalWorkingHour);
                        
                        overTime = totalWorkingHour - (parseInt(companyTime) + parseInt(myArray[itemIndex].total_break_time) + parseInt(myArray[itemIndex].night_break_time)); 
                        myArray[itemIndex]['over_work_time'] = convertMinsToTime(overTime);

                        midNightOverTime = 120;
                        myArray[itemIndex]['night_work_time'] = convertMinsToTime(midNightOverTime);
                    
                    } else if (hourToMins(myArray[itemIndex]['end_time']) > 0 ) {
                        
                        totalWorkingHour = 1440 - hourToMins(myArray[itemIndex]['start_time']);
                        //total workhour
                        totalWorkingHour = totalWorkingHour + hourToMins(myArray[itemIndex]['end_time']);

                        overTime = totalWorkingHour - (parseInt(companyTime) + parseInt(myArray[itemIndex].total_break_time) + parseInt(myArray[itemIndex].night_break_time)); //over time calculate
                        myArray[itemIndex]['over_work_time'] = convertMinsToTime(overTime);

                        if(hourToMins(myArray[itemIndex]['end_time']) >= 300){
                            midNightOverTime = 120 + 300;
                        } else {
                            midNightOverTime = 120 + hourToMins(myArray[itemIndex]['end_time']);
                        }
                        
                        myArray[itemIndex]['night_work_time'] = convertMinsToTime(midNightOverTime);
                    
                        myArray[itemIndex]['total_work_time'] = convertMinsToTime(totalWorkingHour);
                    }
                    console.log(totalWorkingHour, overTime, myArray[itemIndex], " total WK Hour st g 00");

                } else if (hourToMins(myArray[itemIndex]['start_time']) > hourToMins(myArray[itemIndex]['end_time'])) {
                    
                    totalWorkingHour = hourToMins(myArray[itemIndex]['start_time']) - hourToMins(myArray[itemIndex]['end_time']);
                    
                    myArray[itemIndex]['total_work_time'] = convertMinsToTime(totalWorkingHour);
                    
                    console.log(totalWorkingHour, myArray[itemIndex], " total WK Hour st g");
                }

                //night work time calculate til to 12:00 PM
                let nightWKHour = 0;
                index = itemIndex;

                let ActWkTime2 = totalWorkTimeCal(myArray[index]['start_time'], myArray[index]['end_time']);
                ActWkTime2 = parseInt(ActWkTime2) - (parseInt(myArray[index].total_break_time) + parseInt(myArray[index].night_break_time));
                console.log(ActWkTime2, "total wk hour")
                if (hourToMins(myArray[index]['start_time']) > hourToMins(myArray[index]['end_time'])) { //startTime > endTime

                    if( hourToMins(myArray[index]['end_time']) > 1320 && hourToMins(myArray[index]['end_time']) < 1440 ) { // last night working hour
                        nightWKHour = hourToMins(myArray[index]['end_time']) - 1320;
                        
                        if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                            nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                        }

                        myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                        // console.log(nightBT, "night breaktime")
                    } else if(hourToMins(myArray[index]['end_time']) == 0){
                        nightWKHour = 120; // 10:00PM to 12:00PM
                        
                        if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                            nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                        }

                        myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                        //console.log(nightBT, "night breaktime")
                    } else if((hourToMins(myArray[index]['end_time']) > 0) && (hourToMins(myArray[index]['end_time']) <= 300)  ){
                        
                        nightWKHour = 120 + hourToMins(myArray[index]['end_time']);

                        if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                            nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                        }
                        console.log(nightWKHour, ActWkTime2, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime <= 300 2")

                        myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                    } else if(hourToMins(myArray[index]['end_time']) > 300 && (hourToMins(myArray[index]['start_time']) > hourToMins(myArray[index]['end_time'])) ){
                        
                        nightWKHour = 120 + 300;

                        if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                            nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                        }
                        myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                        console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 300")

                    } else {
                        //night break time calculate
                        let nightTotalWk = 0;
                        if(keyName == 'night_break_time'){
                            nightTotalWk = nightWKHour - parseInt(txtVal);
                            myArray[index]['night_work_time'] = convertMinsToTime(nightTotalWk);
                        }
                        myArray[index]['night_work_time'] = '00:00';
                    }
                } else {
                    //endTime > startTime
                    //console.warn(hourToMins(myArray[index]['start_time']), "StartTime")

                    if(hourToMins(myArray[index]['start_time']) == 0){
                        if (hourToMins(myArray[index]['end_time']) >= 300) {
                            //endTime >= 300
                            nightWKHour = 300 - hourToMins(myArray[index]['start_time']);
                        } else {
                            //endTime < 300
                            nightWKHour = hourToMins(myArray[index]['end_time']) - hourToMins(myArray[index]['start_time']);
                        }

                        //nightwkhour > Act wk hour
                        if (ActWkTime2 < nightWKHour) {
                            nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                        }
                        
                        if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                            nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                        }

                        myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                        //console.log(nightBT, "night breaktime")
                    } else if((hourToMins(myArray[index]['start_time']) > 0) && (hourToMins(myArray[index]['start_time']) <= 300)  ){
                        
                        if (hourToMins(myArray[index]['end_time']) >= 300) {
                            //endTime >= 300
                            nightWKHour = 300 - hourToMins(myArray[index]['start_time']);
                        } else {
                            //endTime < 300
                            nightWKHour = hourToMins(myArray[index]['end_time']) - hourToMins(myArray[index]['start_time']);
                        }

                        //nightwkhour > Act wk hour
                        // if (ActWkTime2 < nightWKHour) {
                        //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                        // }
                        
                        if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                            nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                        }
                        console.log(nightWKHour, ActWkTime2, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime <= 300 1")

                        myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                    } else if((hourToMins(myArray[index]['end_time']) > 1320) && (hourToMins(myArray[index]['end_time']) < 1440) ){
                        nightWKHour = hourToMins(myArray[index]['end_time']) - 1320;

                        if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                            nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                        }

                        //nightwkhour > Act wk hour
                        // if (ActWkTime2 < nightWKHour) {
                        //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                        // }
                        console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 1320")

                        myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                    } else if((hourToMins(myArray[index]['end_time']) == 0) ){
                        nightWKHour = 120;

                        if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                            nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                        }

                        //nightwkhour > Act wk hour
                        // if (ActWkTime2 < nightWKHour) {
                        //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                        // }
                        console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 1320")

                        myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                    }  else {
                        //night break time calculate
                        let nightTotalWk = 0;
                        if(keyName == 'night_break_time'){
                            nightTotalWk = nightWKHour - parseInt(txtVal);
                            myArray[index]['night_work_time'] = convertMinsToTime(nightTotalWk);
                        }
                        myArray[index]['night_work_time'] = '00:00';
                    }
                }

                myArray[index]['total_work_time'] = convertMinsToTime(ActWkTime2);
                
                //updated
                setlistDataSource(myArray);

            } else {
                console.log("pj exist");
                startEndTimeCal(myArray[itemIndex]['start_time'], myArray[itemIndex]['end_time'], myArray, itemIndex, 'night_break_time');
            }
         
       } 
 

       
       
    }

    // fill night break time and reduce
    const replaceCustomerNightBT = (index, keyName, txtVal, cindex) => {
        const myArray = [... listCustomer];
        let ActWkTime = 0;
        
        if(txtVal.trim().length == 0) {
            myArray[cindex].customer_workreport_items[index][keyName] = 0;
        }else {
            myArray[cindex].customer_workreport_items[index][keyName] = txtVal;
        }
        
        setlistCustomer(myArray);
        console.log(myArray[cindex].customer_workreport_items[index][keyName], "night breakTime customer")

        setlistCustomer(myArray);
    }

    const calCustomerNightBT = (index, keyName, txtVal, cindex) => {
        const myArray = [... listCustomer];
        let ActWkTime = 0;

        

        let startTimeMins = myArray[cindex].customer_workreport_items[index]['customer_start_time'];
        let endTimeMins = myArray[cindex].customer_workreport_items[index]['customer_end_time'];
        let breakTimeMin = myArray[cindex].customer_workreport_items[index]['customer_break_time'];
        let totalWkHour = 0;

        ActWkTime = totalWorkTimeCal(startTimeMins, endTimeMins);

        if(txtVal.trim().length == 0) {
            myArray[cindex].customer_workreport_items[index][keyName] = 0;
        }else {
            myArray[cindex].customer_workreport_items[index][keyName] = txtVal;
        

            if (ActWkTime > 60 && (ActWkTime - breakTimeMin) >= parseInt(txtVal)) {

                if(parseInt(txtVal) > (ActWkTime - breakTimeMin) ){
                    myArray[cindex].customer_workreport_items[index].night_breaktime_error = true; //error display

                } else if(hourToMins(myArray[cindex].customer_workreport_items[index]['customer_end_time']) > 1320 && hourToMins(myArray[cindex].customer_workreport_items[index]['customer_end_time']) <= 1440) {
                    
                    totalWkHour = ActWkTime - ( parseInt(breakTimeMin) + parseInt(txtVal) );

                    myArray[cindex].customer_workreport_items[index].night_breaktime_error = false; //error off
                    myArray[cindex].customer_workreport_items[index]['customer_total_work_time'] = convertMinsToTime(totalWkHour);
                
                } else if(hourToMins(myArray[cindex].customer_workreport_items[index]['customer_end_time']) > 0 && hourToMins(myArray[cindex].customer_workreport_items[index]['customer_end_time']) <= 300 ) {
                    
                    totalWkHour = ActWkTime - ( parseInt(breakTimeMin) + parseInt(txtVal) );
                    myArray[cindex].customer_workreport_items[index].night_breaktime_error = false; //error off
                    myArray[cindex].customer_workreport_items[index]['customer_total_work_time'] = convertMinsToTime(totalWkHour);
                
                } else if(parseInt(endTimeMins) == 0) {
                    totalWkHour = ActWkTime - ( parseInt(breakTimeMin) + parseInt(txtVal) );
                    myArray[cindex].customer_workreport_items[index].night_breaktime_error = false; //error off
                    myArray[cindex].customer_workreport_items[index]['customer_total_work_time'] = convertMinsToTime(totalWkHour);
                
                } else if(hourToMins(myArray[cindex].customer_workreport_items[index]['customer_start_time']) > 0 && hourToMins(myArray[cindex].customer_workreport_items[index]['customer_start_time']) < 301) {
                    
                    totalWkHour = ActWkTime - ( parseInt(breakTimeMin) + parseInt(txtVal) );
                    myArray[cindex].customer_workreport_items[index].night_breaktime_error = false; //error off
                    myArray[cindex].customer_workreport_items[index]['customer_total_work_time'] = convertMinsToTime(totalWkHour);
                
                } else if (hourToMins(myArray[cindex].customer_workreport_items[index]['customer_start_time']) > 1320 && hourToMins(myArray[cindex].customer_workreport_items[index]['customer_start_time']) <= 1440) {
                    
                    totalWkHour = ActWkTime - ( parseInt(breakTimeMin) + parseInt(txtVal) );
                    myArray[cindex].customer_workreport_items[index].night_breaktime_error = false; //error off
                    myArray[cindex].customer_workreport_items[index]['customer_total_work_time'] = convertMinsToTime(totalWkHour);
                
                } else if (parseInt(txtVal) == 0) {
                    myArray[cindex].customer_workreport_items[index].night_breaktime_error = false; //error off
                    totalWkHour = ActWkTime - parseInt(breakTimeMin);
                    myArray[cindex].customer_workreport_items[index]['customer_total_work_time'] = convertMinsToTime(totalWkHour);
                } else {
                    myArray[cindex].customer_workreport_items[index].night_breaktime_error = true; //error display
                    totalWkHour = ActWkTime - parseInt(breakTimeMin);
                    myArray[cindex].customer_workreport_items[index]['customer_total_work_time'] = convertMinsToTime(totalWkHour);
                }
                
                
            } else {
                myArray[cindex].customer_workreport_items[index].night_breaktime_error = true; //error display
                //myArray[cindex].customer_workreport_items[index]['customer_total_work_time'] = '00:00';
            }
        }

        console.log(myArray[cindex].customer_workreport_items[index], " Customer night break TIme cal")

        setlistCustomer(myArray);

    }

    const replaceCustomerBreakTime = (index, keyName, txtVal, cindex) => {
        const myArray = [... listCustomer];
          
        myArray[cindex].customer_workreport_items[index][keyName] = txtVal;
        setlistCustomer(myArray);
        console.log(myArray[cindex].customer_workreport_items[index][keyName], "breakTime customer")
    }

    const calCustomerBreakTime = (index, keyName, txtVal, cindex) => {
        const myArray = [... listCustomer];
        let ActWkTime = 0;

        //myArray[cindex].customer_workreport_items[index][keyName] = txtVal;
        if(txtVal.trim().length == 0) {
            myArray[cindex].customer_workreport_items[index][keyName] = 0;
        }else {
            myArray[cindex].customer_workreport_items[index][keyName] = txtVal;
        }

            let startTimeMins = myArray[cindex].customer_workreport_items[index]['customer_start_time'];
            let endTimeMins = myArray[cindex].customer_workreport_items[index]['customer_end_time'];
            let nightBreakTime = myArray[cindex].customer_workreport_items[index].customer_night_break_time;

            ActWkTime = totalWorkTimeCal(startTimeMins, endTimeMins);

            if (ActWkTime > (parseInt(txtVal) + parseInt(nightBreakTime) )) {
                ActWkTime = ActWkTime - (parseInt(txtVal) + parseInt(nightBreakTime) );
            } else {
                myArray[cindex].customer_workreport_items[index].break_time_error = true; //error display
            }

            if(ActWkTime < 61) {
                myArray[cindex].customer_workreport_items[index].break_time_error = true;
                myArray[cindex].customer_workreport_items[index]['customer_total_work_time'] = '00:00';
            }
            else if (ActWkTime > 60) {
                myArray[cindex].customer_workreport_items[index].break_time_error = false; //error off
                myArray[cindex].customer_workreport_items[index]['customer_total_work_time'] = convertMinsToTime(ActWkTime);
            } else {
                myArray[cindex].customer_workreport_items[index].break_time_error = true; //error display
                myArray[cindex].customer_workreport_items[index]['customer_total_work_time'] = '00:00';
            }
        

        setlistCustomer(myArray);
    }

    const replaceTranChangeVal= (index, keyName, txtVal) => {
        const myTArray = [... listTransport];

        console.log(txtVal, " to update destination")

            
        if(keyName == 'amount' ){ //chaneg data type to int.
            myTArray[index].amount = parseInt(txtVal);
        }
        else if (keyName == 'destination') {
            myTArray[index].destination = txtVal;
        } 
        else if (keyName == 'from_area') {
            myTArray[index].from_area = txtVal;
        } 
        else if (keyName == 'to_area') {
            myTArray[index].to_area = txtVal;
        }
            
        // update to state
        setlistTransport(myTArray);

        updateTranTotal(myTArray); // update tran total
        updateCustomTranTotal(myTArray)// update customer tran total

        updateSettleTotal(myTArray); //update amount
        
        console.log(myTArray[index], " sub array");
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

    

    const removePDFCustomerWorkreport = async( wkClientID, itemIndex) => {
        let myCustomerArray = [... listCustomer];
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
                    myCustomerArray[itemIndex].filename = '';
                    setlistCustomer(myCustomerArray);
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

    const onChange = async (event, selectedDate, itemIndex, keyName) => { //choose time from TimePicker for workreport
        
        if( typeof(selectedDate) !== 'undefined') {
            //pWorkValue
            setShow(false);
            const currentDate = selectedDate;
            //setShow(Platform.OS === 'ios');
            const myArray = [... listDataSource];

            let companyTime = await AsyncStorage.getItem("compWkTime");
            let comStartTime = await AsyncStorage.getItem("comStartTime");
            let comEndTime = await AsyncStorage.getItem("comEndTime");

            companyTime = parseInt(companyTime);

            if( myArray[itemIndex]['pattern'].toString().length == 0 && listProjectInfo.length > 0 ) {
                Alert.alert("Error", "Please selct Pattern first.");
            } else if(listProjectInfo.length == 0){
                console.log(keyName, itemIndex, "Project not found")
                let totalWorkingHour = 0;
                let overTime = 0;
                let midNightOverTime = 0;
                let deductionTime = 0;
                let endTimes = 0;
                let breakTime = parseInt(myArray[itemIndex]['total_break_time']) > 0 ? parseInt(myArray[itemIndex]['total_break_time']) : 0;
                let nightBreakTime2 = parseInt(myArray[itemIndex]['night_break_time']) > 0 ? parseInt(myArray[itemIndex]['night_break_time']) : 0;
                let index = itemIndex;
                myArray[itemIndex][keyName] = moment(currentDate).format('HH:mm');

                //Actual Working Hour when endtime greater than start time
                if(hourToMins(myArray[itemIndex]['start_time']) < hourToMins(myArray[itemIndex]['end_time'])) {
                    totalWorkingHour = hourToMins(myArray[itemIndex]['end_time']) - hourToMins(myArray[itemIndex]['start_time']);
                    myArray[itemIndex]['total_work_time'] = convertMinsToTime(totalWorkingHour);
                    
                    if(totalWorkingHour > companyTime) { //compare with company time and totalWkTime
                        overTime = totalWorkingHour - (companyTime + parseInt(breakTime) + nightBreakTime2);

                        if(overTime > 0) //overTime is greater than 0
                            myArray[itemIndex]['over_work_time'] = convertMinsToTime(overTime);
                        else 
                            myArray[itemIndex]['over_work_time'] = '00:00';

                    } else {
                        myArray[itemIndex]['over_work_time'] = '00:00';
                    }

                    if(totalWorkingHour > 1320) { // greater than 10:00PM
                        midNightOverTime = totalWorkingHour - 1320;
                        myArray[itemIndex]['night_work_time'] = convertMinsToTime(midNightOverTime);
                    } else {
                        myArray[itemIndex]['night_work_time'] = '00:00';
                    }

                    if(breakTime > 0) { // if break time > 0 calculation
                    let actWokringHour = totalWorkingHour - (parseInt(breakTime) + nightBreakTime2);
                        myArray[itemIndex]['total_work_time'] = convertMinsToTime(actWokringHour);
                    } else {
                        myArray[itemIndex]['total_break_time'] = 0;
                    }

                    
                    //if(companyTime > (totalWorkingHour - ( breakTime + nightBreakTime2 ) ) ) { // deduction calculation
                       
                        deductionTime = companyTime - (totalWorkingHour - ( breakTime + nightBreakTime2 ) );

                        //when start time is greater than comp start time
                        if( hourToMins(myArray[itemIndex]['start_time']) > hourToMins(comStartTime)) {
                           
                            if(myArray[itemIndex].atendance_type != 6 ) {
                                myArray[itemIndex].delay = true;//delay error msg is on
                            } else {
                                myArray[itemIndex].early = false;//early error msg is on
                            }
                        } //when end time is smaller than comp end time
                        else if (hourToMins(myArray[itemIndex]['end_time']) < hourToMins(comEndTime)) {
                            
                           
                            // if(endTimes > 0 && endTimes < hourToMins(myArray[itemIndex]['start_time']) ){
                            //     endTimes = (1440 - hourToMins(myArray[itemIndex]['start_time'])) + endTimes;
                            // }

                            if(myArray[itemIndex].atendance_type != 7) {
                                myArray[itemIndex].early = true;//early error msg is on
                            } else {
                                myArray[itemIndex].delay = false;//delay error msg is on
                            }
                            
                        } else {
                            myArray[itemIndex]['early'] = false;
                            myArray[itemIndex]['delay'] = false;
                        }
                        
                        if(deductionTime > 0) {
                            myArray[itemIndex]['deduction_time'] = convertMinsToTime(deductionTime);
                        } else {
                            myArray[itemIndex]['deduction_time'] = '00:00';
                        }
                        
                    //} 
                    // else {
                    //     myArray[itemIndex]['early'] = false; //reset value

                    //     myArray[itemIndex]['delay'] = false; //reset value

                    //     myArray[itemIndex]['deduction_time'] = '00:00';
                    // }

                    // if(typeof(errorArray[itemIndex]) !== 'undefined') {
                    //    if(errorArray[itemIndex].hasOwnProperty('key')) {
                    //     console.warn("hello", itemIndex);
                    //    }
                    // }
                    console.log(companyTime,  totalWorkingHour , parseInt(breakTime), nightBreakTime2, " total WK Hour st l");

                    
                } else if(hourToMins(myArray[itemIndex]['start_time']) > hourToMins(myArray[itemIndex]['end_time']) && hourToMins(myArray[itemIndex]['end_time']) >= 0 ){
                    
                    if(hourToMins(myArray[itemIndex]['end_time']) == 0) {
                        
                        totalWorkingHour = 1440 - hourToMins(myArray[itemIndex]['start_time']);
                        myArray[itemIndex]['total_work_time'] = convertMinsToTime(totalWorkingHour);
                        
                        overTime = totalWorkingHour - (companyTime + parseInt(myArray[itemIndex].total_break_time)); 
                        myArray[itemIndex]['over_work_time'] = convertMinsToTime(overTime);

                        midNightOverTime = 120;
                        myArray[itemIndex]['night_work_time'] = convertMinsToTime(midNightOverTime);
                    
                    } else if (hourToMins(myArray[itemIndex]['end_time']) > 0 ) {
                        
                        let total24 = 1440 - hourToMins(myArray[itemIndex]['start_time']);
                        //total workhour
                        totalWorkingHour = total24 + hourToMins(myArray[itemIndex]['end_time']);

                        overTime = totalWorkingHour - (companyTime + parseInt(myArray[itemIndex].total_break_time)); //over time calculate
                        myArray[itemIndex]['over_work_time'] = convertMinsToTime(overTime);

                        if(hourToMins(myArray[itemIndex]['end_time']) >= 300){
                            midNightOverTime = 120 + 300;
                        } else {
                            midNightOverTime = 120 + hourToMins(myArray[itemIndex]['end_time']);
                        }
                        
                        myArray[itemIndex]['night_work_time'] = convertMinsToTime(midNightOverTime);
                    
                        myArray[itemIndex]['total_work_time'] = convertMinsToTime(totalWorkingHour);
                    }
                    
                    console.log(totalWorkingHour, myArray[itemIndex], " total WK Hour st g 00");

                } else if (hourToMins(myArray[itemIndex]['start_time']) > hourToMins(myArray[itemIndex]['end_time'])) {
                    
                    totalWorkingHour = hourToMins(myArray[itemIndex]['start_time']) - hourToMins(myArray[itemIndex]['end_time']);
                    
                    myArray[itemIndex]['total_work_time'] = convertMinsToTime(totalWorkingHour);
                    
                    console.log(totalWorkingHour, myArray[itemIndex], " total WK Hour st g");
                }

                //deduction time cal
                let ActWkTimeD = totalWorkTimeCal(myArray[index]['start_time'], myArray[index]['end_time']);
                ActWkTimeD = ActWkTimeD - (parseInt(myArray[index].total_break_time) + parseInt(myArray[index].night_break_time));
                
                if (ActWkTimeD < companyTime) {
                    deductionTime = companyTime - ActWkTimeD;
                }else {
                    deductionTime = 0;
                }

                if (deductionTime > 0) {
                    myArray[itemIndex].deduction_time = convertMinsToTime(deductionTime);
                } else {
                    myArray[itemIndex].deduction_time = '00:00';
                }

                //night work time calculate til to 12:00 PM
                let nightWKHour = 0;
                index = itemIndex;

                let ActWkTime2 = totalWorkTimeCal(myArray[index]['start_time'], myArray[index]['end_time']);
                ActWkTime2 = ActWkTime2 - (parseInt(myArray[index].total_break_time) + parseInt(myArray[index].night_break_time));
                console.log(ActWkTime2, "total wk hour")
                if (hourToMins(myArray[index]['start_time']) > hourToMins(myArray[index]['end_time'])) { //startTime > endTime

                    if( hourToMins(myArray[index]['end_time']) > 1320 && hourToMins(myArray[index]['end_time']) < 1440 ) { // last night working hour
                        nightWKHour = hourToMins(myArray[index]['end_time']) - 1320;
                        
                        if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                            nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                        }

                        myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                        // console.log(nightBT, "night breaktime")
                    } else if(hourToMins(myArray[index]['end_time']) == 0){
                        nightWKHour = 120; // 10:00PM to 12:00PM
                        
                        if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                            nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                        }

                        myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                        //console.log(nightBT, "night breaktime")
                    } else if((hourToMins(myArray[index]['end_time']) > 0) && (hourToMins(myArray[index]['end_time']) <= 300)  ){
                        
                        nightWKHour = 120 + hourToMins(myArray[index]['end_time']);

                        if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                            nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                        }
                        console.log(nightWKHour, ActWkTime2, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime <= 300")

                        myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                    } else if(hourToMins(myArray[index]['end_time']) > 300 && (hourToMins(myArray[index]['start_time']) > hourToMins(myArray[index]['end_time'])) ){
                        
                        nightWKHour = 120 + 300;

                        if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                            nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                        }
                        myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                        console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 300")

                    } else {
                        //night break time calculate
                        let nightTotalWk = 0;
                        if(keyName == 'night_break_time'){
                            nightTotalWk = nightWKHour - parseInt(txtVal);
                            myArray[index]['night_work_time'] = convertMinsToTime(nightTotalWk);
                        }
                        myArray[index]['night_work_time'] = '00:00';
                    }
                } else {
                    //endTime > startTime
                    //console.warn(hourToMins(myArray[index]['start_time']), "StartTime")

                    if(hourToMins(myArray[index]['start_time']) == 0){
                        if (hourToMins(myArray[index]['end_time']) >= 300) {
                            //endTime >= 300
                            nightWKHour = 300 - hourToMins(myArray[index]['start_time']);
                        } else {
                            //endTime < 300
                            nightWKHour = hourToMins(myArray[index]['end_time']) - hourToMins(myArray[index]['start_time']);
                        }

                        //nightwkhour > Act wk hour
                        if (ActWkTime2 < nightWKHour) {
                            nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                        }
                        
                        if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                            nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                        }

                        myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                        //console.log(nightBT, "night breaktime")
                    } else if((hourToMins(myArray[index]['start_time']) > 0) && (hourToMins(myArray[index]['start_time']) <= 300)  ){
                        
                        if (hourToMins(myArray[index]['end_time']) >= 300) {
                            //endTime >= 300
                            nightWKHour = 300 - hourToMins(myArray[index]['start_time']);
                        } else {
                            //endTime < 300
                            nightWKHour = hourToMins(myArray[index]['end_time']) - hourToMins(myArray[index]['start_time']);
                        }

                        //nightwkhour > Act wk hour
                        // if (ActWkTime2 < nightWKHour) {
                        //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                        // }
                        
                        if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                            nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                        }
                        console.log(nightWKHour, ActWkTime2, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime <= 300")

                        myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                    } else if((hourToMins(myArray[index]['end_time']) > 1320) && (hourToMins(myArray[index]['end_time']) < 1440) ){
                        nightWKHour = hourToMins(myArray[index]['end_time']) - 1320;

                        if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                            nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                        }

                        //nightwkhour > Act wk hour
                        // if (ActWkTime2 < nightWKHour) {
                        //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                        // }
                        console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 1320")

                        myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                    } else if((hourToMins(myArray[index]['end_time']) == 0) ){
                        nightWKHour = 120;

                        if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                            nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                        }

                        //nightwkhour > Act wk hour
                        // if (ActWkTime2 < nightWKHour) {
                        //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                        // }
                        console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 1320")

                        myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                    }  else {
                        //night break time calculate
                        let nightTotalWk = 0;
                        if(keyName == 'night_break_time'){
                            nightTotalWk = nightWKHour - parseInt(txtVal);
                            myArray[index]['night_work_time'] = convertMinsToTime(nightTotalWk);
                        }
                        myArray[index]['night_work_time'] = '00:00';
                    }
                }

                myArray[index]['total_work_time'] = convertMinsToTime(ActWkTime2);
                
                //updated
                setlistDataSource(myArray);

            } else {
                myArray[itemIndex][keyName] = moment(currentDate).format('HH:mm');
                //let addMins = parseInt(moment(currentDate).format('hh') * 60) + parseInt(moment(currentDate).format('mm'));
                
                startEndTimeCal(myArray[itemIndex]['start_time'], myArray[itemIndex]['end_time'], myArray, itemIndex, keyName);
                // update to state
                //setlistDataSource(myArray);
            // console.log(keyName, itemIndex, myArray[itemIndex][keyName], " selected date") 
                // setShow(false);
            }

        } else {
            setKeyCheck(null);
            setTypeTime(null);
        }
        
    };

    

    const onChangeTran = (event, selectedDate, itemIndex, keyName) => {
        setShow(false);

        const currentDate = selectedDate;

        const myArray = [... listTransport];

       
            myArray[itemIndex][keyName] = moment(currentDate).format('YYYY-MM-DD');
            // update to transportation state
            setlistTransport(myArray);
        
    }

    const onChangeCustomer = (event, selectedDate, itemIndex, keyName, mainKey) => { //choose time from TimePicker for customer workreport detail
        console.log(event, selectedDate)
        if(typeof(selectedDate) !== 'undefined'){
            //pWorkValue
            setShow(false);
            const currentDate = selectedDate;
            //setShow(Platform.OS === 'ios');
            const myArray = [... listCustomer];

            myArray[mainKey].customer_workreport_items[itemIndex][keyName] = moment(currentDate).format('HH:mm');
            //let addMins = parseInt(moment(currentDate).format('hh') * 60) + parseInt(moment(currentDate).format('mm'));
            console.log(keyName, itemIndex, myArray[mainKey].customer_workreport_items[itemIndex][keyName] = moment(currentDate).format('HH:mm'), "Project not found")
            let totalWorkingHour = 0;
            let night_breakTime = 0;
            let ActTotWkTime = 0;
            let breakTime = 0;
            let nightBT = 0;
            let startTime = myArray[mainKey].customer_workreport_items[itemIndex]['customer_start_time'];
            let endTime = myArray[mainKey].customer_workreport_items[itemIndex]['customer_end_time'];
            night_breakTime = myArray[mainKey].customer_workreport_items[itemIndex]['customer_night_break_time'];
            breakTime = myArray[mainKey].customer_workreport_items[itemIndex]['customer_break_time'];
            //myArray[mainKey].customer_workreport_items[itemIndex][keyName] = moment(currentDate).format('HH:mm');

            //Actual Working Hour when endtime greater than start time
            if(hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_start_time']) < hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_end_time'])) {
                totalWorkingHour = totalWorkTimeCal(myArray[mainKey].customer_workreport_items[itemIndex]['customer_start_time'], myArray[mainKey].customer_workreport_items[itemIndex]['customer_end_time']);
                
                //break time error check
                if (totalWorkingHour < 61 && parseInt(myArray[mainKey].customer_workreport_items[itemIndex]['customer_break_time']) > 0 ) {
                    myArray[mainKey].customer_workreport_items[itemIndex]['break_time_error'] = true;
                    myArray[mainKey].customer_workreport_items[itemIndex]['customer_total_work_time'] = '00:00';
                
                } else {
                    myArray[mainKey].customer_workreport_items[itemIndex]['break_time_error'] = false;
                    myArray[mainKey].customer_workreport_items[itemIndex]['customer_total_work_time'] = convertMinsToTime(totalWorkingHour);
                }

                //break time greater than 0
                if(myArray[mainKey].customer_workreport_items[itemIndex]['customer_break_time'] > 0) { // if break time > 0 calculation
                    ActTotWkTime = totalWorkingHour - myArray[mainKey].customer_workreport_items[itemIndex]['customer_break_time'];
                    myArray[mainKey].customer_workreport_items[itemIndex]['customer_total_work_time'] = convertMinsToTime(ActTotWkTime);
                    myArray[mainKey].customer_workreport_items[itemIndex]['break_time_error'] = false;
                }
                //night wk time between 10:00PM and end time 
                if (myArray[mainKey].customer_workreport_items[itemIndex].customer_night_break_time > 0) {
                    ActTotWkTime = totalWorkingHour - (1320 - hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_start_time']));
                    ActTotWkTime = ActTotWkTime - parseInt(myArray[mainKey].customer_workreport_items[itemIndex]['customer_night_break_time']);
                   // myArray[mainKey].customer_workreport_items[itemIndex]['customer_total_work_time'] = convertMinsToTime(ActTotWkTime);
                }
                
                //error check for night break time
                if (myArray[mainKey].customer_workreport_items[itemIndex].customer_night_break_time > 0 ) {
                    ActTotWkTime = totalWorkingHour - (parseInt(myArray[mainKey].customer_workreport_items[itemIndex].customer_night_break_time) + parseInt(myArray[mainKey].customer_workreport_items[itemIndex]['customer_break_time']));
                    
                    if (ActTotWkTime < 61) {
                        myArray[mainKey].customer_workreport_items[itemIndex]['night_breaktime_error'] = true; 
                        myArray[mainKey].customer_workreport_items[itemIndex]['customer_total_work_time'] = '00:00';
                    } else if(hourToMins(endTime) < 1320 && hourToMins(endTime) > 300 ){
                        myArray[mainKey].customer_workreport_items[itemIndex]['night_breaktime_error'] = true; 
                    } else if(hourToMins(startTime) < 1320 && hourToMins(startTime) > 300 ){
                        myArray[mainKey].customer_workreport_items[itemIndex]['night_breaktime_error'] = true; 
                    } else {
                        myArray[mainKey].customer_workreport_items[itemIndex]['night_breaktime_error'] = false;
                    } 

                    myArray[mainKey].customer_workreport_items[itemIndex]['customer_total_work_time'] = convertMinsToTime(ActTotWkTime);
                
                } 

                
                
            } else if(hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_start_time']) > hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_end_time']) && hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_end_time']) >= 0 ){
                
                if (hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_end_time']) > 60 && hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_end_time']) < 301 ) {
                    
                    totalWorkingHour = 1440 - hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_start_time']);
                    //total workhour
                    totalWorkingHour = totalWorkingHour + hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_end_time']);
                    totalWorkingHour = totalWorkingHour - ( parseInt(night_breakTime) + parseInt(breakTime));
                    myArray[mainKey].customer_workreport_items[itemIndex]['customer_total_work_time'] = convertMinsToTime(totalWorkingHour);
                
                } else if (hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_end_time']) == 0) {
                    totalWorkingHour = 1440 - hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_start_time']);
                    totalWorkingHour = totalWorkingHour - ( parseInt(night_breakTime) + parseInt(breakTime));
                    myArray[mainKey].customer_workreport_items[itemIndex]['customer_total_work_time'] = convertMinsToTime(totalWorkingHour);
                } else if(hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_end_time']) > 300) {
                    totalWorkingHour = 1440 - hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_start_time']);
                    //total workhour
                    totalWorkingHour = totalWorkingHour + hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_end_time']);
                    totalWorkingHour = totalWorkingHour - ( parseInt(night_breakTime) + parseInt(breakTime));
                    myArray[mainKey].customer_workreport_items[itemIndex]['customer_total_work_time'] = convertMinsToTime(totalWorkingHour);
                
                }
                console.log(totalWorkingHour, hourToMins(myArray[mainKey].customer_workreport_items[itemIndex][keyName]), " total WK Hour st g 00");

            } else if (hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_start_time']) > hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_end_time']) && hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_end_time']) == 0) {
                
                //totalWorkingHour = hourToMins(myArray[itemIndex]['customer_start_time']) - hourToMins(myArray[mainKey].customer_workreport_items[itemIndex]['customer_end_time']);
                totalWorkingHour = totalWorkTimeCal(myArray[mainKey].customer_workreport_items[itemIndex]['customer_start_time'], myArray[mainKey].customer_workreport_items[itemIndex]['customer_end_time']);
                totalWorkingHour = totalWorkingHour - ( parseInt(night_breakTime) + parseInt(breakTime));
                
                myArray[mainKey].customer_workreport_items[itemIndex]['customer_total_work_time'] = convertMinsToTime(totalWorkingHour);
                
                console.log(totalWorkingHour, " total WK Hour st g");
            }

           // customerActualTotalCal(mainKey);
            
            //updated
            setlistCustomer(myArray);
        } else {
            setKeyCheck(null);
            setTypeTime(null);
        }
        

           // startEndTimeCalCustomer(myArray[0].customer_workreport_items[itemIndex]['customer_start_time'], myArray[0].customer_workreport_items[itemIndex]['customer_end_time'], myArray, itemIndex, keyName);  
        
    };

    const TranSporation = (props) => {
        const [selectedTranValue, setSelectedTranValue] = useState(props.dataSeleted);
        //const optionMonth = [{ value: 1, label: 'JAN' }, { value: 2, label: 'FEB' }, { value: 3, label: 'MAR' }, { value: 4, label: 'APR' }, { value: 5, label: 'MAY' }, { value: 6, label: 'JUN' }, { value: 7, label: 'JUL' }, { value: 8, label: 'AUG' }, { value: 9, label: 'SEP' }, { value: 10, label: 'OCT' }, { value: 11, label: 'NOV' }, { value: 12, label: 'DEC' }];
    
        return (
            
            <View style={styles.dropDownStyle}>
                <Picker
                    selectedValue={props.dataSeleted}
                    style={{ height: 30, width: 120 }}
                    enabled={memberInfo.status == 1 || memberInfo.status == 3 ? true : false}
                    onValueChange={(itemValue, itemIndex) => onChangeTranType((itemIndex + 1), props.dataFieldName, itemValue, props.dataKey)}
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

    const handleValidTransport = (val, itemIndex) => {
        //console.log(val, "check valid")
        if ( val.trim().length > 0 ) {
            setTranData({
                ... tranData,
                tranKey: itemIndex,
                check_textInputChange: true
            })
        } else {
            setTranData({
                ... tranData,
                tranKey: itemIndex,
                check_textInputChange: false
            })
        }
    }


    const onChangeTranType = (itemIndex, keyName, txtVal, index) => {
        let myTranArray = [... listTransport];
        if (itemIndex != txtVal) {
            itemIndex = txtVal;
        }
        console.log(itemIndex, txtVal, "Transporation Dropdown")

        if(keyName == 'transport_type'){
            setSelectedTranValue(itemIndex);
            myTranArray[index][keyName] = itemIndex;
        }else{
            setSelectedTranValue(txtVal);
            myTranArray[index][keyName] = txtVal;
        }
        
        updateCustomTranTotal(myTranArray);
        console.log(itemIndex, txtVal, keyName, myTranArray, selectedTranValue, "Transporation change")

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

    const updateListData = () => { //update timeformat to hh:mm:ss
        let myWkArray = [... listDataSource];

        for (let index = 0; index < myWkArray.length; index++) {
            //console.log(myWkArray[index], "wk update")
            if(myWkArray[index].deduction_time.toString().length < 8) {
                myWkArray[index].deduction_time= myWkArray[index].deduction_time + ":00";
            }
            
            if(myWkArray[index].end_time.toString().length < 8) {
                myWkArray[index].end_time= myWkArray[index].end_time + ":00";
            }
            if(myWkArray[index].start_time.toString().length < 8) {
                myWkArray[index].start_time= myWkArray[index].start_time + ":00";
            }
            if(myWkArray[index].night_work_time.toString().length < 8) {
                myWkArray[index].night_work_time= myWkArray[index].night_work_time + ":00";
            }
            if(myWkArray[index].over_work_time.toString().length < 8) {
                myWkArray[index].over_work_time= myWkArray[index].over_work_time + ":00";
            }
            if(myWkArray[index].total_work_time.toString().length < 8) {
                myWkArray[index].total_work_time = myWkArray[index].total_work_time + ":00";
            }

            if(myWkArray[index].pattern == "") {
                myWkArray[index].pattern = "0";
            }

            myWkArray[index].night_break_time = parseInt(myWkArray[index].night_break_time);
                
            
            //update timeformat to hh:mm:ss
            //update pattern 0 when att type are 1,2,3,5,8,10
            //update all pattern 0 when project not found
            if(listProjectInfo.length == 0) {
                myWkArray[index].pattern = "0";
            } else {
                //some code
            }
            
        }

        setlistDataSource(myWkArray);
    }

    const updateUseDateTran = () => {
        let myTranArray = [... listTransport];

        for (let index = 0; index < myTranArray.length; index++) {
            myTranArray[index].use_date = moment(myTranArray[index].use_date).format('YYYY-MM-DD').toString(); 
        }

        setlistTransport(myTranArray); //update transporation state
    }

    const checkDalay = () => {
        let myArray = [... listDataSource];
        let delayCount = 0;
        
        for (let index = 0; index < myArray.length; index++) {
            if(myArray[index].delay == true) {
                delayCount += 1; 
                console.log(delayCount, "Delay error msg count")
            }
            
        }

        setCheckDealyErr(delayCount);

        return delayCount;
    }

    const checkEarly = () => {
        let myArray = [... listDataSource];
        let delayCount = 0;
        
        for (let index = 0; index < myArray.length; index++) {
            if(myArray[index].early == true) {
                delayCount += 1; 
                console.log(delayCount, "Early error msg count")
            }
            
        }

        setCheckEarlyErr(delayCount);

        return delayCount;
    }


    //save workreport
    const saveWorkReport = async (saveType) => {
        setSearchLoad(true); //loading started
        const tokenSave = await AsyncStorage.getItem('userToken');
        const account = await AsyncStorage.getItem('userName');

        //update timeformat to hh:mm:ss
        //update pattern 0 when att type are 1,2,3,5,8,10
        updateListData();
        //update use_date format to YYYY-MM-DD
        updateUseDateTran();


        let mbID = await AsyncStorage.getItem('member_id');
        let mbA = await AsyncStorage.getItem("mbAccount");

        //get profile data
        // fetch(uriBase + '/employee_detail/employee_info?member_id='+mbID, {
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'access-token': tokenSave
        //     }
        // })
        // .then((response) => response.json())
        // .then((json) => {
        //     let userAccount = json.show_detail;

        //     console.log(userAccount, "member detail")
        // })
        // .catch((error) => console.error(error))
        // .finally(() => setLoading(false));


        let totalWorkHour = total_work_time_cal(listDataSource); // get Total Working time of a month
        let totalNightWorkTime = total_night_work_time_cal(listDataSource);// get Total Night Working time of a month
        let totalOverTime = total_over_time_cal(listDataSource);// get Total Over time of a month
        let totalDeductionTime = total_deduction_time_cal(listDataSource); //get total dedution time
        let rsltOperatedTime = result_total_work_time_cal(listDataSource);
        let rsltTotalHfHoliday = total_half_holiday_cal(listDataSource);
        let rsltTotalAbsence = total_absence_cal(listDataSource);
        let rsltTotalSpecialHly = total_special_holiday_cal(listDataSource);
        let rsltTotalHolidays = Number( parseFloat( (total_half_holiday_cal(listDataSource) / 2) + total_paid_holiday_cal(listDataSource)).toFixed(1));
        let rsltPaidHolidays = total_paid_holiday_cal(listDataSource);
        

       // console.log(totalDeductionTime, "Total deduction a month")
        let workReport = [{
            "end_time": allData.work_report.end_time + ":00",
            "max_width_time": allData.work_report.max_width_time,
            "min_width_time": allData.work_report.min_width_time,
            "mng_deduction_time": totalDeductionTime,
            "mng_night_work_time": totalNightWorkTime,
            "mng_orver_work_time": totalOverTime,
            "mng_total_work_time": totalWorkHour,
            "rslt_absence_num": rsltTotalAbsence,
            "rslt_deduction_time": totalDeductionTime,
            "rslt_harf_holiday": rsltTotalHfHoliday,
            "rslt_holiday": rsltPaidHolidays,
            "rslt_night_work_time": totalNightWorkTime,
            "rslt_operated_time": rsltOperatedTime,
            "rslt_orver_work_time": totalOverTime,
            "rslt_salary_time": hourToMins(allData.work_report.rslt_salary_time),
            "rslt_special_holiday": rsltTotalSpecialHly,
            //"rslt_total_holiday": allData.work_report.rslt_total_holiday,
            "rslt_total_holiday": rsltTotalHolidays,
            "start_time": allData.work_report.start_time + ":00",
            "working_time": allData.work_report.working_time
        }];

       // console.log(workReport, "workreport save")

        let projectInfos = []; //when project not found

        if(listCustomer.length > 0){
           //let newProjeect = '';
           //let myProject = [... projectInfos];
            let myCustomArray = [... listCustomer];
            for (let index = 0; index < myCustomArray.length; index++) {
                
                //if (myCustomArray[index].client_report_flg == 0) {
                    myCustomArray[index].mng_clt_total_work_time = customerActualTotalCal(index);
                   // console.log(convertMinsToTime(customerActualTotalCal(index)), "Client data to save");  
                    let cAttType = 0;
                    for (let indexi = 0; indexi < myCustomArray[index].customer_workreport_items.length; indexi++) {
                        
                        cAttType = myCustomArray[index].customer_workreport_items[indexi].customer_attendance_type;
                        
                        if ( parseInt(myCustomArray[index].customer_workreport_items[indexi].customer_attendance_type) == 1 ) {
                            myCustomArray[index].customer_workreport_items[indexi].customer_start_time = '00:00:00';
                            myCustomArray[index].customer_workreport_items[indexi].customer_end_time = '00:00:00';
                            myCustomArray[index].customer_workreport_items[indexi].customer_night_break_time  = 0;
                            myCustomArray[index].customer_workreport_items[indexi].customer_break_time = 0;
                            myCustomArray[index].customer_workreport_items[indexi].customer_total_work_time = '00:00:00';
                            //console.log(cAttType, "Att id")
                        } else if (parseInt(myCustomArray[index].customer_workreport_items[indexi].customer_attendance_type) == 2) {
                            myCustomArray[index].customer_workreport_items[indexi].customer_start_time = '00:00:00';
                            myCustomArray[index].customer_workreport_items[indexi].customer_end_time = '00:00:00';
                            myCustomArray[index].customer_workreport_items[indexi].customer_night_break_time  = 0;
                            myCustomArray[index].customer_workreport_items[indexi].customer_break_time = 0;
                            myCustomArray[index].customer_workreport_items[indexi].customer_total_work_time = '00:00:00';
                            //console.log(cAttType, "Att id")
                        } else if (parseInt(myCustomArray[index].customer_workreport_items[indexi].customer_attendance_type) == 3) {
                            myCustomArray[index].customer_workreport_items[indexi].customer_start_time = '00:00:00';
                            myCustomArray[index].customer_workreport_items[indexi].customer_end_time = '00:00:00';
                            myCustomArray[index].customer_workreport_items[indexi].customer_night_break_time  = 0;
                            myCustomArray[index].customer_workreport_items[indexi].customer_break_time = 0;
                            myCustomArray[index].customer_workreport_items[indexi].customer_total_work_time = '00:00:00';
                            //console.log(cAttType, "Att id")
                        } else if (parseInt(myCustomArray[index].customer_workreport_items[indexi].customer_attendance_type) == 5) {
                            myCustomArray[index].customer_workreport_items[indexi].customer_start_time = '00:00:00';
                            myCustomArray[index].customer_workreport_items[indexi].customer_end_time = '00:00:00';
                            myCustomArray[index].customer_workreport_items[indexi].customer_night_break_time  = 0;
                            myCustomArray[index].customer_workreport_items[indexi].customer_break_time = 0;
                            myCustomArray[index].customer_workreport_items[indexi].customer_total_work_time = '00:00:00';
                           // console.log(cAttType, "Att id")
                        } else if (parseInt(myCustomArray[index].customer_workreport_items[indexi].customer_attendance_type) == 8) {
                            myCustomArray[index].customer_workreport_items[indexi].customer_start_time = '00:00:00';
                            myCustomArray[index].customer_workreport_items[indexi].customer_end_time = '00:00:00';
                            myCustomArray[index].customer_workreport_items[indexi].customer_night_break_time  = 0;
                            myCustomArray[index].customer_workreport_items[indexi].customer_break_time = 0;
                            myCustomArray[index].customer_workreport_items[indexi].customer_total_work_time = '00:00:00';
                           // console.log(cAttType, "Att id")
                        } else if (parseInt(myCustomArray[index].customer_workreport_items[indexi].customer_attendance_type) == 10) {
                            myCustomArray[index].customer_workreport_items[indexi].customer_start_time = '00:00:00';
                            myCustomArray[index].customer_workreport_items[indexi].customer_end_time = '00:00:00';
                            myCustomArray[index].customer_workreport_items[indexi].customer_night_break_time  = 0;
                            myCustomArray[index].customer_workreport_items[indexi].customer_break_time = 0;
                            myCustomArray[index].customer_workreport_items[indexi].customer_total_work_time = '00:00:00';
                            //console.log(cAttType, "Att id")
                        }

                        if( myCustomArray[index].customer_workreport_items[indexi].customer_start_time.toString().length < 8) {
                            myCustomArray[index].customer_workreport_items[indexi].customer_start_time= myCustomArray[index].customer_workreport_items[indexi].customer_start_time + ":00";
                        }

                        if( myCustomArray[index].customer_workreport_items[indexi].customer_end_time.toString().length < 8) {
                            myCustomArray[index].customer_workreport_items[indexi].customer_end_time= myCustomArray[index].customer_workreport_items[indexi].customer_end_time + ":00";
                        }

                        if( myCustomArray[index].customer_workreport_items[indexi].customer_total_work_time.toString().length < 8) {
                            myCustomArray[index].customer_workreport_items[indexi].customer_total_work_time= myCustomArray[index].customer_workreport_items[indexi].customer_total_work_time + ":00";
                        }
                        
                    }
                    //console.log(myCustomArray[index].customer_workreport_items, "Customer wk view")
               // }
                
            }
            
            //setlistProjectInfo(myProject); //update data
            setlistCustomer(myCustomArray);
            
        }

        
        //console.log(mbA, "member profile")

        let memeberSave = [{ "workreport_mng_id": allData.workreport_id, "client_report_flg": memberInfo.client_report_flg, "dairy_transrate_flg": memberInfo.dairy_transrate_flg, "expense_report_flg": memberInfo.expense_report_flg, "note": memberNote }];
            
        let updateData = [{
            'employee_info':memeberSave,
            'work_report':workReport,
            'customer_work_report':listCustomer,
            'transport_expense': [{
                'daily_transportation_id': allData.transport_expense.daily_transportation_id,
                'total_amount': saveLoadTranTotal(),
                'transport_detail': listTransport
            }],
            'work_report_detail': listDataSource,
            'expense_report': [],
            'account':  mbA,
            'workreport_id': allData.workreport_id,
            'lang': "en"
        }];

        checkDalay();
        checkEarly();
        
        console.log(JSON.stringify(updateData), checkDealyErr, "array check")
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'access-token': tokenSave
            },
            body: JSON.stringify(updateData)
        };

        let serviceName = '';

        if(saveType == 1) {
            serviceName = '/workreport/workreport_update';
        } else {
            serviceName = '/basic_user/workreport_apply_change';
        }

        if( parseInt(checkDalay()) > 0 ) {
            setSearchLoad(false);
            Alert.alert("Error", langStore.choose_delay);
        } else if (parseInt(checkEarly()) > 0) {
            setSearchLoad(false);
            Alert.alert("Error", langStore.choose_early);
        } else if(tranSportValidate()) {
            setSearchLoad(false);
            Alert.alert("Error", "Please check transporation fields.")
        } else if( listTransport.length > 0 && tranOnoff == 0) {
            setSearchLoad(false);
            Alert.alert("Error", langStore.transporation_select_box_error + "!")
        } else if( listTransport.length == 0 && tranOnoff == 1) {
            setSearchLoad(false);
            Alert.alert("Error", langStore.transporation_select_box_error + "!")
        } else if(bkTimeNbtTime != null) {
            setSearchLoad(false);
            Alert.alert("Error", "Break Time error!")
        } else if (saveType == 2 && customerTotalCheck() == 0 ) {
            setSearchLoad(false);
            Alert.alert("Error", langStore.please_insert_actual_wh_in_customer_wr);
        } else {

            //const saveWrk = fetch(uriBase + '/workreport/workreport_update_mobile', requestOptions)
            const saveWrk = await fetch(uriBase + serviceName, requestOptions)
                .then((response) => response.json())
                .then((json) => {
                    const data = json;
                    if(data.status == 1) {
                        if(saveType == 2) {
                            memberInfo.status_name = langStore.applied;
                            memberInfo.status = 2;
                            searchByYearMonth(); //refresh the page
                        }
                       //searchByYearMonth(); //refresh the page
                    Alert.alert("Successful", data.msg);
                    
                    if (memberNote.trim().length > 0) { //member note added when status is successful
                        let toDate = new Date();
                        let toDayDate = moment(toDate).format('YYYY-MM-DD HH:mm:ss').toString();
                        let jtztoDay = momentz(toDayDate).tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss').toString();
                        memberInfo.note = memberInfo.note + '\r\n' + '(' + jtztoDay + ' ' + memberInfo.last_name + ' ' + memberInfo.first_name + ')' + '\r\n' + memberNote;
                        setMemberInfo(memberInfo); 
                    }

                    } else {
                        if(data.msg){
                            Alert.alert("Error", data.msg);
                        }else if(data.message){
                            Alert.alert("Error", data.message);
                        } else {
                            Alert.alert("Error", data.error);
                        }

                       // console.log(json, " result of save");
                    }
                    
                    
                    }
                ).catch((error) => console.error(error))
                .finally(() => {
                    setMemberNote("");
                    setSearchLoad(false)
                });

        }
          
       
    }

    const customerTotalCheck = () => { //customer total is greater than 0 or not
        let myCustomArray = [... listCustomer];
        let res = 0;


        for (let index = 0; index < myCustomArray.length; index++) {
             myCustomArray[index].mng_clt_total_work_time;
            if (parseInt(myCustomArray[index].mng_clt_total_work_time) == 0) {
                res = index;
                break;
            }
        }

        return res;
    }

    const overTimePayment = (over_work_total_min) => {
        let overTimePm = '';
        if (over_work_total_min > 1200) {

            let over_time_payment_min = over_work_total_min - 1200;
        
            overTimePm = convertMinsToTime(over_time_payment_min);
     
        } else {
            overTimePm = "00:00";
        }

        return overTimePm;
    }

    const cancelApplied = async() => {
        let tokenSave = await AsyncStorage.getItem('userToken');
        let account = await AsyncStorage.getItem('userName');

        setSearchLoad(true); //loading started

        // POST request using fetch with async/await
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'access-token': tokenSave
            }
        };

       let serviceName = '/basic_user/workreport_apply_cancel?account='+ account +'&workreport_id=' + allData.workreport_id;


        const saveWrk = fetch(uriBase + serviceName, requestOptions)
            .then((response) => response.json())
            .then((json) => {
                const data = json;
                if(data.status == 1) {
                    memberInfo.status = 1;
                    searchByYearMonth(); //refresh the page
                    Alert.alert("Successful", data.msg);
                } else {
                    if(data.msg){
                        Alert.alert("Error", data.msg);
                    }else if(data.message){
                        Alert.alert("Error", data.message);
                    } else {
                        Alert.alert("Error", data.error);
                    }

                    console.log(json, " result of cancel apply");
                }
                
                
                }
            ).catch((error) => console.error(error))
            .finally(() => setSearchLoad(false));
    }

    const workPatternUpdate = async() => {
        let tokenSave = await AsyncStorage.getItem('userToken');
        let indivd_contract_id = 0;
        if(listProjectInfo.length > 0) {
            indivd_contract_id = listProjectInfo[0].individual_contract_id;
        }
            


        // POST request using fetch with async/await
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'access-token': tokenSave
            }
        };


       let serviceName = '/workreport/workreport_history_log?individual_contract_id=' + indivd_contract_id ;

        const saveWrk = fetch(uriBase + serviceName, requestOptions)
            .then((response) => response.json())
            .then((json) => {
                const data = json;
                setPatternUpdate(data);
                console.log(data, "workpattern update");
                }
            ).catch((error) => console.error(error))
            .finally(() => 
                console.log("test")
            );
    }

    const tranSportValidate = () => {
        let res = false;
        let myArray = [... listTransport ];
        
        //checking single field is empty or not
        for (let index = 0; index < myArray.length; index++) {
            
            if(myArray[index].destination.length == 0 || myArray[index].from_area.length == 0 || myArray[index].to_area.length == 0) {
                res = true;
            }
            
        }

        return res;
    }

    const totalWorkTimeCal = (startTime, endTime) => {
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

        if(curWkTime == null) {
            curWkTime = 0;
        }

        return (
            curWkTime
        )
    }

    //start time and end time fill and calculate
    const startEndTimeCal = async(startTime, endTime, myArray, index, keyName, keyVal = '', ptVal='') => {

        let startWorkTime = await AsyncStorage.getItem("comStartTime");
        let endWorkTime = await AsyncStorage.getItem("comEndTime");

        let compTotalWkTime = await AsyncStorage.getItem("compWkTime");
        

        let myPatterns = [... listProjectInfo];
        let workPattern = [];
        
        if(myPatterns.length > 0){
            workPattern = myPatterns[0].working_hour;
        }
        
        
        console.log(hourToMins(startWorkTime), hourToMins(endWorkTime), compTotalWkTime, workPattern, "storage data");

        let stTimeMins = startTime.split(':');
        stTimeMins = (parseInt(stTimeMins[0]) * 60) + parseInt(stTimeMins[1]);
        let edTimeMins = endTime.split(':');
        edTimeMins = (parseInt(edTimeMins[0]) * 60) + parseInt(edTimeMins[1]);
        let overTime = 0;
        let workHour = 0;
        let curWkTime = 0;
        let nightBreakTime = 0;
        
        if( stTimeMins > edTimeMins ) {
            if(edTimeMins == 0){ // if endtime is 12:00 PM
                curWkTime = 1440 - stTimeMins;
            } else if(edTimeMins > 0){// if endtime is later than 00:00 AM
                curWkTime = (1440 - stTimeMins) + edTimeMins;
            }
            
        } else {
            curWkTime = edTimeMins - stTimeMins;
        }

        if(keyName == 'night_break_time' && parseInt(myArray[index]['night_break_time']) > 0){ //check edit field is night breaktime or not
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
        let selectPt = '';
        if (ptVal.toString().length > 0) {
            selectPt = getPatternIdbyNum(ptVal);
            console.log(ptVal, selectPt, "Pt value check")
        } else {
            selectPt = getPatternIdbyNum(pWorkValue);
        }
        
        
        
        if(selectPt == 9 ) {
            Alert.alert("Error", langStore.choose_working_hours);
            console.log(ptVal, selectPt, "Pt value check")
        }

        // if(getPatternIdbyNum(pWorkValue) == 9 ) {
        //     Alert.alert("Error", langStore.choose_working_hours);
        //     console.log(pWorkValue, "Pt value check")
        // }

        // if(hourToMins(workPattern[selectPt].start_time) < stTimeMins ){
        //     myArray[index].atendance_type = 6; // attendance type Delay when pattern is < startTime
        //     myArray[index].reason = 'Delay'; // attendance type Delay when pattern is < startTime
        //     console.log(hourToMins(workPattern[selectPt].start_time), stTimeMins, 'delay test')
        // }
       // console.log(selectPt, "Select Pattern")

        let compareTotalTIme = 0;
        if(hourToMins(workPattern[selectPt].end_time) > compTotalWkTime ) {
            compareTotalTIme = hourToMins(workPattern[selectPt].end_time);
        } else {
            compareTotalTIme = compTotalWkTime;
        }



        nightBreakTime = myArray[index].night_break_time;
        
        if(workPattern.length > 0 && hourToMins(workPattern[selectPt].end_time) > edTimeMins ){
            let deductionEnd = 0;
            if (hourToMins(workPattern[selectPt].working_time) > (hourToMins(totalWorkHour) - nightBreakTime)) {
                deductionEnd = hourToMins(workPattern[selectPt].working_time) - (hourToMins(totalWorkHour) - nightBreakTime);
                myArray[index].deduction_time = convertMinsToTime(deductionEnd); 
            }
            
            console.log( deductionEnd ,"deduction End")
    
        } else if( workPattern.length > 0 && (hourToMins(workPattern[selectPt].start_time) > stTimeMins) && (hourToMins(workPattern[selectPt].end_time) > edTimeMins ) ){
            let deductionEnd = 0;

            if (hourToMins(workPattern[selectPt].working_time) > (hourToMins(totalWorkHour) - nightBreakTime)) {
                deductionEnd = hourToMins(workPattern[selectPt].working_time) - (hourToMins(totalWorkHour) - nightBreakTime);
                myArray[index].deduction_time = convertMinsToTime(deductionEnd);
            }
            console.log( deductionEnd ,"deduction else if")

        } else if(workPattern.length == 0 && (edTimeMins < 1080)) {
            setChoiceEraly(index); //
            setNotEnter(index);
            let deductionEnd = 1080 - edTimeMins;
            myArray[index].deduction_time = convertMinsToTime(deductionEnd);
            console.log( deductionEnd, workPattern.length ,"deduction else if")
        } else {
            myArray[index]['atendance_type'] = 0; // attendance type early when deducation > 0
            myArray[index]['reason'] = ''; // attendance type early when deducation > 0
            myArray[index].deduction_time = '00:00'; 
        }

        //deducation calculation start 
        //already removed breakTime from hourToMins(totalWorkHour);
        let toCopareTtTime = totalWorkTimeCal(myArray[index].start_time, myArray[index].end_time);
       // console.log(hourToMins(workPattern[selectPt].working_time), hourToMins(totalWorkHour), workPattern[selectPt].break_time, "pattern deducation")
        if (workPattern.length > 0 && stTimeMins > hourToMins(workPattern[selectPt].start_time)) {
            //already removed breakTime from hourToMins(totalWorkHour);
            let deduction_time = 0;
            let rTotalWHmin2 = totalWorkTimeCal(myArray[index].start_time, myArray[index].end_time);
            
            deduction_time = hourToMins(workPattern[selectPt].working_time) - ( rTotalWHmin2 - (parseInt(nightBreakTime) + parseInt(myArray[index].total_break_time) ) );

            if (deduction_time > 0) {
                myArray[index].deduction_time = convertMinsToTime(deduction_time);
            } else {
                myArray[index].deduction_time = '00:00';
            }

            if(myArray[index].atendance_type != 6 ) {
                myArray[index].delay = true;//delay error msg is on
            }
            myArray[index].early = false;//early error msg is off
            
            console.log(deduction_time, hourToMins(workPattern[selectPt].working_time), hourToMins(totalWorkHour), nightBreakTime, "deduction time 141");

        } else if(workPattern.length > 0 && edTimeMins < hourToMins(workPattern[selectPt].end_time)){
            //already removed breakTime from hourToMins(totalWorkHour);
            let deduction_time = 0;
            let ptEndTime = 0;
            let rTotalWHmin2 = totalWorkTimeCal(myArray[index].start_time, myArray[index].end_time);
            
            deduction_time = hourToMins(workPattern[selectPt].working_time) - ( rTotalWHmin2 - (parseInt(nightBreakTime) + parseInt(myArray[index].total_break_time) ) );

            if (deduction_time > 0) {
                myArray[index].deduction_time = convertMinsToTime(deduction_time);
            } else {
                myArray[index].deduction_time = '00:00';
            }
            
            if( edTimeMins > 0 && (edTimeMins < hourToMins(workPattern[selectPt].start_time) && edTimeMins < 300) ){
                edTimeMins = (1440 - hourToMins(workPattern[selectPt].start_time)) + edTimeMins;
                //ptEndTime = (1440 - hourToMins(workPattern[selectPt].start_time)) + hourToMins(workPattern[selectPt].end_time);
            } else {
                edTimeMins = hourToMins(workPattern[selectPt].end_time);
            }

            let actTotalWk = ( rTotalWHmin2 - (parseInt(nightBreakTime) + parseInt(myArray[index].total_break_time) ) );
            
            if(myArray[index].atendance_type != 7 && actTotalWk < hourToMins(workPattern[selectPt].working_time) ) {
                myArray[index].early = true;//early error msg is on
            }
            myArray[index].delay = false;//delay error msg is off
            
            console.log(deduction_time, edTimeMins, hourToMins(workPattern[selectPt].working_time), hourToMins(totalWorkHour), parseInt(myArray[index].night_break_time), parseInt(myArray[index].total_break_time), "deduction time 1422");
            
        } else if (workPattern.length > 0 && (parseInt(toCopareTtTime) == hourToMins(workPattern[selectPt].work_time))) {
            //already removed breakTime from hourToMins(totalWorkHour);
            let deduction_time = 0;
            let ptEndTime = 0;
            let rTotalWHmin2 = totalWorkTimeCal(myArray[index].start_time, myArray[index].end_time);
            
            deduction_time = hourToMins(workPattern[selectPt].working_time) - ( rTotalWHmin2 - (parseInt(nightBreakTime) + parseInt(myArray[index].total_break_time) ) );
            
            if (deduction_time > 0) {
                myArray[index].deduction_time = convertMinsToTime(deduction_time);
            } else {
                myArray[index].deduction_time = '00:00';
            }

            console.log(deduction_time, rTotalWHmin2, hourToMins(workPattern[selectPt].working_time), parseInt(nightBreakTime), parseInt(myArray[index].total_break_time), "deduction time = start end time");

        } else if(workPattern.length == 0 && (stTimeMins < 540) ) {
            myArray[index].deduction_time = 540 - stTimeMins; // when starttime smaller than 9:00 AM
           // console.log(myArray[index].deduction_time, "deduction time else if");
        } else {
            //delay and early error msg are off
            myArray[index].delay = false;
            myArray[index].early = false;
        }

        if (workPattern.length > 0 && totalWorkTimeCal(myArray[index].start_time, myArray[index].end_time) == hourToMins(workPattern[selectPt].working_time)) {
            //already removed breakTime from hourToMins(totalWorkHour);
            let deduction_time = 0;
            let rTotalWHmin2 = totalWorkTimeCal(myArray[index].start_time, myArray[index].end_time);
            
            deduction_time = hourToMins(workPattern[selectPt].working_time) - ( rTotalWHmin2 - (parseInt(nightBreakTime) + parseInt(myArray[index].total_break_time) ) );
            
            if (deduction_time > 0) {
                myArray[index].deduction_time = convertMinsToTime(deduction_time);
            } else {
                myArray[index].deduction_time = '00:00';
            }

            console.log(deduction_time, totalWorkTimeCal(myArray[index].start_time, myArray[index].end_time), hourToMins(workPattern[selectPt].working_time), "Equal Total Time")
        }
        

        let ActWkTime2 = totalWorkTimeCal(myArray[index]['start_time'], myArray[index]['end_time']);
        //compare current wk total time greater than company time to calcuate OverTime
        if(workPattern.length > 0 && compTotalWkTime > hourToMins(workPattern[selectPt].working_time)){
            if(ActWkTime2 > compTotalWkTime){
                overTime = parseInt(ActWkTime2) - (parseInt(compTotalWkTime) + parseInt(myArray[index]['total_break_time']) + parseInt(myArray[index].night_break_time));
                //overTime = parseInt(ActWkTime2) - parseInt(myArray[index].night_break_time);
            }
            console.log(overTime, ActWkTime2, compTotalWkTime, "checking overtime")
          // myArray[index]['deduction_time'] = '00:00'; //replace 00:00 when over 8hours
        }
        else if(workPattern.length > 0 && compTotalWkTime < hourToMins(workPattern[selectPt].working_time)){
            
            if(ActWkTime2 > hourToMins(workPattern[selectPt].working_time)){
               overTime = parseInt(ActWkTime2) - (hourToMins(workPattern[selectPt].working_time) + parseInt(myArray[index]['total_break_time']) + parseInt(myArray[index].night_break_time));  
            }

          // myArray[index]['deduction_time'] = '00:00'; //replace 00:00 when over 8hours
        }else if(workPattern.length > 0 && compTotalWkTime == hourToMins(workPattern[selectPt].working_time)){
            
            if(ActWkTime2 > hourToMins(workPattern[selectPt].working_time)){
                overTime = parseInt(ActWkTime2) - (hourToMins(workPattern[selectPt].working_time) + parseInt(myArray[index]['total_break_time']) + parseInt(myArray[index].night_break_time));   
            }
        }

        if(overTime > 0){
            myArray[index]['over_work_time'] = convertMinsToTime(overTime); //replace 00:00 when over 8hours
        }else{
            myArray[index]['over_work_time'] = '00:00';
        }

       console.log(overTime, hourToMins(workPattern[selectPt].working_time), compTotalWkTime, "Overtime cal")
        
        //night work time calculate til to 12:00 PM
        let nightWKHour = 0;

        
        ActWkTime2 = parseInt(ActWkTime2) - (parseInt(myArray[index].total_break_time) + parseInt(myArray[index].night_break_time));

        if (hourToMins(myArray[index]['start_time']) > hourToMins(myArray[index]['end_time'])) { //startTime > endTime

            if( hourToMins(myArray[index]['end_time']) > 1320 && hourToMins(myArray[index]['end_time']) < 1440 ) { // last night working hour
                nightWKHour = hourToMins(myArray[index]['end_time']) - 1320;
                
                if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                    nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                }

                myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                // console.log(nightBT, "night breaktime")
            } else if(hourToMins(myArray[index]['end_time']) == 0){
                nightWKHour = 120; // 10:00PM to 12:00PM
                
                if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                    nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                }

                myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                //console.log(nightBT, "night breaktime")
            } else if((hourToMins(myArray[index]['end_time']) > 0) && (hourToMins(myArray[index]['end_time']) <= 300)  ){
                
                nightWKHour = 120 + hourToMins(myArray[index]['end_time']);

                if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                    nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                }
                
                myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                
                console.log(nightWKHour, myArray[index]['night_work_time'], ActWkTime2, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime <= 300")
        


            } else if(hourToMins(myArray[index]['end_time']) > 300 && (hourToMins(myArray[index]['start_time']) > hourToMins(myArray[index]['end_time'])) ){
                
                nightWKHour = 120 + 300;

                if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                    nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                }
                myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

                console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 300")
        
            } else {
                //night break time calculate
                let nightTotalWk = 0;
                if(keyName == 'night_break_time'){
                    nightTotalWk = nightWKHour - parseInt(keyVal);
                    myArray[index]['night_work_time'] = convertMinsToTime(nightTotalWk);
                }
                myArray[index]['night_work_time'] = '00:00';
            }
        } else {
            //endTime > startTime
            //console.warn(hourToMins(myArray[index]['start_time']), "StartTime")

            if(hourToMins(myArray[index]['start_time']) == 0){
                if (hourToMins(myArray[index]['end_time']) >= 300) {
                    //endTime >= 300
                    nightWKHour = 300 - hourToMins(myArray[index]['start_time']);
                } else {
                    //endTime < 300
                    nightWKHour = hourToMins(myArray[index]['end_time']) - hourToMins(myArray[index]['start_time']);
                }

                //nightwkhour > Act wk hour
                if (ActWkTime2 < nightWKHour) {
                    nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                }
                
                if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                    nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                }

                myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);
                //console.log(nightBT, "night breaktime")
            } else if((hourToMins(myArray[index]['start_time']) > 0) && (hourToMins(myArray[index]['start_time']) <= 300)  ){
                
                if (hourToMins(myArray[index]['end_time']) >= 300) {
                    //endTime >= 300
                    nightWKHour = 300 - hourToMins(myArray[index]['start_time']);
                } else {
                    //endTime < 300
                    nightWKHour = hourToMins(myArray[index]['end_time']) - hourToMins(myArray[index]['start_time']);
                }

                //nightwkhour > Act wk hour
                // if (ActWkTime2 < nightWKHour) {
                //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                // }
                
                if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                    nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                }
                console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime <= 300")
        
                myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

            } else if((hourToMins(myArray[index]['end_time']) > 1320) && (hourToMins(myArray[index]['end_time']) < 1440) ){
                nightWKHour = hourToMins(myArray[index]['end_time']) - 1320;

                if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                    nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                }

                //nightwkhour > Act wk hour
                // if (ActWkTime2 < nightWKHour) {
                //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                // }
                console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 1320")
        
                myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

            } else if((hourToMins(myArray[index]['end_time']) == 0) ){
                nightWKHour = 120;

                if(parseInt(myArray[index]['night_break_time']) > 0) { //night breaktime gr than 0 
                    nightWKHour = nightWKHour - parseInt(myArray[index]['night_break_time']);
                }

                //nightwkhour > Act wk hour
                // if (ActWkTime2 < nightWKHour) {
                //     nightWKHour = nightWKHour - parseInt(myArray[index].total_break_time);
                // }
                console.log(nightWKHour, hourToMins(myArray[index]['start_time']), hourToMins(myArray[index]['end_time']), myArray[index]['total_break_time'], "night breaktime > 1320")
        
                myArray[index]['night_work_time'] = convertMinsToTime(nightWKHour);

            }  else {
                //night break time calculate
                let nightTotalWk = 0;
                if(keyName == 'night_break_time'){
                    nightTotalWk = nightWKHour - parseInt(keyVal);
                    myArray[index]['night_work_time'] = convertMinsToTime(nightTotalWk);
                }
                myArray[index]['night_work_time'] = '00:00';
            }
        }
        

        myArray[index]['total_work_time'] = convertMinsToTime(ActWkTime2);;
        
        // if(totalWorkHour > 480) { //greater than 8 hours
        //     let totalOT = totalWorkHour - 480;
        //     myArray[index]['over_work_time'] = convertMinsToTime(totalOT);
        // }

        setlistDataSource(myArray);

        
        console.log(listDataSource[index]['night_work_time'], "Night Work Time check update")

        //early type check
       // earlyErrToShow(edTimeMins, index, keyName);
        
    }

    const AttendTypeDropdown = (props) => {

        return(
            <View style={ [styles.dropDownStyle, {marginTop: 10, marginBottom: 10}] }>
                <Picker
                    selectedValue={props.dataSeleted}
                    enabled={memberInfo.status == 1 || memberInfo.status == 3 ? true : false }
                    onValueChange={(itemValue, itemIndex) => onChangeValueAttDD(itemValue, props.dataKey)}
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

    const TransportExpenseList = (props) => {
        console.log(props.dataYesNo, props.dataYNSelect, " default tran dropdown")
         
       // setTranOnoff(props.dataYesNo);
        return(
            <View style={ [styles.dropDownStyle, {marginTop: 10, marginBottom: 10, backgroundColor: '#ffffff'}] }>
                <Picker
                    selectedValue={props.dataYNSelect}
                    onValueChange={(itemValue, itemIndex) => setTranOnoff(itemValue)}
                    enabled={memberInfo.status == 1 || memberInfo.status == 3 ? true : false }
                >
                    {
                        props.dataYesNo.map((item, key) => {
                            return(
                                <Picker.Item style={{ padding: 5 }} label={ item.label } value={ item.value } key={key}  />
                            )
                        })
                    }
                </Picker>
            </View>
        )
        
    }

    const dayNamelangSwitch = (dayName) => {
        let res_dayName = '';
        if(dayName == 'Mon') {
            res_dayName = langStore.Mon;
        } else if (dayName == 'Tue') {
            res_dayName = langStore.Tue;
        } else if (dayName == 'Wed') {
            res_dayName = langStore.Wed;
        } else if (dayName == 'Thu') {
            res_dayName = langStore.Thu;
        } else if (dayName == 'Fri') {
            res_dayName = langStore.Fri;
        } else if (dayName == 'Sat') {
            res_dayName = langStore.Sat;
        } else {
            res_dayName = langStore.Sun;
        }

        return ( res_dayName );
    }


    const onChangeValueAttDD = (itemVal, itemIndex) => { // value iwll update to listData when select item
        console.log(itemVal, itemIndex, "Select Dropdown")
        let myArray = [... listDataSource];

        myArray[itemIndex]['atendance_type'] = itemVal; //update attendance type value

        //check early is true or not and type id is 7
        if (myArray[itemIndex]['early'] == true && itemVal == 7) {
            myArray[itemIndex]['early'] = false;
        } 
        //check delay is true or not and type id is 6
        if (myArray[itemIndex]['delay'] == true && itemVal == 6) {
            myArray[itemIndex]['delay'] = false;
        }

        
        if(myArray[itemIndex].reason.length == 0 && (itemVal == 3 || itemVal == 8 || itemVal == 10) ) {
            myArray[itemIndex].start_time = '00:00';
            myArray[itemIndex].end_time = '00:00';
            myArray[itemIndex].total_break_time = 0;
            myArray[itemIndex].total_work_time = '00:00';
            myArray[itemIndex].total_break_time = 0;
            myArray[itemIndex].deduction_time = '00:00';
            myArray[itemIndex].over_work_time = '00:00';
            myArray[itemIndex].night_break_time = 0;
            myArray[itemIndex].night_work_time = '00:00';
            myArray[itemIndex].pattern = '0';
            
            setNotEnter(null); // when reason is not entered and att type are 3
            myArray[itemIndex].reasonmsg = true;
            
            console.log(myArray[itemIndex], "paid holiday");
        } else if(myArray[itemIndex].reason.length > 0 && ( itemVal == 3 || itemVal == 8 || itemVal == 10)) {
            myArray[itemIndex].start_time = '00:00';
            myArray[itemIndex].end_time = '00:00';
            myArray[itemIndex].total_break_time = 0;
            myArray[itemIndex].total_work_time = '00:00';
            myArray[itemIndex].total_break_time = 0;
            myArray[itemIndex].deduction_time = '00:00';
            myArray[itemIndex].over_work_time = '00:00';
            myArray[itemIndex].night_break_time = 0;
            myArray[itemIndex].night_work_time = '00:00';
            myArray[itemIndex].pattern = '0';
            setNotEnter(null); // when reason is not entered and att type are 3
            myArray[itemIndex].reasonmsg = false;
            console.log(myArray[itemIndex], itemVal, " holiday");
        } else if(itemVal == 2 || itemVal == 1) {
            myArray[itemIndex].start_time = '00:00';
            myArray[itemIndex].end_time = '00:00';
            myArray[itemIndex].total_break_time = 0;
            myArray[itemIndex].total_work_time = '00:00';
            //myArray[itemIndex].total_break_time = 0;
            myArray[itemIndex].deduction_time = '00:00';
            myArray[itemIndex].over_work_time = '00:00';
            myArray[itemIndex].night_break_time = 0;
            myArray[itemIndex].night_work_time = '00:00';
            myArray[itemIndex].pattern = '0';
            setNotEnter(null);
            myArray[itemIndex].reasonmsg = false;
        } else if(itemVal == 5) {
            myArray[itemIndex].start_time = '00:00';
            myArray[itemIndex].end_time = '00:00';
            myArray[itemIndex].total_break_time = 0;
            myArray[itemIndex].total_work_time = '00:00';
            //myArray[itemIndex].total_break_time = 0;
            myArray[itemIndex].deduction_time = '00:00';
            myArray[itemIndex].over_work_time = '00:00';
            myArray[itemIndex].night_break_time = 0;
            myArray[itemIndex].night_work_time = '00:00';
            myArray[itemIndex].pattern = '0';
            if(myArray[itemIndex].reason.length == 0) {
                myArray[itemIndex].reasonmsg = true;
            } else {
                myArray[itemIndex].reasonmsg = false;
            }
            
        } else if(myArray[itemIndex].reason.length == 0 && (itemVal == 4 || itemVal == 6 || itemVal == 7 || itemVal == 9 || itemVal == 11)) {
            myArray[itemIndex].reasonmsg = true;
            setNotEnter(itemIndex); // when reason is not entered while att type are 4 half holiday, absence, Early, holiday work, delay 6 and other
            setChoiceEraly(null);
        } else if (itemVal == 0) {
            myArray[itemIndex].reasonmsg = false;
            setNotEnter(null);
        }

        setlistDataSource(myArray);

        
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

        myArray[itemIndex].reason = textInput;
        
        if(textInput.toString().length > 0 ) { // string length is greater than 0
            setNotEnter(null);
            myArray[itemIndex].reasonmsg = false;
         //   console.log(myArray[itemIndex].reason.length, "current Reason first")

        }
        
        if(textInput.length == 0 && (myArray[itemIndex].atendance_type == 6 || myArray[itemIndex].atendance_type == 7)){
            setNotEnter(itemIndex);
            myArray[itemIndex]['reasonmsg'] = true;
        }

        if(textInput.length == 0 && myArray[itemIndex].atendance_type == 3 ) { // string length is 0 and att type is paid holiday
            setNotEnter(itemIndex);
        }

     //   console.log(myArray[itemIndex], "current Reason array")

        setlistDataSource(myArray);

    }

    //update txt input first in State
    const textInputStore = (mIndex, itemIndex, textInput) => {
        let myArray = [... listCustomer];
        let attType = myArray[mIndex].customer_workreport_items[itemIndex].customer_attendance_type;

            myArray[mIndex].customer_workreport_items[itemIndex].customer_reason = textInput;

            if(textInput.trim().length > 0) {
                myArray[mIndex].customer_workreport_items[itemIndex].customer_reason_error = false;
            } else {
                if(attType > 2 && textInput.trim().length == 0){
                    myArray[mIndex].customer_workreport_items[itemIndex].customer_reason_error = true;
                } else {
                    myArray[mIndex].customer_workreport_items[itemIndex].customer_reason_error = false;
                }
                
            }
            
            console.log(myArray[mIndex].customer_workreport_items[itemIndex], "current Reason array")

            setlistCustomer(myArray);
        
        setCustomReason(textInput);
        console.log(customReason, "custome reason")
    }

    const textInputCustomerReason = (mIndex, itemIndex, textInput) => { //reason need to fill when delay
        let myArray = [... listCustomer];
        let attType = myArray[mIndex].customer_workreport_items[itemIndex].customer_attendance_type;

            myArray[mIndex].customer_workreport_items[itemIndex].customer_reason = textInput;
            
            if (attType > 2 && textInput.trim().length == 0) {
                myArray[mIndex].customer_workreport_items[itemIndex].customer_reason_error = true;
            } else {
                myArray[mIndex].customer_workreport_items[itemIndex].customer_reason_error = false;
            }
            console.log(myArray[mIndex].customer_workreport_items[itemIndex], "current Reason array")

            setlistCustomer(myArray);
      

    }

    //client mng work time total cal
    const textCltMng_total_worktime = (cindex, txtVal) => {
        let myCustomArray = [... listCustomer];

        myCustomArray[cindex].mng_clt_total_work_time = formatToHourMin(txtVal);

        setlistCustomer(myCustomArray);
    }

    const formatToHourMin = (txtVal) => {
        let res_hourMin = '';
        let lengthStr = txtVal.toString().length;
        lengthStr = lengthStr - 3;
        if (txtVal.toString().charAt(lengthStr) == ':') {
            res_hourMin = txtVal;
        }
        else if (txtVal.toString().length == 1) {
            res_hourMin = '00:0' + txtVal;
        } else if (txtVal.toString().length == 2) {
            res_hourMin = '00:' + txtVal;
        } else if(txtVal.toString().length == 3) {
            res_hourMin = '0' + txtVal.toString().charAt(0) + ':' + txtVal.toString().charAt(1) + txtVal.toString().charAt(2);
        } else if (txtVal.toString().length == 4) {
            res_hourMin = txtVal.toString().charAt(0) + txtVal.charAt(1) + ':' + txtVal.toString().charAt(2)+ txtVal.toString().charAt(3);
        } else if (txtVal.toString().length == 5) {
            res_hourMin = txtVal.toString().charAt(0) + txtVal.charAt(1) + txtVal.charAt(2) + ':' + txtVal.toString().charAt(3)+ txtVal.toString().charAt(4);
        } else if (txtVal.toString().length == 6) {
            res_hourMin = txtVal.toString().charAt(0) + txtVal.charAt(1) + txtVal.charAt(2) + txtVal.charAt(3) + ':' + txtVal.toString().charAt(4)+ txtVal.toString().charAt(5);
        } else if (txtVal.toString().length == 7) {
            res_hourMin = txtVal.toString().charAt(0) + txtVal.charAt(1) + txtVal.charAt(2) + txtVal.charAt(3) + txtVal.charAt(4) + ':' + txtVal.toString().charAt(5)+ txtVal.toString().charAt(6);
        } else if (txtVal.toString().length == 8) {
            res_hourMin = txtVal.toString().charAt(0) + txtVal.charAt(1) + txtVal.charAt(2) + txtVal.charAt(3) + txtVal.charAt(4) + txtVal.charAt(5) + ':' + txtVal.toString().charAt(6)+ txtVal.toString().charAt(7);
        } else if (txtVal.toString().length == 9) {
            res_hourMin = txtVal.toString().charAt(0) + txtVal.charAt(1) + txtVal.charAt(2) + txtVal.charAt(3) + txtVal.charAt(4) + txtVal.charAt(5) + txtVal.charAt(6) + ':' + txtVal.toString().charAt(7)+ txtVal.toString().charAt(8);
        } else if (txtVal.toString().length == 10) {
            res_hourMin = txtVal.toString().charAt(0) + txtVal.charAt(1) + txtVal.charAt(2) + txtVal.charAt(3) + txtVal.charAt(4) + txtVal.charAt(5) + txtVal.charAt(6) + txtVal.charAt(7) + ':' + txtVal.toString().charAt(8)+ txtVal.toString().charAt(9);
        } else {
            res_hourMin = txtVal;
        }

        console.log(res_hourMin, txtVal.toString().charAt(lengthStr), "h m fornat")

        return res_hourMin;
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
    let hours = 0;
    let minutes = 0;
    if(mins <= 0) {
        hours = '00';
        minutes = '00';
    } else {
        hours = Math.floor(mins / 60);
        hours = hours < 10 ? '0' + hours : hours;
        minutes = mins % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
    }
    
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

const total_paid_holiday_cal = (listDSource) => { // get Total Working time of a month
    const myArray = [... listDSource];

    let totalPaidHoliday = 0;

    for (let index = 0; index < myArray.length; index++) {
        if(typeof(myArray[index]['atendance_type']) !== 'undefined'){
            if(myArray[index]['atendance_type'] == 3) {
                totalPaidHoliday += 1;
            }
            
            //console.log(myArray[index]['total_work_time'], "detail tworktime");
        }
          
    }

    return ( totalPaidHoliday );
}

const total_half_holiday_cal = (listDSource) => { // get Total Working time of a month
    const myArray = [... listDSource];

    let totalHalfHoliday = 0;

    for (let index = 0; index < myArray.length; index++) {
        if(typeof(myArray[index]['atendance_type']) !== 'undefined'){
            if(parseInt(myArray[index]['atendance_type']) == 4) {
                totalHalfHoliday += 1;
            }
            
           // console.log(totalHalfHoliday, myArray[index]['atendance_type'], "half holidays");
        }

          
    }

    return ( totalHalfHoliday );
}



const total_special_holiday_cal = (listDSource) => { // get Total Working time of a month
    const myArray = [... listDSource];

    let totalSpecHoliday = 0;

    for (let index = 0; index < myArray.length; index++) {
        if(typeof(myArray[index]['atendance_type']) !== 'undefined'){
            if(parseInt(myArray[index]['atendance_type']) == 8) {
                totalSpecHoliday += 1;
            }
            
           // console.log(totalSpecHoliday, myArray[index]['atendance_type'], "half holidays");
        }

          
    }

    return ( totalSpecHoliday );
}

const total_holiday_work_cal = (listDSource) => { // get Total Working time of a month
    const myArray = [... listDSource];

    let totalHolidayWork = 0;

    for (let index = 0; index < myArray.length; index++) {
        if(typeof(myArray[index]['atendance_type']) !== 'undefined'){
            if(parseInt(myArray[index]['atendance_type']) == 9) {
                totalHolidayWork += 1;
            }
            
           // console.log(totalSpecHoliday, myArray[index]['atendance_type'], "half holidays");
        }

          
    }

    return ( totalHolidayWork );
}

const total_other_work_cal = (listDSource) => { // get Total Working time of a month
    const myArray = [... listDSource];

    let totalOtherWork = 0;

    for (let index = 0; index < myArray.length; index++) {
        if(typeof(myArray[index]['atendance_type']) !== 'undefined'){
            if(parseInt(myArray[index]['atendance_type']) == 11) {
                totalOtherWork += 1;
            }
            
           // console.log(totalSpecHoliday, myArray[index]['atendance_type'], "half holidays");
        }

          
    }

    return ( totalOtherWork );
}

const total_absence_cal = (listDSource) => { // get Total Working time of a month
    const myArray = [... listDSource];

    let totalAbsenceday = 0;

    for (let index = 0; index < myArray.length; index++) {
        if(typeof(myArray[index]['atendance_type']) !== 'undefined'){
            if(parseInt(myArray[index]['atendance_type']) == 5) {
                totalAbsenceday += 1;
            }
            
          //  console.log(totalAbsenceday, myArray[index]['atendance_type'], "half holidays");
        }

          
    }

    return ( totalAbsenceday );
}

const hourToMins = (mins = '00:00') => { //conver to minutes from hour format
    let res_mins = 0;
   // console.log(typeof(mins), mins, " what is this?")
    if(mins.toString().length > 0 && typeof(mins) !== 'undefined' ){
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

const result_total_work_time_cal = (listDSource) => { // get Total Working time of a month
    const myArray = [... listDSource];

    let totalWorkTime = 0;

    for (let index = 0; index < myArray.length; index++) {
        if(typeof(myArray[index]['total_work_time']) !== 'undefined'){
            totalWorkTime += hourToMins(myArray[index]['total_work_time']);
            //console.log(myArray[index]['total_work_time'], "detail tworktime");
        }
    }

    if(total_half_holiday_cal(listDSource) > 0) {
        totalWorkTime += (total_half_holiday_cal(listDSource) * 240);
    }

    if(total_special_holiday_cal(listDSource) > 0) {
        totalWorkTime += (total_special_holiday_cal(listDSource) * 480);
    }


    if(total_paid_holiday_cal(listDSource) > 0) {
        totalWorkTime += (total_paid_holiday_cal(listDSource) * 480);
    }

    return ( totalWorkTime );
}

const total_deduction_time_cal = (listDSource) => { // get Total deduction time of a month
    const myArray = [... listDSource];

    let deduction_time = 0;

    for (let index = 0; index < myArray.length; index++) {
        if(typeof(myArray[index]['deduction_time']) !== 'undefined' && parseInt(myArray[index]['deduction_time']) > 0){
            deduction_time += hourToMins(myArray[index]['deduction_time']);
            //console.log(myArray[index]['total_work_time'], "detail tworktime");
        }
 
    }

    return ( deduction_time );
}

const addNewMemoMsg = (txtInput) => {
    
    let toDate = new Date();
    let toDayDate = moment(toDate).format('YYYY-MM-DD HH:mm:ss').toString();
    let jtztoDay = momentz(toDayDate).tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss').toString();
    memberInfo.note = memberInfo.note + '\r\n' + '(' + jtztoDay + ' ' + memberInfo.last_name + ' ' + memberInfo.first_name + ')' + '\r\n' + txtInput;
    setMemberInfo(memberInfo);
    setMemberNote('')
    console.log(memberNote, memberInfo, "Memo message");
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

const saveLoadTranTotal = () => {
    let tTotal = 0;

    let myTran = [... listTransport];

    for (let index = 0; index < myTran.length; index++) {
        tTotal = tTotal + parseInt(myTran[index].amount);
    }

   // console.log(tTotal, "first load customer total");

   return tTotal;
}

const CustomerDetailBox = (props) => { // customer detail box
    let cmIndex = props.dataSeleted;
    return (
        <View style={{ padding: 10 }}>
            <View style={[styles.myRow]}>
                <View style={styles.columPd}>
                    <Text style={{ color: colors.text }}>{ langStore.customer_name }</Text>
                </View>
                <View style={styles.columPd}>
                    <Text style={{ color: colors.text }}>{ listCustomer[cmIndex]['client_name'] }</Text>
                </View>
            </View>
            <View style={styles.myRow}>
                <View style={styles.columPd}>
                    <Text style={{ color: colors.text }}>{ langStore.project_name }</Text>
                </View>
                <View style={styles.columPd}>
                    <Text style={{ color: colors.text }}>{ listCustomer[cmIndex]['project_name'] }</Text>
                </View>
            </View>
            <View style={styles.myRow}>
                <View style={styles.columPd}>
                    <Text style={{ color: colors.text }}>{ langStore.contract_period }</Text>
                </View>
                <View style={styles.columPd}>
                    <Text style={{ color: colors.text }}>{ moment(listCustomer[cmIndex]['start_contract_date']).format('YYYY-MM-DD') } ~ { moment(listCustomer[cmIndex]['end_contract_date']).format('YYYY-MM-DD') }</Text>
                </View>
            </View>
        </View>
    )
}

const customerActualTotalCal = (cindex) => { // get customer Actual Total hours of a month
    const myCustomArray = [... listCustomer];

    let actual_hour = 0;

    for (let index = 0; index < myCustomArray[cindex].customer_workreport_items.length; index++) {
        if(myCustomArray.length > 0){
            actual_hour += hourToMins(myCustomArray[cindex].customer_workreport_items[index]['customer_total_work_time']);
           // console.log(myCustomArray[cindex].customer_workreport_items[index]['customer_total_work_time'], "customer_total_work_time");
        }
 
    }

    myCustomArray[cindex].mng_clt_total_work_time = convertMinsToTime(actual_hour);

    setlistCustomer(myCustomArray);

    return ( actual_hour );
}


    const holidayCHeck = (hlday) => {
        let res = false;
        if(hlday == 1) {
            res = false;
        } else if(hlday == 2){
            res = false;
        } else if(hlday == 3){
            res = false;
        } else if(hlday == 5){
            res = false;
        } else if(hlday == 8){
            res = false;
        } else if(hlday == 10){
            res = false;
        } else {
            res = true;
        }

        return res;


    }

    const customTabOnOff = (index) => {
        if(index == 0) {
            return isCustomerTg;
        } else if (index == 1) {
            return isCustomerTg2;
        } else if (index == 2) {
            return isCustomerTg3;
        } else if (index == 3) {
            return isCustomerTg4;
        } else if (index == 4) {
            return isCustomerTg5;
        }

    }

    const time_convert_total = (num) => {

        var hours = Math.floor(num / 60);
    
        var minutes = num % 60;
    
        return padLeadingZeros(hours, 2) + ":" + padLeadingZeros(minutes, 2);
    
    }

    const padLeadingZeros = (num, size) => {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }

    const getReload = () => {
        const { pdfYear, pdfMonth, pdfBack} = route.params; 

        console.log(pdfYear, pdfMonth, pdfBack, "All params")
    }


    useEffect(() => {
        setTimeout(() => {
            languageApi(); //getting workreport data in first load
            getWorkReportContent();
            screenChange();

            const unsubscribe = navigation.addListener('focus', () => {
              
                // Call any action
                checktoRefresh();
                languageApi(); //getting workreport data
                
                screenChange();
            });

            workreport_history(); //get history log
            workPatternUpdate();

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
            <ScrollView style={ styles.container }
                keyboardShouldPersistTaps='handled'
            >
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
                        <View style={[styles.colums, { width: '38%' }]}>
                            <SearchBoxYear dataYear={options} dataSeleted={useYear} />
                        </View>
                        {/* <View style={[styles.smcolums, { marginTop: 15 }]}><Text>/</Text></View> */}
                        <View style={[styles.colums, { width: '32%' }]}>
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
                    {
                        patternUpdate.length > 0 ? (
                            patternUpdate.map((item, key) => {
                                if (item.status == 1) {
                                    return(
                                        <View key={key} style={styles.historyLog}>
                                            <Text style={{color: '#1b3c26'}}>[{item.start_contract_date.old}] { langStore.history_start_contract_date } ( { item.start_contract_date.old + ' => ' + item.start_contract_date.new } )</Text>
                                        </View>
                                    )
                                } else if (item.status == 2) {
                                    return(
                                        <View key={key} style={styles.historyLog}>
                                            <Text style={{color: '#1b3c26'}}>[{item.end_contract_date.old}] { langStore.history_end_contract_date } ( { item.end_contract_date.old + ' => ' + item.end_contract_date.new } )</Text>
                                        </View>
                                    )
                                } else if (item.status == 3) {
                                    return(
                                        <View key={key} style={styles.historyLog}>
                                            <Text style={{color: '#1b3c26'}}>[{item.min_width_time.old}] { langStore.history_min_width_time } ( { item.min_width_time.old + ' => ' + item.min_width_time.new } )</Text>
                                        </View>
                                    )
                                } else if (item.status == 4) {
                                    return(
                                        <View key={key} style={styles.historyLog}>
                                            <Text style={{color: '#1b3c26'}}>[{item.max_width_time.old}] { langStore.history_max_width_time } ( { item.max_width_time.old + ' => ' + item.max_width_time.new } )</Text>
                                        </View>
                                    )
                                } else if (item.status == 5) {
                                    return(
                                        <View key={key} style={styles.historyLog}>
                                            <Text style={{color: '#1b3c26'}}>[{item.start_work_time.old}] { langStore.history_start_work_time } ( { item.start_work_time.old + ' => ' + item.start_work_time.new } )</Text>
                                        </View>
                                    )
                                } else if (item.status == 6) {
                                    return(
                                        <View key={key} style={styles.historyLog}>
                                            <Text style={{color: '#1b3c26'}}>[{item.end_work_time.old}] { langStore.history_end_work_time } ( { item.end_work_time.old + ' => ' + item.end_work_time.new } )</Text>
                                        </View>
                                    )
                                } else if (item.status == 7) {
                                    return(
                                        <View key={key} style={styles.historyLog}>
                                            <Text style={{color: '#1b3c26'}}>[{item.break_time.old}] { langStore.history_break_time } ( { item.break_time.old + ' => ' + item.break_time.new } )</Text>
                                        </View>
                                    )
                                } else if (item.status == 8) {
                                    return(
                                        <View key={key} style={styles.historyLog}>
                                            <Text style={{color: '#1b3c26'}}>[{item.work_time.old}] { langStore.history_work_time } ( { item.work_time.old + ' => ' + item.work_time.new } )</Text>
                                        </View>
                                    )
                                } 
                                
                            })
                        ):
                        <Text>&nbsp;</Text>
                    }

                    {
                        (workReportHistory.length > 0) ? (
                            workReportHistory.map((item, key) => {
                                
                                    if(key == 0) {
                                       return(
                                           <View key={key} style={styles.historyLog}>
                                               <Text style={{color: '#1b3c26'}}>
                                                   <Text style={{fontWeight: 'bold'}}>{ '[' + item.end_contract_date.individual_contract_no + ']' } </Text> 
                                                   { langStore.history_start_contract_date }</Text>
                                               <Text style={{color: '#1b3c26', fontWeight: 'bold'}}>({item.end_contract_date.old + ' => ' + item.end_contract_date.new})</Text>
                                           </View>
                                        )
                                    } else {
                                       return(
                                           <View key={key} style={styles.historyLog}>
                                               <Text style={{color: '#1b3c26'}}>
                                                   <Text style={{fontWeight: 'bold'}}>{ '[' + item.end_contract_date.individual_contract_no + ']' }</Text> 
                                                   { langStore.history_end_contract_date }</Text>
                                               <Text style={{color: '#1b3c26', fontWeight: 'bold'}}>({item.end_contract_date.old + ' => ' + item.end_contract_date.new})</Text>
                                           </View>
                                        ) 
                                    }
                                  
                               
                           })
                        ): <Text style={{display: 'none'}}>&nbsp;</Text>
 
                    }
                    
                    <View style={ styles.deadlinetxt}>
                        <Text style={{ color: '#66666f' }}>{ langStore.the_application_deadline_for_wr_is_until_the_morning_of_the_1st_business_day_be_careful_not_to_forget_to_apply }</Text>
                    </View>
                    <View style={[styles.myRow, {marginBottom: 15}]}>
                        { 
                            typeof(memberInfo.status) !== 'undefined' ? (
                                memberInfo.status == 1 ? (
                                    <Text style={[styles.statusRow, {marginLeft: 5, textTransform: 'uppercase'}]}><Text style={{color: '#666'}}>{langStore.status}:</Text> &nbsp;&nbsp;&nbsp;<Text style={{color: 'red'}}>{ langStore.not_applied }</Text></Text>
                                ): memberInfo.status == 2 ? (
                                    <Text style={[styles.statusRow, {marginLeft: 5, textTransform: 'uppercase'}]}><Text style={{color: '#666'}}>{langStore.status}:</Text> &nbsp;&nbsp;&nbsp;<Text style={{color: 'green'}}>{ langStore.applied } { moment(memberInfo.status_date).format('YYYY/MM/DD') }</Text></Text>
                                ): memberInfo.status == 3 ? (
                                    <Text style={[styles.statusRow, {marginLeft: 5, textTransform: 'uppercase'}]}><Text style={{color: '#666'}}>{langStore.status}:</Text> &nbsp;&nbsp;&nbsp;<Text style={{color: 'greenyellow'}}>{ langStore.remand }</Text></Text>
                                ): memberInfo.status == 4 ? (
                                    <Text style={[styles.statusRow, {marginLeft: 5, textTransform: 'uppercase'}]}><Text style={{color: '#666'}}>{langStore.status}:</Text> &nbsp;&nbsp;&nbsp;<Text style={{color: 'navy'}}>{ langStore.accepted } { memberInfo.confirm_name } { moment(memberInfo.status_date).format('YYYY/MM/DD') }</Text></Text>
                                ): memberInfo.status == 0 ? (
                                    <Text style={[styles.statusRow, {marginLeft: 5, textTransform: 'uppercase'}]}><Text style={{color: '#666'}}>{langStore.status}:</Text> &nbsp;&nbsp;&nbsp;{ langStore.not_produced }</Text>
                                ): memberInfo.status == '' ? (
                                    <Text style={[styles.statusRow, {marginLeft: 5, textTransform: 'uppercase'}]}><Text style={{color: '#666'}}>{langStore.status}:</Text> &nbsp;&nbsp;&nbsp;</Text>
                                ):
                                <Text style={{ display: 'none'}}></Text>
                            ):
                            <Text style={{ display: 'none'}}></Text>
                            
                        }
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
                        <View style={[styles.colums, {width: '65%', marginTop: 20}]}>
                            <Text style={[{marginLeft: 10, color: '#666', fontWeight: 'bold', fontSize: 17}]}>{langStore.transportation_expenses_sub_nav}</Text>
                        </View>
                        <View style={[styles.colums, {width: '35%'}]}>
                            
                            { 
                                listTransport.length > 0 && tranOnoff == null ? (
                                    <TransportExpenseList dataYesNo={ langEnJp == 'en' ? yesNoList : yesNoListJP} dataYNSelect={1} /> 
                                ):
                                listTransport.length == 0 && tranOnoff == null ? (
                                    <TransportExpenseList dataYesNo={ langEnJp == 'en' ? yesNoList : yesNoListJP} dataYNSelect={0} /> 
                                ): 
                                <TransportExpenseList dataYesNo={ langEnJp == 'en' ? yesNoList : yesNoListJP} dataYNSelect={tranOnoff} />
                            }
                            {
                                 listTransport.length == 0 && tranOnoff == 1 ? (
                                    <Text style={styles.errorMsg}>{ langStore.please_select_no }</Text>
                                ):
                                listTransport.length > 0 && tranOnoff == 0 ? (
                                    <Text style={styles.errorMsg}>{ langStore.please_select_yes }</Text>
                                ): <Text style={{display: 'none'}}>&nbsp;</Text>
                            }
                            
                        </View>
                    </View>
                   
                    <ScrollView horizontal={true} style={{ marginBottom: 15 }}>
                        <TouchableOpacity style={ isWorkReportTg ? styles.tabsActive : styles.tabs } onPress={ () => switchScreen(1) }>
                            <Text style={{color: isWorkReportTg ? '#2ec1a3' : colors.bluetext}}>{langStore.work_report}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ isTranSportTg ? styles.tabsActive : styles.tabs } onPress={ () => switchScreen(2) }>
                            <Text style={{color: isTranSportTg ? '#2ec1a3' : colors.bluetext}}>{langStore.transportation_expenses_sub_nav}</Text>
                        </TouchableOpacity>
                        
                        
                        {
                           listCustomer.map((item, key) => {
                               
                            return(
                                <View key={key}>
                                    <TouchableOpacity style={ customTabOnOff(key) ? styles.tabsActive : styles.tabs } onPress={ () => key == 0 ? switchScreen(3) : key == 1 ? switchScreen(5) : key == 2 ? switchScreen(6) : key == 3 ? switchScreen(7) : key == 4 ? switchScreen(8) : '' }>
                                        <Text style={{color: isCustomerTg5 ? '#2ec1a3' : colors.bluetext}}>{ langStore.customer_work_report } ({ item.project_name } )</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                           })
                        }
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
                                <View style={{ width: '50%' }}>
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
                                    <Text style={{ color: '#666' }}>{ langStore.expand_dates }</Text>
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
                                    <Text style={{ color: '#666' }}>{ langStore.collapse_dates }</Text>
                                </View>
                            </TouchableRipple>
                        </View>
                    </View>

                    {/* <View style={[styles.myRow, {marginBottom: 15, paddingBottom: 15, display: isWorkReportTg ? 'flex' : 'none' }]}>
                        <View style={styles.midColum}>
                            <Text style={[{marginLeft: 10, color: '#666', fontWeight: 'bold'}]}>
                                <Text style={{ color: '#ccc'}}>{ langStore.jump_to }:</Text> { langStore.total } &nbsp;&nbsp;&nbsp; { langStore.result }
                            </Text>
                        </View>
                    </View> */}
                    
                    <ScrollView  style={{ display: isWorkReportTg ? 'flex' : 'none' }}>
                        {

                            listDataSource.map((item, key) => {

                                //console.log(moment.duration(item.report_date).asMinutes(), " hello");
                                if(isWorkReportTg) {
                                    // public holiday                 shift holiday                paid holiday                  Absence                      special holiday               Substitute Holiday         
                                    if( ((item.atendance_type == 1) || (item.atendance_type == 2) || (item.atendance_type == 3) || (item.atendance_type == 5) || (item.atendance_type == 8) || (item.atendance_type == 10)) && isWorkTimeHoliday ){
                                        return(
                                            // weekend block start
                                            <View key={key} style={[styles.workingHour, { borderColor: '#e3e3e3' }]}>
                                                <TouchableOpacity 
                                                    style={[styles.workingHourHead, styles.myRow, { backgroundColor: '#e3e3e3', borderRadius: (isToggle || item.isExpanded ) ? 0 : 15 } ]} 
                                                    onPress={ () => updateSingleDate(key) }
                                                >
                                                    <View style={{ width: '9%', paddingTop: 5 }}>
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
                                                        <Text style={ styles.dateBlk }>{moment(item.report_date).format('DD/MM/YYYY')} { dayNamelangSwitch(moment(item.report_date).format('ddd'))}</Text>
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
                                                    <View style={ [styles.workingHourContent, {display: (isToggle || item.isExpanded) ? 'flex' : 'none', backgroundColor: '#fff', borderBottomRightRadius: 15, borderBottomLeftRadius: 15}] }>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{langStore.work_hours}</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                
                                                            </View>
                                                        </View>
                                                        
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{langStore.wr_emp_table_break_time_min}</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                            
                                                            </View>
                                                        </View>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{langStore.wr_emp_table_midnight_break_min}</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                
                                                            </View>
                                                        </View>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{ langStore.wr_emp_table_actual_working_hours }</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '45%' }}>
                                                                        <TextInput 
                                                                            value={item.total_work_time.length > 5 ? item.total_work_time.slice(0, -3) : item.total_work_time} 
                                                                            textAlign={'center'} 
                                                                            editable={false}
                                                                            selectTextOnFocus={false} 
                                                                            style={ styles.textInputStyle } 
                                                                        />
                                                                    </View>
                                                                    <View style={{ padding: 7 }}>
                                                                        <Text>&nbsp;</Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{ langStore.wr_emp_table_overtime_hours }</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '45%' }}>
                                                                        <TextInput 
                                                                            value={'00:00'} 
                                                                            textAlign={'center'} 
                                                                            style={ styles.textInputStyle } 
                                                                            editable={false}
                                                                            selectTextOnFocus={false}  
                                                                        />
                                                                    </View>
                                                                    <View style={{ padding: 7 }}>
                                                                        <Text>&nbsp;</Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{ langStore.wr_emp_table_midnight_working_hours }</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '45%' }}>
                                                                        <TextInput value={'00:00'} textAlign={'center'} style={ styles.textInputStyle } 
                                                                            editable={false}
                                                                            selectTextOnFocus={false}  
                                                                        />
                                                                    </View>
                                                                    <View style={{ padding: 7 }}>
                                                                        <Text>&nbsp;</Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{ langStore.wr_emp_table_deduction_time }</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '45%' }}>
                                                                        <TextInput value={'00:00'} textAlign={'center'} style={ styles.textInputStyle } 
                                                                            editable={false}
                                                                            selectTextOnFocus={false}  
                                                                        />
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
                                                                    <AttendTypeDropdown dataFromParent={attendType} dataSeleted={item.atendance_type} dataKey={key} />
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
                                                                        <TextInput value={item.reason} 
                                                                            style={ styles.textInputStyle } 
                                                                            editable={memberInfo.status == 1 || memberInfo.status == 3 ? true: false}
                                                                            onChangeText={(val) => textInputReason(key,val)}
                                                                        />
                                                                        
                                                                        {
                                                                            item.holiday_name.length > 0 ? (
                                                                                <Text style={[{ width: '100%', textAlign: 'center' }]}>{ item.holiday_name }</Text>
                                                                            ):
                                                                            <Text style={{ display: 'none' }}>&nbsp;</Text>
                                                                        }
                                                                        { item.reasonmsg ? 
                                                                            <Text style={[styles.errorMsg ,{ width: '100%', textAlign: 'center' }]}>{langStore.not_entered}</Text>
                                                                        : <Text>&nbsp;</Text>
                                                                        }
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
                        
                                        )
                                        
                                    } else if(moment.duration(item.total_work_time.toString()).asMinutes() > 0 && isWorkTimeEnter ) {
                                        //working hour entered
                                        return(
                                            <View key={key} style={[styles.workingHour, { borderColor: '#f2f2f2' }]}>
                                                <TouchableOpacity
                                                    style={[styles.workingHourHead, styles.myRow, { backgroundColor: '#f2f2f2', borderRadius: (isToggle || item.isExpanded) ? 0 : 15 } ]} 
                                                    onPress = { () => updateSingleDate(key) }
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
                                                        <Text style={ styles.dateBlk }>{moment(item.report_date).format('DD/MM/YYYY')} { dayNamelangSwitch(moment(item.report_date).format('ddd'))}</Text>
                                                        <Text style={{ color: '#7c7277' }}>{ langStore.wkhour_entered }</Text>
                                                    </View>
                                                    <View style={{ width: '9%', paddingLeft: 5, paddingTop: 5 }}>
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
                                                {   (isToggle || item.isExpanded) ? (
                                                    <View style={ [styles.workingHourContent, {display: (isToggle || item.isExpanded) ? 'flex' : 'none', backgroundColor: '#fff', borderBottomRightRadius: 15, borderBottomLeftRadius: 15}] }>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{langStore.work_hours}</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '45%' }}>
                                                                        {/* <TextInput value={item.start_time} textAlign={'center'} style={ styles.textInputStyle } /> */}
                                                                        <TouchableRipple onPress={() => showTimepicker(key, 'start_time')} style={ [styles.textInputStyle, { padding: 7 }] }>
                                                                            <Text>{ item.start_time.length > 5 ? item.start_time.slice(0, -3) : item.start_time}</Text>
                                                                        </TouchableRipple>
                                                                        { (memberInfo.status == 1 || memberInfo.status == 3) && show && (keyCheck == key) && (typeTime == 'start_time') && ( 
                                                                            <DateTimePicker
                                                                                value={date}
                                                                                mode="time"
                                                                                is24Hour={true}
                                                                                display="spinner"
                                                                                onChange={(event, date) => {onChange(event, date, key, 'start_time')}}
                                                                            />
                                                                        )}
                                                                    </View>
                                                                    <View style={{ width: '10%' }}>
                                                                        <Text style={{ paddingTop: 7, paddingLeft: 5 }}>/</Text>
                                                                    </View>
                                                                    <View style={{ width: '45%' }}>
                                                                        {/* <TextInput value={item.end_time} textAlign={'center'} style={ styles.textInputStyle } /> */}
                                                                        <TouchableRipple onPress={() => showTimepicker(key, 'end_time')} style={ [styles.textInputStyle, { padding: 7 }] }>
                                                                            <Text>{ item.end_time.length > 5 ? item.end_time.slice(0, -3) : item.end_time}</Text>
                                                                        </TouchableRipple>
                                                                        { (memberInfo.status == 1 || memberInfo.status == 3) && show && (keyCheck == key) && (typeTime == 'end_time') && ( 
                                                                            <DateTimePicker
                                                                                value={date}
                                                                                mode="time"
                                                                                is24Hour={true}
                                                                                display="spinner"
                                                                                onChange={(event, date) => {onChange(event, date, key, 'end_time')}}
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
                                                                    <PworkhourDropdown dataFromParent={listProjectInfo}  dataSeleted={item.pattern} dataSelectKey={key} dataReportDate={item.report_date} />
                                                                  ) : 
                                                                    <TouchableOpacity 
                                                                        onPress = { () => { addStandardTime(key) } }
                                                                        disabled={memberInfo.status == 1 || memberInfo.status == 3 ? false : true }
                                                                        style={{ borderColor: '#fff', borderWidth: 1, borderRadius: 11 }}
                                                                    >
                                                                        <Text style={{ width: '100%', backgroundColor: '#2d9f88', padding: 5, borderRadius: 10, textAlign: 'center', color: '#fff'}}>{ langStore.standard_hours }</Text>
                                                                    </TouchableOpacity>
                                                                }
                                                                
                                                            </View>
                                                        </View>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{ langStore.wr_emp_table_break_time_min }</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '30%' }}>
                                                                        <TextInput 
                                                                            value={item.total_break_time.toString()} 
                                                                            keyboardType='phone-pad' 
                                                                            onChangeText={txt => replaceBKhour(key, 'total_break_time', txt)} 
                                                                            textAlign={'center'} 
                                                                            onEndEditing={(e) => replaceChangeVal(key, 'total_break_time', e.nativeEvent.text) }
                                                                            editable={memberInfo.status == 1 || memberInfo.status == 3 ? true: false}
                                                                            //onSubmitEditing={Keyboard.dismiss}
                                                                            style={ styles.textInputStyle } 
                                                                        />
                                                                        
                                                                    </View>
                                                                    <View style={{ padding: 7 }}>
                                                                        <Text>{ langStore.minute }</Text>
                                                                    </View>
                                                                    {
                                                                        item.breakTimeError ? (
                                                                            <Text style={styles.errorMsg}>{ langStore.invalid_value }</Text>
                                                                        ):
                                                                        <Text style={{ display: 'none' }}>&nbsp;</Text>
                                                                    }
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{ langStore.wr_emp_table_midnight_break_min }</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '30%' }}>
                                                                        <TextInput 
                                                                            value={item.night_break_time.toString()} 
                                                                            keyboardType='phone-pad' 
                                                                            onChangeText={txt => updateNightBreakTime(key, 'night_break_time', txt) } 
                                                                            onEndEditing={(e) => replaceNightBT(key, 'night_break_time',e.nativeEvent.text)}
                                                                            textAlign={'center'} 
                                                                            //onSubmitEditing={Keyboard.dismiss}
                                                                            editable={memberInfo.status == 1 || memberInfo.status == 3 ? true: false}
                                                                            style={ styles.textInputStyle } 
                                                                        />
                                                                    </View>
                                                                    <View style={{ padding: 7 }}>
                                                                        <Text>{ langStore.minute }</Text>
                                                                    </View>
                                                                    {
                                                                        item.night_breaktime_error ? (
                                                                            <Text style={styles.errorMsg}>{ langStore.invalid_value }</Text>
                                                                        ):
                                                                        <Text style={{ display: 'none' }}>&nbsp;</Text>
                                                                    }
                                                                    
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{ langStore.wr_emp_table_actual_working_hours }</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '45%' }}>
                                                                        <TextInput value={item.total_work_time.length > 5 ? item.total_work_time.slice(0, -3) : item.total_work_time } editable = {false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                                                    </View>
                                                                    <View style={{ padding: 7 }}>
                                                                        <Text>&nbsp;</Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{ langStore.wr_emp_table_overtime_hours }</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '45%' }}>
                                                                        <TextInput value={item.over_work_time.toString().length > 5 ? item.over_work_time.slice(0, -3) : item.over_work_time.toString() } editable = {false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                                                    </View>
                                                                    <View style={{ padding: 7 }}>
                                                                        <Text>&nbsp;</Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{ langStore.wr_emp_table_midnight_working_hours } </Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '45%' }}>
                                                                        <TextInput value={item.night_work_time.toString().length > 5 ? item.night_work_time.slice(0, -3) : item.night_work_time.toString() } editable={false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                                                    </View>
                                                                    <View style={{ padding: 7 }}>
                                                                        <Text>&nbsp;</Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{ langStore.deduction_hours }</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '45%' }}>
                                                                        <TextInput value={item.deduction_time.length > 5 ? item.deduction_time.slice(0, -3) : item.deduction_time } editable={false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                                                        
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
                                                                        <AttendTypeDropdown dataFromParent={attendType} dataSeleted={item.atendance_type} dataKey={key} />
                                                                        
                                                                        : <Text>&nbsp;</Text>
                                                                    }
                                                                    {
                                                                        (item.hasOwnProperty('early') && item.early == true) ? (
                                                                            <Text style={styles.errorMsg}>{ langStore.choose_early }</Text>
                                                                        ):
                                                                        (item.hasOwnProperty('delay') && item.delay == true) ? (
                                                                            <Text style={styles.errorMsg}>{ langStore.choose_delay }</Text>
                                                                        ):
                                                                        <Text style={{display: 'none'}}>&nbsp;</Text>

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
                                                                            value={item.reason} 
                                                                            style={ styles.textInputStyle } 
                                                                            onChangeText={(val) => textInputReason(key,val)}
                                                                            editable={memberInfo.status == 1 || memberInfo.status == 3 ? true: false}
                                                                        />
                                                                        {
                                                                            item.holiday_name.length > 0 ? (
                                                                                <Text>{ item.holiday_name }</Text>
                                                                            ):
                                                                            <Text style={{ display: 'none' }}>&nbsp;</Text>
                                                                        }
                                                                        {
                                                                            ( item.reasonmsg == true) ? (
                                                                                <Text style={styles.errorMsg}>{ langStore.not_entered }</Text>
                                                                            ):
                                                                            <Text style={{display: 'none'}}>&nbsp;</Text>

                                                                        }
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
                                        )

                                    } else if ( (moment.duration(item.total_work_time.toString()).asMinutes() == 0 ) && isWorkTimeNotEnter && holidayCHeck(item.atendance_type)) {
                                        
                                        return(
                                            // weekday with blue block start
                                            <View key={key} style={[styles.workingHour, { borderColor: '#d6f2ec' }]}>
                                                <TouchableOpacity style={[styles.workingHourHead, styles.myRow, { backgroundColor: '#d6f2ec', borderRadius: (isToggle || item.isExpanded ) ? 0 : 15 } ]} 
                                                    onPress = { () => updateSingleDate(key) }
                                                >
                                                    <View style={{ width: '10%', paddingTop: 5 }}>
                                                        <Text style={ styles.dateBlk }> !</Text>
                                                    </View>
                                                    <View style={{ width: '80%' }}>
                                                        <Text style={ styles.dateBlk }>{moment(item.report_date).format('DD/MM/YYYY')} { dayNamelangSwitch(moment(item.report_date).format('ddd'))}</Text>
                                                        <Text style={{ color: '#7c7277' }}>{ langStore.wkhour_not_entered }</Text>
                                                    </View>
                                                    <View style={{ width: '9%', paddingLeft: 5, paddingTop: 5 }}>
                                                        
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
                                                    <View style={ [styles.workingHourContent, {display: ( isToggle || item.isExpanded ) ? 'flex': 'none', backgroundColor: '#fff', borderBottomRightRadius: 15, borderBottomLeftRadius: 15} ] } >
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{langStore.work_hours}</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '45%' }}>
                                                                        {/* <TextInput value={item.start_time} textAlign={'center'} onChangeText={txt => replaceChangeVal(key, 'start_time', txt)} style={ styles.textInputStyle } /> */}
                                                                        <TouchableRipple onPress={() => showTimepicker(key, 'start_time')} style={ [styles.textInputStyle, { padding: 7 }] }>
                                                                            <Text>{item.start_time.toString().length > 5 ? item.start_time.slice(0, -3) : item.start_time.toString()}</Text>
                                                                        </TouchableRipple>
                                                                        { (memberInfo.status == 1 || memberInfo.status == 3) && show && (keyCheck == key) && (typeTime == 'start_time') && ( 
                                                                            <DateTimePicker
                                                                                value={date}
                                                                                mode="time"
                                                                                is24Hour={true}
                                                                                display="spinner"
                                                                                onChange={(event, date) => {onChange(event, date, key, 'start_time')}}
                                                                            />
                                                                        )}
                                                                    </View>
                                                                    <View style={{ width: '10%' }}>
                                                                        <Text style={{ paddingTop: 7, paddingLeft: 5 }}>/</Text>
                                                                    </View>
                                                                    <View style={{ width: '45%' }}>
                                                                        {/* <TextInput value={item.end_time} textAlign={'center'} onChangeText={txt => replaceChangeVal(key, 'end_time', txt)} style={ styles.textInputStyle } /> */}
                                                                        <TouchableRipple onPress={() => showTimepicker(key, 'end_time')} style={ [styles.textInputStyle, { padding: 7 }] }>
                                                                            <Text>{item.end_time.length > 5 ? item.end_time.slice(0, -3) : item.end_time }</Text>
                                                                        </TouchableRipple>
                                                                        { (memberInfo.status == 1 || memberInfo.status == 3) && show && (keyCheck == key) && (typeTime == 'end_time') && ( 
                                                                            <DateTimePicker
                                                                                value={date}
                                                                                mode="time"
                                                                                is24Hour={true}
                                                                                display="spinner"
                                                                                onChange={(event, date) => {onChange(event, date, key, 'end_time')}}
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
                                                                { ( listProjectInfo.length > 0) && item.isExpanded ? (
                                                                    <PworkhourDropdown dataFromParent={listProjectInfo}  dataSeleted={99} dataSelectKey={key} dataReportDate={item.report_date} />
                                                                ) : 
                                                                    <TouchableOpacity 
                                                                        disabled={memberInfo.status == 1 || memberInfo.status == 3 ? false : true}
                                                                        onPress = { () => { addStandardTime(key) } }
                                                                        style={{ borderColor: '#fff', borderWidth: 1, borderRadius: 11 }}
                                                                    >
                                                                        <Text style={{ width: '100%', backgroundColor: '#2d9f88', padding: 5, borderRadius: 10, textAlign: 'center', color: '#fff'}} >{ langStore.standard_hours }</Text>
                                                                    </TouchableOpacity>
                                                                }
                                                            </View>
                                                        </View>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{ langStore.wr_emp_table_break_time_min }</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '30%' }}>
                                                                        <TextInput 
                                                                            value={item.total_break_time.toString()} 
                                                                            keyboardType='phone-pad' textAlign={'center'} 
                                                                            onChangeText={txt => replaceChangeVal(key, 'total_break_time', txt)} 
                                                                            editable={memberInfo.status == 1 || memberInfo.status == 1 ? true: false}
                                                                            style={[ styles.textInputStyle ]} 
                                                                        />
                                                                    </View>
                                                                    <View style={{ padding: 7 }}>
                                                                        <Text>{ langStore.minute }</Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{ langStore.wr_emp_table_midnight_break_min }</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '30%' }}>
                                                                        <TextInput 
                                                                            value={item.night_break_time.toString()} 
                                                                            keyboardType='phone-pad' textAlign={'center'} 
                                                                            editable={memberInfo.status == 1 || memberInfo.status == 3 ? true: false}
                                                                            style={ styles.textInputStyle } />
                                                                    </View>
                                                                    <View style={{ padding: 7 }}>
                                                                        <Text>{ langStore.minute }</Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{ langStore.wr_emp_table_actual_working_hours }</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '45%' }}>
                                                                        <TextInput value={item.total_work_time.length > 5 ? item.total_work_time.slice(0, -3) : item.total_work_time } editable={false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                                                    </View>
                                                                    <View style={{ padding: 7 }}>
                                                                        <Text>&nbsp;</Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{ langStore.wr_emp_table_overtime_hours }</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '45%' }}>
                                                                        <TextInput value={item.over_work_time.toString().length > 5 ? item.over_work_time.slice(0, -3) : item.over_work_time.toString() } editable={false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                                                    </View>
                                                                    <View style={{ padding: 7 }}>
                                                                        <Text>&nbsp;</Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{ langStore.wr_emp_table_midnight_working_hours } </Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '45%' }}>
                                                                        <TextInput value={item.night_work_time.length > 5 ? item.night_work_time.slice(0, -3) : item.night_work_time } editable={false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                                                    </View>
                                                                    <View style={{ padding: 7 }}>
                                                                        <Text>&nbsp;</Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={styles.myRow}>
                                                            <View style={styles.columPd}>
                                                                <Text>{ langStore.deduction_hours }</Text>
                                                            </View>
                                                            <View style={styles.columPd}>
                                                                <View style={ styles.myRow }>
                                                                    <View style={{ width: '45%' }}>
                                                                        <TextInput value={item.deduction_time.length > 5 ? item.deduction_time.slice(0, -3) : item.deduction_time } editable={false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
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
                                                                        <AttendTypeDropdown dataFromParent={attendType} dataSeleted={item.atendance_type} dataKey={key} />
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
                                                                            value={item.reason} 
                                                                            style={ styles.textInputStyle }
                                                                            editable={ memberInfo.status == 1 || memberInfo.status == 3 ? true : false }
                                                                            onChangeText={(val) => textInputReason(key,val)} 
                                                                        />
                                                                    </View>
                                                                    {
                                                                        item.holiday_name.length > 0 ? (
                                                                            <Text>{ item.holiday_name }</Text>
                                                                        ):
                                                                        <Text style={{ display: 'none' }}>&nbsp;</Text>
                                                                    }
                                                                </View>
                                                            </View>
                                                        </View>
                                                        
                                                    </View> 
                                                    )
                                                    :
                                                    <Text style={{display: 'none'}}>&nbsp;</Text>
                                                }
                                            </View>
                                        );
                                    }

                                }
                                
                                
                            })
                        }

                    
                        {/* Total blok start */}
                        <View style={styles.totalResult}>
                            <View
                                style={[styles.workingHourHead, styles.myRow, { borderBottomColor: '#ddd', borderBottomWidth: 1 } ]} 
                            >
                                <View style={{ width: '90%' }}>
                                    <Text style={ styles.dateBlk }>{ langStore.total }</Text>
                                </View>
                                <View style={{ width: '10%', paddingLeft: 5 }}>
                                    { isToggle ? (
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
                            </View>
                            <View style={ [styles.workingHourContent, {display: 'flex'}] }>
                                <View style={[styles.myRow]}>
                                    <View style={[styles.columPd, {width: '80%'}]}>
                                        <Text style={{ color: colors.text }}>{langStore.work_hours}</Text>
                                    </View>
                                    <View style={[styles.columPd, {width: '20%'}]}>
                                        <Text style={{ alignItems: 'center', alignContent: 'center', color: colors.text }}>{ convertMinsToTime(total_work_time_cal(listDataSource)) }</Text>
                                        {/* <Text style={{ alignItems: 'center', alignContent: 'center' }}>{ tWorkReport.mng_total_work_time }</Text> */}
                                    </View>
                                </View>
                                <View style={styles.myRow}>
                                    <View style={[styles.columPd, {width: '80%'}]}>
                                        <Text style={{ color: colors.text }}>{langStore.over_time_total}</Text>
                                    </View>
                                    <View style={[styles.columPd, {width: '20%'}]}>
                                        <Text style={{ alignItems: 'center', alignContent: 'center', color: colors.text }}>{ convertMinsToTime(total_over_time_cal(listDataSource)) }</Text>
                                        {/* <Text style={{ alignItems: 'center', alignContent: 'center' }}>{ tWorkReport.mng_over_work_time }</Text> */}
                                    </View>
                                </View>
                                <View style={styles.myRow}>
                                    <View style={[styles.columPd, {width: '80%'}]}>
                                        <Text style={{ color: colors.text }}>{langStore.total_table_midnight_working_hours}</Text>
                                    </View>
                                    <View style={[styles.columPd, {width: '20%'}]}>
                                        <Text style={{ alignItems: 'center', alignContent: 'center', color: colors.text }}>{ convertMinsToTime(total_night_work_time_cal(listDataSource)) }</Text>
                                        {/* <Text style={{ alignItems: 'center', alignContent: 'center' }}>{ tWorkReport.mng_night_work_time }</Text> */}
                                    </View>
                                </View>
                                <View style={styles.myRow}>
                                    <View style={[styles.columPd, {width: '80%'}]}>
                                        <Text style={{ color: colors.text }}>{langStore.total_table_deduct_hours}</Text>
                                    </View>
                                    <View style={[styles.columPd, {width: '20%'}]}>
                                        <Text style={{ alignItems: 'center', alignContent: 'center', color: colors.text }}>{ convertMinsToTime(total_deduction_time_cal(listDataSource)) }</Text>
                                        {/* <Text style={{ alignItems: 'center', alignContent: 'center' }}>{ tWorkReport.mng_deduction_time }</Text> */}
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* Total block End */}

                        {/* Result blok start */}
                        <View style={styles.totalResult}>
                            <View
                                style={[styles.workingHourHead, styles.myRow, { borderBottomColor: '#ddd', borderBottomWidth: 1 } ]} 
                            >
                                <View style={{ width: '90%' }}>
                                    <Text style={ styles.dateBlk }>{langStore.result}</Text>
                                </View>
                                <View style={{ width: '10%', paddingLeft: 5 }}>
                                    { isToggle ? (
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
                            </View>
                            <View style={ [styles.workingHourContent, {display: 'flex'}] }>
                                <View style={[styles.myRow]}>
                                    <View style={[styles.columPd, {width: '80%'}]}>
                                        <Text style={{ color: colors.text }}>{langStore.result_table_working_hours}</Text>
                                    </View>
                                    <View style={[styles.columPd, {width: '20%'}]}>
                                        <Text style={{ alignItems: 'center', alignContent: 'center', color: colors.text }}>{ convertMinsToTime(result_total_work_time_cal(listDataSource)) }</Text>
                                    </View>
                                </View>
                                <View style={styles.myRow}>
                                    <View style={[styles.columPd, {width: '80%'}]}>
                                        <Text style={{ color: colors.text }}>{langStore.result_table_total_overtime_hours}</Text>
                                    </View>
                                    <View style={[styles.columPd, {width: '20%'}]}>
                                        <Text style={{ alignItems: 'center', alignContent: 'center', color: colors.text }}>{ convertMinsToTime(total_over_time_cal(listDataSource)) }</Text>
                                    </View>
                                </View>
                                <View style={styles.myRow}>
                                    <View style={[styles.columPd, {width: '80%'}]}>
                                        <Text style={{ color: colors.text }}>{langStore.result_table_overtime_payment}</Text>
                                    </View>
                                    <View style={[styles.columPd, {width: '20%'}]}>
                                        <Text style={{ alignItems: 'center', alignContent: 'center', color: colors.text }}>{ overTimePayment(total_over_time_cal(listDataSource)) }</Text>
                                    </View>
                                </View>
                                <View style={styles.myRow}>
                                    <View style={[styles.columPd, {width: '80%'}]}>
                                        <Text style={{ color: colors.text }}>{langStore.result_table_midnight_working_hours}</Text>
                                    </View>
                                    <View style={[styles.columPd, {width: '20%'}]}>
                                        <Text style={{ alignItems: 'center', alignContent: 'center', color: colors.text }}>{ convertMinsToTime(total_night_work_time_cal(listDataSource)) }</Text>
                                    </View>
                                </View>
                                <View style={styles.myRow}>
                                    <View style={[styles.columPd, {width: '80%'}]}>
                                        <Text style={{ color: colors.text }}>{langStore.result_table_deduct_hours}</Text>
                                    </View>
                                    <View style={[styles.columPd, {width: '20%'}]}>
                                        <Text style={{ alignItems: 'center', alignContent: 'center', color: colors.text }}>{ convertMinsToTime(total_deduction_time_cal(listDataSource)) }</Text>
                                    </View>
                                </View>
                                <View style={styles.myRow}>
                                    <View style={[styles.columPd, {width: '80%'}]}>
                                        <Text style={{ color: colors.text }}>{langStore.exercise_of_paid_holidays}</Text>
                                    </View>
                                    <View style={[styles.columPd, {width: '20%'}]}>
                                        <Text style={{ alignItems: 'center', alignContent: 'center', color: colors.text }}>{ total_paid_holiday_cal(listDataSource) }</Text>
                                    </View>
                                </View>
                                <View style={styles.myRow}>
                                    <View style={[styles.columPd, {width: '80%'}]}>
                                        <Text style={{ color: colors.text }}>{langStore.exercise_of_paid_half_holidays}</Text>
                                    </View>
                                    <View style={[styles.columPd, {width: '20%'}]}>
                                        <Text style={{ alignItems: 'center', alignContent: 'center', color: colors.text }}>{ parseFloat(total_half_holiday_cal(listDataSource) / 2).toFixed(1) }</Text>
                                    </View>
                                </View>
                                <View style={styles.myRow}>
                                    <View style={[styles.columPd, {width: '80%'}]}>
                                        <Text style={{ color: colors.text }}>{langStore.total}</Text>
                                    </View>
                                    <View style={[styles.columPd, {width: '20%'}]}>
                                        <Text style={{ alignItems: 'center', alignContent: 'center', color: colors.text }}>{ parseFloat( (total_half_holiday_cal(listDataSource) / 2) + total_paid_holiday_cal(listDataSource)).toFixed(1) }</Text>
                                    </View>
                                </View>
                                <View style={styles.myRow}>
                                    <View style={[styles.columPd, {width: '80%'}]}>
                                        <Text style={{ color: colors.text }}>{langStore.absenteeism_days}</Text>
                                    </View>
                                    <View style={[styles.columPd, {width: '20%'}]}>
                                        <Text style={{ alignItems: 'center', alignContent: 'center', color: colors.text }}>{ total_absence_cal(listDataSource) }</Text>
                                    </View>
                                </View>
                                <View style={styles.myRow}>
                                    <View style={[styles.columPd, {width: '80%'}]}>
                                        <Text style={{ color: colors.text }}>{langStore.closing_dates}</Text>
                                    </View>
                                    <View style={[styles.columPd, {width: '20%'}]}>
                                        <Text style={{ alignItems: 'center', alignContent: 'center', color: colors.text }}>{ total_special_holiday_cal(listDataSource) }</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* Result block End */}
                    

                        <View style={[styles.button]}>
                            <TouchableRipple onPress={ () => loadWkDownloadInBrowser('/general/excel/mobile_download/download_excel.php', 'workreport') }>
                                <View style={[styles.signIn, {borderColor: '#72d5c1', borderWidth: 1}]}>
                                    <MaterialIcons
                                        name="navigate-next"
                                        color="#25ab8f"
                                        size={20}
                                        style={{transform: [{rotate: '90deg'}]}}
                                    />
                                    <Text style={styles.textSign}> { langStore.download }</Text>
                                </View>
                            </TouchableRipple>
                        </View>
                    </ScrollView>

                    {/* Transporation block Start */}
                    <View style={{ display: isTranSportTg ? 'flex' : 'none' }}>
                        {
                            
                            listTransport.map((items, key) => {
                                if( isTranSportTg ){
                                    
                                    //setSelectedTranValue(items.transport_type);
                                    
                                    return(
                                        <View key={key} style={[styles.totalResult, {marginTop: 15, borderWidth: 1,  borderColor: '#d6f2ec', backgroundColor: '#ffffff'}]}>
                                            <View
                                                style={[styles.workingHourHead, styles.myRow, { borderBottomColor: '#d6f2ec', borderBottomWidth: 1, backgroundColor: '#d6f2ec' } ]} 
                                            >
                                                <View style={{ width: '100%' }}>
                                                    <Text style={ [styles.dateBlk, { textAlign: 'center'}] }>{ langStore.transportation_expense }</Text>
                                                </View>
                                            </View>
                                            <View style={ [styles.workingHourContent, {display: 'flex'}] }>
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>{ langStore.date }</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                        {/* <TextInput value={moment(items.use_date).format('YYYY-MM-DD')} onChangeText={ txt => replaceTranChangeVal(key, 'use_date', txt) } style={ styles.textInputStyle } /> */}
                                                        <TouchableRipple 
                                                            onPress={() => showTimepicker(key, 'use_date')} 
                                                            disabled={memberInfo.status == 1 || memberInfo.status == 3 ? false : true }
                                                            style={ [styles.textInputStyle, { padding: 7 }] }
                                                        >
                                                            <Text>{moment(items.use_date).format('YYYY-MM-DD')}</Text>
                                                        </TouchableRipple>
                                                        {
                                                            memberInfo.status == 1 || memberInfo.status == 3 ? (
                                                        
                                                            show && (keyCheck == key) && (typeTime == 'use_date') && ( 
                                                                    <DateTimePicker
                                                                        value={date}
                                                                        mode="date"
                                                                        display="spinner"
                                                                        onChange={(event, date) => {onChangeTran(event, date, key, 'use_date')}}
                                                                    />
                                                                )
                                                            ):
                                                            <Text style={{display: 'none'}}>&nbsp;</Text>
                                                        
                                                        }
                                                    </View>
                                                </View>
                                                
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>{ langStore.destination }</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                        {
                                                            memberInfo.status == 1 || memberInfo.status == 3 ? (
                                                                <TextInput 
                                                                    value={items.destination} 
                                                                    onChangeText={ (txt) => replaceTranChangeVal(key, 'destination', txt) } 
                                                                    style={ styles.textInputStyle } 
                                                                    onEndEditing={(e, key) => handleValidTransport(e.nativeEvent.text, key)}
                                                                />
                                                            ):
                                                            <Text style={[styles.textInputStyle]}>{ items.destination }</Text>
                                                        }
                                                        
                                                        {
                                                            items.destination.length > 0 ? null :
                                                            <Text style={styles.errorMsg}>{langStore.required_field}</Text>
                                                        }
                                                    </View>
                                                </View>
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>{ langStore.transportation }</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                        <TranSporation dataFromParent={tranList} dataSeleted={items.transport_type} dataFieldName='transport_type' dataKey={key} />
                                                    </View>
                                                </View>
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>{ langStore.departure }</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                        {
                                                            memberInfo.status == 1 || memberInfo.status == 3 ? (
                                                                <TextInput value={items.from_area} onChangeText={ txt => replaceTranChangeVal(key, 'from_area', txt) } style={ styles.textInputStyle } />  
                                                            ):
                                                            <Text style={styles.textInputStyle}>{ items.from_area }</Text>
                                                        }
                                                        
                                                        {
                                                            items.from_area.length > 0 ? null :
                                                            <Text style={styles.errorMsg}>{langStore.required_field}</Text>
                                                        }
                                                    </View>
                                                </View>
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>{ langStore.arrival }</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                        {
                                                            memberInfo.status == 1 || memberInfo.status == 3 ? (
                                                                <TextInput value={items.to_area} onChangeText={ txt => replaceTranChangeVal(key, 'to_area', txt) } style={ styles.textInputStyle } />  
                                                            ):
                                                            <Text style={styles.textInputStyle}>{ items.to_area }</Text>
                                                        }
                                                        
                                                        {
                                                            items.to_area.length > 0 ? null :
                                                            <Text style={styles.errorMsg}>{langStore.required_field}</Text>
                                                        }
                                                    </View>
                                                </View>
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>{ langStore.oneway_roundtrip }</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                        <TranSporation dataFromParent={routeType} dataSeleted={items.rourte_type} dataFieldName='rourte_type' dataKey={key} />
                                                    </View>
                                                </View>
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>{ langStore.voucher }</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                        <TranSporation dataFromParent={tranPrintFlg} dataSeleted={items.print_flg} dataFieldName='print_flg'  dataKey={key}  /> 
                                                    </View>
                                                </View>
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>{ langStore.amount }</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                        <View style={ styles.myRow }>
                                                            <View style={{ width: '100%' }}>
                                                            {
                                                                memberInfo.status == 1 || memberInfo.status == 3 ? (
                                                                    <TextInput 
                                                                        value={!isNaN(items.amount.toString()) ? items.amount.toString() : '' } 
                                                                        keyboardType='phone-pad' 
                                                                        onChangeText={ txt => replaceTranChangeVal(key, 'amount', txt) } 
                                                                        style={ styles.textInputStyle } 
                                                                    />
                                                                ):
                                                                <Text style={styles.textInputStyle}>{ items.amount.toString() }</Text>
                                                            }
                                                                
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>{ langStore.billing }</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                    <TranSporation dataFromParent={tranDemanType} dataSeleted={items.demand_type} dataFieldName='demand_type' dataKey={key} /> 
                                                    </View>
                                                </View>
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>{ langStore.action }</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                        <View style={ styles.myRow }>
                                                            {
                                                                memberInfo.status == 1 || memberInfo.status == 3 ? (
                                                                    <View style={{ width: '100%', borderColor: '#77dfd1', backgroundColor: '#d6f2ec', borderWidth: 1, borderRadius: 10 }}>
                                                                        <View style={{ alignItems: 'flex-start', marginLeft: 3 }}>
                                                                            <TouchableRipple 
                                                                                onPress={() => duplicateTransportation(key)} 
                                                                                disabled={memberInfo.status == 1 || memberInfo.status == 3 ? false : true } 
                                                                            >
                                                                                <View style={[styles.removeBtn, { width: '100%', backgroundColor: '#d6f2ec'}]}>
                                                                                    <MaterialIcons
                                                                                        name="content-copy"
                                                                                        color="#707070"
                                                                                        size={20}
                                                                                    />
                                                                                    <Text style={[styles.textSign, {color: '#707070'}]}> { langStore.duplicate }</Text>
                                                                                </View>
                                                                            </TouchableRipple>
                                                                        </View>
                                                                    </View>
                                                                ):
                                                                <Text style={{ display: 'none' }}>&nbsp;</Text>
                                                            }
                                                            
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>&nbsp;</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                        <View style={ styles.myRow }>
                                                            {
                                                                memberInfo.status == 1 || memberInfo.status == 3 ? (
                                                                    <View style={{ width: '100%', borderColor: '#feaa49', borderWidth: 1, borderRadius: 10 }}>
                                                                        <View style={{ alignItems: 'flex-start', marginLeft: 3 }}>
                                                                            <TouchableRipple onPress={() => createConfirmAlert(key)}>
                                                                                <View style={[styles.removeBtn, { width: '100%'}]}>
                                                                                    <MaterialIcons
                                                                                        name="delete"
                                                                                        color="#feaa49"
                                                                                        size={20}
                                                                                    />
                                                                                    <Text style={[styles.textSign, {color: '#feaa49'}]}>{ langStore.remove }</Text>
                                                                                </View>
                                                                            </TouchableRipple>
                                                                        </View>
                                                                    </View>
                                                                ):
                                                                <Text style={{ display: 'none' }}>&nbsp;</Text>
                                                            } 
                                                            
                                                        </View>
                                                    </View>
                                                </View>
                                                
                                            </View> 
                                        </View> 
                                    )

                                }
                                
                            })
                        }
                    </View>
                    
                    {
                        memberInfo.status == 1 || memberInfo.status == 3 ? (
                            <View style={[styles.myRow, styles.transportFooter, {marginBottom: 20, display: isTranSportTg ? 'flex' : 'none'}]}>
                                <View style={{ alignItems: 'flex-start' }}>
                                    <TouchableRipple onPress={() => addTranSporation()}>
                                        <View style={[styles.removeBtn, {borderColor: '#707070', borderWidth: 1}]}>
                                            
                                            <Text style={[styles.textSign, {color: '#707070'}]}>
                                                + { langStore.add }
                                            </Text>
                                        </View>
                                    </TouchableRipple>
                                </View>
                            </View>
                        ):
                        <Text style={{ display: 'none' }}>&nbsp;</Text>
                    }
                    
                    
                    <View style={{ marginBottom: 20, display: isTranSportTg ? 'flex' : 'none' }}>
                        <View style={ [styles.myRow, {marginBottom: 10} ] }>
                            <View style={{width: '30%', padding: 5}}>
                                <Text style={{color: colors.text}}>{ langStore.total_amount }</Text>
                            </View>
                            <View style={{width: '50%'}}>
                                <Text style={ [ {textAlign: 'center', color: colors.text, paddingTop: 5}] }>{ !isNaN(totalTranBill) ? totalTranBill : 0 }</Text> 
                            </View>
                            <View style={{width: '20%', padding: 5}}>
                                <Text style={{ textAlign: 'center', color: colors.text }}>{langStore.jpy}</Text>
                            </View>
                        </View>
                        <View style={ [styles.myRow ] }>
                            <View style={{width: '30%', padding: 5}}>
                                <Text style={{color: colors.text}}>{ langStore.customer_billing }</Text>
                            </View>
                            <View style={{width: '50%'}}>
                            <Text style={ [ {textAlign: 'center', color: colors.text, paddingTop: 5}] }>{ !isNaN(customTotalTranBill) ? customTotalTranBill : 0 }</Text>
                            </View>
                            <View style={{width: '20%', padding: 5}}>
                                <Text style={{ textAlign: 'center', color: colors.text }}>{langStore.jpy}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.button, { display: isTranSportTg ? 'flex' : 'none'}]}>
                        <TouchableRipple onPress={ () => loadTranDownloadInBrowser() }>
                            <View style={[styles.signIn, {borderColor: '#72d5c1', borderWidth: 1}]}>
                                <MaterialIcons
                                    name="navigate-next"
                                    color="#25ab8f"
                                    size={20}
                                    style={{transform: [{rotate: '90deg'}]}}
                                />
                                <Text style={styles.textSign}> { langStore.download }</Text>
                            </View>
                        </TouchableRipple>
                    </View>
                    {/* Transporation block end */}

                    {/* Settlement Expense block start */}
                    <View style={{ display: isExpenseTg ? 'flex' : 'none' }}>
                        {
                            (adminFlg == 1 && listSettleExpense.length > 0) ? 
                            listSettleExpense.map((items, key) => {
                                if( isExpenseTg ){
                                    
                                    //setSelectedTranValue(items.transport_type);
                                    
                                    return(
                                        <View key={key} style={[styles.totalResult, {marginTop: 15, borderWidth: 1,  borderColor: '#d6f2ec'}]}>
                                            <View
                                                style={[styles.workingHourHead, styles.myRow, { borderBottomColor: '#d6f2ec', borderBottomWidth: 1, backgroundColor: '#d6f2ec' } ]} 
                                            >
                                                <View style={{ width: '100%' }}>
                                                    <Text style={ [styles.dateBlk, { textAlign: 'center'}] }>{ langStore.settlement_expense }</Text>
                                                </View>
                                            </View>
                                            <View style={ [styles.workingHourContent, {display: 'flex'}] }>
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>{ langStore.date }</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                        <TextInput value={moment(items.ex_use_date).format('DD/MMM/YYYY')} onChangeText={ txt => replaceSettleChangeVal(key, 'use_date', txt) } style={ styles.textInputStyle } />
                                                    </View>
                                                </View>
                                                
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>{ langStore.purpose }</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                        <TextInput value={items.ex_purpose.toString()} onChangeText={ txt => replaceSettleChangeVal(key, 'ex_purpose', txt) } style={ styles.textInputStyle } />
                                                    </View>
                                                </View>
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>{ langStore.payee }</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                        <TextInput value={items.ex_payee.toString()} onChangeText={ txt => replaceSettleChangeVal(key, 'ex_payee', txt) } style={ styles.textInputStyle } />
                                                    </View>
                                                </View>
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>{ langStore.attended }</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                        <TextInput value={items.ex_attendee.toString()} onChangeText={ txt => replaceSettleChangeVal(key, 'ex_attendee', txt) } style={ styles.textInputStyle } />  
                                                    </View>
                                                </View>
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>{ langStore.amount }</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                        <TextInput value={items.ex_amount.toString()} onChangeText={ txt => replaceSettleChangeVal(key, 'ex_amount', txt) } style={ styles.textInputStyle } />  

                                                    </View>
                                                </View>
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>{ langStore.receipt_no }</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                        <TextInput value={items.ex_receipt_no.toString()} onChangeText={ txt => replaceSettleChangeVal(key, 'ex_receipt_no', txt) } style={ styles.textInputStyle } />  
                                                    </View>
                                                </View>
                                                <View style={styles.myRow}>
                                                    <View style={styles.columPd}>
                                                        <Text>{ langStore.action }</Text>
                                                    </View>
                                                    <View style={styles.columPd}>
                                                        <View style={ styles.myRow }>
                                                            <View style={{ width: '100%' }}>
                                                                <View style={{ alignItems: 'flex-start', marginLeft: 3 }}>
                                                                    <TouchableRipple onPress={() => createConfirmAlertSettle(key)}>
                                                                        <View style={[styles.removeBtn, {borderColor: '#feaa49', borderWidth: 1, width: 100}]}>
                                                                            <MaterialIcons
                                                                                name="delete"
                                                                                color="#feaa49"
                                                                                size={20}
                                                                            />
                                                                            <Text style={[styles.textSign, {color: '#feaa49'}]}>{ langStore.remove }</Text>
                                                                        </View>
                                                                    </TouchableRipple>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                                
                                            </View> 
                                        </View> 
                                    )

                                }
                                
                            })
                            : console.log('Settlement off')
                        }
                    </View>

                    <View style={[styles.myRow, styles.transportFooter, {marginBottom: 20, display: isExpenseTg ? 'flex' : 'none'}]}>
                        <View style={{ alignItems: 'flex-start' }}>
                            <TouchableRipple onPress={() => addSettlementExpense()}>
                                <View style={[styles.removeBtn, {borderColor: '#707070', borderWidth: 1}]}>
                                    
                                    <Text style={[styles.textSign, {color: '#707070'}]}>
                                        { langStore.add_settlement_expense }
                                    </Text>
                                </View>
                            </TouchableRipple>
                        </View>
                    </View>
                    
                    <View style={{  display: isExpenseTg ? 'flex' : 'none' }}>
                        <View style={ [styles.myRow, {marginBottom: 10} ] }>
                            <View style={{width: '30%', padding: 5}}>
                                <Text>{ langStore.total_amount }</Text>
                            </View>
                            <View style={{width: '50%'}}>
                                <TextInput value={ totalSettleBill.toString() }  style={ [styles.textInputStyle, {textAlign: 'center'}] } />
                            </View>
                            <View style={{width: '20%', padding: 5}}>
                                <Text style={{ textAlign: 'center' }}>{ langStore.jpy }</Text>
                            </View>
                        </View>
                    </View>
                    {/* Settlement Expense block end */}
                    
                    {/* Customer b attendance list start */}

                    {
                        listCustomer.map((item, key) => {
                            return(
                                <View key={key} style={{ display: customTabOnOff(key) ? 'flex' : 'none' }}>
                                    <View style={{ borderColor: '#cdcdcd', borderWidth: 1, borderRadius: 20 }}>
                                        <View
                                            style={[styles.workingHourHead, styles.myRow ]} 
                                        >
                                            <View style={{ width: '90%' }}>
                                                <Text style={ [styles.dateBlk,{ fontWeight: '500', fontSize: 17 }] }>{ langStore.detail }</Text>
                                            </View>
                                            <View style={{ width: '10%', paddingTop: 5 }}>
                                                <MaterialIcons
                                                    name="navigate-next"
                                                    color="#ccc"
                                                    size={20}
                                                    style={{transform: [{rotate: '90deg'}]}}
                                                />
                                            </View>
                                        </View>
                                        <CustomerDetailBox dataSeleted={key} />
                                        
                                    </View>

                                    <View style={[styles.myRow, {marginBottom: 10, marginTop: 20}]}>
                                        <View style={[styles.columPd, {width: '60%', paddingTop: 15}]}>
                                            <Text style={{ color: colors.text }}>{ langStore.customer_work_report }</Text>
                                        </View>
                                        <View style={[styles.columPd, {width: '40%'}]}>
                                            <CustomerDropDown dataFromParent={tranPrintFlg} dataSeleted={item.client_report_flg} dataCkey={key} />
                                            {/* <Text style={{textAlign: 'right'}}>Yes</Text> */}
                                        </View>
                                    </View>
                                    { item.client_report_flg == 1 ? ( //pdf upload
                                        <View style={[styles.myRow, {marginBottom: 20}]}>
                                            <View style={{ marginTop: 10 }}>
                                                <Text style={{ textAlign: 'left', alignContent: 'flex-start', color: colors.text }}>
                                                    { langStore.if_there_upload_pdf }
                                                </Text>
                                            </View>
                                        </View>
                                    ): console.log("pdf upload") }

                                    { item.client_report_flg == 1 ? ( //pdf upload
                                        <View style={[styles.myRow, {borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 20, borderStyle: 'dotted'}]}>
                                            <View style={{ marginBottom: 20, width: '100%' }}>
                                                <TouchableRipple onPress={ () => loadCustomerWkDownloadInBrowser('/general/external/pdfviewmobile.php/' + item.filename, 'workreport', key, item.workreport_client_id) }>
                                                    <Text>{ item.filename }</Text>
                                                </TouchableRipple>
                                            </View>
                                            
                                        
                                            <View style={[styles.button]}>
                                            
                                                <TouchableRipple onPress={() => navigation.navigate('WVFileUpload', {
                                                    sYear: useYear,
                                                    sMonth: useMonth,
                                                    project_id: getProjectDetailItem(key, 'project_id', listProjectInfo),
                                                    individual_contract_id: getProjectDetailItem(key, 'individual_contract_id', listProjectInfo),
                                                    workreport_client_id: getProjectDetailItem(key, 'workreport_client_id', listProjectInfo),
                                                    }) }
                                                    disabled={memberInfo.status == 1 || memberInfo.status == 3 ? false : true}
                                                >
                                                    <View style={[styles.signIn, {borderColor: '#72d5c1', borderWidth: 1, borderRadius: 10}]}>
                                                        <MaterialIcons
                                                            name="file-upload"
                                                            color="#25ab8f"
                                                            size={20}
                                                        />
                                                        <Text style={styles.textSign}>{ langStore.upload_pdf }</Text>
                                                    </View>
                                                </TouchableRipple>
                                            </View>
                                            <View style={{ alignItems: 'flex-start', marginLeft: 10 }}>
                                                <TouchableRipple 
                                                    onPress={() => removePDFCustomerWorkreport(getProjectDetailItem(key, 'workreport_client_id', listProjectInfo), key)}
                                                    disabled={memberInfo.status == 1 || memberInfo.status == 3 ? false : true }
                                                >
                                                    <View style={[styles.removeBtn, {borderColor: '#feaa49', borderWidth: 1, width: 100}]}>
                                                        <MaterialIcons
                                                            name="delete"
                                                            color="#feaa49"
                                                            size={20}
                                                        />
                                                        <Text style={[styles.textSign, {color: '#feaa49'}]}>{ langStore.remove }</Text>
                                                    </View>
                                                </TouchableRipple>
                                            </View>
                                        </View>
                                    ): console.log("nothing pdf upload") }

                                    { item.client_report_flg == 0 ? (
                                        <View>
                                            <CustomerReportCompo 
                                                isToggle={isToggle} isWorkTimeNotEnter={isWorkTimeNotEnter} dataKey={key} 
                                                dataScreen={key==0 ? 3 : key==1 ? 5 : key==2 ? 6 : key==3 ? 7 : key==4 ? 8 : '' } listCustomer={listCustomer} updateCustomerSingleDate={updateCustomerSingleDate} 
                                                textInputStore={textInputStore} textInputCustomerReason={textInputCustomerReason} showTimepicker={showTimepicker} 
                                                onChangeCustomer={onChangeCustomer} dayNamelangSwitch={dayNamelangSwitch} langStore={langStore} 
                                                memberInfo={memberInfo} isWorkTimeEnter={isWorkTimeEnter} isWorkTimeHoliday={isWorkTimeHoliday} show={show} 
                                                CustomAttendanceTypeDropdown={CustomAttendanceTypeDropdown} attendType={attendType} keyCheck={keyCheck} 
                                                typeTime={typeTime} date={date}
                                                replaceCustomerNightBT={replaceCustomerNightBT} replaceCustomerBreakTime={replaceCustomerBreakTime}
                                                calCustomerBreakTime={calCustomerBreakTime} calCustomerNightBT={calCustomerNightBT}
                                                listDataSource={listDataSource} 
                                            />
                                        </View>
                                    ): console.log("nothing") }

                                    <CustomerActualTotalHours dataCustIndex={key} dataActTotal={item.mng_clt_total_work_time} textCltMng_total_worktime={textCltMng_total_worktime} langStore={langStore} 
                                    isToggle={isToggle} colors={colors} listCustomer={listCustomer} memberInfo={memberInfo} convertMinsToTime={convertMinsToTime} customerActualTotalCal={customerActualTotalCal} />

                                </View>
                            )
                        })
                    }
                    
                    {/* Customer attendance list end */}

                    {/* communication memo block start */}
                    {
                        memberInfo.status == 1 ? (
                            <View style={{ marginTop: 20 }}>
                                <Text style={ [styles.dateBlk, { color: colors.text, fontSize: 20, fontWeight: 'bold'}] }>{ langStore.communication_memo }</Text>
                                <Text style={{ color: colors.text }}>{ langStore.Please_fill_in_the_case_where_there_is_a_contact_matter_at_the_time_of_application_such_as_impossibility_to_upload_PDF_file }</Text>
                                <TextInput 
                                    multiline={true} 
                                    numberOfLines={5}
                                    value={memberNote} 
                                    style={ [styles.textInputStyle, { color: colors.text, textAlignVertical: 'top', marginTop: 5 }] }
                                    onChangeText={txt => setMemberNote(txt)}
                                    onEndEditing={(e) => setMemberNote(e.nativeEvent.text)}
                                    //onEndEditing={(e) => addNewMemoMsg(e.nativeEvent.text)}
                                    //onSubmitEditing={ Keyboard.dismiss }
                                />
                            </View>
                        ):
                        <Text>&nbsp;</Text>
                    }
                    
                    <View style={{ marginTop: 20, marginBottom: 60, paddingHorizontal: 10, paddingVertical: 10, borderWidth: 1, borderColor: '#ccc' }}>
                       <Text>{ memberInfo.note.trim() }</Text> 
                    </View>

                    {/* communication memo block end */}
                </View>
                
            </ScrollView>
            { searchLoad ? (
                <View style={ styles.loadRow }>
                    <Text style={{ color: '#fff'}}>Loading ...</Text>
                </View>
            ): 
                <View style={{display: 'none'}}></View>
            }
                
            {
              (memberInfo.status < 4) ? (
                <View style={ styles.footer }>
                
                {
                    typeof(memberInfo.status) !== 'undefined' ? (
                    memberInfo.status == 2 ? (
                        <View style={ styles.myRow }>
                            <View style={[styles.button, { marginRight: 5}]}>
                                <TouchableRipple onPress={ () => cancelApplied() }>
                                    <View style={[styles.saveData, { backgroundColor: '#6fd3bf' }]}>
                                        <Text style={styles.textSave}>{langStore.cancel_apply}</Text>
                                    </View>
                                </TouchableRipple>
                            </View> 
                        </View>
                        ):
                        (memberInfo.status == 1 || memberInfo.status == 3) ? (
                            <View style={ styles.myRow }>
                                <View style={[styles.button, { marginRight: 5}]}>
                                    <TouchableRipple onPress={ () => saveWorkReport(1) }>
                                        <View style={[styles.saveData, { backgroundColor: '#6fd3bf' }]}>
                                            <Text style={styles.textSave}>{langStore.store}</Text>
                                        </View>
                                    </TouchableRipple>
                                </View>
                                <View style={[styles.button, {marginRight: 3}]}>
                                    <TouchableRipple onPress={ () => saveWorkReport(2) }>
                                        <View style={[styles.saveData, {backgroundColor: '#2d9f88'}]}>
                                            <Text style={styles.textSave}>{langStore.apply}</Text>
                                        </View>
                                    </TouchableRipple>
                                </View>
                            </View>
                        ):
                        <Text style={{ display: 'none' }}>&nbsp;</Text>
                        
                        ):
                        <Text style={{ display: 'none' }}>&nbsp;</Text>
                    }
                        
                        {/* <View style={[styles.button]}>
                            <TouchableRipple>
                                <View style={[styles.saveData, {backgroundColor: '#2d9f88'}]}>
                                    <Text style={styles.textSave}>Apply Expense</Text>
                                </View>
                            </TouchableRipple>
                        </View> */}
                    
                </View>
              ):
              <Text style={{ display: 'none' }}>&nbsp;</Text>
            }
            
        </View>
    );
}

const CustomerActualTotalHours = ({dataCustIndex, dataActTotal, textCltMng_total_worktime, langStore, 
    isToggle, colors, listCustomer, memberInfo, convertMinsToTime, customerActualTotalCal}) => {
    let custom_index = dataCustIndex;
    return (
        <View style={[styles.totalResult, {marginTop: 20}]}>
            <View
                style={[styles.workingHourHead, styles.myRow, { borderBottomColor: '#ddd', borderBottomWidth: 1 } ]} 
            >
                <View style={{ width: '90%' }}>
                    <Text style={ styles.dateBlk }>{ langStore.total }</Text>
                </View>
                <View style={{ width: '10%', paddingLeft: 5 }}>
                    { isToggle ? (
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
            </View>
            <View style={ [styles.workingHourContent, {display: 'flex'}] }>
                <View style={[styles.myRow]}>
                    <View style={[styles.columPd, {width: '60%', marginTop: 5}]}>
                        <Text style={{ color: colors.text }}>{ langStore.actual_working_hour }</Text>
                        <Text style={{fontSize: 11, color: '#b9b8b8'}}>{ langStore.actual_working_time_format } "00:00"</Text>
                    </View>
                    <View style={[styles.columPd, {width: '40%'}]}>
                        {
                            //listCustomer[custom_index].client_report_flg == 1 ? (
                                <TextInput editable={ memberInfo.status == 1 || memberInfo.status == 3 ? true : false } value={dataActTotal} 
                                onChangeText={(txt) => textCltMng_total_worktime(custom_index, txt)} 
                                onEndEditing={(e) => textCltMng_total_worktime(custom_index, e.nativeEvent.text)}
                                //onSubmitEditing={Keyboard.dismiss()}
                                textAlign={'center'} style={ [styles.textInputStyle, { color: colors.text }] } />
                           // ):
                           // <TextInput editable={ false } value={convertMinsToTime(customerActualTotalCal(custom_index)) } textAlign={'center'} style={ [styles.textInputStyle, { color: colors.text }] } />    

                        }


                    </View>
                </View>
            </View>
        </View>
    )
}

const CustomerReportCompo = ({isToggle, isWorkTimeNotEnter, dataKey, dataScreen, listCustomer, 
    updateCustomerSingleDate, textInputStore, textInputCustomerReason, showTimepicker, onChangeCustomer, 
    dayNamelangSwitch, langStore, memberInfo, isWorkTimeEnter, isWorkTimeHoliday, show, CustomAttendanceTypeDropdown, 
    attendType, keyCheck, typeTime, date, replaceCustomerNightBT, replaceCustomerBreakTime, calCustomerBreakTime,
    calCustomerNightBT, listDataSource}) => {
    let cindex = dataKey; //customer index
    let screen_index = dataScreen; //screen index
   // console.log(screen_index, cindex, listCustomer[dataKey], "screen index")

    return (
                            
            listCustomer[dataKey].customer_workreport_items.map((item, key) => { 
            let startContrctDate = '';
            let endContrctDate = '';
            startContrctDate =  moment(listCustomer[dataKey].start_contract_date).format('X');
            endContrctDate =  moment(listCustomer[dataKey].end_contract_date).format('X');

                //out of contract period report date samller than start date or greater than end date
                if (moment(item.report_date).format('X') < startContrctDate || moment(item.report_date).format('X') > endContrctDate ) {
                    return(
                        // weekend block start
                        <View key={key} style={[styles.workingHour, { borderColor: '#e3e3e3', backgroundColor: '#ffffff' }]}>
                            <TouchableOpacity 
                                style={[styles.workingHourHead, styles.myRow, { backgroundColor: '#e3e3e3', borderRadius: (isToggle || item.isExpanded ) ? 0 : 15 } ]} 
                                onPress={ () => updateCustomerSingleDate(dataScreen, cindex, key) }
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
                                    <Text style={ styles.dateBlk }>{moment(item.report_date).format('DD/MM/YYYY')}</Text>
                                    <Text style={{ color: '#7c7277' }}>{ langStore.out_of_the_contract_period }</Text>
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
                                            
                                        </View>
                                    </View>
                                    
                                    <View style={styles.myRow}>
                                        <View style={styles.columPd}>
                                            <Text>{langStore.break_time_mobile}</Text>
                                        </View>
                                        <View style={styles.columPd}>
                                        
                                        </View>
                                    </View>
                                    <View style={styles.myRow}>
                                        <View style={styles.columPd}>
                                            <Text>{langStore.night_break_time}</Text>
                                        </View>
                                        <View style={styles.columPd}>
                                            
                                        </View>
                                    </View>
                                    <View style={styles.myRow}>
                                        <View style={styles.columPd}>
                                            <Text>{langStore.working_hour_mobile}</Text>
                                        </View>
                                        <View style={styles.columPd}>
                                            <View style={ styles.myRow }>
                                                <View style={{ width: '45%' }}>
                                                <Text>&nbsp;</Text>
                                                    
                                                </View>
                                                <View style={{ padding: 7 }}>
                                                    <Text>&nbsp;</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    
                                    <View style={styles.myRow}>
                                        <View style={styles.columPd}>
                                            <Text style={{ marginTop: 15 }}>{langStore.attendance_type}</Text>
                                        </View>
                                        <View style={styles.columPd}>
                                            <View style={ styles.myRow }>
                                                <View style={{ width: '100%' }}>
                                                 <Text>&nbsp;</Text>
                                                
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.myRow}>
                                        <View style={styles.columPd}>
                                            <Text>{langStore.reason}</Text>
                                        </View>
                                        <View style={styles.columPd}>
                                            <View style={ styles.myRow }>
                                                <View style={{ width: '100%' }}>
                                                    
                                                    <Text style={ styles.textInputStyle }>{item.out_of_the_contract_period}</Text>
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
    
                    )
                }
                // public holiday                            shift holiday                           paid holiday                            Absence                                special holiday                         Substitute Holiday         
                else if( ((item.customer_attendance_type == 1) || (item.customer_attendance_type == 2) || (item.customer_attendance_type == 3) || (item.customer_attendance_type == 5) || (item.customer_attendance_type == 8) || (item.customer_attendance_type == 10)) && isWorkTimeHoliday ){
                    return(
                        // weekend block start
                        <View key={key} style={[styles.workingHour, { borderColor: '#e3e3e3', backgroundColor: '#ffffff' }]}>
                            <TouchableOpacity 
                                style={[styles.workingHourHead, styles.myRow, { backgroundColor: '#e3e3e3', borderRadius: (isToggle || item.isExpanded ) ? 0 : 15 } ]} 
                                onPress={ () => updateCustomerSingleDate(dataScreen, cindex, key) }
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
                                    <Text style={ styles.dateBlk }>{moment(item.report_date).format('DD/MM/YYYY')} { dayNamelangSwitch(moment(item.report_date).format('ddd'))}</Text>
                                    <Text style={{ color: '#7c7277' }}>{ langStore.no_entries }</Text>
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
                                            
                                        </View>
                                    </View>
                                    
                                    <View style={styles.myRow}>
                                        <View style={styles.columPd}>
                                            <Text>{langStore.break_time_mobile}</Text>
                                        </View>
                                        <View style={styles.columPd}>
                                        
                                        </View>
                                    </View>
                                    <View style={styles.myRow}>
                                        <View style={styles.columPd}>
                                            <Text>{langStore.night_break_time}</Text>
                                        </View>
                                        <View style={styles.columPd}>
                                            
                                        </View>
                                    </View>
                                    <View style={styles.myRow}>
                                        <View style={styles.columPd}>
                                            <Text>{langStore.working_hour_mobile}</Text>
                                        </View>
                                        <View style={styles.columPd}>
                                            <View style={ styles.myRow }>
                                                <View style={{ width: '45%' }}>
                                                    <TextInput value={item.customer_total_work_time} editable={false} textAlign={'center'} style={ styles.textInputStyle } />
                                                    
                                                </View>
                                                <View style={{ padding: 7 }}>
                                                    <Text>&nbsp;</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    
                                    <View style={styles.myRow}>
                                        <View style={styles.columPd}>
                                            <Text style={{ marginTop: 15 }}>{langStore.attendance_type}</Text>
                                        </View>
                                        <View style={styles.columPd}>
                                            <View style={ styles.myRow }>
                                                <View style={{ width: '100%' }}>
                                                { isToggle || item.isExpanded ? 
                                                <CustomAttendanceTypeDropdown dataFromParent={attendType} dataSeleted={item.customer_attendance_type} dataSelectKey={key} dataMkey={cindex} />
                                                : <Text>&nbsp;</Text>
                                                }
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.myRow}>
                                        <View style={styles.columPd}>
                                            <Text>{langStore.reason}</Text>
                                        </View>
                                        <View style={styles.columPd}>
                                            <View style={ styles.myRow }>
                                                <View style={{ width: '100%' }}>
                                                    <TextInput 
                                                        value={item.customer_reason}  
                                                        onChangeText={(txt) => textInputStore(cindex, key, txt)} 
                                                        onEndEditing={(e)=> textInputCustomerReason(cindex, key, e.nativeEvent.text)}
                                                        onSubmitEditing={Keyboard.dismiss}
                                                        style={ [styles.textInputStyle, styles.paddinglf6] } 
                                                        editable={memberInfo.status == 1 || memberInfo.status == 3 ? true : false}
                                                    />
                                                    {
                                                        item.clt_holiday_name.length > 0 ? (
                                                            <Text>{ item.clt_holiday_name }</Text>
                                                        ):
                                                        <Text style={{ display: 'none' }}>&nbsp;</Text>
                                                    }
                                                    {
                                                        item.customer_reason_error ? (
                                                            <Text style={styles.errorMsg}>{ langStore.not_entered }</Text>
                                                        ):
                                                        <Text style={{ display: 'none' }}>&nbsp;</Text>
                                                    }
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
    
                    )
                    
                } else if((moment.duration(item.customer_total_work_time.toString()).asMinutes() > 0 || moment.duration(item.customer_start_time.toString()).asMinutes() > 0) && isWorkTimeEnter ) {
                    //working hour entered
                    return(
                        <View key={key} style={[styles.workingHour, { borderColor: '#f2f2f2', backgroundColor: '#ffffff'  }]}>
                            <TouchableOpacity
                                style={[styles.workingHourHead, styles.myRow, { backgroundColor: '#f2f2f2', borderRadius: (isToggle || item.isExpanded) ? 0 : 15 } ]} 
                                onPress = { () => updateCustomerSingleDate(dataScreen, cindex, key) }
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
                                    <Text style={ styles.dateBlk }>{moment(item.report_date).format('DD/MM/YYYY')} { dayNamelangSwitch(moment(item.report_date).format('ddd'))}</Text>
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
                                                    <TouchableRipple onPress={() => showTimepicker(key, 'customer_start_time')} style={ [styles.textInputStyle, { padding: 7 }] }>
                                                        <Text>{item.customer_start_time.length > 5 ? item.customer_start_time.slice(0, -3) : item.customer_start_time }</Text>
                                                    </TouchableRipple>
                                                    { (memberInfo.status == 1 || memberInfo.status == 3) && show && (keyCheck == key) && (typeTime == 'customer_start_time') && ( 
                                                        <DateTimePicker
                                                            value={date} 
                                                            mode="time"
                                                            is24Hour={true}
                                                            display="spinner"
                                                            onChange={(event, date) => {onChangeCustomer(event, date, key, 'customer_start_time', cindex)}}
                                                        />
                                                    )}
                                                </View>
                                                <View style={{ width: '10%' }}>
                                                    <Text style={{ paddingTop: 7, paddingLeft: 5 }}>/</Text>
                                                </View>
                                                <View style={{ width: '45%' }}>
                                                    {/* <TextInput value={item.end_time} textAlign={'center'} style={ styles.textInputStyle } /> */}
                                                    <TouchableRipple onPress={() => showTimepicker(key, 'customer_end_time')} style={ [styles.textInputStyle, { padding: 7 }] }>
                                                        <Text>{item.customer_end_time.length > 5 ? item.customer_end_time.slice(0, -3) : item.customer_end_time }</Text>
                                                    </TouchableRipple>
                                                    { (memberInfo.status == 1 || memberInfo.status == 3) && show && (keyCheck == key) && (typeTime == 'customer_end_time') && ( 
                                                        <DateTimePicker
                                                            value={date}
                                                            mode="time"
                                                            is24Hour={true}
                                                            display="spinner"
                                                            onChange={(event, date) => {onChangeCustomer(event, date, key, 'customer_end_time', cindex)}}
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
                                        
                                    </View>
                                    <View style={styles.myRow}>
                                        <View style={styles.columPd}>
                                            <Text>{langStore.break_time_mobile}</Text>
                                        </View>
                                        <View style={styles.columPd}>
                                            <View style={ styles.myRow }>
                                                <View style={{ width: '30%' }}>
                                                    <TextInput 
                                                        value={item.customer_break_time.toString()} 
                                                        editable={ memberInfo.status == 1 || memberInfo.status == 3 ? true : false } 
                                                        keyboardType='phone-pad' 
                                                        onChangeText={txt => replaceCustomerBreakTime(key, 'customer_break_time', txt, cindex)} 
                                                        onEndEditing={(e) => calCustomerBreakTime(key, 'customer_break_time', e.nativeEvent.text, cindex)}
                                                        onSubmitEditing={Keyboard.dismiss}
                                                        textAlign={'center'} 
                                                        style={ styles.textInputStyle } 
                                                    />
                    
                                                </View>
                                                <View style={{ padding: 7 }}>
                                                    <Text>{ langStore.minute }</Text>
                                                </View>
                                                {
                                                    item.break_time_error ? (
                                                        <Text style={[ styles.errorMsg, {width: '100%'}]}>{ langStore.incorrect }</Text>
                                                    ):
                                                    <Text>&nbsp;</Text>
                                                }
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.myRow}>
                                        <View style={styles.columPd}>
                                            <Text>{langStore.night_break_time}</Text>
                                        </View>
                                        <View style={styles.columPd}>
                                            <View style={ styles.myRow }>
                                                <View style={{ width: '30%' }}>
                                                    <TextInput 
                                                        value={item.customer_night_break_time.toString()} 
                                                        editable={ memberInfo.status == 1 || memberInfo.status == 3 ? true : false } 
                                                        keyboardType='phone-pad' 
                                                        onChangeText={txt => replaceCustomerNightBT(key, 'customer_night_break_time', txt, cindex) } 
                                                        onEndEditing={(e)=> calCustomerNightBT(key, 'customer_night_break_time', e.nativeEvent.text, cindex) }
                                                        onSubmitEditing={Keyboard.dismiss}
                                                        textAlign={'center'} 
                                                        style={ styles.textInputStyle } 
                                                    />
                                                    
                                                </View>
                                                <View style={{ padding: 7 }}>
                                                    <Text>{ langStore.minute }</Text>
                                                </View>
                                                {
                                                    item.night_breaktime_error ? (
                                                        <Text style={[ styles.errorMsg, { width: '100%' }]}>{ langStore.incorrect }</Text>
                                                    ):
                                                    <Text>&nbsp;</Text>
                                                }
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.myRow}>
                                        <View style={styles.columPd}>
                                            <Text>{langStore.working_hour_mobile}</Text>
                                        </View>
                                        <View style={styles.columPd}>
                                            <View style={ styles.myRow }>
                                                <View style={{ width: '45%' }}>
                                                    <TextInput value={item.customer_total_work_time.length > 5 ? item.customer_total_work_time.slice(0, -3) : item.customer_total_work_time } editable = {false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                                </View>
                                                <View style={{ padding: 7 }}>
                                                    <Text>&nbsp;</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    
                                    <View style={styles.myRow}>
                                        <View style={styles.columPd}>
                                            <Text style={{ marginTop: 15 }}>{langStore.attendance_type}</Text>
                                        </View>
                                        <View style={styles.columPd}>
                                            <View style={ styles.myRow }>
                                                <View style={{ width: '100%' }}>
                                                { isToggle || item.isExpanded ? 
                                                    <CustomAttendanceTypeDropdown dataFromParent={attendType} dataSeleted={item.customer_attendance_type} dataSelectKey={key}  dataMkey={cindex} />
                                                : <Text>&nbsp;</Text>
                                                }
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.myRow}>
                                        <View style={styles.columPd}>
                                            <Text>{langStore.reason}</Text>
                                        </View>
                                        <View style={styles.columPd}>
                                            <View style={ styles.myRow }>
                                                <View style={{ width: '100%' }}>
                                                    <TextInput value={item.customer_reason} 
                                                        onChangeText={(txt) => textInputStore(cindex, key, txt)} 
                                                        onEndEditing={(e)=> textInputCustomerReason(cindex, key, e.nativeEvent.text)}
                                                        onSubmitEditing={Keyboard.dismiss}
                                                        style={ [styles.textInputStyle, styles.paddinglf6] } 
                                                        editable={memberInfo.status == 1 || memberInfo.status == 3 ? true : false}
                                                    />
                                                    {
                                                        item.clt_holiday_name.length > 0 ? (
                                                            <Text>{ item.clt_holiday_name }</Text>
                                                        ):
                                                        <Text style={{ display: 'none' }}>&nbsp;</Text>
                                                    }
                                                    {
                                                        item.customer_reason_error ? (
                                                            <Text style={styles.errorMsg}>{ langStore.not_entered }</Text>
                                                        ):
                                                        <Text style={{ display: 'none' }}>&nbsp;</Text>
                                                    }
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
                    )

                } else if ( (moment.duration(item.customer_total_work_time.toString()).asMinutes() == 0) && isWorkTimeNotEnter ) {
                    return(
                        // weekday with blue block start
                        <View key={key} style={[styles.workingHour, { borderColor: '#d6f2ec', backgroundColor: '#ffffff'  }]}>
                            <TouchableOpacity style={[styles.workingHourHead, styles.myRow, { backgroundColor: '#d6f2ec', borderRadius: (isToggle || item.isExpanded ) ? 0 : 15 } ]} 
                                onPress = { () => updateCustomerSingleDate(dataScreen, cindex, key) }
                            >
                                <View style={{ width: '10%', paddingTop: 5 }}>
                                    <Text style={ styles.dateBlk }> !</Text>
                                </View>
                                <View style={{ width: '80%' }}>
                                    <Text style={ styles.dateBlk }>{moment(item.report_date).format('DD/MM/YYYY')} { dayNamelangSwitch(moment(item.report_date).format('ddd'))}</Text>
                                    <Text style={{ color: '#7c7277' }}>{langStore.wkhour_not_entered}</Text>
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
                            <View style={ [styles.workingHourContent, {display: ( isToggle || item.isExpanded ) ? 'flex': 'none'} ] } >
                                <View style={styles.myRow}>
                                    <View style={styles.columPd}>
                                        <Text>{langStore.work_hours}</Text>
                                    </View>
                                    <View style={styles.columPd}>
                                        <View style={ styles.myRow }>
                                            <View style={{ width: '45%' }}>
                                                {/* <TextInput value={item.start_time} textAlign={'center'} onChangeText={txt => replaceChangeVal(key, 'start_time', txt)} style={ styles.textInputStyle } /> */}
                                                <TouchableRipple onPress={() => showTimepicker(key, 'customer_start_time')} style={ [styles.textInputStyle, { padding: 7 }] }>
                                                    <Text>{ item.customer_start_time.length > 5 ? item.customer_start_time.slice(0, -3) : item.customer_start_time }</Text>
                                                </TouchableRipple>
                                                { (memberInfo.status == 1 || memberInfo.status == 3) && show && (keyCheck == key) && (typeTime == 'customer_start_time') && ( 
                                                    <DateTimePicker
                                                        value={date}
                                                        mode="time"
                                                        is24Hour={true}
                                                        display="spinner"
                                                        onChange={(event, date) => {onChangeCustomer(event, date, key, 'customer_start_time', cindex)}}
                                                    />
                                                )}
                                            </View>
                                            <View style={{ width: '10%' }}>
                                                <Text style={{ paddingTop: 7, paddingLeft: 5 }}>/</Text>
                                            </View>
                                            <View style={{ width: '45%' }}>
                                                {/* <TextInput value={item.end_time} textAlign={'center'} onChangeText={txt => replaceChangeVal(key, 'end_time', txt)} style={ styles.textInputStyle } /> */}
                                                <TouchableRipple onPress={() => showTimepicker(key, 'customer_end_time')} style={ [styles.textInputStyle, { padding: 7 }] }>
                                                    <Text>{item.customer_end_time.length > 5 ? item.customer_end_time.slice(0, -3) : item.customer_end_time }</Text>
                                                </TouchableRipple>
                                                { (memberInfo.status == 1 || memberInfo.status == 3) && show && (keyCheck == key) && (typeTime == 'customer_end_time') && ( 
                                                    <DateTimePicker
                                                        value={date}
                                                        mode="time"
                                                        is24Hour={true}
                                                        display="spinner"
                                                        onChange={(event, date) => {onChangeCustomer(event, date, key, 'customer_end_time', cindex)}}
                                                    />
                                                )}
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.myRow}>
                                    <View style={styles.columPd}>
                                        <Text>{langStore.break_time_mobile}</Text>
                                    </View>
                                    <View style={styles.columPd}>
                                        <View style={ styles.myRow }>
                                            <View style={{ width: '30%' }}>
                                                <TextInput value={item.customer_break_time.toString()} textAlign={'center'} editable={ memberInfo.status == 1 || memberInfo.status == 3 ? true : false } style={[ styles.textInputStyle ]} />
                                            </View>
                                            <View style={{ padding: 7 }}>
                                                <Text>{ langStore.minute }</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.myRow}>
                                    <View style={styles.columPd}>
                                        <Text>{langStore.night_break_time}</Text>
                                    </View>
                                    <View style={styles.columPd}>
                                        <View style={ styles.myRow }>
                                            <View style={{ width: '30%' }}>
                                                <TextInput value={item.customer_night_break_time.toString()} textAlign={'center'} editable={ memberInfo.status == 1 ? true : false } style={ styles.textInputStyle } />
                                            </View>
                                            <View style={{ padding: 7 }}>
                                                <Text>{ langStore.minute }</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.myRow}>
                                    <View style={styles.columPd}>
                                        <Text>{langStore.working_hour_mobile}</Text>
                                    </View>
                                    <View style={styles.columPd}>
                                        <View style={ styles.myRow }>
                                            <View style={{ width: '45%' }}>
                                                <TextInput value={item.customer_total_work_time.length > 5 ? item.customer_total_work_time.slice(0, -3) : item.customer_total_work_time } editable={false} textAlign={'center'} style={ [styles.textInputStyle, styles.editDisabled] } />
                                            </View>
                                            <View style={{ padding: 7 }}>
                                                <Text>&nbsp;</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                
                                <View style={styles.myRow}>
                                    <View style={styles.columPd}>
                                        <Text style={{ marginTop: 15 }}>{langStore.attendance_type}</Text>
                                    </View>
                                    <View style={styles.columPd}>
                                        <View style={ styles.myRow }>
                                            <View style={{ width: '100%' }}>
                                            { isToggle || item.isExpanded ? 
                                                <CustomAttendanceTypeDropdown dataFromParent={attendType} dataSeleted={item.customer_attendance_type} dataSelectKey={key}  dataMkey={cindex} />
                                                : <Text>&nbsp;</Text>
                                            }
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.myRow}>
                                    <View style={styles.columPd}>
                                        <Text>{langStore.reason}</Text>
                                    </View>
                                    <View style={styles.columPd}>
                                        <View style={ styles.myRow }>
                                            <View style={{ width: '100%' }}>
                                                <TextInput value={item.customer_reason} 
                                                    editable={ memberInfo.status == 1 || memberInfo.status == 3 ? true : false } 
                                                    onChangeText={(txt) => textInputStore(cindex, key, txt)} 
                                                    onEndEditing={(e)=> textInputCustomerReason(cindex, key, e.nativeEvent.text)}
                                                    onSubmitEditing={Keyboard.dismiss}
                                                    style={ [styles.textInputStyle, styles.paddinglf6] } 
                                                />
                                                {
                                                        item.clt_holiday_name.length > 0 ? (
                                                            <Text>{ item.clt_holiday_name }</Text>
                                                        ):
                                                        <Text style={{ display: 'none' }}>&nbsp;</Text>
                                                    }
                                                    {
                                                        item.customer_reason_error ? (
                                                            <Text style={styles.errorMsg}>{ langStore.not_entered }</Text>
                                                        ):
                                                        <Text style={{ display: 'none' }}>&nbsp;</Text>
                                                    }
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
                    );
                }
                    
                })
            
    )
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
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
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
        paddingVertical: 8,
        paddingHorizontal: 20,
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
        width: '7%',
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
        borderWidth: 1, borderRadius: 15, marginBottom: 20
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
    deadlinetxt: {
        paddingHorizontal: 15, backgroundColor: '#ffe8a3', paddingVertical: 15, marginBottom: 15, borderRadius: 15, borderColor: '#e0ad15', borderWidth: 1
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
    paddinglf6: {
        paddingLeft: 6
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
    editDisabled: {color: '#000', backgroundColor: '#ffffe0'},
    historyLog: {
        backgroundColor: '#dcf2ce', paddingHorizontal: 15, paddingVertical: 15, marginBottom: 15, borderColor: '#79ae95', borderWidth: 1, borderRadius: 15
    }


});





