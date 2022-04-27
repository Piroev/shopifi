import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Buttons from './navigation/buttons/ActionsMenuButtons';
import Menu from './navigation/Menu';
import Popup from './window/Popup';

const MainContainer = (props) => {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleIsOpen = () => setIsOpen(!isOpen);
    return (
        <React.Fragment>
          <CssBaseline />
          <Container fixed >
            <Box sx={{ height: '100vh', pt: 1}} >
              { !isOpen ? <Menu handleIsOpen={handleIsOpen} /> : <Popup /> } 
              
            </Box>
          </Container>
        </React.Fragment>
      );
    }

    export default MainContainer;