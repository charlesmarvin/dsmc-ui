import * as authReducers from './components/auth/reducers';
import * as dashboardReducers from './components/dashboard/reducers';
import * as launcherReducers from './components/launcher/reducers';
export default {
  ...authReducers,
  ...dashboardReducers,
  ...launcherReducers
};