import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { Notifications, Menu } from '@mui/icons-material';

function Header({ onDrawerToggle }) {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onDrawerToggle}
          sx={{ display: { sm: 'none' } }} // Only show menu icon on small screens
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Admin Dashboard
        </Typography>
        <IconButton color="inherit" sx={{ marginLeft: 'auto' }}>
          <Badge badgeContent={4} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
