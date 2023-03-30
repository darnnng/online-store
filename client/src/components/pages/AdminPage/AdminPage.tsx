import { Button, Container, Paper, Box } from '@mui/material';
import * as React from 'react';
import * as Styled from './AdminPage.styles';

const AdminPage = () => {
  return (
    <Styled.Main>
      <Container maxWidth="xl" sx={{ height: '100%', pb: 2 }}>
        <Styled.GridContainer container>
          <Styled.TitleTypography>Admin panel</Styled.TitleTypography>

          <Box>
            <Styled.AdminButton>Add brand</Styled.AdminButton>

            <Styled.AdminButton>Add type</Styled.AdminButton>

            <Styled.AdminButton>Add device</Styled.AdminButton>
          </Box>
        </Styled.GridContainer>
      </Container>
    </Styled.Main>
  );
};

export default AdminPage;
