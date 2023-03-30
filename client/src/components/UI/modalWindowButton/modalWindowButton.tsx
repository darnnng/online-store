import { Button } from '@mui/material';
import React from 'react';
import { IModalWindowButtonProps } from './modalWindowTypes.types';

export const ModalWindowButton = ({ isValid }: IModalWindowButtonProps) => {
  return (
    <Button type="submit" variant="contained" fullWidth size="large" disabled={!isValid}>
      Save
    </Button>
  );
};
