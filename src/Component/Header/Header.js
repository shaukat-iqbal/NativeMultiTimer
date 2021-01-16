import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import styles from './styles'
import {Icon} from 'react-native-elements/src/index'

class Header extends React.Component {


    render() {
        return (
            <View style={styles.header}>
                <Pressable
                    style={{display:this.props.hideControls?'none':'flex'}}
                    android_ripple={{color: 'cyan'}}
                    onPress={this.props.onGoToHome}
                >
                    <Text><Icon
                        name={'home'}
                        type={'font-awesome'}
                        color={'#005A81'}
                        size={15}
                        borderRadius={2}
                        raised={true}
                        reverse={true}
                    /></Text>
                </Pressable>
                <Pressable
                    style={{display:this.props.hideControls?'flex':'none'}}
                    android_ripple={{color: 'cyan'}}
                    onPress={this.props.onGoToHome}
                >
                    <Text><Icon
                        name={'arrow-left'}
                        type={'font-awesome'}
                        color={'#005A81'}
                        size={15}
                        borderRadius={2}
                        raised={true}
                        reverse={true}
                    /></Text>
                </Pressable>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={styles.headerTitle}>{this.props.title}</Text>
                    <Text style={styles.headerSubTitle}>{this.props.subTitle}</Text>
                </View>
                <Pressable
                    style={{display:this.props.hideControls?'none':'flex'}}
                    android_ripple={{color: 'cyan'}}
                    onPress={this.props.onAddTimer}
                >
                    <Text><Icon
                        name={'plus'}
                        color={'#005A81'}
                        type={'font-awesome'}
                        size={15}
                        borderRadius={2}
                        raised={true}
                        reverse={true}
                    /></Text>
                </Pressable>
                <Pressable
                    style={{display:this.props.hideControls?'flex':'none'}}
                    android_ripple={{color: 'cyan'}}
                    onPress={this.props.onAddTimer}
                >
                    <Text><Icon
                        name={'check'}
                        color={'#005A81'}
                        type={'font-awesome'}
                        size={15}
                        borderRadius={2}
                        raised={true}
                        reverse={true}
                    /></Text>
                </Pressable>
            </View>

        );
    }
}

export default Header;
