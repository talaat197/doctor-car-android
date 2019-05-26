import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container} from 'native-base';
import {SMALL_TEXT_COLOR, DEFAULT_COLOR} from '../includes/colors';
import MapView, { PROVIDER_GOOGLE ,Marker, Polyline} from 'react-native-maps';
import {mapStyle} from '../includes/mapStyle';
import {Navigation} from "react-native-navigation";

export default class dailyCycleHistory extends Component {
    HistoryLocations=[
      {coordinate:{latitude: 29.8499966,longitude: 31.333332}, Day:"Today", Time:"1 AM"},
      {coordinate:{latitude: 29.86687,longitude: 31.31527}, Day:"Yesterday", Time:"3 PM"},
      {coordinate:{latitude: 29.85471,longitude: 31.34112}, Day:"Today", Time:"1 AM"}
    ]
    constructor(props)
    {
        super(props);
        Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
    }
    navigationButtonPressed({ buttonId }) {
        Navigation.popToRoot(this.props.componentId);
    }
  render() {
    return (
      <View style={styles.container}>
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
        coordinates={this.HistoryLocations.map(function(loc) { return loc.coordinate; })}
        strokeWidth={5}
        strokeColor={SMALL_TEXT_COLOR}
        />
        {this.HistoryLocations.map(function(loc){
          return(
          <Marker
            coordinate={loc.coordinate}
            title={loc.Day}
            description={loc.Time}
          />
          );
        })}
        </MapView>
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
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
