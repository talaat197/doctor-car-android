import React, {Component} from 'react';
import {Modal, TouchableHighlight, View, Image ,StyleSheet} from 'react-native';
import {Text} from 'native-base';
import {DARK_COLOR, SECONDARY_COLOR , LIGHT_COLOR , ICON_COLOR , SMALL_TEXT_COLOR,BORDER_COLOR} from "../../includes/colors";
import DefaultFormField from "../DefaultFormField";
import {PostRequest} from "../../http/HttpRequest";
import Spinner from 'react-native-loading-spinner-overlay';

export default class EditProfileInfoModal extends Component {
    state = {
        modalVisible: false,
        loading:false,
        name:this.props.data.name,
        mobile:this.props.data.mobile,
        email:this.props.data.email
    };

    _editProfile = () =>
    {
        if(this.state.name==null)this.state.name=this.props.data.name;
        if(this.state.mobile==null)this.state.mobile=this.props.data.mobile;
        if(this.state.email==null)this.state.email=this.props.data.email;

        this.setState({loading:true});
        PostRequest("https://postman-echo.com/post"
        ,{name:this.state.name, mobile:this.state.mobile, email:this.state.email}
        ,this._callResponse, "Edited Successfully :)");
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
                <DefaultFormField icon_name={'contact'} labelName="Name" placeholder={this.props.data.name}
                onChangeText={(text) => this.setState({name:text})}/>
                <DefaultFormField icon_name={'call'} labelName="Mobile" placeholder={this.props.data.mobile}
                onChangeText={(text) => this.setState({mobile:text})}/>
                <DefaultFormField icon_name={'mail'} labelName="Email" placeholder={this.props.data.email}
                onChangeText={(text) => this.setState({email:text})}/>
                
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