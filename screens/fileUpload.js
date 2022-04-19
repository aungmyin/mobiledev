// Example to Pick and Upload files in React Native
// https://aboutreact.com/file-uploading-in-react-native/

// Import React
import React, { useState } from 'react';
// Import core components
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { uriBase } from '../ApiStore/ApiClient';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-community/async-storage';

// Import Document Picker
import DocumentPicker from 'react-native-document-picker';

const FileUpload = () => {
  const [singleFile, setSingleFile] = useState(null);

  const uploadImage = async () => {

    let tokenSave = await AsyncStorage.getItem('userToken');
    // Check if any file is selected or not
    if (singleFile != null) {
      // If file selected then create FormData
      
        const fileToUpload = {
           // uri: RNFS.DocumentDirectoryPath+ '/'+ singleFile.name,
           uri: singleFile.uri,
            type: singleFile.type,
            name: singleFile.name
        };
        
        const myfdata = new FormData();
            myfdata.append('workreport_client_id', 39612);
            myfdata.append('member_id', 371);
            myfdata.append('project_id', 601);
            myfdata.append('individual_contract_id', 16003);
            myfdata.append('file_attachment', fileToUpload);
        console.warn("reach here", myfdata, fileToUpload.uri);

        // upload files
// RNFS.uploadFiles({
//     toUrl: uploadUrl,
//     files: files,
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//     },
//     fields: {
//       'hello': 'world',
//     },
//     begin: uploadBegin,
//     progress: uploadProgress
//   }).promise.then((response) => {
//       if (response.statusCode == 200) {
//         console.log('FILES UPLOADED!'); // response.statusCode, response.headers, response.body
//       } else {
//         console.log('SERVER ERROR');
//       }
//     })
//     .catch((err) => {
//       if(err.description === "cancelled") {
//         // cancelled by user
//       }
//       console.log(err);
// });
        
        //Please change file upload URL
        let res = await fetch(
            'https://icreatormyanmar.com/api-accept.php',
            {
                method: 'post',
                body: myfdata,
                headers: {
                  'Access-Control-Allow-Origin': "*",
                  'access-token': tokenSave
                },
            }
        );
        let responseJson = await res.json();
        if (responseJson.status == 1) {
            alert('Upload Successful');
        } else { alert('error'); }

    } else {
      // If no file selected the show alert
      alert('Please Select File first');
    }
  };

  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));

      
      
      // Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  return (
    <View style={styles.mainBody}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>
          React Native File Upload Example
        </Text>
        <Text
          style={{
            fontSize: 25,
            marginTop: 20,
            marginBottom: 30,
            textAlign: 'center',
          }}>
          www.aboutreact.com
        </Text>
      </View>
      {/*Showing the data of selected Single file*/}
      {singleFile != null ? (
        <Text style={styles.textStyle}>
          File Name: {singleFile.name ? singleFile.name : ''}
          {'\n'}
          Type: {singleFile.type ? singleFile.type : ''}
          {'\n'}
          File Size: {singleFile.size ? singleFile.size : ''}
          {'\n'}
          URI: {singleFile.uri ? singleFile.uri : ''}
          {'\n'}
        </Text>
      ) : null}
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={selectFile}>
        <Text style={styles.buttonTextStyle}>Select File</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={uploadImage}>
        <Text style={styles.buttonTextStyle}>Upload File</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
});

export default FileUpload;