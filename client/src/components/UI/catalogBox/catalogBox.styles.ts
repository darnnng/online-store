import { Paper, styled, Typography, Button } from '@mui/material';

export const SingleBox = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '10px',
  height: '360px',
  width: '300px',
  rowGap: '10px',
  borderRadius: '10px',
  border: `${theme.palette.secondary.main} 1px solid`,
  '&:hover': {
    backgroundColor: '#eeeeee',
    transition: '0.5s',
    cursor: 'pointer',
  },
}));

export const NameTypography = styled(Typography)({
  fontSize: '18px',
});

export const PriceTypography = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '20px',
});

export const CartButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  width: '200px',
}));
