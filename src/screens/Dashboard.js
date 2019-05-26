import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import Module from "../components/Module";
import { DARK_COLOR } from '../includes/colors';

export default class Dashboard extends Component {
  render() {
    return (
    <Container style={styles.Container}>
      <Content>
        <Module
          name={'Water Sensor'}
          lastUpdate={'2m ago'}
          waterGraphValue={70}
          waterHistoryData={[0.2,0.7,0.4,0.3,0.7,0.2,0.7,0.2,0.3,0.4]}
          photo={require('../assets/water-sensor.png')}
          data={[{ value: '1900' ,icon :'water'},
                { value: '1000 - 2500' ,icon :'funnel'}]}/>
        <Module
          name={'GPS'}
          lastUpdate={'20m ago'}
          gpsCoordinate={{latitude: 29.8499966,longitude: 31.333332}}
          gpsDay={"Today"}
          gpsTime={"2 AM"}
          photo={require('../assets/gps.png')}
          data={[{ value: '29.85471' ,icon :'pin'}, 
                { value: '31.34112' ,icon :'pin'}]}/>
        <Module
          name={'XYZ Sensor'}
          lastUpdate={'43m ago'}
          photo={require('../assets/xyz.png')}
          data={[{ value: '100' ,icon :'arrow-round-forward'}, 
                { value: '200' ,icon :'arrow-round-up'}, 
                { value: '100' ,icon :'resize'}]}/>
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
    Container:{
      backgroundColor:DARK_COLOR
    }
});
