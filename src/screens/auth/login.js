import React, {Component} from 'react';
import {StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native';
import FloatingInput from '../../components/FloatInput';
import DefaultButton from "../../components/DefaultButton";
import {
    _navigateToScreen, getTopBar, screenNames
} from "../../includes/navigationMethods";
import {DARK_COLOR, SECOND_MAIN_COLOR, SECONDARY_COLOR,SMALL_TEXT_COLOR} from "../../includes/colors";
import {PostRequest, GetRequest} from "../../http/HttpRequest";
import Spinner from 'react-native-loading-spinner-overlay';
import {_storeData,_retrieveData} from '../../includes/Storage';
import {Navigation} from "react-native-navigation";

class AuthScreen extends Component {
    state = {
        loading:false,
        email:null,
        password:null
    };

    constructor(props)
    {
        super(props);
        Navigation.mergeOptions(this.props.componentId, {
            sideMenu: {
            left: {
                enabled: false
            }
            }
        });
    }

    _onLogin =  () => {
        this.setState({loading:true});
        
        PostRequest("https://evening-taiga-77600.herokuapp.com/api/login"
        ,{email:this.state.email,password:this.state.password}
        ,this._callResponse);
    };

    _callResponse = (data) =>
    {
        _storeData('api_token',data.token);
        _retrieveData('api_token').then(key => {
            if(data.token){
                let options = {
                    topBar: getTopBar(screenNames.profile.name)
                };
                _navigateToScreen("App" , screenNames.profile.name , options , false);
            }
        });
        this.setState({loading:false});
    };

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/doctor-car-logo.png')}
                    />
                <FloatingInput label={"Email"} keyboardType={"email-address"}
                onChangeText={(text) => this.setState({email:text})}/>
                <FloatingInput mainStyle={styles.mr_top} label={"Password"} secureTextEntry
                onChangeText={(text) => this.setState({password:text})}/>
                <DefaultButton parentStyle={styles.form_btn} name={"Login"} _onPress={this._onLogin}/>
                <Spinner visible={this.state.loading} color={SMALL_TEXT_COLOR} animation="fade" cancelable={true} />
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