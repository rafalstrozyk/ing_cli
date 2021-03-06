import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './index.css';
import { useCookies } from 'react-cookie';
import { useHistory, Link } from 'react-router-dom';

const LeftNav = ({ user }) => {
  const history = useHistory();
  const [cookies, removeCookie] = useCookies(['jwt']);
  const [isCoursePage, setIsCoursePage] = useState(false);

  useEffect(() => {
    history.location.pathname.search('/courses/') !== -1
      ? setIsCoursePage(true)
      : setIsCoursePage(false);
  }, [history.location, setIsCoursePage]);

  const handleLogout = () => {
    removeCookie('jwt');
    history.push('/login');
  };

  return (
    <>
      {user.isLogin && user.userProfile && (
        <div className='grid-navigation nav-root'>
          <div className='nav-content-container'>
            <h3>{user.userProfile.name.fullName}</h3>
            <p>{user.userProfile.emailAddress}</p>
            {isCoursePage && (
              <Link to='/' onClick={() => setIsCoursePage(false)}>
                Strona główna
              </Link>
            )}
          </div>
          <div className='nav-logout-btn'>
            <button onClick={handleLogout}>Wyloguj</button>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(LeftNav);
