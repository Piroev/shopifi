import React from 'react';
import { Box } from '@mui/material'
import SaleProdactList from './SaleProdactList';
import SaleProductListHeader from './SaleProductListHeader';


function SaleBoardBody(props) {
    return (
        <>
        <Box sx={{
            display: "flex",
        }}>
            <SaleProductListHeader />
        </Box>
                <SaleProdactList />
            
        </>
    );
}

export default SaleBoardBody;