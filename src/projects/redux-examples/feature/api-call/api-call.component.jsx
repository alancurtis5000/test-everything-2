import { useEffect } from 'react';
import { Typography, Card, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/api-call/api-call.actions';

const APICall = () => {
  const dispatch = useDispatch();
  const { author, text } = useSelector((state) => state.apiCall.data);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <Card sx={{ maxWidth: 500, padding: '10px', margin: '10px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" component="div">
          APICall
        </Typography>
        <Typography variant="h6" component="div">
          Quote:
        </Typography>
        <Typography variant="subtitle1" component="div">
          {text}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Typography variant="h6" component="div">
            Author:
          </Typography>
          <Typography variant="h6" component="div">
            {author}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default APICall;
