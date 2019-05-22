import React, {Component} from 'react';
import {Modal, TouchableHighlight, View, Image ,StyleSheet} from 'react-native';
import {Text} from 'native-base';
import {DARK_COLOR, SECONDARY_COLOR , LIGHT_COLOR , ICON_COLOR , SMALL_TEXT_COLOR,BORDER_COLOR} from "../includes/colors";
import DefaultFormField from "../components/DefaultFormField";

export default class EditCarModal extends Component {
    state = {
        modalVisible: false,
    };

    _editCar = () =>
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
                <DefaultFormField icon_name={'calendar'} labelName="Model" placeholder={this.props.car.model}/>
                <DefaultFormField icon_name={'train'} labelName="Type" placeholder={this.props.car.type}/>
                <DefaultFormField icon_name={'unlock'} labelName="Number" placeholder={this.props.car.number}/>
                <Image source={{uri : this.props.car.image}} style={{height: 200, width: null,marginTop:10}}/>
                <TouchableHighlight style={styles.fullWidthButton} onPress={this._editCar}>
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