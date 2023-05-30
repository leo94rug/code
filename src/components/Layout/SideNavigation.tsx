import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

const SideNavigation:React.FC <{}> = (props) =>  {
  return (
    <Box sx={{ display: 'flex' }}>
        <List>
          {props.sideBarButton.map((obj, index) => (
            <ListItem key={obj.index} disablePadding>
              <ListItemButton>
              <Link to={obj.nav}><ListItemText primary={obj.testo} /></Link>
                
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    </Box>
  );
}
