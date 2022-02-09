import { Button } from '@mui/material';
import { useContext } from 'react';
import { CounterContext } from '../../providers/counter-context.provider';

const AddButton = () => {
  const { increment, margin } = useContext(CounterContext);

  return (
    <Button
      variant="contained"
      onClick={() => increment()}
      data-testid="add"
      fullWidth
      disabled={margin === 0}
    >
      Add
    </Button>
  );
};

export default AddButton;
