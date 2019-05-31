import React from 'react';
import {StyleSheet , Image} from 'react-native';
import {Grid,Col, Card, CardItem, Text, Icon, Left, Body } from 'native-base';
import {DARK_COLOR, SECONDARY_COLOR , LIGHT_COLOR , ICON_COLOR , SMALL_TEXT_COLOR,BORDER_COLOR} from "../includes/colors";
import EditCarModal from "../components/modals/EditCarModal";

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
                        <EditCarModal car={car}/>
                    </Col>
                </Grid>
            </CardItem>);

        carObject.push(
            <CardItem cardBody>
                <Image source={{uri : car.image}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>);
        
        carObject.push(
            <CardItem bordered style={styles.Item}>
                <Left>
                    <Icon active name="calendar" style={styles.icon}/>
                    <Body>
                    <Text style={styles.ItemText}>{car.model}</Text>
                    <Text style={styles.ItemSmallText}>Model</Text>
                    </Body>
                </Left>
            </CardItem>);
        carObject.push(
        <CardItem bordered style={styles.Item}>
            <Left>
                <Icon active name="train" style={styles.icon}/>
                <Body>
                <Text style={styles.ItemText}>{car.type}</Text>
                <Text style={styles.ItemSmallText}>Type</Text>
                </Body>
            </Left>
        </CardItem>);
        carObject.push(
            <CardItem bordered style={styles.Item}>
                <Left>
                    <Icon active name="unlock" style={styles.icon}/>
                    <Body>
                    <Text style={styles.ItemText}>{car.number}</Text>
                    <Text style={styles.ItemSmallText}>Number</Text>
                    </Body>
                </Left>
            </CardItem>);

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