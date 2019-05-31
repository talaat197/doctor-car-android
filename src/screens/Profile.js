import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import ProfileInfo from "../components/ProfileInfo";
import CarDetails from "../components/CarDetails";
import { DARK_COLOR, SMALL_TEXT_COLOR } from '../includes/colors';
import {Navigation} from "react-native-navigation";
import {GetRequest} from "../http/HttpRequest";
import Spinner from 'react-native-loading-spinner-overlay';

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
    }
    
    navigationButtonPressed({ buttonId }) {
        Navigation.popToRoot(this.props.componentId);
    }

    static navigationOptions = {
        header: null ,
    };

    componentDidMount() {
      GetRequest("http://postman-echo.com/get", null, this._setProfileData);
    }

    _setProfileData = (data) =>
    {
      //data.headers.host
      this.setState({data: {"name":"Sherif Mohamed" , "mobile":"01112658722" , "email":"shriefmarcato@gmail.com"}});
      this.setState({photo: "https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/50549188_2160272934050183_6379706522686980096_n.jpg?_nc_cat=102&_nc_ht=scontent.fcai3-1.fna&oh=aa4b2eb76d2d4dfbe0449c730d807b92&oe=5D4331D3"});
      this.setState({address: "Egypt , giza"});
      this.setState({username: "sherif mohamed"});
      //this.setState({cars: cars});
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
        cars={[
            {'model':'2015' , 'type':'KIA' , 'number':'2019'
            ,'image':'http://cdn.24.co.za/files/Cms/General/d/7209/dfb51e2e4be24a07b71cbf021a81d6d3.jpg'}
            
            ,{'model':'2012' , 'type':'KIA' , 'number':'2019'
            ,'image':'https://us.123rf.com/450wm/tverdohlib/tverdohlib1507/tverdohlib150700166/42090060-%E7%AB%8B%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E9%AB%98%E9%BD%A2%E8%80%85%E9%8C%86%E3%81%B3%E3%81%A6%E5%A3%8A%E3%82%8C%E3%81%9F%E6%B8%9B%E4%BE%A1%E5%84%9F%E5%8D%B4%E3%83%AC%E3%83%88%E3%83%AD%E8%BB%8A%E5%8F%A4%E3%81%84%E7%A0%82%E5%88%A9%E5%9C%B0%E4%B8%8A%E5%B1%8B%E5%A4%96%E3%80%81%E6%B0%B4%E5%B9%B3%E7%94%BB%E5%83%8F.jpg?ver=6'}
            ]}
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
