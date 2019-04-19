import {React , Component , StyleSheet} from '../includes/CommonImports';
import {DEFAULT_COLOR ,SEARCH_COLOR , BACKGROUND_SEARCH_COLOR} from "../includes/colors";
import { Segment, Button, Text } from 'native-base';
const SegmentTab = (props) =>
(
    <Segment style={styles.tabs}>
      <Button first
              style={styles.segmentButton}
            active={props.this.state.tab_selected === 1}
            onPress={() => props.this.setState({ tab_selected: 1 })}>
        <Text 
            style={(props.this.state.tab_selected === 1 ? styles.activetext : styles.normaltext)}>
        Unpaid
        </Text>
      </Button>
      <Button
          style={styles.segmentButton}

          active={props.this.state.tab_selected === 2}
            onPress={() => props.this.setState({ tab_selected: 2 })}>
        <Text
            style={(props.this.state.tab_selected === 2 ? styles.activetext : styles.normaltext)}>
        paid
        </Text>
      </Button>
      <Button
          style={styles.segmentButton}

          active={props.this.state.tab_selected === 3}
            onPress={() => props.this.setState({ tab_selected: 3 })}>
        <Text 
            style={(props.this.state.tab_selected === 3 ? styles.activetext : styles.normaltext)}>
        Draft
        </Text>
      </Button>
      <Button
          style={styles.segmentButton}

          last
            active={props.this.state.tab_selected === 4}
            onPress={() => props.this.setState({ tab_selected: 4 })}>
        <Text
            style={(props.this.state.tab_selected === 4 ? styles.activetext : styles.normaltext)}>
        All
        </Text>
      </Button>
    </Segment>
);

const styles = StyleSheet.create({
   tabs:{
      backgroundColor:DEFAULT_COLOR,
    },
    activetext:{
      color:DEFAULT_COLOR
    },
    normaltext:{
      color:'white'
    },
    segmentButton:{
      width:"23%"
    }
});

export default SegmentTab;
