import { Box, Stack } from '@mui/material';
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Fetch } from './Fetch';
import MovieList from './MovieList';
const Search = () => {
  const[response,setResponse]=useState([]); 
  useEffect(()=>{
    Fetch(`s=science`).then((data)=>{setResponse(data?.Search)})
    .catch((err)=>{console.log(err)});
  },[])
  return (
    <Box p={2} sx={{
      overflowY:'auto',
      height:'90vh',
      flex:2,
      backgroundColor:'black'
    }}>
    
    <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{mt:2}} gap={2} backgroundColor="black">
   {
     response?.map((data,idx)=>(
       <MovieList data={data} key={idx}/>
     ))
   
}
     </Stack>

    </Box>
  )
}

export default Search