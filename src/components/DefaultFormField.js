import {React , Component , StyleSheet} from '../includes/CommonImports';
import {LIGHT_COLOR ,ICON_COLOR , SMALL_TEXT_COLOR} from "../includes/colors";
import {Item , Icon , Input,Label } from 'native-base';
const DefaultFormField = (props) =>
(
    <Item fixedLabel>
      <Icon active name={props.icon_name} style={styles.icon}/>
      <Label style={styles.label}>{props.labelName}</Label>
      <Input placeholder={props.placeholder} style={styles.input} placeholderTextColor={LIGHT_COLOR}
            onChangeText={props.onChangeText}/>
    </Item>
);

const styles = StyleSheet.create({
    icon:{
        color:ICON_COLOR
    },
    label:{
        color:SMALL_TEXT_COLOR
    },
    input:{
        color:LIGHT_COLOR,
    },
});

export default DefaultFormField;
