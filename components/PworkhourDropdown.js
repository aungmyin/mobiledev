import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

// const workHourList = [
//     {
//         "break_time": 60,
//         "end_time": "18:00",
//         "pattern": "A",
//         "pattern_flg": 0,
//         "start_time": "09:00",
//         "working_time": "08:00"
//     },
//     {
//         "break_time": 60,
//         "end_time": "18:00",
//         "pattern": "B",
//         "pattern_flg": 0,
//         "start_time": "09:30",
//         "working_time": "07:30"
//     },
//     {
//         "break_time": 0,
//         "end_time": "00:00",
//         "pattern": "C",
//         "pattern_flg": 0,
//         "start_time": "00:00",
//         "working_time": "00:00"
//     },
//     {
//         "break_time": 0,
//         "end_time": "00:00",
//         "pattern": "D",
//         "pattern_flg": 0,
//         "start_time": "00:00",
//         "working_time": "00:00"
//     },
//     {
//         "break_time": 0,
//         "end_time": "00:00",
//         "pattern": "E",
//         "pattern_flg": 0,
//         "start_time": "00:00",
//         "working_time": "00:00"
//     },
//     {
//         "break_time": 0,
//         "end_time": "00:00",
//         "pattern": "F",
//         "pattern_flg": 0,
//         "start_time": "00:00",
//         "working_time": "00:00"
//     }
// ];

const PworkhourDropdown = (props) => {
    let pWorkHour = [];
    const [pWorkValue, setPworkValue] = useState(props.dataSeleted);
    
    if( props.dataFromParent.length > 0 ) {
        pWorkHour = props.dataFromParent[0]['working_hour'];
    } else {
        pWorkHour = workHourList;
    }
    
    //console.log(pWorkValue, "work hour p");
    return(
        <View style={ [styles.dropDownStyle] }>
            <Picker
                selectedValue={pWorkValue}
                onValueChange={(itemValue, itemIndex) => setPworkValue(itemValue)}
            >
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

export default PworkhourDropdown;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      alignItems: "center"
    },
    dropDownStyle: {
        borderWidth: 1, borderColor: '#ccc', height: 53, marginLeft: 2, marginRight: 2, borderRadius: 10
    }
});