import {React , Component , StyleSheet} from '../includes/CommonImports';
import {Item , Icon , Input } from 'native-base';
const BasicFormField = (props) =>
(
    <Item>
      <Input placeholder={props.placeholder}/>
    </Item>
);

const styles = StyleSheet.create({

});

export default BasicFormField;
