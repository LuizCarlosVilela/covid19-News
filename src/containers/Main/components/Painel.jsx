import React, { memo } from 'react';
import RefreshIcon from '../../../assets/images/refresh.svg';

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
    );

    const textCovid19 = `País: ${country} - Recuperados: ${recovered} - Mortos: ${deaths}`;

    const shareInfo = () => {
        navigator.share({
            title: `Dados do Covid19 - ${country}`,
            text: textCovid19,
            url: 'https://covid19.com.br'
        })
    }

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19);
    }

    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>

    )

    return (
        <Card>
            <CardPainelContentStyled>
                <div>
                    
                    <Typography variant="h5" component="span" color="primary">
                        COVID19
                    </Typography>
                    <Typography variant="h6" component="span" color="primary" className="space">
                        Painel Coronavírus
                    </Typography>
                    <Typography variant="body2" component="span" color="primary" className="space">
                        Atualizado em: {updateAt}
                    </Typography>

                    

                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </div>

                {navigatorHashShare ? renderCopyButton : renderShareButton}
            </CardPainelContentStyled>
        </Card>
    )
}

export default memo(Painel);


