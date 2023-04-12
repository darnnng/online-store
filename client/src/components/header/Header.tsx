import { Box, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { observer } from 'mobx-react-lite';
import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@constants/routeVariables';
import { LanguageButton } from '../UI/languageButton';
import userStore from './../../store/UserStore';
import * as Styled from './Header.styles';
import { useAuth } from './../../hooks/useAuth';

export const Header = observer(() => {
  const isAuth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    userStore.setUser({});
    userStore.setIsAuth(false);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate(`/${RoutePath.LOGIN}`);
  };

  const handleCartClick = () => {
    navigate(`/${RoutePath.BASKET}`);
  };

  //TO-DO fix privacy rules
  const handleAdminButtonClick = () => {
    navigate(`/${RoutePath.ADMIN}`);
  };

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Styled.ToolbarHeader disableGutters={true}>
            {!isAuth ? (
              <>
                <LanguageButton />
              </>
            ) : (
              <>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Typography sx={{ color: 'white' }}>Your shopping cart</Typography>
                  <IconButton onClick={handleCartClick}>
                    <ShoppingBasketIcon sx={{ color: 'white' }} />
                  </IconButton>
                  <LanguageButton />
                  <IconButton onClick={handleAdminButtonClick}>
                    <SupervisorAccountIcon sx={{ color: 'white' }} />
                  </IconButton>
                  <Styled.LogoutButton onClick={handleLogout}>Logout</Styled.LogoutButton>
                </Box>
              </>
            )}
          </Styled.ToolbarHeader>
        </Container>
      </AppBar>
    </>
  );
});
