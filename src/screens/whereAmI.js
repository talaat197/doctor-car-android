import React, {Component} from 'react';
import {StyleSheet, Button, View} from 'react-native';
import {Container, Text, Content} from 'native-base';
import { DARK_COLOR, DEFAULT_COLOR, SMALL_TEXT_COLOR } from '../includes/colors';
import MapView, { PROVIDER_GOOGLE ,Marker, Polyline} from 'react-native-maps';
import {mapStyle} from '../includes/mapStyle';
import {Navigation} from "react-native-navigation";
import {GetRequest} from "../http/HttpRequest";
import Spinner from 'react-native-loading-spinner-overlay';
import {_clearItem} from '../includes/Storage';

export default class whereAmI extends Component {
    constructor(props)
    {
        super(props);
        Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
        this.state={loading:true,
                    gps:{gpsCoordinate:{latitude:null, longitude:null},
                        day:null,
                        time:null}}
    }

    navigationButtonPressed({ buttonId }) {
        Navigation.popToRoot(this.props.componentId);
        _clearItem('api_token');
    }

    componentDidMount() {
      GetRequest("http://postman-echo.com/get", null, this._setGpsData);
    }

    _setGpsData = (data) =>
    {
      this.setState({gps:{
        gpsCoordinate:{latitude: 29.85471,longitude: 31.34112},
        time:"1 am",
        day:"Today"}});

      this.setState({loading:false});
    };
  render() {
    return (
      <View style={styles.container}>
      {this.state.gps.gpsCoordinate.latitude ? 
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={mapStyle}
          region={{
            latitude: this.state.gps.gpsCoordinate.latitude,
            longitude: this.state.gps.gpsCoordinate.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        <Polyline
        coordinates={
          [
            {latitude: 29.8499966,longitude: 31.333332},
            {latitude: this.state.gps.gpsCoordinate.latitude,longitude: this.state.gps.gpsCoordinate.longitude}
          ]    
        }
        strokeWidth={4}
        strokeColor={SMALL_TEXT_COLOR}
        />
        <Marker
          coordinate={{
            latitude: this.state.gps.gpsCoordinate.latitude,
            longitude: this.state.gps.gpsCoordinate.longitude
          }}
          title={this.state.gps.day}
          description={this.state.gps.time}
          image={require('../../src/assets/car_loc.png')}
        />
        <Marker
          coordinate={{
            latitude: 29.86687,
            longitude: 31.31527
          }}
          title={"Me"}
          description={""}
        />
        </MapView>
      :null}
        <Spinner visible={this.state.loading} color={SMALL_TEXT_COLOR} animation="fade" cancelable={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor:DARK_COLOR,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
