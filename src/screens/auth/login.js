import React, {Component} from 'react';
import {StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native';
import FloatingInput from '../../components/FloatInput';
import DefaultButton from "../../components/DefaultButton";
import {
    _navigateToScreen, getTopBar, screenNames
} from "../../includes/navigationMethods";
import {DARK_COLOR, SECOND_MAIN_COLOR, SECONDARY_COLOR,SMALL_TEXT_COLOR} from "../../includes/colors";

class AuthScreen extends Component {
    /*
        description : fire this function once we try to login
        input:
        output:
     */
    _onLogin =  () => {
        let options = {
            topBar: getTopBar(screenNames.profile.name)
        };
        _navigateToScreen(this.props.componentId , screenNames.profile.name , options , true);
    };
    _onSignOut = () => {

    };
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/doctor-car-logo.png')}
                    />
                <FloatingInput label={"Email"} keyboardType={"email-address"}/>
                <FloatingInput mainStyle={styles.mr_top} label={"Password"} secureTextEntry/>
                <DefaultButton parentStyle={styles.form_btn} name={"Login"} _onPress={this._onLogin}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:DARK_COLOR,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
        padding: 10
    },
    form_btn: {
        backgroundColor:SMALL_TEXT_COLOR,
        marginTop: 40,
        flex: 1,
    },
    mr_top: {
        marginTop: 10
    },
    main_text:{
        fontSize:28,
        color: 'white',
        fontFamily: "italic"
    },
    sign_out : {
        fontSize: 22,
        color: SECOND_MAIN_COLOR
    }
});

export default AuthScreen;