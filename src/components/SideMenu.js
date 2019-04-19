import {React , StyleSheet} from '../includes/CommonImports';
import  {View , Text} from 'react-native';
import {DARK_COLOR, LIGHT_COLOR} from "../includes/colors";

const SideMenu = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{color:DARK_COLOR}}>Hello drawer</Text>

        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        width : "50%" ,
        backgroundColor: LIGHT_COLOR
    }
});
export default SideMenu;