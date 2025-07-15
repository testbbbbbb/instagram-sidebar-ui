import React from 'react'
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import ExploreIcon from '@mui/icons-material/Explore'
import SlideshowIcon from '@mui/icons-material/Slideshow'
import SendIcon from '@mui/icons-material/Send'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AddBoxIcon from '@mui/icons-material/AddBox'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const menuItems = [
  { text: 'Home', icon: <HomeIcon /> },
  { text: 'Search', icon: <SearchIcon /> },
  { text: 'Explore', icon: <ExploreIcon /> },
  { text: 'Reels', icon: <SlideshowIcon /> },
  { text: 'Messages', icon: <SendIcon /> },
  { text: 'Notifications', icon: <FavoriteBorderIcon /> },
  { text: 'Create', icon: <AddBoxIcon /> },
  { text: 'Profile', icon: <AccountCircleIcon /> }
]

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, borderRight: '1px solid #ddd', p: 2 }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Instagram
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItemButton key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
      <Box sx={{ position: 'absolute', bottom: 20, pl: 2 }}>
        <Avatar />
      </Box>
    </Box>
  )
}

export default Sidebar