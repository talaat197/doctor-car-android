import React, {Component} from 'react';
import {Modal, TouchableHighlight, View, Image ,StyleSheet} from 'react-native';
import {Text} from 'native-base';
import {DARK_COLOR, SECONDARY_COLOR , LIGHT_COLOR , ICON_COLOR , SMALL_TEXT_COLOR,BORDER_COLOR} from "../../includes/colors";
import DefaultFormField from "../DefaultFormField";

export default class EditProfileInfoModal extends Component {
    state = {
        modalVisible: false,
    };

    _editProfile = () =>
    {
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={styles.container}>
            <View>
                <DefaultFormField icon_name={'contact'} labelName="Name" placeholder={this.props.data.name}/>
                <DefaultFormField icon_name={'call'} labelName="Mobile" placeholder={this.props.data.mobile}/>
                <DefaultFormField icon_name={'mail'} labelName="Email" placeholder={this.props.data.email}/>
                <Image source={{uri : this.props.photo}} style={{height: 250, width: null,marginTop:10}}/>
                <TouchableHighlight style={styles.fullWidthButton} onPress={this._editProfile}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        }}
                    style={styles.fullWidthButton}>
                    <Text style={styles.buttonText}>Close</Text>
                </TouchableHighlight>

            </View>
          </View>
        </Modal>

        <Text style={styles.editText} onPress={() => {
            this.setModalVisible(true);
          }}>Edit</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:DARK_COLOR,
        flex: 1,
        padding: 10
    },
    editText:{
        textAlign:'right',
        color:SMALL_TEXT_COLOR
    },
    fullWidthButton: {
        marginTop:10,
        backgroundColor: SECONDARY_COLOR,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:2,
        padding:10,
    },
    buttonText:{
        color:LIGHT_COLOR,
        fontSize:16,
    }
});