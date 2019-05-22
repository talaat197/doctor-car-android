import React, {Component} from 'react';
import {Modal, TouchableHighlight, View, StyleSheet, ProgressBarAndroid} from 'react-native';
import {Text, Button, Icon, Content} from 'native-base';
import {DARK_COLOR, SECONDARY_COLOR , LIGHT_COLOR , ICON_COLOR , SMALL_TEXT_COLOR,BORDER_COLOR} from "../../includes/colors";

export default class WaterHistoryGraph extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    getProgressColor(param){
      if(param >= 0.3 && param <= 0.6){
        return SMALL_TEXT_COLOR;
      }
      else if(param >= 0.6 && param <= 1){
        return "#57a846";
      }
      else{
        return "#de4d45";
      }
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
            <Content>
            {this.props.waterHistoryData.map(waterValue => {
              var selectedColor = this.getProgressColor(waterValue);
              return(
              <View style={styles.historyBlock}>
                <Text style={{color:selectedColor}}>20-10-2019 12:00 ({waterValue*1000})</Text>
                <ProgressBarAndroid
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={waterValue}
                  color={selectedColor}
                />
              </View>
              )
            })}
            <TouchableHighlight
                onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                    }}
                style={styles.fullWidthButton}>
                <Text style={styles.buttonText}>Close</Text>
            </TouchableHighlight>
            </Content>
          </View>
        </Modal>

        <Button iconLeft success onPress={() => {
            this.setModalVisible(true);
          }}>
          <Icon active name='filing' />
          <Text>History</Text>
        </Button>

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
    },
    historyBlock:{
      marginTop:10
    }
});