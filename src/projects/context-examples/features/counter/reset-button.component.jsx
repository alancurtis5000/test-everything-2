import { Button } from '@mui/material';
import { useContext } from 'react';
import { CounterContext } from '../../providers/counter-context.provider';

const ResetButton = () => {
  const { reset } = useContext(CounterContext);
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => reset()}
      data-testid="reset"
    >
      Reset
    </Button>
  );
};

export default ResetButton;
