import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet, TextInput, ScrollView } from 'react-native'
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';

const AddVehicle = (props) => {
    const [vehicle_no, setvehicleno] = useState('');
    const [owner, setowner] = useState('');

    const handleNewVehicle=()=>{
        console.log("DL Number: ",vehicle_no);
        console.log("Owner Name: ",owner);
        setvehicleno('');
        setowner('');
        props.onDismiss();
    }


    return (
        <View style={{}}>
            <Portal>
                <Modal  visible={props.show} onDismiss={props.onDismiss} contentContainerStyle={styles.containerStyle}>

                    <View style={{ alignItems: 'center' }}>
                        <Text variant="headlineSmall" style={{ textAlign: 'center', color: "black", fontFamily: 'Manrope', fontWeight: 'bold', width: '90%', fontSize: 20 }}>ADD VEHICLE DETAILS</Text>
                    </View>

                    <View>
                        <TextInput
                            placeholder="Vehicle No --- OD 33 XXX"
                            placeholderTextColor={'#4F7396'}
                            inputMode='text'
                            value={vehicle_no}
                            onChangeText={setvehicleno}
                            style={styles.input}
                        />

                        <TextInput
                            placeholder="Owner Name"
                            value={owner}
                            onChangeText={setowner}
                            placeholderTextColor={'#4F7396'}
                            style={styles.input}
                        />


                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <Button mode="contained" loading={false} dark style={styles.button} onPress={handleNewVehicle}>
                                Add Vehicle
                            </Button>
                        </View>

                    </View>

                </Modal>
            </Portal>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'white', padding: 20,
        height: "50%", margin: 20,
        borderRadius: 20
    },
    input: { backgroundColor: '#E8EDF2', borderRadius: 11, margin: 15, padding: 13, color: '#4F7396' },
    button:{
        backgroundColor:'#499FF4',
        width:'70%',
        color:'white',
    }
})

export default AddVehicle;
