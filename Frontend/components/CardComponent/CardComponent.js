import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, IconButton,Button } from 'react-native-paper';

const CardComponent = (props) => {

    const vehicleNo = props.challan.vehicle_no;
    const dlno = props.challan.user_id.dlnumber;
    const imageurl = props.challan.image.length > 0 ? props.challan.image[0] : 'https://picsum.photos/700';

    return (
        <View style={{width:'90%' , marginVertical:10}}>

            <Card>
                <Card.Cover source={{ uri: imageurl }}  style={{borderBottomRightRadius:0,borderBottomLeftRadius:0}}/>
                <Card.Title
                        titleNumberOfLines={5}
                        title={"DL No : " + dlno}
                        subtitle="Amount :  ₹ 500"
                        titleStyle={{fontFamily:'Manrope',color:'white',marginVertical:5}}
                        subtitleStyle={{marginTop:5,marginBottom:5 , fontFamily:'Manrope',color:'white'}}
                        subtitleNumberOfLines={5}
                        left={(props) => <Avatar.Icon {...props} icon="currency-usd" />}
                        style={{backgroundColor:'#6c757d'}}
                        
                    />
                    <Card.Title
                        subtitle= {"Vehicle No: " + vehicleNo}
                        subtitleStyle={{marginTop:5,marginBottom:5 , fontFamily:'Manrope',color:'white'}}
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

// const styles = StyleSheet.create({})

export default CardComponent;
