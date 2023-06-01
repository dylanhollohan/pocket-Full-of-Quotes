import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { useAppSelector } from '../state/hooks';
import { selectLoggedInUser } from '../modules/users/state/selectors';
import './styles/LoginForm.css';

// type QuoteDetails = {
//   content: string;
//   author: string;
// };

type LoginFormProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  isLoggedIn,
  setIsLoggedIn
}) => {
  const navigate = useNavigate();
  const currentUser = useAppSelector(selectLoggedInUser);

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <Paper className="login-paper">
      <h1 className="login-header">Log In</h1>
      <FormControl className="login__input-wrapper">
        <InputLabel htmlFor="email-input">Email address</InputLabel>
        <Input id="email-input" type="email" required/>
      </FormControl>
      <div className="v-space"/>
      <FormControl className="login__input-wrapper">
        <InputLabel htmlFor="password-input">Password</InputLabel>
        <Input id="password-input" required type="password" placeholder="enter password"/>
      </FormControl>
      <div className="v-space"/>
      <Box className="login-button-wrapper">
        <Button variant="contained">Log In</Button>
        <Link to="/signup">
          <Button variant="contained">Go to Sign Up page</Button>
        </Link>
      </Box>
    </Paper>
  );
}

export default LoginForm;