import React from 'react';
import {StyleSheet , Image , ImageBackground, View} from 'react-native';
import {Grid,Col,Card, CardItem, Text, Icon, Left, Body } from 'native-base';
import {DARK_COLOR, SECONDARY_COLOR , LIGHT_COLOR , ICON_COLOR , SMALL_TEXT_COLOR ,BORDER_COLOR} from "../includes/colors";
import EditProfileInfoModal from "../components/modals/EditProfileInfoModal";

const ProfileInfo = (props) =>
(
    <Card style={styles.Card}>
        <View style={styles.headerContainer}>
        <ImageBackground
        style={styles.headerBackgroundImage}
        blurRadius={3}
        source={{
            uri: 'https://image.freepik.com/free-vector/car-repair-background-design_1343-18.jpg',
        }}
        >
        <View style={styles.headerColumn}>
            <Image
            style={styles.userImage}
            source={{
                uri: props.photo,
            }}
            />
            <Text style={styles.userNameText}>{props.username}</Text>
            <View style={styles.userAddressRow}>
            <View>
                <Icon
                name="pin"
                underlayColor="transparent"
                style={styles.placeIcon}
                />
            </View>
            <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                    {props.address}
                </Text>
            </View>
            </View>
        </View>
        </ImageBackground>
        </View>
        <CardItem cardHeader style={styles.ItemHeader}>
            <Grid>
                <Col>
                    <Text style={styles.ItemHeaderText}>General Info</Text>
                </Col>
                <Col>
                    <EditProfileInfoModal data={props.data} photo={props.photo}/>
                </Col>
            </Grid>
        </CardItem>
        <CardItem bordered style={styles.Item}>
            <Left>
                <Icon active name="contact" style={styles.icon}/>
                <Body>
                <Text style={styles.ItemText}>{props.data.name}</Text>
                <Text style={styles.ItemSmallText}>Name</Text>
                </Body>
            </Left>
        </CardItem>
        <CardItem bordered style={styles.Item}>
            <Left>
                <Icon active name="call" style={styles.icon}/>
                <Body>
                <Text style={styles.ItemText}>{props.data.mobile}</Text>
                <Text style={styles.ItemSmallText}>Mobile</Text>
                </Body>
            </Left>
        </CardItem>
        <CardItem bordered style={styles.Item}>
            <Left>
                <Icon active name="mail" style={styles.icon}/>
                <Body>
                <Text style={styles.ItemText}>{props.data.email}</Text>
                <Text style={styles.ItemSmallText}>Personal</Text>
                </Body>
            </Left>
        </CardItem>
    </Card>
);

const styles = StyleSheet.create({
    Card:{
        borderColor:DARK_COLOR,
        backgroundColor:DARK_COLOR
    },
    icon:{
        color: ICON_COLOR,
        fontSize: 35
    },
    headerBackgroundImage: {
        paddingBottom: 20,
        paddingTop: 35,
    },
    headerContainer: {},
    headerColumn: {
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    userCityRow: {
        backgroundColor: 'transparent',
    },
    userCityText: {
        color: SECONDARY_COLOR,
        fontSize: 15,
        paddingLeft:10,
        fontWeight: '600',
        textAlign: 'center',
    },
    userImage: {
        borderColor: SMALL_TEXT_COLOR,
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 15,
        width: 170,
    },
    userNameText: {
        color: LIGHT_COLOR,
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
    },
    placeIcon: {
        color: SECONDARY_COLOR,
        fontSize: 26,
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
  
export default ProfileInfo;