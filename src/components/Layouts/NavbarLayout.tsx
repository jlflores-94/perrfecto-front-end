import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Select, MenuItem } from '@mui/material';

const NavbarLayout: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ marginLeft:2,flexGrow: 2 }}>
          Feed
        </Typography>
        <InputBase placeholder="Buscar..." sx={{ flexGrow: 2 }} />
        <Select value="" sx={{ flexGrow: 1 }} displayEmpty>
          <MenuItem value="" disabled>
            Filtrar
          </MenuItem>
          <MenuItem value={'blog'}>
            Blogs
          </MenuItem>
          <MenuItem value={'publication'}>
            Publicaciones
          </MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarLayout;