import React from 'react';
import { StyleSheet, View , SafeAreaView,Text } from 'react-native';
import CardComponent from '../CardComponent/CardComponent';


const Challans = () => {
   
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>


                    <View style={{marginTop: 60, marginBottom: 30,marginLeft:10}}>
                        <Text variant="headlineSmall" style={{ textAlign: 'left', color: "black", fontFamily: 'Manrope',
                            width: '90%', fontSize: 30 }}>My Violations</Text>
                    </View>

                    <View style={{width:'100%',alignItems:'center'}}>
                        
                        <CardComponent />

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
});


export default Challans;
