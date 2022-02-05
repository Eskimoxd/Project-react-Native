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

    },
    ImgNavTabBottom: {
        width: 40,
        height: 40,
    },
    TextNavTabBotton: {fontSize: 20},
      NavTabBottom: {
        height: 70,
    },
    PageText: {
        fontSize: 30,
        textAlign: 'center',
        color: 'grey',
    },
    Button: {
        alignItems: 'center',
        backgroundColor: '#1e90ff',
        borderColor: '#ffffff',
        height: 40,
        marginTop: 10,
        padding: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    TextBotton: {
        fontSize: 20,
        textAlign: 'center',
        color: 'grey',
        bottom: 20,
        fontWeight:'bold'
    },
    HeaderStyle: {
        backgroundColor: '#00008b',
    },
    HeaderTitleStyle: {
        fontWeight: 'bold',
    },
    BottonText:{
        fontSize: '15',
        fontWeight:'bold'
    }
});
export {styles}