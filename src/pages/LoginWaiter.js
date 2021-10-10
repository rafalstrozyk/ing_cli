import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const LoginWaiter = () => {
  const query = useQuery();
  const history = useHistory();

  useEffect(() => {
    if (query.get('code') && query.get('code').length > 0) {
      axios
        .get('http://localhost:9000/user/auth_callback', {
          params: { query: query.get('code') },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          history.push('/');
        });
    } else {
      history.push('/login');
    }
  }, [query, history]);

  return (
    <div>
      <p>...loading</p>
    </div>
  );
};

export default LoginWaiter;
