import {ScaledSheet} from 'react-native-size-matters';
import {secondaryColor} from "../../Utils";

export default styles = ScaledSheet.create({
    timerOuterWrapper: {
        flex: 1,
        flexBasis: '50%',
        flexGrow: 0,
        padding: 10,
    },
    animationBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        height: '50@vs',
        width: '50@vs',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerInnerWrapper: {
        borderWidth: 2,
        borderColor: '#434343',
        borderRadius: 5,
        padding: 5,
    },
    timerTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: secondaryColor,
    },
    time: {
        color: '#325A87',
        fontSize: 30
    },
    button: {
        borderRadius: 8,
        padding: 6,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        backgroundColor: 'cyan',
    },
    buttonText: {
        fontSize: 16,
        color: 'black',
    },
    card: {
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.75,
        shadowRadius: 3.84,
        elevation: 5,
    },

});
