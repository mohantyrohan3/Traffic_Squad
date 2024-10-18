import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { Card, Button } from 'react-native-paper';

const FirstScreen = ({navigation}) => {

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>


                <View style={styles.ani_container}>
                    <LottieView
                        source={require('../../assets/animations/Home_Animation.json')}
                        autoPlay
                        loop
                        style={{ flex: 1, width: '100%', height: '100%' }}
                    />
                </View>

                <View>
                    <Text style={{ fontFamily: 'RobotoSlab-ExtraBold', fontSize: 35, color: 'black', textAlign: 'center' }}>
                        Traffic Squad
                    </Text>
                </View>

                <View style={{alignItems:'center' , marginTop:60}}>
                    <Card  style={{backgroundColor:'white' , width:'90%'}}>
                        <Card.Actions style={{flexDirection:'column'}}>
                            <Button onPress={()=>{navigation.navigate("Login")}} style={{width:'50%' , marginVertical:20}}>USER</Button>
                            <Button onPress={()=>{navigation.navigate("PoliceLogin")}} style={{width:'50%' , marginVertical:20}}>POLICE</Button>
                        </Card.Actions>
                    </Card>

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
        // borderColor:'black',
        // borderWidth:10,
    },
    ani_container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width: '100%',
        paddingBottom: 50,
    }
    // input:{ backgroundColor: '#E8EDF2', borderRadius: 11, margin: 15, padding: 13, color: '#4F7396' },
    // button:{
    //     backgroundColor:'#499FF4',
    //     width:'70%',
    //     color:'white',
    // }
});


export default FirstScreen;
