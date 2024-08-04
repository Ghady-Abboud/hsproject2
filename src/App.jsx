import { useState, useEffect } from 'react';
import { Container, CssBaseline, Typography, Box, Stack, styled, Paper, Button, TextField } from '@mui/material';
import { MenuBook } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from './firebase';

function App() {
  const [items, setItems] = useState([]);

  const StyledItem = styled(Paper)(({ theme }) => ({
    backgroundColor: '#655560',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#FCF7FF',
    fontStyle: 'italic',
    fontFamily: 'bold',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }));

  const StyledLegend = styled('legend')(({ theme }) => ({
    color: '#878C8F',
    fontSize: '32px',
    fontWeight: 'bold',
    padding: '0 10px',
  }));

  // Read Items from Firestore
  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const itemsArr = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setItems(itemsArr);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <CssBaseline />
      <Box minHeight={'100vh'} sx={{ backgroundColor: '#FFEBC6' }}>
        <Container>
          {/* Top-Header */}
          <Box display='flex' alignItems='center' justifyContent='center' pt={4}>
            <MenuBook
              sx={{
                fontSize: '60px',
                color: '#A4969B',
              }}
            />
            <Typography
              variant='h2'
              align='center'
              color='#878C8F'
              ml={'0.5em'}
              fontFamily={'Wensley, Modern serif'}
              fontStyle='italic'
              fontWeight='bold'
            >
              Pantry Tracker
            </Typography>
          </Box>

          {/* Item List */}
          <Box
            margin='0 auto'
            component='fieldset'
            display='flex'
            flexDirection='column'
            mt={10}
            width={300}
            maxHeight={700}
            overflow={'auto'}
            borderRadius={5}
            borderColor='#878C8F'
          >
            {/* Add Items Button */}
            <StyledLegend>Your List</StyledLegend>
            <Button
              variant='contained'
              color='primary'
              startIcon={<AddIcon />}
              sx={{ alignSelf: 'flex-end', marginBottom: '10px' }}
            >
              Add Item
            </Button>

            {/* Render the input field conditionally */}
            <Box display='flex' alignItems='center' mt={2}>
              <TextField
                variant='outlined'
                placeholder='Item Name'
                color='primary'
                sx={{ marginRight: '10px' }}
              />
              <Button variant='contained'>
                Add
              </Button>
            </Box>

            {/* Items List */}
            <Stack spacing={1} width={500} mt={2}>
              {items.map(item => (
                <StyledItem key={item.id}>
                  {item.text}
                </StyledItem>
              ))}
            </Stack>

          </Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
