import {Navigation} from 'react-native-navigation';
import Login from './src/screens/auth/login';
import {_setMainRoot, _setSideMenu} from "./src/includes/navigationMethods";
import SideMenu from "./src/components/SideMenu";
import Profile from './src/screens/Profile';
import Dashboard from './src/screens/Dashboard';

Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('SideMenu', () => SideMenu);
Navigation.registerComponent('Profile', () => Profile);
Navigation.registerComponent('Dashboard', () => Dashboard);

Navigation.events().registerAppLaunchedListener(() => {
    _setSideMenu();

});