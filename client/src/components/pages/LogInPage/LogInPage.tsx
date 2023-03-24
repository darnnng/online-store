import { Container, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { RoutePath } from './../../../constants/routeVariables';
import {
  ButtonLink,
  ButtonSubmitForm,
  FormSign,
  GridContainer,
  Main,
  PaperContainer,
} from './LogIn.styles';

const LogInPage = () => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const handleVisiblePassword = () => {
    setHiddenPassword((visibility) => !visibility);
  };
  return (
    <Main>
      <Container maxWidth="xl" sx={{ height: '100%', pb: 2 }}>
        <GridContainer container>
          <PaperContainer>
            <Grid
              container
              direction="column"
              sx={{ p: 3, alignItems: 'center', justifyContent: 'center' }}
            >
              <Typography sx={{ mb: 1 }} variant="h4">
                Welcome back!
              </Typography>
              <Typography>Hello again! Sign in to continue</Typography>
              <FormSign noValidate>
                <TextField
                  fullWidth
                  label="Email"
                  placeholder="Enter email"
                  variant="outlined"
                  sx={{ mt: 2, mb: 0.5 }}
                  color="secondary"
                  type="email"
                />

                <TextField
                  fullWidth
                  sx={{ mt: 2, mb: 0.5 }}
                  label="Password"
                  placeholder="Enter password"
                  color="secondary"
                  variant="outlined"
                  type={hiddenPassword ? 'password' : 'text'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{ cursor: 'pointer' }}
                        onClick={handleVisiblePassword}
                      >
                        {hiddenPassword ? <Visibility /> : <VisibilityOff />}
                      </InputAdornment>
                    ),
                  }}
                />

                <ButtonSubmitForm fullWidth type="submit" variant="contained">
                  Sign in
                </ButtonSubmitForm>

                <ButtonLink
                  fullWidth
                  type="submit"
                  variant="text"
                  component={NavLink}
                  to={`/${RoutePath.SIGNUP}`}
                >
                  I don`t have an account
                </ButtonLink>
              </FormSign>
            </Grid>
          </PaperContainer>
        </GridContainer>
      </Container>
    </Main>
  );
};

export default LogInPage;
