import {React , StyleSheet} from '../includes/CommonImports';
import {Image} from "react-native";
import logo from "../assets/logo.png";

const Logo = (props) => (
    <Image
        source={logo}
        {...props}
    />
);

const styles = StyleSheet.create({

});
export default Logo;