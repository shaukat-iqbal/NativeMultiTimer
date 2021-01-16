import React from 'react';
import {View, Text,  Pressable} from 'react-native';
import styles from './styles'
import {Icon} from 'react-native-elements/src/index'

class SecondHeader extends React.Component {

    state={
        status:'pause',
    }

    render() {
        let {cumulativeStatus}=this.props;
        let iconName=cumulativeStatus==='RUNNING'?'pause':'play';
        return (
            <View style={styles.header}>
                <Pressable
                    android_ripple={{color: 'cyan'}}
                    onPress={()=>{}}
                >
                    <Text style={{backgroundColor:'#fff', padding:5,borderRadius:2}}><Icon
                        name={iconName}
                        type={'font-awesome'}
                        color={'#005A81'}
                        size={15}
                    /></Text>
                </Pressable>

                <Text style={styles.headerTitle}>{this.props.title}</Text>

                <Pressable
                    android_ripple={{color: 'cyan'}}
                    onPress={()=>{}}
                >
                    <Text style={{backgroundColor:'#fff', padding:5,borderRadius:2}}><Icon
                        name={'home'}
                        type={'font-awesome'}
                        color={'#005A81'}
                        size={15}
                    /></Text>
                </Pressable>
            </View>

        );
    }
}

export default SecondHeader;
