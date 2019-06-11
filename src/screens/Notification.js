import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {Container, Content, Card, CardItem, Text, Body, Right, Left, Thumbnail} from 'native-base';
import { DARK_COLOR, SECONDARY_COLOR, SMALL_TEXT_COLOR } from '../includes/colors';
import {Navigation} from "react-native-navigation";
import {GetRequest ,PostRequest} from "../http/HttpRequest";
import Spinner from 'react-native-loading-spinner-overlay';
import {_clearItem , _retrieveData} from '../includes/Storage';

export default class Notification extends Component {
    constructor(props)
    {
        super(props);
        Navigation.events().bindComponent(this);
        this.state = {loading:true, notifications:null};
    }

    navigationButtonPressed({ buttonId }) {
        Navigation.popToRoot(this.props.componentId);
        _retrieveData('app_token').then(key => {
            PostRequest("https://evening-taiga-77600.herokuapp.com/api/user/logout"
                ,{fcmToken:key}
                ,null);
            _clearItem('api_token');
        });
    }

    componentDidMount() {
        GetRequest("http://postman-echo.com/get", null, this._setNotifications);
    }

    _setNotifications = (data) =>
    {
    this.setState({notifications:[
        {name:"New Sensor Added!", description:"we added new sensor for detecting water.",time:"now"},
        {name:"Attention!", description:"You haven't any petrol in car.",time:"30m ago"},
        {name:"New Sensor Removed!", description:"we added new sensor for detecting water.",time:"now"},
        {name:"Car for sell!", description:"You haven't any petrol in car.",time:"30m ago"}
    ]});

    this.setState({loading:false});
    };
  render() {
    return (
        <Container style={styles.Container}>
            <Content padder>
            {this.state.notifications ?
            this.state.notifications.map((notification) => {
                return (
                <Card style={styles.notificationCard}>
                    <CardItem header bordered style={styles.notificationCardHeader}>
                        <Left>
                            <Image source={require('../assets/doctor-car-logo-thumb.png')}/>
                        </Left>
                        <Right>
                            <Text note>{notification.time}</Text>
                        </Right>
                    </CardItem>
                    <CardItem style={styles.notificationCard}>
                    <Body>
                        <Text style={styles.notificationName}>{notification.name}!</Text> 
                        <Text note>{notification.description}</Text>
                    </Body>
                    </CardItem>
                </Card>
                );
            })
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
    },
    notificationCard:{
        backgroundColor:SECONDARY_COLOR,
        borderColor:SECONDARY_COLOR
    },
    notificationCardHeader:{
        backgroundColor:SMALL_TEXT_COLOR
    },
    notificationName:{
        color:'white'
    },
});
