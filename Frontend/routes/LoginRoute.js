import React, { useEffect ,useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Loading from '../components/Loading/Loading';
import Login from '../components/Login/Login';

const LoginRoute = ({navigation}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading ? <Loading /> : <Login navigation={navigation}/>}
       </>
    );
}

const styles = StyleSheet.create({})

export default LoginRoute;
