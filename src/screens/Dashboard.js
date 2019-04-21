import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import Module from "../components/Module";
import { DARK_COLOR } from '../includes/colors';

export default class Dashboard extends Component {
  render() {
    return (
    <Container style={styles.Container}>
      <Content>
        <Module 
          name={'Water Sensor'} 
          lastUpdate={'2m ago'} 
          photo={'https://i.ebayimg.com/images/g/0RsAAOSwfpVZIAw9/s-l300.jpg'}
          data={[{ value: '100' ,icon :'water'},
                { value: '1000 - 2500' ,icon :'funnel'}]}/>
        <Module
          name={'XYZ Sensor'} 
          lastUpdate={'43m ago'} 
          photo={'https://png.pngtree.com/element_our/md/20180514/md_c4084b78f757aa8a8dd44d853eeafb21.jpg'}
          data={[{ value: '100' ,icon :'arrow-round-forward'}, 
                { value: '200' ,icon :'arrow-round-up'}, 
                { value: '100' ,icon :'resize'}]}/>
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor:DARK_COLOR
    }
});
