import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet, TextInput, ScrollView } from 'react-native'
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
import DocumentPicker, {
    DirectoryPickerResponse,
    DocumentPickerResponse,
    isCancel,
    isInProgress,
    types,
} from 'react-native-document-picker'
import { AddChallanApi } from '../../api/AddChallanApi';


const AddChallan = (props) => {
    const [vehicle_no, setvehicleno] = useState('');
    const [dl_no, setdlno] = useState('');
    const [image, setimage] = useState({});


    const handleChallanApi = async (data) => {
        try {
            const formdata = new FormData();
            formdata.append('vehicle_no', data.vehicle_no);
            formdata.append('dl_no', data.dl_no);
            formdata.append('file', {
                uri: data.image.uri,
                type: data.image.type,
                name: data.image.name
            });
            const res = await AddChallanApi (formdata);
            props.getChallanApi();
        }

        catch(err){
            console.log(err);
        }

    }

    const handleNewVehicle = () => {
        console.log("Vehicle Number: ", vehicle_no);
        console.log("DL Number: ", dl_no);

        if (image) {
            handleChallanApi({
                "vehicle_no": vehicle_no,
                "dl_no": dl_no,
                "image": image
            })
        }

        setvehicleno('');
        setdlno('');
        setimage({});
        props.onDismiss();
    }

    const handleFileUpload = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [types.images],
                allowMultiSelection: false,
            });
            setimage(result[0]);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled the picker')
            }
            else {
                console.log(err)
            }
        }
    }


    return (
        <View style={{}}>
            <Portal>
                <Modal visible={props.show} onDismiss={props.onDismiss} contentContainerStyle={styles.containerStyle}>

                    <View style={{ alignItems: 'center' }}>
                        <Text variant="headlineSmall" style={{ textAlign: 'center', color: "black", fontFamily: 'Manrope', fontWeight: 'bold', width: '90%', fontSize: 20 }}>ADD CHALLAN DETAILS</Text>
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
                            placeholder="DL Number --- DL 33 XXX"
                            value={dl_no}
                            onChangeText={setdlno}
                            placeholderTextColor={'#4F7396'}
                            style={styles.input}
                        />

                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <Button icon='camera-image' mode="contained" loading={false} dark onPress={handleFileUpload}>
                                Add Vehicle Image
                            </Button>
                            <Text style={{ color: 'black' }}>{image['name']}</Text>
                        </View>


                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <Button mode="contained" loading={false} dark style={styles.button} onPress={handleNewVehicle}>
                                Add Challan
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
    button: {
        backgroundColor: '#499FF4',
        width: '70%',
        color: 'white',
    }
})

export default AddChallan;
