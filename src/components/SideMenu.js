import {React, StyleSheet} from '../includes/CommonImports';
import {View, Text, TouchableOpacity} from 'react-native';
import {DARK_COLOR, LIGHT_COLOR , SMALL_TEXT_COLOR, BORDER_COLOR} from "../includes/colors";
import _navigateToScreen from "../includes/navigationMethods";

const SideMenu = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header_text}>Doctor Car</Text>
            <View>
                <TouchableOpacity>
                    <Text style={styles.links} onPress={()=>_navigateToScreen('Login','Profile')}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.links}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.links}>Daily Cycle History</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.links}>Where Am I ?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.links}>Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.links}>Help Me!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={{color: SMALL_TEXT_COLOR, fontSize: 14}}>
                    Doctor Car is the most stable system that can track your car state instantly
                </Text>
            </View>
        </View>
    )
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
        borderBottomWidth:1,
        borderBottomColor:BORDER_COLOR
    },
    footer: {
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1
    }
});
export default SideMenu;