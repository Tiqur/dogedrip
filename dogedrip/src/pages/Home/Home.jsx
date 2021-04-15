import styles from './Home.module.scss';
import Header from '../../components/Header/Header.jsx';
import { TextField, Box, Container } from '@material-ui/core';


const HomePage = (props) => {
  return (
    <Box display='flex' flexDirection='column'>
      <Header />
      <Container className={styles.address_container}>
        <TextField className={styles.address_input} label='Enter your public wallet address here' variant='outlined' />
      </Container>
    </Box>
  )
}

export default HomePage;
