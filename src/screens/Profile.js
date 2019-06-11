import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import ProfileInfo from "../components/ProfileInfo";
import CarDetails from "../components/CarDetails";
import { DARK_COLOR, SMALL_TEXT_COLOR } from '../includes/colors';
import {Navigation} from "react-native-navigation";
import {GetRequest , PostRequest} from "../http/HttpRequest";
import Spinner from 'react-native-loading-spinner-overlay';
import {_clearItem , _retrieveData} from '../includes/Storage';

export default class Profile extends Component {
    constructor(props)
    {
        super(props);
        Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
        this.state = {loading:true
          , userdata: {name:null,mobile:null,email:null}
          , photo:null
          , address:null
          , username:null
          , cars:null};
        
        Navigation.mergeOptions(this.props.componentId, {
            sideMenu: {
            left: {
                enabled: true
            }
            }
        });
    }
    
    navigationButtonPressed({ buttonId }) {
        Navigation.popToRoot(this.props.componentId);
        _retrieveData('app_token').then(key => {
          PostRequest("https://evening-taiga-77600.herokuapp.com/api/user/logout"
              ,{fcmToken:key}
              ,null);
              clearItem('api_token');
        });
    }

    static navigationOptions = {
        header: null ,
    };

    componentDidMount() {
      GetRequest("https://evening-taiga-77600.herokuapp.com/api/user/profile", null, this._setProfileData);
    }

    _setProfileData = (response) =>
    {
      this.state.userdata.name = response.user_name;
      this.state.userdata.mobile = response.phone;
      this.state.userdata.email = response.email;
      this.setState({photo: response.cars[0].image});
      this.setState({address: "Egypt , giza"});
      this.setState({username: response.user_name});
      this.setState({cars: response.cars});
      this.setState({loading:false});
    };

  render() {
    return (
    <Container style={styles.Container}>
      <Content>
        <ProfileInfo
        data={this.state.userdata} 
        photo={this.state.photo}
        address={this.state.address}
        username={this.state.username}
            />
      {this.state.cars ? 
        <CarDetails 
        cars={this.state.cars}
        />
      :null}
      </Content>
      <Spinner visible={this.state.loading} color={SMALL_TEXT_COLOR} animation="fade" cancelable={true} />
    </Container>
    );
  }
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor:DARK_COLOR
    }
});
