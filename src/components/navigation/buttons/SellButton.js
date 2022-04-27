import * as React from 'react';
import Button from '@mui/material/Button';


export default function SellButton(props) {
  
  const handler = props.handleIsOpen;
  return (
    <>
        <Button variant="contained" 
                color="success" 
                sx={ { mr: 1, 
                  width: 120,
                  height: 60 } } 
                disableElevation 
                onClick={() => {handler()}} 
        >
          SALE
        </Button>   
    </>
  );
}