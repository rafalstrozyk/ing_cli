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
  }, [history, setIsCoursePage]);

  const handleLogout = () => {
    removeCookie('jwt');
    history.push('/login');
  };

  return (
    <>
      {user.isLogin && user.userProfile && (
        <div className='grid-navigation nav-root'>
          <div>
            <h3>{user.userProfile.name.fullName}</h3>
            <p>{user.userProfile.emailAddress}</p>
            {isCoursePage && <Link to='/'>Strona główna</Link>}
          </div>
          <div>
            <button onClick={handleLogout}>Logout</button>
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
