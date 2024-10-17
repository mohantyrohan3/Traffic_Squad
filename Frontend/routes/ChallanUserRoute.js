import React, { useEffect ,useState} from 'react';
import Loading from '../components/Loading/Loading';
import Challans from '../components/Challans/Challans';

const ChallanUserRoute = ({navigation}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading ? <Loading /> : <Challans navigation={navigation}/>}
       </>
    );
}

export default ChallanUserRoute;
