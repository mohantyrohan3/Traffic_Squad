import React,{useState} from 'react';
import { View, SafeAreaView, StyleSheet, TextInput, ScrollView } from 'react-native'
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';

const Logout = ({navigation}) => {
    const [modal , setmodal]=useState(true);
    const handleNo = ()=>{
        setmodal(false);
        navigation.navigate('PoliceUser');
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

                <View style={{width:'80%'}}>
                    
                        <View style={styles.containerStyle}>

                            <View style={{ alignItems: 'center' }}>
                                <Text variant="headlineSmall" style={{ textAlign: 'center', color: "black", fontFamily: 'Manrope', fontWeight: 'bold', width: '90%', fontSize: 20 }}>DO YOU WANNA LOGOUT ?</Text>
                            </View>

                            <View>
                                


                                <View style={{ alignItems: 'center', marginTop: 20 }}>
                                    <Button mode="contained" loading={false} dark style={styles.button} onPress={()=>console.log('Heloo')}>
                                        LOGOUT
                                    </Button>
                                </View>


                            </View>
                        </View>
    

                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFC',
        fontFamily: 'fangsong',
        color: 'black',
        justifyContent:"center",
        alignItems:"center"
    },
    button: {
        backgroundColor: '#499FF4',
        width: '55%',
        color: 'white',
        marginVertical: 10
    },
    containerStyle: {
        backgroundColor: 'white',
        // width: "100%",
        height: 250,
        borderRadius: 20,
        elevation:10,
        justifyContent:"center",
    },
})

export default Logout;
