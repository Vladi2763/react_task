import React, { useMemo } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Pages } from 'enum/pages';

interface IWrapperProps {
  children: React.ReactNode;
  pageName: string;
  onOpenModalHandler?: () => void;
}

const Wrapper: React.FC<IWrapperProps> = ({
  pageName,
  onOpenModalHandler,
  children,
}) => {
  const isCreateButtonEnabled = useMemo(
    () => pageName === Pages.POSTS,
    [pageName]
  );
  return (
    <main>
      <Container
        maxWidth="xl"
        sx={{ display: 'flex', gap: '15px', marginBottom: '10px' }}
      >
        <Typography variant="h6" fontWeight="500">
          {pageName}
        </Typography>
        {isCreateButtonEnabled && (
          <Button
            onClick={onOpenModalHandler}
            variant="contained"
            sx={{ backgroundColor: 'white', color: 'black', fontWeight: '500' }}
          >
            + Create new Post
          </Button>
        )}
      </Container>
      <Container
        maxWidth="xl"
        sx={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}
      >
        {children}
      </Container>
    </main>
  );
};

export default Wrapper;
