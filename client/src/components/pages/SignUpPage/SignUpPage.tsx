import * as React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { AxiosError } from 'axios';
import { RoutePath } from '../../../constants/routeVariables';
import * as Styled from '../LogInPage/LogIn.styles';
import { IFormInput } from './SignUp.interface';
import { signUpSchema } from './../../../constants/validation';
import { registration } from './../../../http/userAPI';
import userStore from './../../../store/UserStore';

const SignUpPage = observer(() => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const handleVisiblePassword = () => {
    setHiddenPassword((visibility) => !visibility);
  };
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'onChange',
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async (input: IFormInput) => {
    try {
      const user = await registration(input.email, input.password);
      userStore.setUser(user);
      userStore.setIsAuth(true);
      localStorage.setItem('user', JSON.stringify(user));
      navigate(`/${RoutePath.CATALOG}`);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message);
      } else {
        console.log('Unexpected error', error);
      }
    }
  };

  console.log(userStore.isAuth);
  return (
    <Styled.Main>
      <Container maxWidth="xl" sx={{ height: '100%', pb: 2 }}>
        <Styled.GridContainer container>
          <Styled.PaperSignUpContainer>
            <Grid
              container
              direction="column"
              sx={{ p: 3, alignItems: 'center', justifyContent: 'center' }}
            >
              <Typography sx={{ mb: 1, fontSize: '30px' }}>Welcome!</Typography>
              <Typography>Sign up to continue</Typography>
              <Styled.FormSign onSubmit={handleSubmit(onSubmit)} noValidate>
                <TextField
                  fullWidth
                  label="First name"
                  placeholder="Enter first name"
                  variant="outlined"
                  sx={{ mt: 2, mb: 0.5 }}
                  color="secondary"
                  type="text"
                  size="small"
                  {...register('firstName')}
                  helperText={errors.firstName?.message as string}
                  error={!!errors.firstName?.message}
                />
                <TextField
                  fullWidth
                  label="Last name"
                  placeholder="Enter last name"
                  variant="outlined"
                  sx={{ mt: 2, mb: 0.5 }}
                  color="secondary"
                  type="text"
                  size="small"
                  {...register('lastName')}
                  helperText={errors.lastName?.message as string}
                  error={!!errors.lastName?.message}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  placeholder="Enter phone"
                  variant="outlined"
                  sx={{ mt: 2, mb: 0.5 }}
                  color="secondary"
                  type="text"
                  size="small"
                  {...register('phone')}
                  helperText={errors.phone?.message as string}
                  error={!!errors.phone?.message}
                />
                <TextField
                  fullWidth
                  label="Email"
                  placeholder="Enter email"
                  variant="outlined"
                  sx={{ mt: 2, mb: 0.5 }}
                  color="secondary"
                  type="email"
                  size="small"
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
                  size="small"
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
                  Sign up
                </Styled.ButtonSubmitForm>

                <Styled.ButtonLink
                  fullWidth
                  type="submit"
                  variant="text"
                  component={NavLink}
                  to={`/${RoutePath.LOGIN}`}
                >
                  Already have an account?
                </Styled.ButtonLink>
              </Styled.FormSign>
            </Grid>
          </Styled.PaperSignUpContainer>
        </Styled.GridContainer>
      </Container>
    </Styled.Main>
  );
});

export default SignUpPage;
