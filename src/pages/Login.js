import { useEffect, useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [link, setLink] = useState('');
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

export default Login;
