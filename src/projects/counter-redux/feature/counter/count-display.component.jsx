import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';

const CountDisplay = () => {
  const count = useSelector((state) => state.counter.count);
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
