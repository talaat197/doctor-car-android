import {React , Component , StyleSheet} from '../includes/CommonImports';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import {DEFAULT_COLOR, ICON_COLOR, SECOND_MAIN_COLOR} from "../includes/colors";
import {Navigation} from "react-native-navigation";
import {_navigateToScreen, screenNames} from "../includes/navigationMethods";
import {ACTIVE_ICON_SIZE, ACTIVE_TEXT_SIZE, TAB_TEXT_SIZE} from "../includes/fonts";

class FooterTabs extends Component {
    /*
        description: on Press specific land icon
        input: screen name , that we want to navigate to
        output: none
     */
    _onNavigate = (screenName) =>
    {
        _navigateToScreen(this.props.currentScreen , screenName);

    };
    render()
    {
        let items = Object.keys(screenNames).map((key , index) => {
            // if it's not undefined and it's true
            if(screenNames[key].isTab !== undefined && screenNames[key].isTab)
                return (
                <Button vertical key={index} onPress={() => this._onNavigate(screenNames[key].name)}>
                    <Icon
                          name={screenNames[key].icon}
                          style={this.props.screenName === screenNames[key].name ? styles.active_icon_style : styles.icon_style }/>
                    <Text style={this.props.screenName === screenNames[key].name ?  styles.active_subText : styles.subText} >{screenNames[key].title}</Text>
                </Button>
            )
        });
        return(
            <Footer >
                <FooterTab style={styles.container}>
                    {items}
                </FooterTab>
            </Footer>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: SECOND_MAIN_COLOR,
    },
    icon_style:{
      color: ICON_COLOR
    },
    active_icon_style:{
        color: DEFAULT_COLOR,
        fontSize:ACTIVE_ICON_SIZE
    },
    active_subText:{
      color: DEFAULT_COLOR,
        fontSize: ACTIVE_TEXT_SIZE,
    },
    subText:{
        fontSize: TAB_TEXT_SIZE,
    }
});

export default FooterTabs;