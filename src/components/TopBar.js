import {React , Component , StyleSheet} from '../includes/CommonImports';
import {Header, Title, Body,Right, Left, Button, Icon, Text} from 'native-base';
import {DEFAULT_COLOR} from "../includes/colors";
import {Navigation} from "react-native-navigation";
import {
    RIGHT_HEADER_BUTTON_ICON_SIZE,
    RIGHT_HEADER_BUTTON_SIZE,
    RIGHT_HEADER_BUTTON_TEXT_SIZE
} from "../includes/fonts";
import {_closeModal, _navigateToScreen, _showModal, getTopBar, setNavigation} from "../includes/navigationMethods";
class TopBar extends Component {
    /*
        description: on back button pressed go back
        input: none
        output: none
     */
    _onBack = () =>
    {
        if(this.props.isModal)
        {
            _closeModal(this.props.componentId);
        }
        else
        {
            Navigation.pop(this.props.componentId);
        }
    };
    /*
        description: it gets right buttons as a text or icon depend on the passed parameters
        input: isIcon , name
        output: a esx element , could be a text or icon
     */
    _getRightButton = (isIcon , name) => {
        if(isIcon)
        {
            return (
                <Button transparent onPress={this._onForward}>
                    <Icon style={styles.rightIconButton} name={name}/>
                </Button>
            );
        }
        else
        {
            return (
                <Button transparent onPress={this.props.onRightButtonPress}>
                    <Text style={styles.rightTextButton} >{name}</Text>
                </Button>
            )

        }
    };
    /*
        description: forward to the target page
        input: none
        output: navigate to specific page name
     */
    _onForward = () =>
    {
        // let options = {topBar: getTopBar()};
        // setNavigation("another-based-stack" , this.props.targetPage , options );
        // _navigateToScreen(this.props.componentId , this.props.targetPage );
        _showModal(this.props.targetPage);
    };
    render()
    {
        backButton = null;
        if(this.props.backButton)
            backButton = (
                <Left>
                    <Button transparent onPress={this._onBack}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
            );
        return(
            <Header noLeft={!this.props.backButton}  style={styles.container}>
                    {backButton}
                <Body>
                <Title>{this.props.title}</Title>
                </Body>
                <Right>
                    {this._getRightButton(this.props.isIcon , this.props.buttonName)}
                </Right>
            </Header>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: DEFAULT_COLOR
    },
    rightIconButton:{
        fontSize:RIGHT_HEADER_BUTTON_ICON_SIZE
    },
    rightTextButton:{
        fontSize:RIGHT_HEADER_BUTTON_TEXT_SIZE
    }
});

export default TopBar;