import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import UserContext from '../contextapi/usercontext';
function SearchBox(props:any) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterTerm, setFilterTerm] = useState<string>('');

  const {setHandleChangeData, setHandleFilterData} = useContext(UserContext);
  
  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setHandleChangeData(event.target.value);
  };
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => { 
    setHandleFilterData(event.target.value);
    setFilterTerm(event.target.value)
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',gap:"20px" }}>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleSearch}>
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          width: '300px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white', 
            },
            '&:hover fieldset': {
              borderColor: 'white', 
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white', 
            },
          },
          '& .MuiInputBase-input': {
            color: 'white', 
          },
          '& .MuiInputLabel-root': {
            color: 'white', 
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'white', 
          },
        }}
      />

      <TextField
        label="Filter"
        variant="outlined"
        value={filterTerm}
        onChange={handleFilter}
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          width: '300px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white', 
            },
            '&:hover fieldset': {
              borderColor: 'white', 
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white', 
            },
          },
          '& .MuiInputBase-input': {
            color: 'white', 
          },
          '& .MuiInputLabel-root': {
            color: 'white', 
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'white', 
          },
        }}
      />

    </Box>
  );
}

export default SearchBox;
