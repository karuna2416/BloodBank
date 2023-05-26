import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export function BoxComponent() {
  return (
    <div>

    <Box component="span" sx={{ p: 3, border: '1px dashed grey' }}>
      <Button>Save</Button>
    </Box>
    <Box component="span" sx={{ p: 3, border: '1px dashed grey' }}>
      <Button>Save</Button>
    </Box>

    </div>
    
  );
}