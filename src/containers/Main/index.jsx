import React, { memo, useCallback, useEffect, useState } from 'react';
import Api from '../../api';

import { Container } from './styles';

function Main() {
    const [data, setData] = useState({});
    const [country, setCountry] = useState('brazil');

    const getCovidData = useCallback((country) => {
        Api.getCountry(country).then(date => setData(date));
    }, []);

    useEffect( () => {
        getCovidData(country);
        
    }, [getCovidData, country]);

    return (
        <Container>
            <div className="mb-2">

            </div>
        </Container>
    )
}

export default memo(Main);