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
import { Formik } from 'formik';
import * as yup from 'yup';

const formSchema = yup.object({
    phoneNumber: yup.number('Invalid number!').required('Phone number is required!'),
    email: yup.string().email('Invalid e-mail!').required('E-mail is required!'),
    password: yup.string().required('Password is required!')
})

export default class FormScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            isActivityIndicatorActive: false
        }
    }

    render() {
        const { navigation } = this.props;  
        const userName = navigation.getParam('userName', 'Undefined');

        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.container}>
                            <Text> Hi <Text style={ {color: '#db3545'} }>{userName}</Text>! Please enter your details. </Text>

                            <Formik
                                initialValues={{ phoneNumber: '', email: '', password: '' }}
                                validationSchema={ formSchema }
                                onSubmit={(values) => {
                                    this.setState({
                                        isActivityIndicatorActive: true
                                    });
                                    setTimeout( () => {
                                        this.setState({
                                            isActivityIndicatorActive: false
                                        });
    
                                        this.props.navigation.navigate('Status');
                                    }, 3000);
                                }  
                            }
                            >

                                {
                                    (formikProps) => (
                                        <View>
                                            <TextInput
                                                placeholder='Phone Number'
                                                keyboardType='numeric'
                                                onChangeText={formikProps.handleChange('phoneNumber')}
                                                value={formikProps.values.phoneNumber}
                                                onBlur={formikProps.handleBlur('phoneNumber')}
                                            />
                                            <Text style={styles.errorText}> 
                                                {formikProps.touched.phoneNumber && formikProps.errors.phoneNumber} 
                                            </Text>

                                            <TextInput
                                                placeholder='Email'
                                                onChangeText={formikProps.handleChange('email')}
                                                value={formikProps.values.email}
                                                onBlur={formikProps.handleBlur('email')}
                                            />
                                            <Text style={styles.errorText}> 
                                                {formikProps.touched.email && formikProps.errors.email}
                                            </Text>

                                            <TextInput
                                                placeholder='Password'
                                                onChangeText={formikProps.handleChange('password')}
                                                secureTextEntry
                                                value={formikProps.values.password}
                                                onBlur={formikProps.handleBlur('password')}
                                            />
                                            <Text style={styles.errorText}>
                                                {formikProps.touched.password && formikProps.errors.password}
                                            </Text>

                                            <Button 
                                            title="Submit" 
                                            color="#db3545"
                                            onPress={formikProps.handleSubmit}/>
                                        </View>
                                    )
                                }

                            </Formik>
                        </View>
                        
                        {
                        this.state.isActivityIndicatorActive ? 
                        <ActivityIndicator size="large" />
                        :
                        <View></View>
                        }
                    </ScrollView>
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
    },

    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6
    }
});

