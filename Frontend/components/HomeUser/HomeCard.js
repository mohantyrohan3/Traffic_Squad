import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, IconButton,Button } from 'react-native-paper';


const HomeCard = (props) => {
    return (
        <View style={{width:'90%' , margin:10}}>
            <Card>
                    <Card.Title
                        title={"Vehicle - "+props.vehicle.vehicle_no}
                        subtitle={"Owner Name = "+ props.vehicle.owner_name}
                        titleStyle={{fontFamily:'Manrope',color:'black'}}
                        subtitleStyle={{fontFamily:'Manrope',color:'black'}}
                        subtitleNumberOfLines={5}
                        left={(props) => <Avatar.Icon {...props} icon="car" />}
                        style={{backgroundColor:'#e5e5e5'}}
                    />
            </Card>

        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeCard;
