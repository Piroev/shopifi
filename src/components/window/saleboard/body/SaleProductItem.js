import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Box } from '@mui/material';
import { observer } from "mobx-react-lite";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import data from '../../../../store/products';

const SaleProductItem = observer( (props) => {
    
    const [count, setCount] = useState(data.count);
    const product = props.product;
    const basket = props.basket;

    const countHandler = (count) => {
        setCount(count);
    }

    

    const deleteHandler = (bar) => {
        data.delete(bar);
    }

    return (
            <li>
                <Box sx={{
                    display: "flex",
                    pb: 1,
                    justifyContent: "space-evenly",
                    ml: -5,
                }}>
                    
                    <TextField 
                        id="outlined-basic" 
                        label="Supplier" 
                        variant="outlined" 
                        sx={{width: 150}} 
                        value={product.supplier} 
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField 
                        id="outlined-basic" 
                        label="Category" 
                        variant="outlined" 
                        sx={{width: 150}} 
                        value={product.category}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField 
                        id="outlined-basic" 
                        label="Product Name" 
                        variant="outlined" 
                        sx={{width: 200}} 
                        value={product.name}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField 
                        id="outlined-basic" 
                        label="Count" 
                        variant="outlined" 
                        sx={{width: 80}} 
                        value={count}
                        onChange={() => countHandler()}
                    />
                    <TextField 
                        id="outlined-basic" 
                        label="Sale in %" 
                        variant="outlined" 
                        sx={{width: 100}} 
                        value={0}
                    />
                    <TextField 
                        id="outlined-basic" 
                        label="Sale in Currency" 
                        variant="outlined" 
                        sx={{width: 120}} 
                        value={0}
                    />
                    <TextField 
                        id="outlined-basic" 
                        label="Price" 
                        variant="outlined" 
                        sx={{width: 100}} 
                        value={product.price}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField 
                        id="outlined-basic" 
                        label="Balance" 
                        variant="outlined" 
                        sx={{width: 70}} 
                        value={product.balance}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <Button 
                        variant="outlined" 
                        color="error"
                        sx={{width: 100, height: 56}} 
                        startIcon={<DeleteForeverIcon />}
                        onClick={() => deleteHandler(product.bar)}
                        >
                        Delete    
                    </Button>
                </Box>
            </li>
    );
})

export default SaleProductItem;