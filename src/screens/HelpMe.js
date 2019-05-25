import React, {Component} from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {Container, Text, Content, Form, Textarea , Spinner} from 'native-base';
import {DARK_COLOR, LIGHT_COLOR, SECOND_MAIN_COLOR, SECONDARY_COLOR} from '../includes/colors';
import {_navigateToScreen, screenNames} from "../includes/navigationMethods";
import {Navigation} from "react-native-navigation";

export default class HelpMe extends Component {
    constructor(props)
    {
        super(props);
        Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
    }
    navigationButtonPressed({ buttonId }) {
        Navigation.popToRoot(this.props.componentId);
    }
    state = {
        message : "",
        isSending : false
    };
    _sendHelpMe = () => {
        this.setState({
           isSending : true
        });
    };
    _onCancel = () => {
        this.setState({
            message : ""
        })
    };
    _onChangeText = (message) => {
        this.setState({
            message : message
        })
    };
    render() {
        let sendButton = <TouchableHighlight style={styles.fullWidthButton} onPress={this._sendHelpMe}>
            <Text style={styles.buttonText}>Send</Text>
        </TouchableHighlight>;
        if(this.state.isSending)
        {
            sendButton = <Spinner color={SECOND_MAIN_COLOR} />
        }
        return (
            <Container style={styles.Container}>
                <Content padder>
                    <Form>
                        <Textarea onChangeText={this._onChangeText} style={styles.textarea_style} placeholderTextColor={LIGHT_COLOR} rowSpan={18} bordered
                                  value={this.state.message}
                                  placeholder="Type Your Message Here...."/>
                    </Form>
                </Content>
                {sendButton}
                <TouchableHighlight
                    onPress={this._onCancel}
                    style={styles.fullWidthButton}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableHighlight>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: DARK_COLOR
    },
    fullWidthButton: {
        marginTop: 10,
        backgroundColor: SECONDARY_COLOR,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        padding: 10,
    },
    buttonText: {
        color: LIGHT_COLOR,
        fontSize: 16,
    },
    textarea_style: {
        color: LIGHT_COLOR
    }
});
