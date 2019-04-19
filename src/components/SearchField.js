import {React , Component , StyleSheet} from '../includes/CommonImports';
import {DEFAULT_COLOR, SEARCH_COLOR, BACKGROUND_SEARCH_COLOR, SECOND_MAIN_COLOR} from "../includes/colors";
import { Container, Header, Content, Button, Icon, List, Separator, Text ,Item ,Input} from 'native-base';
import {View} from 'react-native';
const SearchField = (props) =>
(
    <View bordered style={styles.header}>
      <Item rounded style={styles.search}>
        <Icon name="ios-search" />
        <Input placeholder={props.placeHolder} onChangeText={(text) => props._Search(text)}/>
      </Item>
    </View>
);
const SEARCH_ITEM_MARGINE = 7;
const styles = StyleSheet.create({
   search:{
      backgroundColor: SECOND_MAIN_COLOR,
       margin: SEARCH_ITEM_MARGINE,
    },
    header:{
      backgroundColor:SECOND_MAIN_COLOR,
   }
});

export default SearchField;
