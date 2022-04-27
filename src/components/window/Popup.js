import { Box } from '@mui/material';
import * as React from 'react';
import SaleBoard from './saleboard/body/SaleBoard';


export default function Popup() {


  return (
    <Box sx={{
      width: '100%',
      backgroundColor: '#e6f5ff',
      boxShadow: 3}}>
      <SaleBoard />
    </Box>
  );
}