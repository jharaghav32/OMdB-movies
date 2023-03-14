import React ,{useState}from 'react'
import { IconButton,Paper } from '@mui/material'
import {Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
// import { Fetch } from './Fetch'
const SearchBar = () =>{
const [input,setinput]=useState("");
let navigate = useNavigate();
const handleSubmit=(e)=>{
e.preventDefault();
if(input){
navigate(`/search/${input}`);
setinput('');
}
}
return(
    <Paper
    component="form"
    onSubmit={handleSubmit}
    sx={{borderRadius:20,border:'1px solid black',pl:2,boxShadow:'none',mr:{sm:5},outline:'none'}}
    >
        <input  placeholder='search anything' value={input} sx={{width:'100px',border:'none',outline:'none'}}  onChange={(e)=>{setinput(e.target.value)}} />
        <IconButton type="submit" sx={{p:'5px',color:'black'}} aria-label='search'>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar