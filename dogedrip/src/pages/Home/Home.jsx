import styles from './Home.module.scss';
import Header from '../../components/Header/Header.jsx';
import { TextField, Box, Container, Button } from '@material-ui/core';


const HomePage = (props) => {
  return (
    <Box flex flexDirection='column'>
      <Header />
      <Container className={styles.address_container}>
        <TextField className={styles.address_input} label='Enter your public wallet address here' variant='outlined' />
        <Box display='flex' justifyContent='center' marginTop='3em'>
          <Box display='flex' justifyContent='space-between' width='25em'>
            <Button variant='contained' color='primary'>Get free Doge!</Button>
            <Button variant='outlined' color='secondary'>Donate to supply</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomePage;
