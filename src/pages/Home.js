import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import {useGlobalContext} from '../dataContext'
import { Box, Stack, Typography } from '@mui/material';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import SingleCard from '../components/SingleCard';



const Home = () => {
    const { db, setDb, query, setQuery} = useGlobalContext();

    const filterData = (query, data) => {
        if (!query) {
          return data;
        } else {
          return data.filter((d) => d.title.toLowerCase().includes(query))
        }
    };
    
  const dataFiltered = () => filterData(query, db);

  return (
    <>
        <SearchBar query={query} setQuery={setQuery()} />
        <Box sx={{ flexGrow: 1 }} p={4}>
            <Stack gap={4}>
                <Stack direction='row' sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-between',
                }}>
                    <Typography variant='h4' component='h1'>Meetup Events</Typography>
                    <Select defaultValue='both'>
                        <Option value="both">Both</Option>
                        <Option value="online">Online</Option>
                        <Option value="offline">Offline</Option>
                    </Select>
                </Stack>
                <Stack direction='row' sx={{
                    display:'flex',
                    flexWrap:'wrap',
                    gap: 2,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    {   
                        dataFiltered().map((meetup) => {
                            return (
                                <SingleCard props={meetup}  />
                            )
                        })
                    }
                </Stack>
            </Stack>
        </Box>
    </>
  )
}
export default Home;