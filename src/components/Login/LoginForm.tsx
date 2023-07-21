import React, { useState } from 'react';
import axios from 'axios';
import { Typography, CardContent, Button, TextField, Link} from '@mui/material';
import { styled } from '@mui/system';
import '../Styles/login.css';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const ErrorText = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main
}));

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://api-perrfecto.alaxatechtesting.lat/api/auth', {
        email,
        password
      }, 
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
      });
      const token = response.data.token;
      localStorage.setItem('authToken', token);
      
      navigate('/feed');
    } catch (error) {
      setError('Credenciales inválidas. Por favor, intenta nuevamente.');
    }
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
        <CardContent>
          <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          fullWidth
          margin="normal"
          required
        />
        {error && (
          <ErrorText variant="body2">
            {error}
          </ErrorText>
        )}
        <Button className="full-width-button" size="small" type="submit" variant="contained" color="primary">
          Iniciar Sesión
        </Button>

        <Button className="full-width-button" size="small" type="submit" variant="outlined" color="primary">
          Ingresar como invitado
        </Button>

        <Typography sx={{ paddingTop:2, fontSize:11  }} gutterBottom>
          ¿Aun no tines cuenta? <Link href="#">Crear cuenta</Link>
        </Typography>
      
        </CardContent>
    </form>
  );
};

export default LoginForm;