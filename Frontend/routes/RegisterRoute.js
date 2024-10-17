import React,{useEffect,useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Loading from '../components/Loading/Loading';
import Register from '../components/Register/Register';

const RegisterRoute = ({navigation}) => {
    const [loading, setLoading] = useState(true);
        useEffect(() => {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }, []);

    return (
            <>
                {loading ? <Loading /> : <Register navigation={navigation} />}
           </>
    );
}

const styles = StyleSheet.create({})

export default RegisterRoute;
