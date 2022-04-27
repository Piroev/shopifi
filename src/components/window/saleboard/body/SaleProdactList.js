import React from 'react';
import { observer } from 'mobx-react-lite';
import SaleProductItem from './SaleProductItem';
import data from '../../../../store/products';

function SaleProdactList(props) {
    const basket = data.basket;

    return (
        <>
            <ul>
                {
                    basket.map((item) => <SaleProductItem product={item} key={item.bar}/>)
                }
            
            </ul>
        </>
    );
}

export default observer(SaleProdactList);

//<SaleProductItem product={item[0]} />