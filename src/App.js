import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import DashboardContent from './Pages/DashboardContent';

const drawerWidth = 240;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header onDrawerToggle={handleDrawerToggle} />
      <Sidebar mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, // Ensures that content is shifted correctly
        }}
      >
        <DashboardContent />
      </Box>
    </Box>
  );
}

export default App;
