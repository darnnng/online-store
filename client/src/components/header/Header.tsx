import { Box, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { observer } from 'mobx-react-lite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@constants/routeVariables';
import { LanguageButton } from '@components/UI/languageButton';
import userStore from '@src/store/UserStore';
import { useAuth } from '@src/hooks/useAuth';
import { IUser } from '@src/interfaces/IUser';
import * as Styled from './Header.styles';

export const Header = observer(() => {
  const isAuth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    userStore.setUser({} as IUser);
    userStore.setIsAuth(false);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const handleCartClick = () => {
    navigate(`/${RoutePath.BASKET}`);
  };

  const handleSignIn = () => {
    navigate(`/${RoutePath.LOGIN}`);
  };

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
                <Styled.LogoutButton onClick={handleSignIn}>Sign in</Styled.LogoutButton>
              </>
            ) : (
              <>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Typography sx={{ color: 'white' }}>Your cart</Typography>
                  <IconButton onClick={handleCartClick}>
                    <ShoppingBasketIcon sx={{ color: 'white' }} />
                  </IconButton>
                  <LanguageButton />
                  {userStore?.user?.role === 'Admin' && (
                    <IconButton onClick={handleAdminButtonClick}>
                      <SupervisorAccountIcon sx={{ color: 'white' }} />
                    </IconButton>
                  )}
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
