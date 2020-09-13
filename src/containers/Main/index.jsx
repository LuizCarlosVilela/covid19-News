import React, { memo, useCallback, useEffect, useState } from 'react';
import Api from '../../api';

import { Container } from './styles';

import Board from './components/Board';

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
                <h1>hehe</h1>

            </div>

            <Board data={data} />
        </Container>
    )
}

export default memo(Main);