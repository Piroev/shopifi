import React from 'react';
import PurchaseButton from './PurchaseButton';
import SellButton from './SellButton';
import RefundButton from './RefundButton';
import { Box } from '@mui/system';


function ActionsMenuButtons(props) {
    return (
        <>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <SellButton handleIsOpen={props.handleIsOpen}/>
            <PurchaseButton />
            <RefundButton />
        </Box>
        </>
    );
}

export default ActionsMenuButtons;