import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ToastAndroid, ActivityIndicator } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput, useTheme } from 'react-native-paper';
import { SignUp } from '../../config/Apis/SignUpUser';
import { emailValidation } from '../../config/Utils';


const index = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const theme = useTheme()

    const onSubmitSignUp = () => {
        if (!firstName) {
            ToastAndroid.show('First Name is required', ToastAndroid.SHORT);
        } else if (!lastName) {
            ToastAndroid.show('Last Name is required', ToastAndroid.SHORT);
        } else if (!email) {
            ToastAndroid.show('Email is required', ToastAndroid.SHORT);
        } else if (emailValidation.test(email) === false) {
            ToastAndroid.show('Please enter a valid email address', ToastAndroid.SHORT);
        } else if (!password) {
            ToastAndroid.show('Password is required', ToastAndroid.SHORT);
        } else if (password != confirmPassword) {
            ToastAndroid.show('Password mismatch', ToastAndroid.SHORT);
        } else {
            setIsLoading(true)
            SignUp({
                "emailorphonenumber": email,
                "password": password,
                "firstName": firstName,
                "lastName": lastName

            }).then(res => {
                setIsLoading(false)
                if (res?.status === 200) {
                    ToastAndroid.show('Success', ToastAndroid.SHORT);
                    props.navigation.goBack()
                }
            }).catch(err => {
                setIsLoading(false)
                ToastAndroid.show("Some error occured", ToastAndroid.LONG);
            })
        }
    }

    return (

        <ScrollView style={[styles.container, { backgroundColor: theme.colors.primary }]}>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('Home')
            }} style={{ justifyContent: "center", alignSelf: 'flex-end', marginRight:30}} hitSlop={{right:30,left:30}}>
                <Text style={{ color: "#fff" }}>Skip {'>'}</Text>
            </TouchableOpacity>
            <View style={{ justifyContent: 'space-between', alignItems: "center", padding: 50, flexDirection: "row" }}>
                <MaterialCommunityIcons name='arrow-left' size={40} color={"#fff"} onPress={() => { props.navigation.goBack() }} />
                <Text style={{ color: "#fff", fontSize: 40 }}>Sign Up</Text>
                <View></View>
            </View>
            <View style={{ backgroundColor: "#f0f0f0", flex: 1, borderTopLeftRadius: 100 }}>
                <View style={{ padding: 30, flex: 1, marginTop: 20 }}>
                    <TextInput
                        label="First Name"
                        value={firstName}
                        onChangeText={text => setFirstName(text)}
                        style={{ backgroundColor: "#fff" }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                    />
                    <TextInput
                        label="Last Name"
                        value={lastName}
                        onChangeText={text => setLastName(text)}
                        style={{ backgroundColor: "#fff", marginTop: 20 }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                    />
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={{ backgroundColor: "#fff", marginTop: 20 }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={{ backgroundColor: "#fff", marginTop: 20 }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                        secureTextEntry={true}
                    />
                    <TextInput
                        label="Confirm Password"
                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                        style={{ backgroundColor: "#fff", marginTop: 20 }}
                        underlineColor='transparent'
                        activeUnderlineColor={theme.colors.primary}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity onPress={onSubmitSignUp} style={[styles.signupButton, { backgroundColor: theme.colors.primary }]}>
                        {isLoading ?
                            <ActivityIndicator size={'small'} color={"#fff"} />
                            :
                            <Text style={{ color: "#fff", fontSize: 20 }}>Sign Up</Text>
                        }
                    </TouchableOpacity>
                </View>

                <View style={{ height: 120, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{}}>You have account ? </Text>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate('Login')
                    }}>
                        <Text style={{ fontWeight: "bold" }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );

}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    signupButton: {
        padding: 20,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5,
        marginTop: 20,
        minHeight: 65
    }
})
