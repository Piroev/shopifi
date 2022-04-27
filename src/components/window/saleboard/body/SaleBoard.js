import React from 'react';
import SaleBoardHeader from '../header/SaleBoardHeader';
import SaleBoardBody from './SaleBoardBody';

function SaleBoard(props) {
    return (
        <div>
            <SaleBoardHeader />
            <SaleBoardBody />
        </div>
    );
}

export default SaleBoard;