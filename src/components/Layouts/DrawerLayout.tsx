import React from 'react';
import { useLocation } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Toolbar, Divider, ListItemIcon, Box } from '@mui/material';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CreateIcon from '@mui/icons-material/Create';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import '../Styles/layouts.css';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const DrawerLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const closeSession = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };
  return (
      <div className='drawer'>
        <Drawer variant="permanent">
          <Toolbar>
          <Box
              component="img"
              sx={{
                height: 'auto',
                width: 200,
              }}
              alt="Logo"
              src="https://api-perrfecto.alaxatechtesting.lat/files-1689451386417-filename.png"
            />
          </Toolbar>
          <Divider />
          <List>
            <ListItem button selected={location.pathname === '/feed'} onClick={() => navigate('/feed')}>
              <ListItemIcon>
                <RssFeedIcon />
              </ListItemIcon>
              <ListItemText primary="Feed" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText primary="Market" />
            </ListItem>
            <ListItem button selected={location.pathname === '/profile'} onClick={() => navigate('/profile')}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Perfil" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary="Notificaciones" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Crear Publicaciones" />
            </ListItem>
            <Divider />
              <ListItem button>
                <ListItemIcon>
                  <ContactMailIcon />
                </ListItemIcon>
                <ListItemText primary="Contáctanos" />
              </ListItem>
              <ListItem button onClick={closeSession}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Cerrar sesión" />
              </ListItem>
          </List>
        </Drawer>
      </div>
  );
};


export default DrawerLayout;