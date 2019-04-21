import React from 'react';
import {StyleSheet , Image} from 'react-native';
import {Grid,Col, Card, CardItem, Text, Icon, Left, Body } from 'native-base';
import {DARK_COLOR, SECONDARY_COLOR , LIGHT_COLOR , ICON_COLOR , SMALL_TEXT_COLOR,BORDER_COLOR} from "../includes/colors";

const CarDetails = (props) =>
(
    <Card style={styles.Card}>
    {props.cars.map((car) => {
        var carObject = [];
        carObject.push(
            <CardItem cardHeader style={styles.ItemHeader}>
                <Grid>
                    <Col>
                        <Text style={styles.ItemHeaderText}>Car #1</Text>
                    </Col>
                    <Col>
                        <Text style={styles.editText} primary>Edit</Text>
                    </Col>
                </Grid>
            </CardItem>);

        carObject.push(
            <CardItem cardBody>
                <Image source={{uri : car.image}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>);
        
        car.data.map(item => {
            carObject.push(
                <CardItem bordered style={styles.Item}>
                    <Left>
                        <Icon active name={item.icon} style={styles.icon}/>
                        <Body>
                        <Text style={styles.ItemText}>{item.value}</Text>
                        <Text style={styles.ItemSmallText}>{item.key}</Text>
                        </Body>
                    </Left>
                </CardItem>);
        });
        return (carObject);
    })}
  </Card>
);

const styles = StyleSheet.create({
    Card:{
        borderColor:DARK_COLOR,
        backgroundColor:DARK_COLOR
    },
    icon:{
        color:ICON_COLOR,
        fontSize: 35
    },
    editText:{
        textAlign:'right',
        color:SMALL_TEXT_COLOR
    },
    Item:{
        backgroundColor:SECONDARY_COLOR,
        borderColor:BORDER_COLOR
    },
    ItemText:{
        color:LIGHT_COLOR
    },
    ItemSmallText:{
        color:SMALL_TEXT_COLOR
    },
    ItemHeader:{
        backgroundColor:DARK_COLOR
    },
    ItemHeaderText:{
        color:LIGHT_COLOR
    }
});

export default CarDetails;