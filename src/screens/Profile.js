import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import ProfileInfo from "../components/ProfileInfo";
import CarDetails from "../components/CarDetails";
import { DARK_COLOR } from '../includes/colors';

export default class Profile extends Component {
    static navigationOptions = {
        header: null ,
      };

  render() {
    return (
    <Container style={styles.Container}>
      <Content>
      <ProfileInfo
        data={[
            {'value':'Sherif Mohamed' ,'key':'Name' ,'icon':'contact'}
            ,{'value':'01153495604' ,'key':'Mobile' ,'icon':'call'}
            ,{'value':'Shriefmarcato@gmail.com' ,'key':'Personal' ,'icon':'mail'}
            ]}  
        photo={'https://scontent.fcai3-1.fna.fbcdn.net/v/t1.0-9/50549188_2160272934050183_6379706522686980096_n.jpg?_nc_cat=102&_nc_ht=scontent.fcai3-1.fna&oh=aa4b2eb76d2d4dfbe0449c730d807b92&oe=5D4331D3'}
        address={'Egypt , giza'}
        username={'Sherif Mohamed'}
            />

        <CarDetails 
        cars={[
            {'data':[
              {'key':'Model' ,'value':'2012' ,'icon':'calendar'}
              ,{'key':'Type' ,'value':'KIA' ,'icon':'train'}
              ,{'key':'Number' ,'value':'123' ,'icon':'unlock'}
            ] 
            ,'image':'http://cdn.24.co.za/files/Cms/General/d/7209/dfb51e2e4be24a07b71cbf021a81d6d3.jpg'}
            
            ,{'data':[
              {'key':'Model' ,'value':'2015' ,'icon':'calendar'}
              ,{'key':'Type' ,'value':'KIA' ,'icon':'train'}
              ,{'key':'Number' ,'value':'123' ,'icon':'unlock'}
            ] 
            ,'image':'https://us.123rf.com/450wm/tverdohlib/tverdohlib1507/tverdohlib150700166/42090060-%E7%AB%8B%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E9%AB%98%E9%BD%A2%E8%80%85%E9%8C%86%E3%81%B3%E3%81%A6%E5%A3%8A%E3%82%8C%E3%81%9F%E6%B8%9B%E4%BE%A1%E5%84%9F%E5%8D%B4%E3%83%AC%E3%83%88%E3%83%AD%E8%BB%8A%E5%8F%A4%E3%81%84%E7%A0%82%E5%88%A9%E5%9C%B0%E4%B8%8A%E5%B1%8B%E5%A4%96%E3%80%81%E6%B0%B4%E5%B9%B3%E7%94%BB%E5%83%8F.jpg?ver=6'}
            ]}
        />
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
