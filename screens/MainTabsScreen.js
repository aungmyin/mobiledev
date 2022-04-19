import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import WorkreportScreen from './WorkreportScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet } from 'react-native';
import ReactForm from './ReactForm';
import { TouchableRipple } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingStack = createStackNavigator();
const WorkreportStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainStackScreen = () => (
    <Tab.Navigator 
        initialRouteName="Home" 
        tabBarOptions={{
          activeTintColor: '#37c3a7',
          inactiveTintColor: '#cdcdcd',
          pressColor: 'gold',//for click (ripple) effect color
          style:{
            backgroundColor: '#ffffff',//bgcolor you want to change
          }
        }}>
        <Tab.Screen 
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <Icon name="ios-home" color={color} size={26} />
              )
            }}
        />
        <Tab.Screen 
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({color}) => (
                <Icon name="ios-person" color={color} size={26} />
              )
            }}
        />
        <Tab.Screen 
            name="Workreport"
            component={WorkStackScreen}
            options={{
              tabBarLabel: 'Work Report',
              tabBarIcon: ({color}) => (
                <Icon name="ios-time" color={color} size={26} />
              )
            }}
        />
        <Tab.Screen 
            name="Settings"
            component={SettingStackScreen}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({color}) => (
                <Icon name="ios-aperture" color={color} size={26} />
              )
            }}
        />
    </Tab.Navigator>
);

export default MainStackScreen;


const HomeStackScreen = ( {navigation} ) => (
    <HomeStack.Navigator screenOptions={{ 
      headerStyle: {
        backgroundColor: "#ffffff",
      },
      headerTintColor:  "#cdcdcd",
      headerTitleStyle: {
        fontWeight: 'bold'
      }
     }} >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title: '',
        headerLeft: () => (
          <Icon name="ios-menu" size={25} style={{margin: 5}} color="#707070"
          backgroundColor="#009387" onPress={() => navigation.openDrawer()} ></Icon>      
          ),
        headerRight: () => (
          <View style={[ styles.headerRgtContainer]}>
            <TouchableOpacity 
              style={styles.myRow}
              onPress={ () => navigation.navigate("Helps") }
            >
              <View style={{ marginTop: 3 }}>
                <Text style={{color: '#3ea0e6'}}>Help</Text>
              </View>
              <View style={ styles.QuestMark}>
                <Text style={styles.QuestMarkText}>?</Text> 
              </View>
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          borderBottomWidth: 0 // Just in case.
        }
   
      }} />
    </HomeStack.Navigator>
);

  
const ProfileStackScreen = ( {navigation} ) => (
    <ProfileStack.Navigator screenOptions={{ 
      headerStyle: {
        backgroundColor: "#ffffff"
      },
      headerTintColor:  "#fff",
      headerTitleStyle: {
        fontWeight: 'bold'
      }
     }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
        title: '',
        headerLeft: () => (
          <Icon name="ios-arrow-back" size={25}  style={{margin: 5}} color="#707070"
          backgroundColor="#009387" onPress={() => navigation.navigate("Home")} ></Icon>      
        ),
        headerRight: () => (
          <View style={[ styles.headerRgtContainer]}>
            <TouchableOpacity 
              style={styles.myRow}
              onPress={ () => navigation.navigate("Helps") }
            >
              <View style={{ marginTop: 3 }}>
                <Text style={{color: '#3ea0e6'}}>Help</Text>
              </View>
              <View style={ styles.QuestMark}>
                <Text style={styles.QuestMarkText}>?</Text> 
              </View>
            </TouchableOpacity>
          </View>     
        ),
        headerStyle: {
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          borderBottomWidth: 0 // Just in case.
        }
      }} />
    </ProfileStack.Navigator>
);

const SettingStackScreen = ( {navigation} ) => (
  <SettingStack.Navigator screenOptions={{ 
    headerStyle: {
      backgroundColor: "#ffffff"
    },
    headerTintColor:  "#fff",
    headerTitleStyle: {
      fontWeight: 'bold'
    }
   }}>
    <SettingStack.Screen name="Settings" component={SettingScreen} options={{
      title: 'Settings',
      headerLeft: () => (
        <Icon name="ios-menu" size={25}  style={{margin: 5}} color="#707070"
        backgroundColor="#009387" onPress={() => navigation.openDrawer()} ></Icon>      
      ),
      headerRight: () => (
        <View style={[ styles.headerRgtContainer]}>
          <TouchableOpacity 
            style={styles.myRow}
            onPress={ () => navigation.navigate("Helps") }
          >
            <View style={{ marginTop: 3 }}>
              <Text style={{color: '#3ea0e6'}}>Help</Text>
            </View>
            <View style={ styles.QuestMark}>
              <Text style={styles.QuestMarkText}>?</Text> 
            </View>
          </TouchableOpacity>
        </View>      
      ),
      headerStyle: {
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        borderBottomWidth: 0 // Just in case.
      }
    }} />
  </SettingStack.Navigator>
);

const WorkStackScreen = ( {navigation} ) => (
  <WorkreportStack.Navigator screenOptions={{ 
    headerStyle: {
      backgroundColor: "#ffffff"
    },
    headerTintColor:  "#fff",
    headerTitleStyle: {
      fontWeight: 'bold'
    }
   }}>
    <WorkreportStack.Screen name="WorkReport" component={WorkreportScreen} options={{
      title: 'Work Report',
      headerLeft: () => (
        <Icon name="ios-menu" size={25}  style={{margin: 5}} color="#707070"
        backgroundColor="#009387" onPress={() => navigation.openDrawer()} ></Icon>      
      ),
      headerRight: () => (
        <View style={[ styles.headerRgtContainer]}>
          <TouchableOpacity 
            style={styles.myRow}
            onPress={ () => navigation.navigate("Helps") }
          >
            <View style={{ marginTop: 3 }}>
              <Text style={{color: '#3ea0e6'}}>Help</Text>
            </View>
            <View style={ styles.QuestMark}>
              <Text style={styles.QuestMarkText}>?</Text> 
            </View>
          </TouchableOpacity>
        </View>
      ),
      headerStyle: {
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        borderBottomWidth: 0 // Just in case.
      }
    }} />
  </WorkreportStack.Navigator>
);

const styles = StyleSheet.create({
  myRow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  headerRgtContainer: {
    backgroundColor: '#cbe9ff', borderWidth: 1, borderColor: '#3ea0e6', margin: 5, paddingHorizontal: 10, paddingVertical: 8, borderRadius: 15
  },
  QuestMark: {
    marginBottom: 15,  borderWidth: 1, borderColor: '#3ea0e6', paddingHorizontal: 11, paddingVertical: 5, marginLeft: 5, borderRadius: 15
  },
  QuestMarkText: {
    fontSize: 12, color: '#3ea0e6'
  }
});
