import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import Root from './pages/Root';
import LeftNav from './components/LeftNav';

import store from './redux/store';

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <div className='grid grid-site-nav'>
          <LeftNav />
          <Root />
        </div>
      </Router>
    </ReduxProvider>
  );
}

export default App;
