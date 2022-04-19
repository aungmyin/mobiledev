import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements';

const contractType = (props) => {

   // const [selectedAtTypeValue, setSelectedAtTypeValue] = useState(props.dataSeleted);
   let selectCheck = props.dataSeleted - 1;
   return(
       
        props.dataFromParent.map((item, key) => {
            
            return(
                <View key={key} style={{marginTop: 5}}>
                    <CheckBox 
                        size={20}
                        containerStyle={{ borderWidth: 0, backgroundColor: '#fff', padding: 2 }}
                        title={ item.label }
                        uncheckedColor="#ddd"
                        checkedColor="#666"
                        textStyle={{ color: '#666', fontWeight: '500' }}
                        checked={ selectCheck == key ? true : false }
                        onPress={ () => { console.log("hello") } }
                    />
                </View>
            )
        })
   )
    
        

        // <View style={ [styles.dropDownStyle, {marginTop: 10, marginBottom: 10}] }>
        //     <Picker
        //         selectedValue={selectedAtTypeValue}
        //         onValueChange={(itemValue, itemIndex) => setSelectedAtTypeValue(itemValue)}
        //     >
        //         {
        //             props.dataFromParent.map((item, key) => {
        //                 return(
        //                     <Picker.Item style={{ padding: 5 }} label={ item.label } value={ item.value } key={key}  />
        //                 )
        //             })
        //         }
        //     </Picker>
        // </View>
    
    
}


export default contractType;

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