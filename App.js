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
import {_storeData,_retrieveData} from './src/includes/Storage';
import {PostRequest} from "./src/http/HttpRequest";

var PushNotification = require('react-native-push-notification');
 
_fcmTokenRegistered = (data) =>
{
    _storeData('fcm_token',"1");
};

PushNotification.configure({
 
    onRegister: function(token) {
        _retrieveData('fcm_token').then(key => {
            if(key == undefined){
                PostRequest("https://evening-taiga-77600.herokuapp.com/api/fcm/register"
                ,{token:token}
                ,_fcmTokenRegistered,"Your app registered successfully :)");
            }
        });
    },
 
    onNotification: function(notification) { 
        PushNotification.localNotificationSchedule({
            title: notification["title"],
            message: notification["body"],
            date: new Date(Date.now() + (60 * 1000)) // in 60 secs
          });
 
    },
 
    senderID: "1071423373831",
});

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