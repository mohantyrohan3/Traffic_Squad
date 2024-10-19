import { View, SafeAreaView, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Text, Button } from 'react-native-paper';
import { RegisterUser } from '../../api/RegisterUser';
import { useDispatch } from 'react-redux';
import { checkauth} from '../../store/slices/UserSlice';
import { LoginUser } from '../../api/LoginUser';




const Register = () => {


    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [dlnumber, setdlnumber] = useState('');
    const dispatch = useDispatch();
    


    const handleRegisterApi = async (data) =>{

           try{

           const res =  await RegisterUser(data);
           const res1 = await LoginUser({
                "email": email,
                "password": password,
                "userType": "user"
           });

            dispatch(checkauth());

           }
           catch(err){
                console.log(err);
           }

    }



    const handleLogin = () => {
        console.log("Email: ", email);
        console.log("Password: ", password);
        console.log("DL Number: ", dlnumber);
        setemail('');
        setpassword('');
        setdlnumber('');
        handleRegisterApi({
            "email": email,
            "password": password,
            "dlnumber": dlnumber,
        })
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ScrollView>

                    <View style={{ alignItems: 'center', marginTop: 60, marginBottom: 30 }}>
                        <Text variant="headlineSmall" style={{ textAlign: 'center', color: "black", fontFamily: 'Manrope', fontWeight: 'bold', width: '90%', fontSize: 20 }}>Create an account</Text>
                    </View>

                    <View>

                        <TextInput
                            placeholder="Email"
                            placeholderTextColor={'#4F7396'}
                            inputMode='email'
                            value={email}
                            onChangeText={setemail}
                            style={styles.input}
                        />

                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={setpassword}
                            secureTextEntry={true}
                            placeholderTextColor={'#4F7396'}
                            style={styles.input}
                        />


                        <TextInput
                            placeholder="DL No --- OD XXX"
                            placeholderTextColor={'#4F7396'}
                            inputMode='text'
                            value={dlnumber}
                            onChangeText={setdlnumber}
                            style={styles.input}
                        />

                    </View>


                    <View style={{ marginTop: 30, marginBottom: 20, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Button mode="contained" loading={false} dark style={styles.button} onPress={handleLogin}>
                            Next
                        </Button>
                    </View>


                </ScrollView>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFC',
        // fontFamily: 'fangsong',
        color: 'black',
    },
    input: { backgroundColor: '#E8EDF2', borderRadius: 11, margin: 15, padding: 13, color: '#4F7396' },
    button: {
        backgroundColor: '#499FF4',
        width: '70%',
        color: 'white',
    }

});

export default Register;
