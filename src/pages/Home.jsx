import Header from '../components/Header.jsx';
import { Modal, Snackbar, TextField, Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import { useRef, useState } from 'react';
import publicQR from '../assets/public_address_QR.png';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: theme.zIndex.drawer + 1
  },
  container: {
    marginTop: '5em',
    width: '80em'
  },
  address_input: {
    width: '50em' 
  }
}));

const HomePage = (props) => {
  const walletAddressRef = useRef(null);
  const [snackBarState, setSnackBarState] = useState(false);
  const [addressIsValid, setAddressIsValid] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const styles = useStyles();
  const supply = 430.23;

  const verifyAddress = async (address) => {
    if (!address) return false;
    return (await axios.get(`https://dogechain.info/chain/Dogecoin/q/checkaddress/${address}`).catch(e => {
      return false;
    })).status === 200;
  }

  return (
    <Box display='flex' alignItems='center' flexDirection='column'>

      { /* Donation popup */ }
      <Modal className={styles.backdrop} open={modalIsOpen} onClose={() => setModalIsOpen(false)} disableRestoreFocus>
          <Box display='flex' bgcolor='#F2EDE0' textAlign='center' justifyContent='center' flexDirection='column' p='5em'>
            <Button>
              <img src={publicQR}/>
            </Button>
            <Typography variant='body1'>Address goes here</Typography>
          </Box>
      </Modal>

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
              const isValid = await verifyAddress(walletAddressRef.current.value);
              setAddressIsValid(isValid);
              setSnackBarState(true);
            }} variant='contained' color='primary'>Get free Doge!</Button>
            <Button onClick={() => {
              setModalIsOpen(true);
            }}variant='outlined' color='secondary'>Donate to supply</Button>
          </Box>
        </Box>
        
        { /* Alert user if address is invalid */ }
        <Snackbar open={snackBarState} onClose={() => setSnackBarState(false)} autoHideDuration={6000}>
          <MuiAlert elevation={6} variant='filled' severity={addressIsValid ? 'success' : 'error'}>{
            addressIsValid ?
            'Wallet address verified!' :
            'Invalid wallet address!'
          }</MuiAlert>
        </Snackbar>

      </Box>
    </Box>
  )
}

export default HomePage;
