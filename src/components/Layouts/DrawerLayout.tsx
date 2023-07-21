import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar, Divider, ListItemIcon } from '@mui/material';
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

const DrawerLayout: React.FC = () => {
  const navigate = useNavigate();
  const closeSession = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };
  return (
    <div className='drawer'>
      <Drawer variant="permanent">
        <Toolbar />
        <Divider />
        <List>
          <ListItem button>
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
          <ListItem button>
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
            <ListItem button>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText onClick={closeSession} primary="Cerrar sesión" />
            </ListItem>
        </List>
      </Drawer>
    </div>
  );
};


export default DrawerLayout;