import { useEffect } from 'react';
import { Typography, Card, Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getData } from '../../redux/api-call/api-call.actions';
import Content from './content.component';

const APICall = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
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
          <Button variant="contained" onClick={() => dispatch(getData())}>
            Get Quote
          </Button>
        </Box>
        <Content />
      </Box>
    </Card>
  );
};

export default APICall;
