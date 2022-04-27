import * as React from 'react';
import TextField from '@mui/material/TextField';

const CustomerDept = () => {
    return (
        <TextField
          id="standard-read-only-input"
          label="Dept"
          defaultValue="000"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
    )

}



export default CustomerDept;