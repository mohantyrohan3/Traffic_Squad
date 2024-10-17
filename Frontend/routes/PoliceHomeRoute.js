import React, { useEffect ,useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Loading from '../components/Loading/Loading';
import PoliceUser from '../components/PoliceUser/PoliceUser';

const PoliceHomeRoute = ({navigation}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>  
            {loading ? <Loading /> : <PoliceUser navigation={navigation}/>}
       </>
    );
}

const styles = StyleSheet.create({})

export default PoliceHomeRoute;
