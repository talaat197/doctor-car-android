import {Navigation} from "react-native-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import {ICON_FONT_SIZE} from "./fonts";
import {ICON_COLOR, DEFAULT_COLOR, SECOND_MAIN_COLOR, DARK_COLOR, LIGHT_COLOR} from "./colors";
import {_retrieveData} from '../includes/Storage';

// screen Names
export const screenNames =
    {
        login: {name: 'Login' , isSide : false},
        sideMenu: {name: 'SideMenu' , isSide : false},
        profile:{name: 'Profile' , isSide : true},
        dashboard: {name: 'Dashboard' , isSide : true},
        dailyCycleHistory: {name: 'Daily Cycle History' , isSide : true},
        whereAmI: {name: 'Where Am I ?' , isSide : true},
        notification: {name: 'Notification' , isSide : true},
        helpMe: {name: 'Help Me!' , isSide : true},
    };

export const setNavigation = (stackId, firstPageName, options) => {
    return Navigation.setRoot({
        root: {
            stack: {
                id: stackId,
                children: [
                    {// Main Page
                        component: {
                            name: firstPageName,
                            options: options,
                        },
                    }
                ]
            },

        }
    });
};
// tabs icons
// const iconTabs = [
//     Icon.getImageSource(screenNames.dashboard.icon, ICON_FONT_SIZE, ICON_COLOR),
//     Icon.getImageSource(screenNames.course.icon, ICON_FONT_SIZE, ICON_COLOR),
//     Icon.getImageSource(screenNames.attendance.icon, ICON_FONT_SIZE, ICON_COLOR),
//     Icon.getImageSource(screenNames.dailyReport.icon, ICON_FONT_SIZE, ICON_COLOR),
//     Icon.getImageSource(screenNames.inbox.icon, ICON_FONT_SIZE, ICON_COLOR),
// ];
/*
 description: push a page on the top of the stack
 input: current screen id ,screen name
 output: navigate to other screen
 */
export const _navigateToScreen = (currentScreen, screenName, options = null, isRoot = false , propsData = null) => {
    if (isRoot) {
        Navigation.setStackRoot(currentScreen, {
            component: {
                name: screenName,
                passProps:propsData,
                options: {
                    animations: {
                        setStackRoot: {
                            enabled: true
                        },
                    },
                    ...options
                    },
                }
            });
    }
    else {
        //push the target screen at the top of the stack
        Navigation.push(currentScreen, {
            component: {
                name: screenName,
                passProps: propsData,
                options: {
                    topBar: getTopBar(screenName , true , false),
                    bottomTabs: {
                        visible: false,
                        drawBehind: true
                    },
                    ...options
                }
            }
        });

    }
};
/*
    create a main root navigation wit bottom tabs and single component
    input:
    output:
 */
