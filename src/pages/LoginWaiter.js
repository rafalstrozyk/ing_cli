import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { setIsLogin, setUserProfile } from '../redux/actions/userActions';
import axios from 'axios';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const LoginWaiter = ({ setIsLogin, isLogin, setUserProfile, userProfile }) => {
  const query = useQuery();
  const [cookies] = useCookies(['jwt']);
  const history = useHistory();

  // useEffect(() => {
  //   if (cookies.jwt) {
  //     axios
  //       .get('http://localhost:9000/user/user_profile', {
  //         withCredentials: true,
  //       })
  //       .then( (res) => {
  //         if (res.data.id) {
  //            setUserProfile(res.data);
  //           console.log(res.data);
  //            setIsLogin(res.data.isLogin);
  //           history.push('/');
  //         }
  //       });
  //   }
  // }, [cookies, setUserProfile, setIsLogin, history]);

  useEffect(() => {
    if (cookies.jwt && !userProfile) {
      axios
        .get('http://localhost:9000/user/user_profile', {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.id) {
            setUserProfile(res.data);
            setIsLogin(res.data.isLogin);
            history.push('/');
          }
        });
    } else {
      if (query.get('code') && query.get('code').length > 0) {
        axios
          .get('http://localhost:9000/user/auth_callback', {
            params: { query: query.get('code') },
            withCredentials: true,
          })
          .then((res) => {
            console.log(res);
            if (res.data.isLogin && res.data.id) {
              setUserProfile(res.data);
              setIsLogin(res.data.isLogin);
            }

            history.push('/');
          });
      } else {
        if (!isLogin) {
          history.push('/login');
        }
      }
    }
  }, [
    query,
    history,
    setIsLogin,
    isLogin,
    setUserProfile,
    cookies,
    userProfile,
  ]);

  return (
    <div>
      <p>...loading</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.user.isLogin,
    userProfile: state.userProfile,
  };
};

export default connect(mapStateToProps, { setUserProfile, setIsLogin })(
  LoginWaiter
);
