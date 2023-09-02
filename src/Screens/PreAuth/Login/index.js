import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert, TouchableOpacity, ScrollView, ToastAndroid,  ActivityIndicator } from 'react-native'
import { TextInput, useTheme } from 'react-native-paper';
import { Login } from '../../config/Apis/LoginUser';
import { emailValidation } from '../../config/Utils';


const index = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const theme = useTheme()

    const onSubmitLogin = () => {
        if (!email) {
            ToastAndroid.show('Email is required', ToastAndroid.SHORT);
        } else if (emailValidation.test(email) === false) {
            ToastAndroid.show('Please enter a valid email address', ToastAndroid.SHORT);
        } else if (!password) {
            ToastAndroid.show('Password is required', ToastAndroid.SHORT);
        } else {
            setIsLoading(true)
            Login({
                "emailorphonenumber": email,
                "password": password
            }).then(res => {
                setIsLoading(false)
                if (res?.status === 200) {
                    ToastAndroid.show('Login successfully', ToastAndroid.SHORT);
                    props.navigation.replace('Home')
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
            }} style={{ justifyContent: "center", alignSelf: 'flex-end',marginRight:30 }} hitSlop={{right:30,left:30}}>
                <Text style={{ color: "#fff" }}>Skip {}</Text>
            </TouchableOpacity>
            <View style={{ justifyContent: "center", alignItems: "center", padding: 100 }}>
                <Text style={{ color: "#fff", fontSize: 40 }}>OOPACKS</Text>
            </View>
            <View style={{ backgroundColor: "#f0f0f0", flex: 1, borderTopLeftRadius: 100 }}>
                <View style={{ padding: 10, justifyContent: "center", alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 30 }}>Login</Text>
                </View>
                <View style={{ padding: 30, flex: 1 }}>
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={{ backgroundColor: "#fff" }}
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

                    <TouchableOpacity onPress={onSubmitLogin} style={[styles.loginButton, { backgroundColor: theme.colors.primary }]}>
                        {
                            isLoading ?
                                <ActivityIndicator size={'small'} color={"#fff"} />
                                :
                                <Text style={{ color: "#fff", fontSize: 20 }}>Login</Text>
                        }
                    </TouchableOpacity>
                </View>
                <View style={{ height: 80, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', }} />
            </View>
            <View style={{ backgroundColor: "#f0f0f0", height: 120, justifyContent: "center", alignItems: "center", flexDirection: 'row' }}>
                <Text style={{}}>Dont't have any account ? </Text>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('SignUp')
                }}>
                    <Text style={{ fontWeight: "bold" }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );

}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginButton: {
        padding: 20,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5,
        marginTop: 20,
        minHeight: 65
    }
})
