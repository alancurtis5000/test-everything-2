import { Typography, Box } from '@mui/material';
import { useContext } from 'react';
import { CounterContext } from '../../providers/counter.provider';

const CountDisplay = () => {
  const { count } = useContext(CounterContext);

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Typography variant="h5" component="div">
        {`Count: `}
      </Typography>
      <Typography data-testid="count" variant="h5" component="div">
        {`${count}`}
      </Typography>
    </Box>
  );
};

export default CountDisplay;
