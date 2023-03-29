import * as React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { observer } from 'mobx-react-lite';
import { Container, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { RoutePath } from './../../../constants/routeVariables';
import * as Styled from './LogIn.styles';
import { IFormInput } from './LogIn.interface';
import { loginSchema } from './../../../constants/validation';
import { login } from './../../../http/userAPI';
import userStore from './../../../store/UserStore';

const LogInPage = observer(() => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const navigate = useNavigate();
  const handleVisiblePassword = () => {
    setHiddenPassword((visibility) => !visibility);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: { email: '', password: '' },
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (input: IFormInput) => {
    try {
      const user = await login(input.email, input.password);
      userStore.setUser(user);
      userStore.setIsAuth(true);
      navigate(`/${RoutePath.CATALOG}`);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message);
      } else {
        console.log('Unexpected error', error);
      }
    }
  };

  //TO-DO : заменить импорты на @, вывод ошибок, добавить в постгрес телефоны и имена, убрать тип any,
  //localstorage user, validation phone, перевод добавить
  return (
    <Styled.Main>
      <Container maxWidth="xl" sx={{ height: '100%', pb: 2 }}>
        <Styled.GridContainer container>
          <Styled.PaperLogInContainer>
            <Grid
              container
              direction="column"
              sx={{ p: 3, alignItems: 'center', justifyContent: 'center' }}
            >
              <Typography sx={{ mb: 1, fontSize: '30px' }}>Welcome back!</Typography>
              <Typography>Hello again! Sign in to continue</Typography>
              <Styled.FormSign onSubmit={handleSubmit(onSubmit)} noValidate>
                <TextField
                  fullWidth
                  label="Email"
                  placeholder="Enter email"
                  variant="outlined"
                  sx={{ mt: 2, mb: 0.5 }}
                  color="secondary"
                  type="email"
                  {...register('email')}
                  helperText={errors.email?.message as string}
                  error={!!errors.email?.message}
                />

                <TextField
                  fullWidth
                  sx={{ mt: 2, mb: 0.5 }}
                  label="Password"
                  placeholder="Enter password"
                  color="secondary"
                  variant="outlined"
                  type={hiddenPassword ? 'password' : 'text'}
                  {...register('password')}
                  helperText={errors.password?.message as string}
                  error={!!errors.password?.message}
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

                <Styled.ButtonSubmitForm fullWidth type="submit" variant="contained">
                  Sign in
                </Styled.ButtonSubmitForm>

                <Styled.ButtonLink
                  fullWidth
                  type="submit"
                  variant="text"
                  component={NavLink}
                  to={`/${RoutePath.SIGNUP}`}
                >
                  Create new account
                </Styled.ButtonLink>
              </Styled.FormSign>
            </Grid>
          </Styled.PaperLogInContainer>
        </Styled.GridContainer>
      </Container>
    </Styled.Main>
  );
});

export default LogInPage;
