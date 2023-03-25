import { Box, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import React from 'react';
import { LanguageButton } from './../languageButton';
import * as Styled from './Header.styles';

export const Header = () => {
  const isAuth = false; //TO-DO CHANGE

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Styled.ToolbarHeader disableGutters={true}>
            {isAuth ? (
              <>
                <Styled.WrapAuthBtnHeader>
                  <IconButton />
                  <LanguageButton />
                </Styled.WrapAuthBtnHeader>
              </>
            ) : (
              <>
                <Box sx={{ width: 34 }}></Box>
                <Box sx={{ mb: { xs: 1, sm: 1.5 } }}>
                  <LanguageButton />
                </Box>
              </>
            )}
          </Styled.ToolbarHeader>
        </Container>
      </AppBar>
    </>
  );
};
