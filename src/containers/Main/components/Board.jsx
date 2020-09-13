import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Grid, Skeleton } from '../../../components';
import Card from './Card';

function Board({ data }){
    const { cases, todayDeaths, recovered, deaths, todayCases } = data;

    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

    return (
        <Grid container spacing={4} align-items="center">
            <Grid item sx={12} md={4} >
                <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
            </Grid>
            <Grid item sx={12} md={4}>
                <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F78829" />
            </Grid>
            <Grid item sx={12} md={4}>
                <Card value={getValue(todayCases)} label="Casos hoje" color="#000" />
            </Grid>
            <Grid item sx={12} md={4}>
                <Card value={getValue(deaths)} label="Total de mortos" color="#E95078" />
            </Grid>
            <Grid item sx={12} md={4}>
                <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887" />
            </Grid>
        </Grid>
    )
}

export default memo(Board);