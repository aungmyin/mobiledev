import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';
import { uriBase } from '../ApiStore/ApiClient';

import { AuthContext } from '../components/content';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent(props){

    const paperTheme = useTheme();

    const { signOut, getProfile, toggleTheme } = React.useContext(AuthContext);
    const [langStore, setLangStore] = React.useState([]);
    const [langEnJp, setLangEnJp] = React.useState('');

    const [userId, setUserId] = React.useState(null);
    const [userToken, setUserToken] = React.useState(null);
    const [data, setData] = React.useState([]);
    const [yourPrifle, setYourPrifle] = React.useState(null);

    useEffect(() => {
        setTimeout(() => {
            console.log(getProfiles(), "Drawer");
        }, 100);
    }, []);

    return (
        <View style={{ flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        {/* <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://expertphotography.com/wp-content/uploads/2020/08/social-media-profile-photos-9.jpg'
                                }}
                                size={70}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>{ props.data.last_name }ff</Title>
                                <Caption style={styles.caption}>@aungmyin</Caption>
                            </View>

                            
                        </View> */}
                        
                        {/* <View style={[styles.row, {borderBottomColor: '#ddd', borderBottomWidth: 1,paddingBottom: 10, marginRight: 20}]}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>Date</Paragraph>
                                <Caption style={styles.caption}>2022/03/31</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>Version</Paragraph>
                                <Caption style={styles.caption}>1.0</Caption>
                            </View>
                        </View> */}
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem
                                icon={({color, size}) => (
                                    <Icon 
                                        name="home-outline"
                                        color={color}
                                        size={size}
                                    />
                                )} 
                                label="Home"
                                onPress={() => {props.navigation.navigate("Home")}} />
                            <DrawerItem
                                icon={({color, size}) => (
                                    <Icon 
                                        name="account-outline"
                                        color={color}
                                        size={size}
                                    />
                                )} 
                                label="Profile"
                                onPress={() => {props.navigation.navigate("Profile")}} />
                            <DrawerItem
                                initialParams={{ showAll: 2 }}
                                icon={({color, size}) => (
                                    <Icon 
                                        name="clock-outline"
                                        color={color}
                                        size={size}
                                    />
                                )} 
                                label="Work Report"
                                onPress={() => {props.navigation.navigate("Workreport")}} />
                            
                            <DrawerItem
                                icon={({color, size}) => (
                                    <Icons 
                                        name="ios-aperture"
                                        color={color}
                                        size={size}
                                    />
                                )} 
                                label="Settings"
                                onPress={() => {props.navigation.navigate("Settings")}} />
                            
                        </Drawer.Section>

                        <Drawer.Section title="Preference">
                            <TouchableRipple onPress={()=> {toggleTheme()}}>
                                <View style={styles.preference}>
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents="none">
                                        <Switch value={paperTheme.dark} />
                                    </View>
                                </View>
                            </TouchableRipple>
                        </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon 
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )} 
                    label="Sign Out"
                    onPress={() => {signOut()}} />

            </Drawer.Section>
            <View style={styles.userInfoSection}>
                <View style={[styles.row, {borderTopColor: '#ddd', borderTopWidth: 1,padding: 10, marginRight: 20}]}>
                    <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>Release</Paragraph>
                        <Caption style={styles.caption}>2022/04/07</Caption>
                    </View>
                    <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>Version</Paragraph>
                        <Caption style={styles.caption}>1.01</Caption>
                    </View>
                </View>
            </View>
        </View>
        
    );
}

const getProfiles = () => {
    console.log("new profile drawer")
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });