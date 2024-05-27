import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { useState } from 'react';
import { Game } from '../../interfaces/Game';

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();
const CreateGamePage = () => {

    const [game, setGame] = useState<Game>({
        address: "",
        name: "",
        phoneNumber: 0,
        numOfPeople: 0,
        date: new Date,
        time:"",
        fieldNumber:0
    })


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
    
      return (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <SportsEsportsIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Create Game
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                    onChange={(e) => setGame({...game, name: e.target.value})}
                      autoComplete="given-name"
                      name="name"
                      value={game.name}
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      autoFocus
                    />
                  </Grid>
               
                  <Grid item xs={12} sm={6}>
                    <TextField 
                    onChange={(e) => setGame({...game, phoneNumber: parseInt(e.target.value)})}
                      autoComplete="given-name"
                      name="phone number"
                      value={game.phoneNumber}
                      required
                      fullWidth
                      id="phoneNumber"
                      label="Phone number"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField 
                    onChange={(e) => setGame({...game, })}
                      required
                      fullWidth
                      id="time"
                      value={game.time}
                      label="Time"
                      name="Time"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                    onChange={(e) => setGame({...game, })}
                      required
                      fullWidth
                      value={game.numOfPeople}
                      id="numberOfPeople"
                      label="Number of people"
                      name="Number of people"
                      autoComplete="family-name"
                    />
                  </Grid>


                  <Grid item xs={12} sm={6}>
                    <TextField 
                    onChange={(e) => setGame({...game, fieldNumber: parseInt(e.target.value)})}
                      required
                      value={game.fieldNumber}
                      fullWidth
                      id="fieldNumber"
                      label="Field Number"
                      name="Field Number"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                    onChange={(e) => setGame({...game, time: e.target.value })}
                    type='date'
                      required
                      value={game.date}
                      fullWidth
                      id="date"
                      label="Date"
                      name="date"
                      autoComplete="Date"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField 
                    onChange={(e) => setGame({...game, address: e.target.value})}
                      required
                      fullWidth
                      value={game.address}
                      name="Addresse"
                      label="Addresse"
                      type="text"
                      id="addresse"
                      autoComplete="Addresse"
                    />
                  </Grid>

                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create game
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
  )
}

export default CreateGamePage
