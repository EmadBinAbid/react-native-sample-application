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
    Alert
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
            userName: ""
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

    handleClickProceed() {
        
        // Navigate to FormScreen
        // this.props.navigation.navigate('Form')

    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.container}>
                            <Text> Hello, HomeScreen </Text>
                            <TextInput
                                placeholder="Write your name here ..."
                                defaultValue={this.state.userName}
                                onChangeText={this.handleChangeUserName}
                            />

                            <Button 
                                title="Proceed"
                                // onPress={this.handleClickProceed}
                                onPress={ () => {
                                    if (this.state.userName) {
                                        this.props.navigation.navigate('Form', {  
                                            userName: this.state.userName
                                        })
                                    }
                                    else {
                                        Alert.alert("Error", "Please provide your name to proceed.");
                                    }
                                }}
                            />
                        </View>

                    </ScrollView>
                    <Text>{this.state.userName}</Text>
                </SafeAreaView>
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

