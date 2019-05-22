import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container} from 'native-base';
import { DARK_COLOR } from '../includes/colors';

export default class dailyCycleHistory extends Component {
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
