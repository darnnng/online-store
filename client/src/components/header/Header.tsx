import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { observer } from 'mobx-react-lite';
import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import userStore from './../../store/UserStore';
import { LanguageButton } from './../languageButton';
import * as Styled from './Header.styles';
import { RoutePath } from './../../constants/routeVariables';

export const Header = observer(() => {
  const isAuth = userStore.isAuth;
  const navigate = useNavigate();

  const handleLogout = () => {
    userStore.setUser({});
    userStore.setIsAuth(false);
    localStorage.removeItem('user');
    navigate(`/${RoutePath.LOGIN}`);
  };

  const handleCartClick = () => {
    navigate(`/${RoutePath.BASKET}`);
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
                <Typography sx={{ color: 'white' }}>Your shopping cart</Typography>
                <IconButton onClick={handleCartClick}>
                  <ShoppingBasketIcon sx={{ color: 'white' }} />
                </IconButton>
                <LanguageButton />
                <Styled.LogoutButton onClick={handleLogout}>Logout</Styled.LogoutButton>
              </>
            )}
          </Styled.ToolbarHeader>
        </Container>
      </AppBar>
    </>
  );
});
