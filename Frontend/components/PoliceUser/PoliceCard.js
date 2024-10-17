import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, IconButton,Button } from 'react-native-paper';


const PoliceCard = () => {
    return (
        <View style={{width:'90%'}}>
            <Card>
                    <Card.Title
                        title="Vehicle Number"
                        subtitle="DL Number"
                        titleStyle={{fontFamily:'Manrope',color:'black'}}
                        subtitleStyle={{fontFamily:'Manrope',color:'black'}}
                        subtitleNumberOfLines={5}
                        left={(props) => <Avatar.Icon {...props} icon="alert" />}
                        style={{backgroundColor:'#e5e5e5'}}
                        
                    />
            </Card>

        </View>
    );
}

const styles = StyleSheet.create({})

export default PoliceCard;
