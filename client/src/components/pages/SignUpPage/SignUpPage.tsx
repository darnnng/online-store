import * as React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { RoutePath } from '../../../constants/routeVariables';
import * as Styled from '../LogInPage/LogIn.styles';
import { IFormInput } from './SignUp.interface';
import { signUpSchema } from './../../../constants/validation';

const SignUpPage = () => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
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
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = () => {
    console.log('login');
  };
  return (
    <Styled.Main>
      <Container maxWidth="xl" sx={{ height: '100%', pb: 2 }}>
        <Styled.GridContainer container>
          <Styled.PaperContainer>
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
                  sx={{ mt: 2, mb: 0.5, height: '45px' }}
                  color="secondary"
                  type="text"
                  {...register('firstName')}
                  helperText={errors.firstName?.message as string}
                  error={!!errors.firstName?.message}
                />
                <TextField
                  fullWidth
                  label="Last name"
                  placeholder="Enter last name"
                  variant="outlined"
                  sx={{ mt: 2, mb: 0.5, height: '45px' }}
                  color="secondary"
                  type="text"
                  {...register('lastName')}
                  helperText={errors.lastName?.message as string}
                  error={!!errors.lastName?.message}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  placeholder="Enter phone"
                  variant="outlined"
                  sx={{ mt: 2, mb: 0.5, height: '45px' }}
                  color="secondary"
                  type="text"
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
                  to={`/${RoutePath.LOGIN}`}
                >
                  Already have an account?
                </Styled.ButtonLink>
              </Styled.FormSign>
            </Grid>
          </Styled.PaperContainer>
        </Styled.GridContainer>
      </Container>
    </Styled.Main>
  );
};

export default SignUpPage;
