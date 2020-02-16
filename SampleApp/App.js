/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SplashScreen from './app/screens/SplashScreen';
import HomeScreen from './app/screens/HomeScreen';
import FormScreen from './app/screens/FormScreen';
import StatusScreen from './app/screens/StatusScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />; 
  }
}

const AppNavigator = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#db3545',
      },
      headerTitleStyle: {
        color: '#ffffff'
      },
      headerLeft: () => null
    }
  },
  Form: {
    screen: FormScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#db3545'
      },

      headerTitleStyle: {
        color: '#ffffff'
      }
    }
  },
  Status: {
    screen: StatusScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#db3545'
      },

      headerTitleStyle: {
        color: '#ffffff'
      }
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
