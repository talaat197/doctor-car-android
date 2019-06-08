import React from 'react';
import {StyleSheet,View} from 'react-native';
import { Col ,Grid , Row, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {DARK_COLOR, SECONDARY_COLOR , LIGHT_COLOR , ICON_COLOR , SMALL_TEXT_COLOR ,BORDER_COLOR} from "../includes/colors";
import Pie from 'react-native-pie';
import WaterHistoryGraph from './modals/WaterHistoryGraph';
import MapView, { PROVIDER_GOOGLE ,Marker} from 'react-native-maps';
import {mapStyle} from '../includes/mapStyle';
import {
  _navigateToScreen, getTopBar, screenNames
} from "../includes/navigationMethods";
const Module = (props) =>
(
  <Card style={styles.Card}>
    <CardItem style={styles.Item}>
      <Left>
        <Thumbnail source={props.photo}/>
        <Body>
          <Text style={styles.ItemText}>{props.name}</Text>
          <Text style={styles.LastUpdate}>{props.lastUpdate}</Text>
        </Body>
      </Left>
      <Right>
        {props.waterHistoryData ? 
          <WaterHistoryGraph waterHistoryData={props.waterHistoryData}/>
        : null}
        {props.gpsCoordinate ? 
          <Button iconLeft success onPress={() => {
            let options = {
                topBar: getTopBar(screenNames.dailyCycleHistory.name)
            };
            _navigateToScreen("App" , screenNames.dailyCycleHistory.name , options , false);
            }}>
            <Icon active name='filing' />
            <Text>History</Text>
          </Button>
        : null}
      </Right>
    </CardItem>
    <CardItem cardBody style={styles.graphSection}>
    {props.waterGraphValue ?
      <View>
        <Pie
          radius={70}
          innerRadius={63}
          series={[props.waterGraphValue]}
          colors={[SMALL_TEXT_COLOR]}
          backgroundColor={DARK_COLOR}
        />
        <View style={styles.gauge}>
          <Text style={styles.gaugeText}>{props.waterGraphValue}%</Text>
        </View>
      </View>
    :null
    }

    {props.gpsDay ?
      <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      customMapStyle={mapStyle}
      region={{
        latitude: props.gpsCoordinate.latitude,
        longitude: props.gpsCoordinate.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
    <Marker
      coordinate={props.gpsCoordinate}
      title={props.gpsDay}
      description={props.gpsTime}
      image={require('../assets/car_loc.png')}
    />
    </MapView>
    :null
    }
    </CardItem>
    <CardItem style={styles.Item}>
      <Grid>
        <Row>
          {props.data.map(part => (
            <Col>
              <Button transparent>
                <Icon active name={part.icon} style={styles.Icon}/>
                <Text style={styles.ItemText}>{part.value}</Text>
              </Button>
            </Col>
          ))}
        </Row>
      </Grid>
    </CardItem>
  </Card>
);

const styles = StyleSheet.create({
    Card:{
        borderColor:DARK_COLOR,
        backgroundColor:DARK_COLOR,
    },
    Icon:{
        color: ICON_COLOR,
    },
    ItemText:{
        color:LIGHT_COLOR
    },
    Item:{
        backgroundColor:SECONDARY_COLOR,
    },
    LastUpdate:{
        color:SMALL_TEXT_COLOR
    },
    graphSection:{
      backgroundColor:SECONDARY_COLOR,
      alignItems: 'center',
      justifyContent: 'center',
      height:200
    },
    gauge: {
      position: 'absolute',
      width: 140,
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
    },
    gaugeText: {
      color: SMALL_TEXT_COLOR,
      fontSize: 24,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});

export default Module;