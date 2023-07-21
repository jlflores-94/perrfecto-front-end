import React from 'react';
import { Container, Box, Grid, Card } from '@mui/material';
import LoginForm from './LoginForm';
import LoginContent from './LoginContent';
import '../Styles/login.css';

const Login: React.FC = () => {
  const handleLoginFormSubmit = (email: string) => {
    
  };

  return (
    <div className='container'>
      <Container maxWidth="sm" sx={{padding:0}}>
      <Card>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item xs={6}>
                  <LoginContent />
              </Grid>
              <Grid item xs={6}>
                  <LoginForm onSubmit={handleLoginFormSubmit} />
              </Grid>
            </Grid>
          </Box>
      </Card>
      </Container>
      
    </div>
  );
};

export default Login;
