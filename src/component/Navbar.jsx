import React from 'react'
import {  Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from "./SearchBar";
const Navbar = () => 
   (
    <Stack direction="row" alignItems='center'
     sx={{ position:'sticky',top:'0',background:'black',justifyContent:"space-between",zIndex:"500"}}>
       <Link to="/">
        <Typography variant='h5' component='h1' sx={{color:'red'}}>Movies</Typography>
       
       </Link>
   <SearchBar />
    </Stack>
  )


export default Navbar