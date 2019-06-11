import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import Module from "../components/Module";
import { DARK_COLOR, SMALL_TEXT_COLOR} from '../includes/colors';
import {Navigation} from "react-native-navigation";
import {GetRequest , PostRequest} from "../http/HttpRequest";
import Spinner from 'react-native-loading-spinner-overlay';
import {_clearItem , _retrieveData} from '../includes/Storage';

export default class Dashboard extends Component {
    constructor(props)
    {
        super(props);
        Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
        this.state = {loading:true
          , waterSensor: {name:null,
                          lastUpdate:null,
                          waterGraphValue:null,
                          waterHistoryData:null,
                          minMax:null}
          , gps:{name:null,
                 lastUpdate:null,
                 gpsCoordinate:{latitude:null, longitude:null},
                 day:null,
                 time:null}
        };
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
      GetRequest("http://evening-taiga-77600.herokuapp.com/api/user/dashboard", null, this._setDashboardData);
    }

    _setDashboardData = (data) =>
    {
      this.setState({waterSensor:{name:data[1].waterSensor.name,
        lastUpdate:data[1].waterSensor.lastUpdate,
        waterGraphValue:(data[1].waterSensor.waterGraphValue/2500)*100,
        waterHistoryData:data[1].waterSensor.waterHistoryData,
        minMax:data[1].waterSensor.minMax}});

      this.setState({gps:{name:data[0].gps.name,
        lastUpdate:data[0].gps.lastUpdate,
        gpsCoordinate:JSON.parse(data[0].gps.gpsCoordinate),
        time:data[0].gps.time,
        day:data[0].gps.day}});

      this.state.gps.gpsCoordinate.latitude = parseFloat(this.state.gps.gpsCoordinate.latitude ,100);
      this.state.gps.gpsCoordinate.longitude = parseFloat(this.state.gps.gpsCoordinate.longitude ,100);
      this.setState({loading:false});
    };
  render() {
    return (
    <Container style={styles.Container}>
      <Content>
        <Module
          name={this.state.waterSensor.name}
          lastUpdate={this.state.waterSensor.lastUpdate}
          waterGraphValue={this.state.waterSensor.waterGraphValue}
          waterHistoryData={this.state.waterSensor.waterHistoryData}
          photo={require('../assets/water-sensor.png')}
          data={[{ value: this.state.waterSensor.waterGraphValue ,icon :'water'},
                { value: this.state.waterSensor.minMax ,icon :'funnel'}]}/>
        {this.state.gps.gpsCoordinate ?
        <Module
          name={this.state.gps.name}
          lastUpdate={this.state.gps.lastUpdate}
          gpsCoordinate={this.state.gps.gpsCoordinate}
          gpsDay={this.state.gps.day}
          gpsTime={this.state.gps.time}
          photo={require('../assets/gps.png')}
          data={[{ value: this.state.gps.gpsCoordinate.latitude ,icon :'pin'}, 
                { value: this.state.gps.gpsCoordinate.longitude ,icon :'pin'}]}/>
        :null}
        {/* <Module
          name={'XYZ Sensor'}
          lastUpdate={'43m ago'}
          photo={require('../assets/xyz.png')}
          data={[{ value: '100' ,icon :'arrow-round-forward'}, 
                { value: '200' ,icon :'arrow-round-up'}, 
                { value: '100' ,icon :'resize'}]}/> */}
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