// export const _setMainRoot = () => {
//     Promise.all(iconTabs).then(sources => { // after the promises end
//         Navigation.setRoot({
//             root: {
//                 component: {
//                     id: 'login-id',
//                     name: screenNames.login.name,
//                     options: {
//                         topBar: {
//                             visible: false,
//                             rightButtons: []
//                         },
//                         bottomTabs: {
//                             visible: false
//                         }
//                     }
//                 },
//                 bottomTabs: {
//                     id: 'BottomTabsId',
//                     children: [{
//                         stack: {
//                             id: 'tabs1',
//                             children: [{
//                                 component: { // 1
//                                     name: screenNames.dashboard.name,
//                                     options: {
//                                         bottomTab: {
//                                             text: screenNames.dashboard.title,
//                                             icon: sources[0],
//                                             selectedIconColor: DEFAULT_COLOR,
//                                         },
//                                         topBar: getTopBar(screenNames.dashboard.title)
//                                     }
//                                 },
//
//                             },
//                             ],// end of children
//                         }// end of stack
//                     },
//                         {
//                             stack: {
//                                 id: 'tabs2',
//                                 children: [{
//                                     component: { // 2
//                                         name: screenNames.course.name,
//                                         options:
//                                             {
//                                                 bottomTab: {
//                                                     text: screenNames.course.title,
//                                                     icon:
//                                                         sources[1],
//                                                     selectedIconColor:
//                                                     DEFAULT_COLOR,
//
//                                                 }
//                                                 ,
//                                                 topBar: getTopBar(screenNames.course.title)
//                                             }
//                                     }
//
//                                 }],
//                             }
//                         }, {
//                             stack: {
//                                 id: 'tabs3',
//                                 children: [{
//                                     component: { // 2
//                                         name: screenNames.attendance.name,
//                                         options:
//                                             {
//                                                 bottomTab: {
//                                                     text: screenNames.attendance.title,
//                                                     icon:
//                                                         sources[2],
//                                                     selectedIconColor:
//                                                     DEFAULT_COLOR,
//
//                                                 }
//                                                 ,
//                                                 topBar: getTopBar(screenNames.attendance.title)
//
//                                             }
//                                     }
//                                 }],
//                             }
//                         },
//                         {
//                             stack: {
//                                 id: 'tabs4',
//                                 children: [{
//                                     component: { // 2
//                                         name: screenNames.dailyReport.name,
//                                         options:
//                                             {
//                                                 bottomTab: {
//                                                     text: screenNames.dailyReport.title,
//                                                     icon:
//                                                         sources[3],
//                                                     selectedIconColor:
//                                                     DEFAULT_COLOR,
//
//                                                 }
//                                                 ,
//                                                 topBar: getTopBar(screenNames.dailyReport.title)
//
//                                             }
//                                     }
//
//                                 }],
//                             }
//                         },
//                         {
//                             stack: {
//                                 id: 'tabs5',
//                                 children: [{
//                                     component: { // 2
//                                         name: screenNames.inbox.name,
//                                         options:
//                                             {
//                                                 bottomTab: {
//                                                     text: screenNames.inbox.title,
//                                                     icon:
//                                                         sources[4],
//                                                     selectedIconColor:
//                                                     DEFAULT_COLOR,
//
//                                                 }
//                                                 ,
//                                                 topBar: getTopBar(screenNames.inbox.title)
//                                             }
//                                     }
//                                 }],
//                             }
//                         }
//                         ,
//                     ]
//                 },
//             },
//
//         });
//     });
// };

/*
    set side menu  navigation
    input: none
    output: none
 */
export const _setSideMenu = () => {
    let mainScreen = "Login";
    
    _retrieveData('api_token').then(key => {
        Navigation.setRoot({
            root: {
                sideMenu: {
                    id: "sideMenu",
                    left: {
                        component: {
                            id: "Drawer",
                            name: "SideMenu"
                        },
                    },
                    center: {
                        stack: {
                            id: "AppRoot",
                            children: [{
                                component: {
                                    id: "App",
                                    name: mainScreen,
                                    options:{
                                        topBar: {
                                            visible: false,
                                            drawBehind: true,
                                            animate: false,
                                            layout: {
                                                backgroundColor: 'transparent',
                                            }
                                        },
                                    }
                                }
                            }]
                        }
                    }
                }
            }
        });
        if(key!=null && key!= undefined){
            let options = {
                topBar: getTopBar(screenNames["profile"].name),
            };
            _navigateToScreen("App", screenNames["profile"].name, options, false);
        }
    })
};
//SHOW MODAL as a screen
export const _showModal = (screenName) => {
    Navigation.showModal({
        stack: {
            children: [{
                component: {
                    name: screenName,
                    options: {
                        topBar: getTopBar(screenName , true , false)
                    }
                }
            }]
        }
    });
};

//dismiss modal
export const _closeModal = () => {
    Navigation.dismissAllModals();
};
/*
    GET TOP BAR options
    input: top bar title , back button displayed ?
    output: topBar object
 */
export const getTopBar = (titleText = null, isBackButton = false , isRightButton = true) => {
    return {
        visible: true,
        drawBehind: false,
        animate: true,
        title: {
            text: titleText,
            fontSize: 20,
            fontFamily: "bold",
            color: LIGHT_COLOR,
        },
        background:{
          color : DARK_COLOR
        },
        backButton: {
            visible: isBackButton
        },
        rightButtons: isRightButton ? [
            {
                id: 'logout',
                text: "Logout",
                fontSize: 18,
                fontFamily: "bold",
                color: LIGHT_COLOR
            }
        ] : null
    }
};

export const _closeDrawer = () => {
    Navigation.mergeOptions('Drawer' , {sideMenu: {
            left: {
                visible: false
            }
        }});
};

