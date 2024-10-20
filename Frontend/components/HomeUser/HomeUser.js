import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import HomeCard from './HomeCard';
import { Button, Card } from 'react-native-paper';
import AddVehicle from './AddVehicle';
import Loading from '../Loading/Loading';
import { GetVehicleUser } from '../../api/GetVehicleApi';

const HomeUser = () => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);

    const [vehicleData, setVehicleData] = useState([]);


    const handleVehicle = async () => {
        setLoading(true);
        try {
            
            const response = await GetVehicleUser();
            setVehicleData(response.vehicle);
            setLoading(false);
        }

        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleVehicle();
        setLoading(false);
    })



    return (
        <>
            {loading ? <Loading /> :
                <SafeAreaView style={{ flex: 1 }}>


                    <AddVehicle show={showModal} onDismiss={() => setShowModal(false)} handleVehicle={handleVehicle} />
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 60, marginBottom: 30, marginLeft: 10 }}>
                            <Text variant="headlineSmall" style={{
                                textAlign: 'left', color: "black", fontFamily: 'Manrope',
                                width: '60%', fontSize: 30
                            }}>My Vehicles</Text>


                            <Button onPress={() => setShowModal(true)} dark={false} icon="plus-thick" style={{ marginRight: 7, justifyContent: 'center', alignItems: 'center', width: '30%', borderRadius: 5, backgroundColor: '#499FF4', color: 'white' }}>
                                Add
                            </Button>
                        </View>

                        <View style={{ width: '100%', alignItems: 'center' }}>

                            {/* if no vehicles added  */}

                            {
                                vehicleData.length > 0 ? vehicleData.map((data,index) => {
                                    return (
                                        <HomeCard key={index} vehicle={data} />
                                    )
                                }) :
                                    <>
                                        <View style={{ width: '80%' }}>
                                            <Card>
                                                <Card.Cover source={{ uri: 'https://www.globalintltd.com/images//no-record-found.jpg' }} />
                                            </Card>
                                        </View>

                                        <View style={{ width: '80%' }}>
                                            <Text variant="headlineSmall" style={{
                                                textAlign: 'center', color: "black", fontFamily: 'Manrope',
                                                width: '100%', fontSize: 18, fontWeight: 'bold'
                                            }}>No Vehicle Found , ADD NOW !!</Text>
                                        </View>

                                    </>

                            }





                            {/* <HomeCard /> */}


                        </View>

                    </View>


                </SafeAreaView>
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D7D7D7',
        fontFamily: 'fangsong',
        color: 'black',
        width: '100%',
    },
});

export default HomeUser;
