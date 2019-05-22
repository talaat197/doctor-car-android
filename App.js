import {Navigation} from 'react-native-navigation';
import Login from './src/screens/auth/login';
import {_setMainRoot, _setSideMenu, screenNames} from "./src/includes/navigationMethods";
import SideMenu from "./src/components/SideMenu";
import Profile from './src/screens/Profile';
import Dashboard from './src/screens/Dashboard';
import dailyCycleHistory from "./src/screens/dailyCycleHistory";
import whereAmI from "./src/screens/whereAmI";
import Notification from "./src/screens/Notification";
import HelpMe from "./src/screens/HelpMe";

Navigation.registerComponent(screenNames.login.name, () => Login);
Navigation.registerComponent(screenNames.sideMenu.name, () => SideMenu);
Navigation.registerComponent(screenNames.profile.name, () => Profile);
Navigation.registerComponent(screenNames.dashboard.name, () => Dashboard);
Navigation.registerComponent(screenNames.dailyCycleHistory.name, () => dailyCycleHistory);
Navigation.registerComponent(screenNames.whereAmI.name, () => whereAmI);
Navigation.registerComponent(screenNames.notification.name, () => Notification);
Navigation.registerComponent(screenNames.helpMe.name, () => HelpMe);

Navigation.events().registerAppLaunchedListener(() => {
    _setSideMenu();
});