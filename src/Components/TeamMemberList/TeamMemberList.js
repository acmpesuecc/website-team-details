import React, { useEffect, useState } from 'react';
import TeamMemberData from './TeamMemberData';
import './TeamMemberList.css';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@material-ui/core';
import { useQuery } from 'react-query';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseSetup';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2rem',
        textAlign: 'center',
    },
    media: {
        height: 300,
        paddingLeft: 20,
        paddingRight: 20,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

function TeamMemberList() {
    const [year, setYear] = useState(0);
    const classes = useStyles();

    const { isLoading, isError, isRefetching, isFetching, data } = useQuery(
        'members',
        () =>
            getDocs(collection(db, 'members')).then((querySnap) => {
                return Array(...querySnap.docs.map((item) => item.data()));
            }),
        {
            staleTime: 30000,
            retry: 3,
            retryDelay: 1000,
        }
    );

    useEffect(() => {
        if (isRefetching || isFetching) {
            console.log('REFETCHING/FETCHING', data);
        }
    });

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <h1>Error</h1>;
    }

    return (
        <div className={classes.root}>
            <Box sx={{ minWidth: 200 }}>
                <FormControl>
                    <InputLabel id='grad-year'>Year</InputLabel>
                    <Select
                        labelId='grad-year'
                        id='grad-year-select'
                        value={year}
                        label='Year'
                        onChange={(e) => {
                            setYear(e.target.value);
                        }}>
                        <MenuItem value={0}>Show All</MenuItem>
                        <MenuItem value={2022}>2022</MenuItem>
                        <MenuItem value={2023}>2023</MenuItem>
                        <MenuItem value={2024}>2024</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <br />
            <TeamMemberData
                teamMemberList={
                    year ? data.filter((item) => item.gradYear === year) : data
                }
            />
        </div>
    );
}

export default TeamMemberList;
