import React, { memo } from 'react';
import RefreshIcon from 'assets/images/refresh.svg';

import { Card, Typography, Button, Select, MenuItem } from '../../../components';
import { CardPainelContentStyled, ItemStyled } from './style';

import COUNTRIES from '../../../commons/constants/countries';

const navigatorHashShare = navigator.share

function Painel({ updateAt, onChange, data, country, getCoviddata }){
    const { cases, todayDeaths, recovered, deaths, todayCases } = data;

    const renderCountries = (country, index) => (
        <MenuItem key={`country${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>

                <img src={country.flag} alt={`País-${country.label}`}/>

            </ItemStyled>
        </MenuItem>
    )

    return (
        <Card>
            <CardPainelContentStyled>
                <div>
                    <Typography variant="h5" component="span" color="primary">
                        COVID19
                    </Typography>
                    <Typography variant="h6" component="span" color="primary">
                        Painel Coronavírus
                    </Typography>
                    <Typography variant="body2" component="span" color="primary">
                        Atualizado em: {updateAt}
                    </Typography>

                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </div>
            </CardPainelContentStyled>
        </Card>
    )
}


