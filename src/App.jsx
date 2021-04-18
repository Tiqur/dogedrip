import './index.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import theme from './components/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
