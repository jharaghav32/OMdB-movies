import React from 'react'
import { Link } from 'react-router-dom';
import { Card,Typography,CardMedia,CardContent } from '@mui/material'
import { CheckCircle } from '@mui/icons-material';
const MovieList = ({data}) => {
  return (
    <Card    sx={{maxWidth:350  ,width:{xs:'100%',sm:'358px',md:'320px',mt:2}}}>
        <Link to={`/detail/${data?.imdbID}`}> 
      <CardMedia
         component="img"
        image={data?.Poster}
        alt="Paella dish"
        sx={{width:{xs:'100%',sm:'358px',md:'320px'},height:180}}
      />
      <CardContent>
        <Typography variant='body1' color="text.primary" >
        {data?.Title}
        </Typography>
        <Typography variant='body1' color='text.primary'>
            {data?.Year}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
        {data?.Type}
         <CheckCircle sx={{ml:'15px',fontSize:14,color:'black'}}  />
        </Typography>
      </CardContent>
    </Link> 
    </Card>
  )
}

export default MovieList