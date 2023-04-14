import { styled, Avatar, IconButton, Box } from '@mui/material';

export const WrapperUserAvatar = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  flexDirection: 'column',
}));

export const UserAvatar = styled(Avatar)(() => ({
  width: 100,
  height: 100,
})) as typeof Avatar;

export const WrapperDropArea = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
  border: '1px dashed #000',
  borderRadius: '8px',
  textAlign: 'center',
  margin: '30px 0',

  [theme.breakpoints.down('sm')]: {
    padding: '8px',
  },
}));

export const Paragraph = styled('p')(({ theme }) => ({
  fontSize: 16,

  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
  },
}));

export const ErrorPicture = styled('p')(({ theme }) => ({
  fontSize: 16,
  color: theme.palette.secondary.main,

  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
  },
}));

export const WrapperAvatar = styled('div')(() => ({
  position: 'relative',
  borderRadius: '50%',

  ':hover': {
    '& button': {
      display: 'block',
    },
  },
}));

export const DeleteButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  zIndex: 999999,
  display: 'none',
  transform: 'translate(-50%, -50%)',
  color: '#000000',
}));

export const FormBox = styled(Box)(({ theme }) => ({
  border: `${theme.palette.secondary.main} 2px solid`,
  borderRadius: '5px',
  padding: '25px',
  marginBottom: '50px',
}));

export const FakeLabel = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: 20,

  ':hover': { cursor: 'pointer' },
})) as typeof Box;
