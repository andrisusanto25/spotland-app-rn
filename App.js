import React from "react"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Container, Content, Footer, FooterTab, Button, Icon, View, Text } from 'native-base';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import AccountScreen from './src/screens/AccountScreen';
import PlaceDetail from "./src/components/PlaceDetail"
import TabDetail from "./src/components/TabDetail"
import Place from "./src/components/Place"

const HomeStack = createStackNavigator({
  HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        headerBackTitle: '',
        title : "spotland",
        headerTitleStyle: {
          fontFamily: "Times New Roman",
          fontSize: 30
        }
      }
  },
  Place: {
      screen: Place,
      navigationOptions: {
        headerBackTitle: ''
      }
  },
  PlaceDetail: {
      screen: PlaceDetail,
      navigationOptions: {
        title : "Place Detail",
        headerBackTitle: ''
      }
  }
});

const tabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen:HomeStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>
        )
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-search'} />
          </View>
        )
      }
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-person'} />
          </View>
        )
      }
    }
  },
  {
    initialRouteName: 'Home',
    activeColor: '#000000',
    inactiveColor: '#A0A0A0',
    barStyle: { backgroundColor: '#ffffff' },
  }
);

export default createAppContainer(tabNavigator);