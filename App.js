import {Navigation} from 'react-native-navigation';
import Login from './src/screens/auth/login';
import {_setMainRoot, _setSideMenu} from "./src/includes/navigationMethods";
import SideMenu from "./src/components/SideMenu";

Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('SideMenu', () => SideMenu);

Navigation.events().registerAppLaunchedListener(() => {
    _setSideMenu();

});