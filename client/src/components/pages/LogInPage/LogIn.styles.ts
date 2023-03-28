import { Button, Grid, Paper, styled } from '@mui/material';

export const Main = styled('main')({
  marginTop: '65px',
  overflowX: 'hidden',
  backgroundColor: '#f5f5f7',
});

export const GridContainer = styled(Grid)({
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0',
  left: '0',
  right: '0',
});

export const PaperSignUpContainer = styled(Paper)(({ theme }) => ({
  padding: '10px',
  minHeight: 450,
  width: 450,
  margin: '20px auto',
  borderRadius: '30px',
  border: `${theme.palette.secondary.main} 2px solid`,
}));

export const PaperLogInContainer = styled(Paper)(({ theme }) => ({
  padding: '10px',
  minHeight: 450,
  width: 450,
  margin: '80px auto',
  borderRadius: '30px',
  border: `${theme.palette.secondary.main} 2px solid`,
}));

export const ButtonSubmitForm = styled(Button)(({ theme }) => ({
  height: 50,
  marginTop: '16px',
  color: 'white',
  textDecoration: 'none',
  backgroundColor: theme.palette.secondary.main,
}));

export const ButtonLink = styled(Button)(({ theme }) => ({
  border: `${theme.palette.secondary.main} 1px solid`,
  height: '50px',
  marginTop: '16px',
  color: theme.palette.secondary.main,
})) as typeof Button;

export const FormSign = styled('form')({
  width: '100%',
});
