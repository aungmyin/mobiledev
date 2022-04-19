import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const TranSporation = (props) => {
    const [selectedTranValue, setSelectedTranValue] = useState(props.dataSeleted);
    //const optionMonth = [{ value: 1, label: 'JAN' }, { value: 2, label: 'FEB' }, { value: 3, label: 'MAR' }, { value: 4, label: 'APR' }, { value: 5, label: 'MAY' }, { value: 6, label: 'JUN' }, { value: 7, label: 'JUL' }, { value: 8, label: 'AUG' }, { value: 9, label: 'SEP' }, { value: 10, label: 'OCT' }, { value: 11, label: 'NOV' }, { value: 12, label: 'DEC' }];

    return (
        
        <View style={styles.dropDownStyle}>
            <Picker
                selectedValue={selectedTranValue}
                style={{ height: 30, width: 120 }}
                onValueChange={(itemValue, itemIndex) => onChangeTranType(itemIndex, props.dataFieldName, itemValue)}
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

export default TranSporation;

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