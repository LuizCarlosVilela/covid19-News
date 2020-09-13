import React, { memo, useCallback, useEffect, useState } from 'react';
import Api from '../../api';

import { Container } from './styles';

import Board from './components/Board';
import Painel from './components/Painel';

function Main() {
    const [data, setData] = useState({});
    const [country, setCountry] = useState('brazil');

    const updateAt = new Date().toLocaleString();

    const getCovidData = useCallback((country) => {
        Api.getCountry(country).then(date => setData(date));
    }, []);

    useEffect( () => {
        getCovidData(country);
        
    }, [getCovidData, country]);

    const handleChange = ({ target }) => {
        const country = target.value
        setCountry(country)
    }

    return (
        <Container>
            <div className="mb-2">
                <Painel 
                    data={data}
                    updateAt={updateAt}
                    onChange={handleChange}
                    country={country}
                    getCovidData={getCovidData}
                />

            </div>

            <Board data={data} />
        </Container>
    )
}

export default memo(Main);