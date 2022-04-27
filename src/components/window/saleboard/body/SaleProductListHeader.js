import React from 'react';
import { TextField, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import data from '../../../../store/products';

function SaleProductListHeader(props) {
    
    const [bar, setBar] = useState("");
    const basket = data.basket;
    
    const eventHandler = (e) => {
       setBar(e.target.value);
       
    }
    
    const counter = () => {
        console.log(basket);
    }

    const searchHandler = (bar) => {
        if (bar.length === 4) {
            data.search(bar);
        }
    }
    return (
        <Box 
            sx={{padding: 1}}
        >
            <TextField id="outlined-basic" label="Barcode" variant="outlined" sx={{width: 150}} 
             onChange={eventHandler} />
             <Button variant="contained" 
                color="primary" 
                sx={{width: 100, 
                    height: 56,
                    ml: 1}} 
                startIcon={<SearchIcon />}
                onClick={() => searchHandler(bar)}
            >
                SEARCH
            </Button>
        </Box>
    );
}

export default SaleProductListHeader;