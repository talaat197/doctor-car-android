import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container} from 'native-base';
import {SMALL_TEXT_COLOR, DEFAULT_COLOR} from '../includes/colors';
import MapView, { PROVIDER_GOOGLE ,Marker, Polyline} from 'react-native-maps';
import {mapStyle} from '../includes/mapStyle';
import {Navigation} from "react-native-navigation";
import {GetRequest} from "../http/HttpRequest";
import Spinner from 'react-native-loading-spinner-overlay';
import {_clearItem} from '../includes/Storage';

export default class dailyCycleHistory extends Component {
    constructor(props)
    {
        super(props);
        Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
        this.state={loading:true, gpsCycle:null};
    }
    navigationButtonPressed({ buttonId }) {
        Navigation.popToRoot(this.props.componentId);
        _clearItem('api_token');
    }

    componentDidMount() {
      GetRequest("http://postman-echo.com/get", null, this._setGpsCycleData);
    }

    _setGpsCycleData = (data) =>
    {
      this.setState({gpsCycle:[
        {coordinate:{latitude: 29.8499966,longitude: 31.333332}, Day:"Today", Time:"1 AM"},
        {coordinate:{latitude: 29.86687,longitude: 31.31527}, Day:"Yesterday", Time:"3 PM"},
        {coordinate:{latitude: 29.85471,longitude: 31.34112}, Day:"Today", Time:"1 AM"}
      ]});

      this.setState({loading:false});
    };
  render() {
    return (
      <View style={styles.container}>
      {this.state.gpsCycle ?
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={mapStyle}
          region={{
            latitude: 29.8499966,
            longitude: 31.333332,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        <Polyline
        coordinates={this.state.gpsCycle.map(function(loc) { return loc.coordinate; })}
        strokeWidth={5}
        strokeColor={SMALL_TEXT_COLOR}
        />
        {this.state.gpsCycle.map(function(loc){
          return(
          <Marker
            coordinate={loc.coordinate}
            title={loc.Day}
            description={loc.Time}
          />
          );
        })}
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
    backgroundColor:DEFAULT_COLOR,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
