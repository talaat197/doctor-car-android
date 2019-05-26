import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container} from 'native-base';
import { DARK_COLOR } from '../includes/colors';
import {Navigation} from "react-native-navigation";

export default class Notification extends Component {
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
    <Container style={styles.Container}>
      
    </Container>
    );
  }
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor:DARK_COLOR
    }
});
