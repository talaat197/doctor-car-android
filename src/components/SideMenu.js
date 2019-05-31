import {React, StyleSheet, Component} from '../includes/CommonImports';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {DARK_COLOR, LIGHT_COLOR, SMALL_TEXT_COLOR, BORDER_COLOR} from "../includes/colors";
import {getTopBar, screenNames, _navigateToScreen, _closeDrawer} from "../includes/navigationMethods";
import {Navigation} from "react-native-navigation";

class SideMenu extends Component {
    _goToScreen = (destination) => {
        let options = {
            topBar: getTopBar(screenNames[destination].name),
        };
        _navigateToScreen("App", screenNames[destination].name, options, false);
        _closeDrawer();
    };

    render() {
        let elements = Object.keys(screenNames).map(screen => {
            if(screenNames[screen].isSide)
            {
                return (
                    <TouchableOpacity key={screen} onPress={() => this._goToScreen(screen)}>
                        <Text style={styles.links}>{screenNames[screen].name}</Text>
                    </TouchableOpacity>
                );
            }
        });
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/doctor-car-logo-sidemenu.png')}
                    />
                <View>
                    {elements}
                </View>
                <View style={styles.footer}>
                    <Text style={{color: SMALL_TEXT_COLOR, fontSize: 14}}>
                        Doctor Car is the most stable system that can track your car state instantly
                    </Text>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: DARK_COLOR,
        padding: 10,
        flex: 1
    },
    header_text: {
        color: LIGHT_COLOR,
        fontSize: 32,
        fontWeight: "bold",
        paddingTop: 20
    },
    links: {
        color: LIGHT_COLOR,
        fontSize: 18,
        padding: 15,
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: BORDER_COLOR
    },
    footer: {
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1
    }
});
export default SideMenu;