import { Box } from '@material-ui/core';
import styles from './Header.module.scss'
import DogePng from '../../assets/doge.png';
const Header = () => {
  return (
    <Box boxShadow={4} display='flex' className={styles.header}>
      <p className={styles.title}>DogeDrip</p>
      <img src={DogePng} className={styles.doge_png}/>
    </Box>
  )
}

export default Header;
