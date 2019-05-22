import {React , StyleSheet} from '../includes/CommonImports';
import {Button , Text} from "native-base";
import {DEFAULT_COLOR, SECONDARY_COLOR} from "../includes/colors";
const DefaultButton = (props) =>
(
    <Button rounded
            style={[styles.btn_color , props.parentStyle]}
            onPress={props._onPress}
    >
        <Text>{props.name}</Text>
    </Button>
);

const styles = StyleSheet.create({
    btn_color:{
        backgroundColor:SECONDARY_COLOR
    }
});

export default DefaultButton;
