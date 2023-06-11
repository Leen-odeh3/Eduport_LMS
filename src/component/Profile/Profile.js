import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import './Profile.css'
import { Link } from 'react-router-dom';

const menuItems = [
  {
    label: 'Profile',
    icon: <Avatar />,
    page:'MyProfile'
  },
  {
    label: 'My account',
    icon: <Avatar />,
    page:'Myaccount'
  },
  {
    label: 'Add another account',
    icon: <PersonAdd fontSize="small" />,
  },
  {
    label: 'Settings',
    icon: <Settings fontSize="small" />,
    page:'settings'
  },
  {
    label: 'Logout',
    icon: <Logout fontSize="small" />,
    page:'logout'
  },
];
export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <img
              src="img/profileimg.jpg"
              alt="My-Img-Profile"
              className="MyProfileimg"
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} onClick={handleClose}>
            <ListItemIcon>{menuItem.icon}</ListItemIcon>
            <Link to={menuItem.page} className='liink'> {menuItem.label}</Link>
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}