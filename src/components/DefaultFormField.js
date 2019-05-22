import {React , Component , StyleSheet} from '../includes/CommonImports';
import {DEFAULT_COLOR ,SEARCH_COLOR , BACKGROUND_SEARCH_COLOR} from "../includes/colors";
import {Item , Icon , Input } from 'native-base';
const DefaultFormField = (props) =>
(
    <Item>
      <Icon active name={props.icon_name} style={styles.icon}/>
      <Input placeholder={props.placeholder}/>
    </Item>
);

const styles = StyleSheet.create({
    icon:{
        color:DEFAULT_COLOR
    }
});

export default DefaultFormField;
