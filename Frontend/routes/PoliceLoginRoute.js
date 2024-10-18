import React, { useEffect ,useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Loading from '../components/Loading/Loading';
import PoliceLogin from '../components/PoliceLogin/PoliceLogin';

const PoliceLoginRoute = ({navigation}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading ? <Loading /> : <PoliceLogin navigation={navigation}/>}
       </>
    );
}

const styles = StyleSheet.create({})

export default PoliceLoginRoute;
