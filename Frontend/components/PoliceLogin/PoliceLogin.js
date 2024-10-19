import { View, SafeAreaView, StyleSheet, TextInput,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Text , Button} from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { checkauth, setUser } from '../../store/slices/UserSlice';
import { LoginPolice } from '../../api/PoliceUser';

export default function PoliceLogin({navigation}) {
    const [email , setemail]=useState('');
    const [password , setpassword]=useState('');
    const dispatch =  useDispatch();

    const handleLoginApi = async (data)=>{
        try{
            const response =await LoginPolice(data);
            console.log(response);
            const res = {'user':response.user,'role':'Police'};
            dispatch(checkauth());
        }
        catch(err){
            console.log(err);
        }
    }

    const handleLogin=()=>{
        console.log("Email: ",email);
        console.log("Password: ",password);
        setemail('');
        setpassword('');

        handleLoginApi({
            "email":email,
            "password":password,
            "userType":"police"
        })
    }

    return (
        
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
            <ScrollView>

                <View style={{alignItems:'center',marginTop:90,marginBottom:30}}>
                    <Text variant="headlineSmall" style={{ textAlign: 'center', color: "black",fontFamily:'Manrope',fontWeight:'bold',width:'90%', fontSize:20 }}>Police Login - Traffic Squad</Text>
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

                    </View>

                    
                    <View style={{alignItems:'center',marginTop:10}}>
                    <Button mode="contained" loading={false} dark style={styles.button} onPress={handleLogin}>
                        Log In
                    </Button>
                    </View>

            </ScrollView>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFC',
        fontFamily: 'fangsong',
        color: 'black',
    },
    input:{ backgroundColor: '#E8EDF2', borderRadius: 11, margin: 15, padding: 13, color: '#4F7396' },
    button:{
        backgroundColor:'#499FF4',
        width:'70%',
        color:'white',
    }

});
