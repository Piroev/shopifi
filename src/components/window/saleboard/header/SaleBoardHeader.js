import { Box } from '@mui/material';
import React from 'react';
import SaleBoardHeaderCashbox from './SaleBoardHeaderCashbox';
import SaleBoardHeaderCustomer from './SaleBoardHeaderCustomer';
import SaleBoardHeaderTotal from './SaleBoardHeaderTotal';

function SaleBoardHeader(props) {
    return (
        <Box sx = {{ width: "100%",
                    height: 200,
                    backgroundColor: "#b3e0ff",
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                    }}
        >
            
                <SaleBoardHeaderCustomer />
            
            <SaleBoardHeaderTotal />
            <SaleBoardHeaderCashbox />
        
        </Box>
    );
}

export default SaleBoardHeader;