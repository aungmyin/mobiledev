import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

import { AuthContext } from './content';

import {Picker} from '@react-native-picker/picker';

const SearchDropDown = (props) => {

    const [selectedValue, setSelectedValue] = useState(props.dataSeleted);

    const { SearchYear } = React.useContext(AuthContext);

    //SelectedYear(selectedValue);
    
    return(
        <View style={ [styles.dropDownStyle, {marginTop: 10, marginBottom: 10}] }>
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

const SelectedYear = (ValueYear) => {
   // console.log(ValueYear, "Select Year");
    return ValueYear;
}

export default SearchDropDown;

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