import styles from './Home.module.scss';
import Header from '../../components/Header/Header.jsx';
import { Snackbar, TextField, Box, Typography, Button } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useRef, useState } from 'react';
import axios from 'axios';


const HomePage = (props) => {
  const walletAddressRef = useRef(null);
  const [snackBarState, setSnackBarState] = useState(false);
  const supply = 430.23;


  const addressIsValid = async (address) => {
    if (!address) return false;
    return await (axios.get(`https://dogechain.info/chain/Dogecoin/q/checkaddress/${address}`).catch(e => {
      return false;
    })).status === 200;
  }

  return (
    <Box display='flex' alignItems='center' flexDirection='column'>
      <Header />
      <Box display='flex' flexDirection='column' alignItems='center' className={styles.container}>
        
        { /* Show current dogecoin supply */ }
        <Typography paragraph variant='body1'>Current supply: Ɖ {supply}</Typography>

        { /* Input field */ }
        <TextField inputRef={walletAddressRef} className={styles.address_input} label='Enter your public wallet address here' variant='outlined' />

        { /* Buttons */ }
        <Box display='flex' justifyContent='center' marginTop='3em'>
          <Box display='flex' justifyContent='space-between' width='25em'>
            <Button onClick={async () => {
              const isValid = await addressIsValid(walletAddressRef.current.value);
              setSnackBarState(!isValid);
            }} variant='contained' color='primary'>Get free Doge!</Button>
            <Button variant='outlined' color='secondary'>Donate to supply</Button>
          </Box>
        </Box>
        
        { /* Alert user if address is invalid */ }
        <Snackbar open={snackBarState} onClose={() => setSnackBarState(false)} autoHideDuration={6000}>
          <MuiAlert elevation={6} variant='filled' severity='error'>Invalid wallet address!</MuiAlert>
        </Snackbar>

      </Box>
    </Box>
  )
}

export default HomePage;
