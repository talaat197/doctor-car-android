import {React , StyleSheet} from '../includes/CommonImports';
import {Container, Content, Form, Header, Input, Item, Label} from "native-base";
import {DEFAULT_COLOR} from "../includes/colors";

const SimpleView = (props) =>
{
    let information = Object.keys(props.fieldNames).map((key) => {
        return (
            <Item floatingLabel key={props.fieldNames[key].toString()}>
                <Label style={styles.input_label}>{props.fieldNames[key]}</Label>
                <Input value={props.passedData[key].toString()} disabled/>
            </Item>
        );
    });
    return (
        <Container>
            <Header/>
            <Content>
                <Form>
                    {information}
                </Form>
            </Content>
        </Container>
    );
};
const styles = StyleSheet.create({
    input_label: {
        color: DEFAULT_COLOR
    }
});

export default SimpleView;
