import styles from './Home.module.scss';
import Header from '../../components/Header/Header.jsx';
import { TextField, Box, Container, Button } from '@material-ui/core';


const HomePage = (props) => {
  return (
    <Box flex flexDirection='column'>
      <Header />
      <Container className={styles.address_container}>
        <TextField className={styles.address_input} label='Enter your public wallet address here' variant='outlined' />
        <Button varient='contained' color='primary'>Get free Doge!</Button>
        <Button varient='outlined' color='secondary'>Donate to supply</Button>
      </Container>
    </Box>
  )
}

export default HomePage;
