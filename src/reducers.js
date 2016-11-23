import * as authReducers from './components/auth/reducers';
import * as dashboardReducers from './components/dashboard/reducers';

export default {
  ...authReducers,
  ...dashboardReducers
};