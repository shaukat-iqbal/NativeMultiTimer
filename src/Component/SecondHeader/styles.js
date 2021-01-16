import {ScaledSheet} from 'react-native-size-matters';
import {lightColor} from '../../Utils';

export default styles = ScaledSheet.create({
    header: {
        height: 30,
        paddingVertical: 2,
        paddingHorizontal: 15,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0F698D',
        borderTopWidth:1,
        borderTopColor:'#fff'
    },
    headerTitle:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    },
    mainWrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding:10
    },
    button: {
        borderRadius: 8,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        backgroundColor: lightColor,
        width: 40,
    },
    homeBtn:{
        borderRadius: 8,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        backgroundColor: lightColor,
    }
});
