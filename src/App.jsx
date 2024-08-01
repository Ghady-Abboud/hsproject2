import { useState } from 'react';
import { Container, CssBaseline, Typography, Box, Stack, styled, Paper, Button, IconButton, Tooltip, TextField } from '@mui/material';
import { MenuBook } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const Item = styled(Paper)(({ theme }) => ({
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

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleAddItem = () => {
    setShowInput(true);
  };

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItemToList = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem('');
      setShowInput(false);
    }
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <>
      <CssBaseline />
      <Box minHeight={'100vh'} sx={{ backgroundColor: '#353535' }}>
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
              fontFamily={'Wensley , Modern serif'}
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
              onClick={handleAddItem}
            >
              Add Item
            </Button>

            {/* Render the input field conditionally */}
            {showInput && (
              <Box display='flex' alignItems='center' mt={2}>
                <TextField
                  variant='outlined'
                  placeholder='Item Name'
                  value={newItem}
                  color='primary'
                  onChange={handleInputChange}
                  sx={{ marginRight: '10px'}}
                />
                <Button variant='contained' onClick={handleAddItemToList}>
                  Add
                </Button>
              </Box>
            )}

            {/* Items List */}
            <Stack spacing={1} width={500}>
              {items.map((item, index) => (
                <Item key={index}>
                  <span>{item}</span>
                  <Tooltip title='Remove' placement='top'>
                    <IconButton
                      size='medium'
                      color='error'
                      onClick={() => handleRemoveItem(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Item>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
