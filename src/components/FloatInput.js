import {React , StyleSheet } from '../includes/CommonImports';
import { Item   , Label , Input} from 'native-base';
import {DARK_COLOR, DEFAULT_COLOR} from "../includes/colors";
/*
    function base component for creating float input
 */
const FloatingInput = (props) => (
        <Item floatingLabel style={[styles.item , props.mainStyle]}>
            <Label style={{color:'white'}}>{props.label}</Label>
            <Input style={styles.input}
                   {...props}
            />
        </Item>
);

const styles = StyleSheet.create({
    item:{
        width:"80%",
        borderColor: 'white',
    },
    input:{
        color:'white'
    }
});

export default FloatingInput;