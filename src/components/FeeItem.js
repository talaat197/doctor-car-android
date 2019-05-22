import {React, StyleSheet} from '../includes/CommonImports';
import {DEFAULT_COLOR} from "../includes/colors";
import {TouchableOpacity} from 'react-native';
import {
    Text,
    Card,
    CardItem,
    Left,
    Right,
    Button
} from 'native-base';

const FeeItem = (props) => {
    let status = <Button danger small><Text> {props.status} </Text></Button> ;
    if(props.status === "Paid")
        status = <Button primary small><Text> {props.status} </Text></Button> ;
    return (
        <TouchableOpacity onPress={ props._viewFee}>
            <Card style={styles.cardContainer}>
            <CardItem>
                <Left>
                    <Text style={styles.left}>
                        {props.name}
                    </Text>
                </Left>
                <Right>
                    {status}
                </Right>
            </CardItem>
            <CardItem style={styles.reduce_padding_top}>
                <Left>
                    <Text style={styles.left}>
                        {props.type}
                    </Text>
                </Left>
                <Right>
                    <Text>
                        {props.amount}
                    </Text>
                </Right>
            </CardItem>
        </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginTop:0,
        marginBottom:0
    },
    left: {
        marginLeft: 0
    },
    reduce_padding_top: {
        paddingTop: 0
    },
    more: {
        color: DEFAULT_COLOR
    }
});

export default FeeItem;
