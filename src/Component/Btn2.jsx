import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export  function ColorButtons2() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" style={{color:"white",backgroundColor:"blue",borderRadius:"10px solid"}}>
        Approved
      </Button>
      <Button variant="outlined" style={{color:"white",backgroundColor:"red",borderRadius:"20px solid "}}>
        Reject
      </Button>
    </Stack>
  );
}