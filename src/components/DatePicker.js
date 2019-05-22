import React, { Component } from 'react';
import { Content, DatePicker, Text } from 'native-base';
import {StyleSheet , View} from "react-native";
import {DATEPICKER_TEXT_COLOR, PAGE_BACKGROUND_COLOR, SECOND_MAIN_COLOR} from "../includes/colors";
import {CONTAINER_PADDING} from "../includes/sizes";
export default class DatePickerComponent extends Component {
    state = {
      chosenDate: new Date()
    };
    setDate  = (newDate) => {
        this.setState({ chosenDate: newDate });
    };
    render() {
        return (
                <View style={styles.content}>
                 <Text style={{flex:1}}>Date of Deposit</Text>
                    <DatePicker
                        defaultDate={new Date(2018, 4, 4)}
                        minimumDate={new Date(2018, 1, 1)}
                        maximumDate={new Date(2018, 12, 31)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText={this.state.chosenDate.toString().substr(4, 12)}
                        textStyle={{ color: DATEPICKER_TEXT_COLOR }}
                        placeHolderTextStyle={{ color: DATEPICKER_TEXT_COLOR }}
                        onDateChange={this.setDate}
                        disabled={false}
                    />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    content:{
        backgroundColor: SECOND_MAIN_COLOR,
        display:"flex",
        flexDirection:"row",
        alignItems: "center",
        paddingLeft:CONTAINER_PADDING
    }
});