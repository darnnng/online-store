import { Container, Box, Button } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { RoutePath } from './../../../constants/routeVariables';
import * as Styled from './AdminPage.styles';
import { BrandForm } from './modals/brandForm';
import { TypeForm } from './modals/typeForm/typeForm';
import { DeviceForm } from './modals/deviceForm/deviceForm';
import { fetchTypes, fetchBrands } from './../../../http/deviceAPI';
import itemStore from './../../../store/ItemsStore';

const AdminPage = observer(() => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(`/${RoutePath.CATALOG}`);
  };
  useEffect(() => {
    fetchTypes().then((data) => itemStore.setTypes(data));
    fetchBrands().then((data) => itemStore.setBrands(data));
  }, []);
  return (
    <>
      <Styled.Main>
        <Container maxWidth="xl" sx={{ height: '100%', pb: 2 }}>
          <Button onClick={handleBackClick}>Back</Button>
          <Styled.GridContainer container>
            <Styled.TitleTypography>Admin panel</Styled.TitleTypography>
            <Box>
              <BrandForm />
              <TypeForm />
              <DeviceForm />
            </Box>
          </Styled.GridContainer>
        </Container>
      </Styled.Main>
    </>
  );
});

export default AdminPage;
