import { Button } from '@mui/material';
import { useContext } from 'react';
import { CounterContext } from '../../providers/counter-context.provider';

const MinusButton = () => {
  const { decrement, margin } = useContext(CounterContext);

  return (
    <Button
      variant="contained"
      onClick={() => decrement()}
      data-testid="minus"
      disabled={margin === 0}
      fullWidth
      color="warning"
    >
      Minus
    </Button>
  );
};

export default MinusButton;
