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

export default class HomeScreen extends React.Component {

    render() {
        return (
            <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView>
                    <Text> Hello, HomeScreen </Text>
                </ScrollView>
            </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({

});

