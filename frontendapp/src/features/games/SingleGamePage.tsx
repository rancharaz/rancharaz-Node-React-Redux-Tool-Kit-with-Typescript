import { Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { getGameById } from './gameSlice';
import { useParams } from 'react-router-dom';

const SingeGamePage = () => {

  const dispatch = useAppDispatch();
  const { singleGame } = useAppSelector(state => state.games);
  const { id } = useParams();


  useEffect(() => {
    if (!id) return;
    dispatch(getGameById(id))
  }, [])
  return (
    <div>

      <Container sx={{ marginTop: 10 }}>
        <Typography variant="h4" fontWeight={600}>
         <h1> {`${singleGame?.name}`}</h1> 
        </Typography>
        <Grid container>
          <Grid item xs={4}>
          <Typography variant='h6'>
            <h2>Time and Date</h2>
          {` ${singleGame?.time ? `- ${singleGame?.time}h` : ""
        } - ${
          singleGame?.date
            ? (singleGame?.date)
                .toString()
                .split("T")[0]
                .split("-")
                .reverse()
                .join("/")
            : ""
        }`}
          </Typography>
          </Grid>

          <Grid item xs={4}>
          <Typography variant='h6'>
          <h2> Addresse </h2>  {`${singleGame?.address}`}
          </Typography>
          </Grid>

          <Grid item xs={4}>
          <Typography variant='h6'>
          <h2>Phone number</h2>{`${singleGame?.phoneNumber}`}
          </Typography>
          </Grid>

          <Grid item xs={4}>
          <Typography variant='h6'>
          <h2>Number of People</h2>{`${singleGame?.numOfPeople}`}
          </Typography>
          </Grid>

        </Grid>
      </Container>
    </div>
  )
}

export default SingeGamePage
