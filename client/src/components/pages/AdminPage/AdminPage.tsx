import { Container, Box } from '@mui/material';
import { toJS } from 'mobx';
import * as React from 'react';
import { useState } from 'react';
import userStore from './../../../store/UserStore';
import * as Styled from './AdminPage.styles';
import { BrandModal } from './modals/brandModal';

const AdminPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  console.log('USER', toJS(userStore.user));

  return (
    <>
      <Styled.Main>
        <Container maxWidth="xl" sx={{ height: '100%', pb: 2 }}>
          <Styled.GridContainer container>
            <Styled.TitleTypography>Admin panel</Styled.TitleTypography>
            <Box>
              <Styled.AdminButton onClick={handleOpenModal}>Add brand</Styled.AdminButton>
              <Styled.AdminButton>Add type</Styled.AdminButton>
              <Styled.AdminButton>Add device</Styled.AdminButton>
            </Box>
          </Styled.GridContainer>
        </Container>
      </Styled.Main>
      {modalOpen && <BrandModal open={modalOpen} onClose={handleCloseModal} />}
    </>
  );
};

export default AdminPage;
