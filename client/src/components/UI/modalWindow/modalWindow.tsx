import CloseIcon from '@mui/icons-material/Close';
import React, { FC } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { IModalWindowProps } from './modalWindow.types';
import * as Styled from './modalWindow.styles';

export const ModalWindow: FC<IModalWindowProps> = ({ children, onClose, open, title }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {title}
        {onClose && (
          <Styled.ModalIconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </Styled.ModalIconButton>
        )}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
