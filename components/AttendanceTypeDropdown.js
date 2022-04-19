import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const AttendanceTypeDropdown = (props) => {
 
    const [selectedAtTypeValue, setSelectedAtTypeValue] = useState(props.dataSeleted);
    
    return(
        <View style={ [styles.dropDownStyle, {marginTop: 10, marginBottom: 10}] }>
            <Picker
                selectedValue={selectedAtTypeValue}
                onValueChange={(itemValue, itemIndex) => setSelectedAtTypeValue(itemValue)}
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




export default AttendanceTypeDropdown;

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