import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, IconButton,Button } from 'react-native-paper';


const HomeCard = () => {
    return (
        <View style={{width:'90%'}}>
            <Card>
                <Card.Cover source={{ uri: 'https://cdn.pixabay.com/photo/2022/07/31/20/32/volkswagen-7356817_1280.jpg' }}  style={{borderBottomRightRadius:0,borderBottomLeftRadius:0}}/>
                {/* <Card.Title
                        titleNumberOfLines={5}
                        title="Card Title asdasdasdasdasdsaaaaaaaa"
                        subtitle="Amount"
                        titleStyle={{fontFamily:'Manrope',color:'white',marginVertical:5}}
                        subtitleStyle={{marginTop:5,marginBottom:5 , fontFamily:'Manrope',color:'white'}}
                        subtitleNumberOfLines={5}
                        left={(props) => <Avatar.Icon {...props} icon="currency-usd" />}
                        style={{backgroundColor:'#6c757d'}}
                        
                    /> */}
                    <Card.Title
                        title="Vehicle Number"
                        subtitle="Owner Name"
                        // titleStyle={{marginTop:5,marginBottom:5 , fontFamily:'Manrope',color:'white'}}
                        // subtitleStyle={{marginTop:5,marginBottom:5 , fontFamily:'Manrope',color:'white'}}
                        subtitleNumberOfLines={5}
                        left={(props) => <Avatar.Icon {...props} icon="car" />}
                        style={{backgroundColor:'#6c757d'}}
                        
                    />
                    <Card.Actions style={{width:'100%',justifyContent:'space-around',alignItems:'center',backgroundColor:'#6c757d',borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                        <View style={{marginVertical:10,width:'100%',justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
                                <Button  dark={false} style={{padding:3,width:'35%',backgroundColor:'#499FF4',color: 'white'}}>Pay Now</Button>
                                {/* <Button mode="outlined"style={{width:'35%'}}>Cancel</Button> */}
                        </View>
                    
                </Card.Actions>
            </Card>

        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeCard;
