import {React , Component , StyleSheet} from '../includes/CommonImports';
import {DEFAULT_COLOR ,SEARCH_COLOR , BACKGROUND_SEARCH_COLOR} from "../includes/colors";
import {Item , Icon , Input ,Label } from 'native-base';
const ViewFormField = (props) =>
(
    <Item fixedLabel>
      <Icon active name={props.icon_name} style={styles.icon}/>
      <Label>{props.placeholder}</Label>
      <Input placeholder={props.value}  placeholderTextColor="#181818" disabled style={{textAlign:'center'}}/>
    </Item>
);

const styles = StyleSheet.create({
    icon:{
        color:DEFAULT_COLOR
    }
});

export default ViewFormField;
