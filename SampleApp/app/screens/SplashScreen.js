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
    Button,
    Alert,
    ActivityIndicator,
    Image,
    Animated
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { TextInput } from 'react-native-gesture-handler';


export default class SplashScreen extends React.Component {

    state = {
        opacity: new Animated.Value(0),
    }

    onLoad = () => {

        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start(() => { this.props.navigation.navigate('Home') });
    }

    render() {

        return (
            <>
                <View style={styles.container}>
                    <Animated.Image
                        onLoad={this.onLoad}
                        source={require('../../assets/foodvise-logo.png')}
                        {...this.props}
                        style={[
                            {
                                opacity: this.state.opacity,
                                transform: [
                                    {
                                        scale: this.state.opacity.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0.70, 1]
                                        })
                                    }
                                ]
                            }
                        ]}
                    />
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#db3545',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

