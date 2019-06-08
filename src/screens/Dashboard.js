import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import Module from "../components/Module";
import { DARK_COLOR, SMALL_TEXT_COLOR} from '../includes/colors';
import {Navigation} from "react-native-navigation";
import {GetRequest} from "../http/HttpRequest";
import Spinner from 'react-native-loading-spinner-overlay';
import {_clearItem} from '../includes/Storage';

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
        _clearItem('api_token');
    }

    componentDidMount() {
      GetRequest("http://postman-echo.com/get", null, this._setDashboardData);
    }

    _setDashboardData = (data) =>
    {
      this.setState({waterSensor:{name:"Water Sensor",
        lastUpdate:"20m ago",
        waterGraphValue:70,
        waterHistoryData:[0.2,0.7,0.4,0.3,0.7,0.2,0.7,0.2,0.3,0.4],
        minMax:"1000 - 2500"}});

      this.setState({gps:{name:"GPS",
        lastUpdate:"30m ago",
        gpsCoordinate:{latitude: 29.85471,longitude: 31.34112},
        time:"1 am",
        day:"Today"}});

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
