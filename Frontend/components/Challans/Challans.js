import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Text, ScrollView } from 'react-native';
import CardComponent from '../CardComponent/CardComponent';
import Loading from '../Loading/Loading';
import LottieView from 'lottie-react-native';
import { useSelector } from 'react-redux';
import { GetChallanUser } from '../../api/GetChallanUser';


const Challans = () => {

    const [loading, setLoading] = useState(true);
    const User = useSelector(state => state.user);

    const [challanData, setChallanData] = useState({});

    const getChallan = async (id) => {
        try {
            const data = await GetChallanUser(id);
            setChallanData(data.challan);
            setLoading(false);
        }

        catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getChallan(User.user.id);
        // console.log(User.user.id);
    }, []);

    return (
        <>

            {loading ? <Loading /> :
                <SafeAreaView style={{ flex: 1 }}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={styles.container}>


                            <View style={{ marginTop: 60, marginBottom: 30, marginLeft: 10 }}>
                                <Text variant="headlineSmall" style={{
                                    textAlign: 'left', color: "black", fontFamily: 'Manrope',
                                    width: '90%', fontSize: 30
                                }}>My Violations</Text>
                            </View>

                            <ScrollView>
                            <View style={{ width: '100%', alignItems: 'center' }}>

                                {challanData.length > 0 ?
                                    (   
                                        challanData.map((challan, index) => {
                                            return (
                                                <CardComponent key={index} challan={challan} />
                                            )
                                        })

                                        
                                    )
                                : <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 300,
                                    width: '100%',
                                    paddingBottom: 50,
                                    marginTop: 50
                                }}>
                                    <LottieView
                                        source={require('../../assets/animations/No_Data_Found_2.json')}
                                        autoPlay
                                        loop
                                        style={{ flex: 1, width: '100%', height: '100%' }}
                                    />
                                </View>
                                
                            }
                            </View>
                            </ScrollView>

                        </View>


                    </SafeAreaView>
                </SafeAreaView>
            }
        </>
    )
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


export default Challans;
