import React from 'react'
import Sidebar from './components/Sidebar'
import { Box } from '@mui/material'

const App = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <Box sx={{ flex: 1, backgroundColor: '#fafafa' }} />
    </Box>
  )
}

export default App