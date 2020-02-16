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
    ActivityIndicator
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { TextInput } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            isActivityIndicatorActive: false
        }

        this.handleChangeUserName = this.handleChangeUserName.bind(this)
    }

    handleChangeUserName(_userName) {
        this.setState(
            {
                userName: _userName
            }
        )
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <>
                <StatusBar barStyle="dark-content" />
                <View style={styles.container}>
                    <Text>
                        Hello, from the <Text style={ {color: '#db3545'} }>Foodvise</Text> team! We are glad that you're here. 
                        Please help us in knowing you before taking a tour of Foodvise. 
                        Thanks for your patience.
                    </Text>
                    <TextInput
                        placeholder="Write your name here ..."
                        defaultValue={this.state.userName}
                        onChangeText={this.handleChangeUserName}
                    />

                    <Button
                        title="Proceed"
                        color="#db3545"
                        onPress={() => {
                            if (this.state.userName) {
                                
                                this.setState({
                                    isActivityIndicatorActive: true
                                });
                                setTimeout( () => {
                                    this.setState({
                                        isActivityIndicatorActive: false
                                    });

                                    this.props.navigation.navigate('Form', {
                                        userName: this.state.userName
                                    });
                                }, 3000);
                                
                            }
                            else {
                                Alert.alert("Error", "Please provide your name to proceed.");
                            }
                        }}
                    />

                    {
                        this.state.isActivityIndicatorActive ? 
                        <ActivityIndicator size="large" />
                        :
                        <View></View>
                    }
                    
                </View>

            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    }
});

