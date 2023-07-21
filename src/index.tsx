import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import FeedPage from './pages/Feed/FeedPage';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { PrivateRoute } from './utils/PrivateRoute'
import { InitialRoute } from './utils/InitialRoute'

import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <Router>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<PrivateRoute />}> 
            <Route path="/feed" element={<FeedPage />} />
          </Route>

          <Route element={<InitialRoute />}> 
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);