import React from 'react';
import {StyleSheet} from 'react-native';
import { Col ,Grid , Row, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {DARK_COLOR, SECONDARY_COLOR , LIGHT_COLOR , ICON_COLOR , SMALL_TEXT_COLOR ,BORDER_COLOR} from "../includes/colors";

const Module = (props) =>
(
  <Card style={styles.Card}>
    <CardItem style={styles.Item}>
      <Left>
        <Thumbnail source={{uri: props.photo}} />
        <Body>
          <Text style={styles.ItemText}>{props.name}</Text>
          <Text style={styles.LastUpdate}>{props.lastUpdate}</Text>
        </Body>
      </Left>
      <Right>
        <Button iconLeft success>
          <Icon active name='filing' />
          <Text uppercase={false}>History</Text>
        </Button>   
      </Right>
    </CardItem>
    <CardItem cardBody>
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
        backgroundColor:DARK_COLOR
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
    }
});

export default Module;