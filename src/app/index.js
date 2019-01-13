import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from '../routes/routes';
// Redux Store
import store from '../redux/store'

//const history = syncHistoryWithStore(browserHistory, store)

const App = () => (
  <Provider store={store}>
    <Router >
      <Route component={routes} />
    </Router>
  </Provider>
)
export default App;