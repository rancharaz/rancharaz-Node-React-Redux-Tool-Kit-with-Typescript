import { Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { getGameById } from './gameSlice';
import { useParams } from 'react-router-dom';

const SingeGamePage = () => {

    const dispatch = useAppDispatch();
    const {singleGame} =  useAppSelector(state => state.games);
    const {id} = useParams();

    
    useEffect(() => {
      if(!id) return;
      dispatch(getGameById(id))
    }, [])
  return (
    <div>
    
      <Container sx={{marginTop: 10}}>
            <Typography variant="h4" fontWeight={600}>Single Game</Typography>
      </Container>
    </div>
  )
}

export default SingeGamePage
