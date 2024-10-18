import React,{useState,useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import Loading from '../components/Loading/Loading';
import FirstScreen from '../components/FirstScreen/FirstScreen';

const FirstScreenRoute = ({navigation}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <>
        {loading ? <Loading /> : <FirstScreen navigation = {navigation}/>}
        </>
    );
}

const styles = StyleSheet.create({})

export default FirstScreenRoute;
