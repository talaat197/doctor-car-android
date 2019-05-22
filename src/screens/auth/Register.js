import React , {Component} from 'react';
import {StyleSheet, ScrollView, View, Image} from 'react-native';
import {Form , Container} from 'native-base';
import FloatingInput from "../../components/FloatInput";
import DefaultButton from "../../components/DefaultButton";
import Logo from "../../components/Logo";
import Header from "../../components/TopBar";
class Register extends Component{
    render(){
        return(
            <View>
                <Header title={"Register"} backButton={true} componentId={this.props.componentId}/>
                <ScrollView>
                    <Container style={styles.container}>
                        <Logo style={styles.logo_style} resizeMethod={"scale"}
                              width={"80%"}/>
                        <Form style={styles.form_style}>
                            <FloatingInput label={"Full Name"}  />
                            <FloatingInput label={"Email"} keyboardType={"email-address"} />
                            <FloatingInput label={"password"} secureTextEntry={true} />
                            <FloatingInput label={"Phone"} keyboardType={"phone-pad"} last={true}/>
                            <DefaultButton name={"Sign Up"} parent_style={styles.form_btn}/>
                        </Form>
                    </Container>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flexDirection:"column",
        flex: 0.8
    },
    form_style:{
        flex: 1
    },
    form_btn :{
        marginTop:40,
        flex:.8,
    },
    logo_style :{
        height:"20%"
    }
});

export default Register;