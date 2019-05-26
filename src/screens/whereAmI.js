import React, {Component} from 'react';
import {StyleSheet, Button, View} from 'react-native';
import {Container, Text, Content} from 'native-base';
import { DARK_COLOR, DEFAULT_COLOR, SMALL_TEXT_COLOR } from '../includes/colors';
import MapView, { PROVIDER_GOOGLE ,Marker, Polyline} from 'react-native-maps';
import {mapStyle} from '../includes/mapStyle';
import {Navigation} from "react-native-navigation";

export default class whereAmI extends Component {
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
        coordinates={
          [
            {latitude: 29.8499966,longitude: 31.333332},
            {latitude: 29.86687,longitude: 31.31527}
          ]    
        }
        strokeWidth={4}
        strokeColor={SMALL_TEXT_COLOR}
        />
        <Marker
          coordinate={{
            latitude: 29.8499966,
            longitude: 31.333332
          }}
          title={"Car Location"}
          description={"Today - 1 AM"}
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
