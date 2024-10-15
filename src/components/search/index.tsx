import { InputLabel, MenuItem, Box, FormControl, IconButton, InputAdornment, Select, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import UserContext from '../contextapi/usercontext';
import { SelectChangeEvent } from '@mui/material/Select'; // Import SelectChangeEvent

function SearchBox(props: any) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterTerm, setFilterTerm] = useState<string>('');

  const { setHandleChangeData, setHandleFilterData } = useContext(UserContext);
  
  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setHandleChangeData(event.target.value);
  };

  const handleFilter = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    setFilterTerm(value);
    setHandleFilterData(value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: "20px" }}>
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
      
      <Select
        value={filterTerm}
        onChange={handleFilter}
        displayEmpty
        inputProps={{
          'aria-label': 'Filter',
        }}
        sx={{
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
          '& .MuiSelect-select': {
            color: 'white',
          },
          '& .MuiInputLabel-root': {
            color: 'white',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'white',
          },
        }}
      >
        <MenuItem value="" disabled>
          Select Status
        </MenuItem>
        <MenuItem value="active">Active</MenuItem>
        <MenuItem value="inactive">Inactive</MenuItem>
      </Select>
    </Box>
  );
}

export default SearchBox;
