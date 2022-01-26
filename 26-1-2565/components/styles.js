import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'

    },
    textTopStyle:{
        fontSize : 25,
        textAlign : 'center',
        marginBottom : 16,
        color : 'grey',
        fontWeight:'bold'

    },
    textBottomStyle:{
        fontSize : 16,
        textAlign : 'center',
        color : 'grey'

    }
});
export {styles}