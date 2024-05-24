import React from 'react'
import { useAppSelector } from '../../store/store'
import { Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const GamePages = () => {

  const { games } = useAppSelector(state => state.games);

  return (
    <Container>
      <h2>GamePage</h2>
      <Grid container >
        {
          games && games.map(game => (

            <Grid spacing={3} key={game._id} item xs={3} sx={{
              margin: "10px",
              padding: "10px",
              color: "white",
              backgroundImage: 'linear-gradient(90deg, blue, violet)'
            }}>
              <h4>{game.name}</h4>
              <Link to={`/game/${game._id}`}> <Button variant="contained">Open by Id</Button></Link>
            </Grid>
          ))
        }
      </Grid>



    </Container>
  )
}

export default GamePages
