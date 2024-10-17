import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';
import AddChallan from './AddChallan';
import PoliceCard from './PoliceCard';

const PoliceUser = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <AddChallan show={showModal} onDismiss={() => setShowModal(false)} />


            <View style={styles.container}>



                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 60, marginBottom: 30, marginLeft: 10 }}>
                    <Text variant="headlineSmall" style={{
                        textAlign: 'left', color: "black", fontFamily: 'Manrope',
                        width: '60%', fontSize: 30
                    }}>My Challans</Text>


                    <Button onPress={() => setShowModal(true)} dark={false} icon="plus-thick" style={{ marginRight: 7, justifyContent: 'center', alignItems: 'center', width: '30%', borderRadius: 5, backgroundColor: '#499FF4', color: 'white' }}>
                        Add
                    </Button>
                </View>

                <View style={{ width: '100%', alignItems: 'center' }}>

                    {/* if no challans added  */}

                    <View style={{ width: '80%' }}>
                        <Card>
                            <Card.Cover source={{ uri: 'https://www.globalintltd.com/images//no-record-found.jpg' }} />
                        </Card>
                    </View>


                    <View style={{ width: '80%' }}>
                        <Text variant="headlineSmall" style={{
                            textAlign: 'center', color: "black", fontFamily: 'Manrope',
                            width: '100%', fontSize: 18, fontWeight: 'bold'
                        }}>No Challans Found , ADD NOW !!</Text>
                    </View>


                    {/* If Challans are Present */}
                    {/* <PoliceCard /> */}


                </View>



            </View>
        </SafeAreaView>
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
})

export default PoliceUser;
