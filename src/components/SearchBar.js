import React from 'react';
import { AppBar, Box, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { useGlobalContext } from '../dataContext';

const SearchBar = () => {
  const {query, setQuery} = useGlobalContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'}}}>
                    Meetup
                </Typography>
                <form>
                  <TextField
                    id="search-bar"
                    className="text"
                    onInput={(e) => {
                      setQuery(e.target.value);
                    }}
                    variant="outlined"
                    placeholder="Search..."
                    size="small"
                  />
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon style={{ fill: "white" }} />
                  </IconButton>
                </form>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
export default SearchBar;