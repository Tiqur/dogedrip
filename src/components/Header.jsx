import { Box } from '@material-ui/core';
import DogePng from '../assets/doge.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    background: '#E7D29D',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '15em'
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: '5em',
    color: '#1E4151'
  },
  doge_png: {
    position: 'absolute',
    left: '5em',
    height: '15em'
  }
}));

const Header = () => {
  const styles = useStyles();

  return (
    <Box boxShadow={4} display='flex' className={styles.header}>
      <p className={styles.title}>DogeDrip</p>
      <img src={DogePng} className={styles.doge_png}/>
    </Box>
  )
}

export default Header;
