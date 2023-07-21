import React from 'react';
import { Link, Typography, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import PhoneIcon from '@mui/icons-material/Phone';
import '../Styles/login.css';

const LoginContent: React.FC = () => {
  return (
    <div className='container'>
          <Typography variant="h5" gutterBottom>
            Iniciar Sesión
          </Typography>
          <Typography sx={{ fontSize:11, textAlign:'justify'  }} paragraph>
          Al iniciar sesión esta aceptando estar de acuerdo a nuestros <Link href="#">Términos y condiciones</Link> , y con nuestras <Link>Políticas de Privacidad</Link>  
          </Typography>
          <Button 
            className="circular-button"
            startIcon={<FacebookIcon />}
            variant="contained"
            sx={{background:'#3b5998'}}
          >
          </Button>
          <Button
            className="circular-button"
            startIcon={<GoogleIcon />}
            variant="contained"
            sx={{background:'#db4a39'}}
          >
          </Button>
          <Button
            className="circular-button"
            startIcon={<PhoneIcon />}
            variant="contained"
            sx={{background:'#a4a4a4'}}                
          >
          </Button>

          <Typography sx={{ paddingTop:2, fontSize:11  }} gutterBottom>
            ¿Aun no tines cuenta? <Link href="#">Crear cuenta</Link>
          </Typography>
    </div>
  );
};

export default LoginContent;
