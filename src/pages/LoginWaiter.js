import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { setIsLogin } from '../redux/actions/userActions';
import axios from 'axios';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const LoginWaiter = ({ setIsLogin, isLogin }) => {
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
          if (res.data.isLogin) {
            setIsLogin(res.data.isLogin);
          }

          history.push('/');
        });
    } else {
      if (!isLogin) {
        history.push('/login');
      }
    }
  }, [query, history, setIsLogin, isLogin]);

  return (
    <div>
      <p>...loading</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.user.isLogin,
  };
};

export default connect(mapStateToProps, { setIsLogin })(LoginWaiter);
