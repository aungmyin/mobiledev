import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const CustomerDropDown = (props) => {

    const [selectedValue, setSelectedValue] = useState(props.dataSeleted);
    
    return(
        <View style={ [styles.dropDownStyle, {width: 90}] }>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
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

export default CustomerDropDown;

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