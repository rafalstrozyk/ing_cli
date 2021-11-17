import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import { setIsLogin, setUserProfile } from '../redux/actions/userActions';

const Login = ({ setIsLogin, setUserProfile }) => {
  const [cookies] = useCookies(['jwt']);
  const history = useHistory();
  const [link, setLink] = useState('');
  // useEffect(() => {
  //   if (cookies.jwt) {
  //     axios
  //       .get('http://localhost:9000/user/user_profile', {
  //         withCredentials: true,
  //       })
  //       .then(async (res) => {
  //         if (res.data.id) {
  //           await setUserProfile(res.data);
  //           console.log(res.data);
  //           await setIsLogin(res.data.isLogin);
  //           history.push('/');
  //         }
  //       });
  //   }
  // }, [cookies, setUserProfile, setIsLogin, history]);

  useEffect(() => {
    axios.get('http://localhost:9000/user/google_login_link').then((res) => {
      setLink(res.data.loginLink);
      console.log(res);
    });
  }, []);

  return (
    <div>
      <h1>Login Page</h1>

      {link.length > 0 ? <a href={link}>Login link</a> : null}
    </div>
  );
};

export default connect(null, { setUserProfile, setIsLogin })(Login);
