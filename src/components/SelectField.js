import {React , Component , StyleSheet} from '../includes/CommonImports';
import {DEFAULT_COLOR ,SEARCH_COLOR , BACKGROUND_SEARCH_COLOR} from "../includes/colors";
import {Item , Icon , Input , Picker , Form , Left , Right , Text , Body} from 'native-base';
const SelectField = (props) =>
(
	<Form>
    <Item picker>
   		<Icon active name={props.icon_name} style={styles.icon}/>
   		<Text>{props.select_name}</Text>
	    <Picker
	      note
	      mode="dropdown"
	      style={{width:undefined }}
	      selectedValue={props.selected_value}
	      onValueChange={(text) => props.change_function(text)}
	    >
	      <Picker.Item label="Wallet" value="key0" />
	      <Picker.Item label="ATM Card" value="key1" />
	      <Picker.Item label="Debit Card" value="key2" />
	      <Picker.Item label="Credit Card" value="key3" />
	      <Picker.Item label="Net Banking" value="key4" />
	    </Picker>
	</Item>
	</Form>
);

const styles = StyleSheet.create({
    icon:{
        color:DEFAULT_COLOR
    }
});

export default SelectField;
