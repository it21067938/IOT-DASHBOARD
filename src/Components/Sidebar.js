import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Home, People, BarChart, Settings } from '@mui/icons-material';

const drawerWidth = 240;

function Sidebar({ mobileOpen, onDrawerToggle }) {
  const drawer = (
    <div>
      <div style={{ padding: 16 }}>Admin Dashboard</div>
      <Divider />
      <List>
        {['Home', 'Users', 'Reports', 'Settings'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 && <Home />}
              {index === 1 && <People />}
              {index === 2 && <BarChart />}
              {index === 3 && <Settings />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      {/* Permanent Drawer for larger screens */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: 'none', sm: 'block' }, // Permanent drawer for larger screens
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        {drawer}
      </Drawer>

      {/* Temporary Drawer for mobile screens */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' }, // Drawer only for mobile
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        ModalProps={{
          keepMounted: true, // Better performance on mobile
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Sidebar;
