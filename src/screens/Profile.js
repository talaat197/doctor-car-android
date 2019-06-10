import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import ProfileInfo from "../components/ProfileInfo";
import CarDetails from "../components/CarDetails";
import { DARK_COLOR, SMALL_TEXT_COLOR } from '../includes/colors';
import {Navigation} from "react-native-navigation";
import {GetRequest} from "../http/HttpRequest";
import Spinner from 'react-native-loading-spinner-overlay';
import {_clearItem} from '../includes/Storage';

export default class Profile extends Component {
    constructor(props)
    {
        super(props);
        Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
        this.state = {loading:true
          , data: {name:null,mobile:null,email:null}
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
        _clearItem('api_token');
    }

    static navigationOptions = {
        header: null ,
    };

    componentDidMount() {
      GetRequest("https://evening-taiga-77600.herokuapp.com/api/user/profile", null, this._setProfileData);
    }

    _setProfileData = (data) =>
    {
      this.setState({data: {"name":data.user_name, "mobile":data.mobile , "email":data.email}});
      this.setState({photo: data.cars[0].image});
      this.setState({address: "Egypt , giza"});
      this.setState({username: data.user_name});
      this.setState({cars: data.cars});
      this.setState({loading:false});
    };

  render() {
    return (
    <Container style={styles.Container}>
      <Content>
        <ProfileInfo
        data={this.state.data} 
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
