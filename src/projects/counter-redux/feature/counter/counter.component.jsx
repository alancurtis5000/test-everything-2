import { Typography, Card, Box } from '@mui/material';
import AddButton from './add-button.component';
import MinusButton from './minus-button.component';
import ResetButton from './reset-button.component';
import CountDisplay from './count-display.component';
import MarginInput from './margin-input.component';

const Counter = () => {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant="h5" component="div">
          Counter
        </Typography>
        <CountDisplay />
        <MarginInput />
        <AddButton />
        <MinusButton />
        <ResetButton />
        {/*  <MarginInput />
      <div className="button-container">
        <AddButton />
        <MinusButton />
        <ResetButton />
      </div> */}
      </Box>
    </Card>
  );
};

export default Counter;
