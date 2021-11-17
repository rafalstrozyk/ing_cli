import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './index.css';
import { useHistory } from 'react-router-dom';

const LeftNav = ({ user }) => {
  const history = useHistory();
  const [isCoursePage, setIsCoursePage] = useState(false);

  useEffect(() => {
    history.location.pathname.search('/courses/') !== -1
      ? setIsCoursePage(true)
      : setIsCoursePage(false);
  }, [history, setIsCoursePage]);

  return (
    <>
      {user.isLogin &&
        user.userProfile &&
        (
          <div className='grid-navigation nav-root'>
            <h3>{user.userProfile.name.fullName}</h3>
            <p>{user.userProfile.emailAddress}</p>
            {isCoursePage && <button>Test</button>}
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
