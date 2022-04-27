import { Box } from '@mui/system';
import React from 'react';
import CustomerDept from './CustomerDept';
import CustomerSelect from './CustomerSelect';

function SaleBoardHeaderCustomer(props) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "column",
    
        }}>
            <CustomerSelect />
            <br/>
            <CustomerDept />
        </Box>
    );
}

export default SaleBoardHeaderCustomer;