import { styled, Toolbar } from '@mui/material';

export const ToolbarHeader = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
  backgroundColor: theme.palette.primary.main,
}));

export const WrapAuthBtnHeader = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: 8,
}));
