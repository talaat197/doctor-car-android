import React , {Component} from 'react';
import {StyleSheet , View} from 'react-native';
import {Navigation} from "react-native-navigation";
import {_navigateToScreen, screenNames} from "../../includes/navigationMethods";


class Inbox extends Component{
    constructor(props)
    {

        super(props);
        Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
    }
    navigationButtonPressed({ buttonId }) {
        let options = {
            topBar:{visible: false},
            bottomTabs:{visible: false}
        };
        _navigateToScreen(this.props.componentId , screenNames.login.name , screenNames.inbox.name, options , true)
    }
    render(){
        return(
            <View style={styles.container}>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flexDirection:"column",
        flex: 1,
        padding:10
    },
});

export default Inbox;