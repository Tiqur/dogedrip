import styles from './Home.module.scss';
import Header from '../../components/Header/Header.jsx';
import { TextField, Box, Typography, Button } from '@material-ui/core';
import { useRef } from 'react';
import axios from 'axios';

const addressIsValid = async (address) => {
  if (!address) return false;
  return await (axios.get(`https://dogechain.info/chain/Dogecoin/q/checkaddress/${address}`).catch(e => {
    return false;
  })).status === 200;
  }


const HomePage = (props) => {
  const walletAddressRef = useRef(null);
  const supply = 430.23;

  return (
    <Box display='flex' alignItems='center' flexDirection='column'>
      <Header />
      <Box display='flex' flexDirection='column' alignItems='center' className={styles.container}>
        <Typography paragraph variant='body1'>Current supply: Ɖ {supply}</Typography>
        <TextField inputRef={walletAddressRef} className={styles.address_input} label='Enter your public wallet address here' variant='outlined' />
        <Box display='flex' justifyContent='center' marginTop='3em'>
          <Box display='flex' justifyContent='space-between' width='25em'>
            <Button onClick={() => {addressIsValid(walletAddressRef.current.value)}} variant='contained' color='primary'>Get free Doge!</Button>
            <Button variant='outlined' color='secondary'>Donate to supply</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage;
