import { Box, Button, CircularProgress, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Fetch } from './Fetch'
const MovieDetails = () => {
    const {imdbId}=useParams();
   const[response,setResponse]=useState([]);
 useEffect(()=>{
  Fetch(`i=${imdbId}`).then((data)=>setResponse(data)).catch((err)=>console.log(err));
 },[imdbId])
 console.log(response)
 if(response.length===0){
  return <CircularProgress />
 }
  return (
    <Box minHeight='95vh' backgroundColor='black'sx={{color:'white'}}>
         <Stack direction={{ xs: 'colum' }}>
            <Box minHeihgt='40vh'   >
              <Stack direction={{xs:'column',md:'row'}}  >
              <img src={response?.Poster} sx={{backgroundSize:'cover'}} width='50%'
               height={500} alt="#"/>
              <div direction='column'>
              <Typography variant='h2'>{response?.Title}</Typography>
              <Typography variant='h6'display='inline' sx={{px:1}} >{response?.Year}</Typography>
        
              <Typography variant='h6' display='inline' sx={{px:1}} >{response?.Rated}</Typography>
              <Typography variant='h6' display='inline' >{response?.Runtime}</Typography>
              <Typography variant='h5' sx={{pl:1,m:2}} color='yellow'   >IMDB Rating : {response?.imdbRating}/10</Typography>
              <Button variant='outlined' sx={{py:1,m:2}} >{response?.Genre}</Button>
              <Typography>
                <Button variant='outlined' sx={{py:1,m:2}} >{response?.Language}</Button>
                </Typography>
              <Typography variant='h4' sx={{mt:2,mx:2}} >Awards</Typography>
              <Typography variant='h5' sx={{mx:2}} paragraph='true' color='green' >{response?.Awards}</Typography>

              </div>
              </Stack>
            </Box>
            <Box>
              <Typography paragraph={true} align='center' variant='h5'>{response.Plot}</Typography>
              <Divider variant='fullWidth' color='white' />
              <Typography display='inline' variant='h6' sx={{m:2}}>Directors</Typography>
              <Typography display='inline' sx={{mx:'12px',color:'blue'}} >{response?.Director}</Typography>
              
              <Divider variant='fullWidth' color='white'/>
              <Typography variant='h6' display='inline' sx={{m:2,py:2}}>Writers</Typography>
              <Typography sx={{mx:2,py:2,color:'blue'}} display='inline'>{response?.Writer}</Typography>
              <Divider variant='fullWidth' color='white'/>
              <Typography display='inline' variant='h6' sx={{mx:2,py:2}}>Stars</Typography>
              <Typography display='inline'color='blue'>{response?.Actors}</Typography>
            </Box>
            
         </Stack>
     
    </Box>
  )
}

export default MovieDetails