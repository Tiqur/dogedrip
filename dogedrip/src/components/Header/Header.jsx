import { Box } from '@material-ui/core';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <Box boxShadow={4} className={styles.header} />
  )
}

export default Header;
