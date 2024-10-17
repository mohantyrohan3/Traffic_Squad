import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';


const Loading = () => {
    
    return (
        <View style={styles.lottie}>
            <ActivityIndicator animating={true} color='#001d3d' size={100} style={{}} />
        </View>
    );
}

const styles = StyleSheet.create({
    lottie: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#D7D7D7',
    },
})

export default Loading;
