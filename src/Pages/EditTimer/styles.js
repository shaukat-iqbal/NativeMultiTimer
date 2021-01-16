import {ScaledSheet} from 'react-native-size-matters';
import {secondaryColor} from "../../Utils";

export default styles = ScaledSheet.create({

    centeredView: {
        flex: 1,
        alignItems: 'center',
    },
    modalView: {
        borderRadius: 20,
        paddingHorizontal: 20,
        width: '90%',
        alignItems: 'center',

    },
    pageTitle: {fontSize: 20, fontWeight: 'bold', color: secondaryColor},
    button: {
        borderRadius: 8,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        backgroundColor: 'green',
        width: 40,
    },
    textInput: {
        height: 30,
        flex: 1,
        borderBottomWidth: 1,
        paddingVertical: 0,
    },
    numberInput: {
        marginTop: 5,
        paddingVertical: 0,
        borderRadius: 5,
        borderWidth: 1,
        fontWeight: 'bold'
    },
    inputLabel:{
        fontWeight:'bold',
        color:secondaryColor
    }
});
