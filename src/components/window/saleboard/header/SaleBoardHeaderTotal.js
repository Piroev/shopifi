import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import data from '../../../../store/products'

function SaleBoardHeaderTotal(props) {
    return (
        <Box sx={{
            width: 300,
            height: 100,
            boxShadow: 3,
            bgcolor: "#fff",
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            {data.getTotal}
        </Box>
    );
}

export default observer(SaleBoardHeaderTotal);