import { useContext } from 'react';
import { Typography, Card, Box, Button } from '@mui/material';
import Content from './content.component';
import GetQuote from './get-quote.component';
import APICallProvider from '../../providers/api-call.provider';

// Alan Note: Cannot put useContext in same comp with Provider. gets stale values
const APICall = () => {
  return (
    <APICallProvider>
      <Card sx={{ maxWidth: 500, padding: '10px', margin: '10px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h5" component="div">
              APICall
            </Typography>
            <GetQuote />
          </Box>
          <Content />
        </Box>
      </Card>
    </APICallProvider>
  );
};

export default APICall;
