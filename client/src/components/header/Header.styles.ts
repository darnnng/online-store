import { styled, Toolbar, Button } from '@mui/material';

export const ToolbarHeader = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
}));

export const LogoutButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  marginLeft: '25px',
  color: 'white',
  minWidth: '100px',
  '&:hover': {
    backgroundColor: 'gray',
  },
}));
