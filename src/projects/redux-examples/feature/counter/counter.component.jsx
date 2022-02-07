import { Typography, Card, Box, ButtonGroup } from '@mui/material';
import AddButton from './add-button.component';
import MinusButton from './minus-button.component';
import ResetButton from './reset-button.component';
import CountDisplay from './count-display.component';
import MarginInput from './margin-input.component';

// Todo: add error on bottom if margin is set to 0:

const Counter = () => {
  return (
    <Card sx={{ maxWidth: 275, padding: '10px', margin: '10px' }}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant="h5" component="div">
          Counter
        </Typography>
        <CountDisplay />
        <MarginInput />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            margin: '10px',
            button: {
              margin: '0 5px',
            },
          }}
        >
          <AddButton />
          <MinusButton />
        </Box>
        <ResetButton />
      </Box>
    </Card>
  );
};

export default Counter;
