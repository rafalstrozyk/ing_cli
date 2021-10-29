import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import Root from './pages/Root';

import store from './redux/store';

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <Root />
      </Router>
    </ReduxProvider>
  );
}

export default App;
