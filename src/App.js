import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import Root from './pages/Root';
import LeftNav from './components/LeftNav';

import store from './redux/store';

function App() {
  return (
    <ReduxProvider store={store}>
      <div className='grid grid-site-nav'>
        <Router>
          <LeftNav />
          <Root />
        </Router>
      </div>
    </ReduxProvider>
  );
}

export default App;
