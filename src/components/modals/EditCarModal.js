import React, {Component} from 'react';
import {Modal, TouchableHighlight, View, Image ,StyleSheet} from 'react-native';
import {Text} from 'native-base';
import {DARK_COLOR, SECONDARY_COLOR , LIGHT_COLOR , ICON_COLOR , SMALL_TEXT_COLOR,BORDER_COLOR} from "../../includes/colors";
import DefaultFormField from "../DefaultFormField";
import {PostRequest} from "../../http/HttpRequest";
import Spinner from 'react-native-loading-spinner-overlay';

export default class EditCarModal extends Component {
    state = {
        modalVisible: false,
        loading:false,
        model:this.props.car.model,
        type:this.props.car.type,
        number:this.props.car.number,
    };

    _editCar = () =>
    {
      this.setState({loading:true});
      PostRequest("http://evening-taiga-77600.herokuapp.com/api/user/editcar/"+this.props.car.id
      ,{model:this.state.model,type:this.state.type,number:this.state.number}
      ,this._callResponse);
    };

    _callResponse = (data) =>
    {
      this.setState({loading:false});
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
                <DefaultFormField icon_name={'calendar'} labelName="Model" placeholder={this.state.model}
                onChangeText={(text) => this.setState({model:text})}/>
                <DefaultFormField icon_name={'train'} labelName="Type" placeholder={this.state.type}
                onChangeText={(text) => this.setState({type:text})}/>
                <DefaultFormField icon_name={'unlock'} labelName="Number" placeholder={this.state.number}
                onChangeText={(text) => this.setState({number:text})}/>

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
          <Spinner visible={this.state.loading} color={SMALL_TEXT_COLOR} animation="fade" cancelable={true} />
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