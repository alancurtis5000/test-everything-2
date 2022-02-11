import { Button } from '@mui/material';
import { useContext } from 'react';
import { APICallContext } from '../../providers/api-call.provider';

const GetQuote = () => {
  const { change, isLoaded } = useContext(APICallContext);

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => change()}
        data-testid="add"
        fullWidth
      >
        Get Quote
      </Button>
    </div>
  );
};

export default GetQuote;
